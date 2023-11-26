import { useState, useCallback, useEffect, useLayoutEffect } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
// _mock
import { _orders, ORDER_STATUS_OPTIONS } from 'src/_mock';
// utils
import { fTimestamp } from 'src/utils/format-time';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import {
  useTable,
  getComparator,
  emptyRows,
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from 'src/components/table';
// types
// import { IOrderItem, IOrderTableFilters, IOrderTableFilterValue } from 'src/types/order';
//
import OrderTableRow from '../transactions-table-row';
import OrderTableToolbar from '../transactions-table-toolbar';
import OrderTableFiltersResult from '../transactions-table-filters-result';
import { useLocales } from 'src/locales';
import { useNavigate, useNavigation } from 'react-router-dom';
import { ITransactionItem, ITransactionTableFilters, ITransactionTableFilterValue } from 'src/types/transaction';
import { useGetAllTransactionsQuery } from 'src/app/features/transactions/transactionsApiSlice';
import { useSelector } from 'react-redux';
import { selectCurrentUsername } from 'src/app/features/auth/authSlice';

// ----------------------------------------------------------------------

const STATUS_OPTIONS = () => {

  const { t } = useLocales()

  return [{ value: 'all', label: t('all') },
  // { value: 'pending', label: t('pending') },
  { value: 'completed', label: t('completed') },
  // { value: 'cancelled', label: t('cancelled') },
  { value: 'refunded', label: t('refunded') },
  ];
}

const TABLE_HEAD = () => {

  const { t } = useLocales()

  return [
    { id: 'orderNumber', label: t('order'), width: 116 },
    { id: 'name', label: t('customer') },
    { id: 'createdAt', label: t('date'), width: 140 },
    { id: 'exchangeRate', label: t('exchangeRate'), width: 120, align: 'center' },
    { id: 'totalAmount', label: t('price'), width: 140 },
    { id: 'status', label: t('status'), width: 110 },
    { id: '', width: 88 },
  ];
}

const defaultFilters: ITransactionTableFilters = {
  name: '',
  status: 'all',
  startDate: null,
  endDate: null,
};

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function TransactionsListView() {

  const { data: transactions, error, isLoading, isSuccess } = useGetAllTransactionsQuery('')

  // let oldTransactions = newTransactions
  const username = useSelector(selectCurrentUsername)

  const [tableData, setTableData] = useState([]);

  const [showOnlyMine, toggleShowOnlyMine] = useState(false)

  const handleToggleShowOnly = () => toggleShowOnlyMine(state => !state)

  console.log(showOnlyMine)
  // if(isLoading) oldTransactions = 'Loading...'
  useEffect(() => {

    if (isSuccess) {

      let result = transactions.map((item: any, idx: number) => {

        const { id, txid, address, category, sender, confirmations, receiver: user, tokenType, amount, exchangeRate, status, errMsg, createdAt, successedAt } = item

        console.log(createdAt)

        return {
          id,
          orderNumber: item.id,
          createdAt: new Date(successedAt).toISOString(),
          taxes: 10,
          items: [{
            id: '1',
            sku: 'sky',
            quantity: 12,
            name: 'product name',
            coverUrl: 'url',
            price: 120,
          }],
          history: {
            orderTime: createdAt,
            paymentTime: createdAt,
            deliveryTime: createdAt,
            completionTime: createdAt,
            successedAt,
            createdAt,
            timeline: [
              { title: 'Delivery successful', time: createdAt },
              { title: 'Transporting to [2]', time: createdAt },
              { title: 'Transporting to [1]', time: createdAt },
              {
                title: 'The shipping unit has picked up the goods',
                time: createdAt,
              },
              { title: 'Order has been created', time: createdAt },
            ],
          },
          subTotal: amount*exchangeRate,
          shipping: 10,
          discount: 10,
          customer: {
            id: '1',
            name: user || 'Username',
            email: t('deposit'),
            avatarUrl: 'avatar',
            ipAddress: '192.158.1.38',
          },
          delivery: {
            shipBy: 'DHL',
            speedy: 'Standard',
            trackingNumber: 'SPX037739199373',
          },
          totalAmount: amount ,
          totalQuantity: exchangeRate,
          shippingAddress: {
            fullAddress: '19034 Verna Unions Apt. 164 - Honolulu, RI / 87535',
            phoneNumber: '365-374-4961',
          },
          payment: {
            cardType: 'mastercard',
            cardNumber: '**** **** **** 5678',
          },
          status
          // ...data
        }
      })

      if(showOnlyMine) {
        result = result.filter((item: any) => item.customer.name === username)
      }

      setTableData(result)

      console.log("TABLE DATA: ", tableData)
    }
  }, [transactions, showOnlyMine])

  const { t } = useLocales()

  const table = useTable({ defaultOrderBy: 'orderNumber' });

  const settings = useSettingsContext();

  const router = useRouter();

  const confirm = useBoolean();


  // useEffect(() => {
  //   setTableData(newTransactions())
  // }, [oldTransactions])

  const [filters, setFilters] = useState(defaultFilters);

  const dateError =
    filters.startDate && filters.endDate
      ? filters.startDate.getTime() > filters.endDate.getTime()
      : false;

  const dataFiltered = applyFilter({
    /* @ts-ignore */
    inputData: tableData,
    comparator: getComparator(table.order, table.orderBy),
    filters,
    dateError,
  });

  const dataInPage = dataFiltered.slice(
    table.page * table.rowsPerPage,
    table.page * table.rowsPerPage + table.rowsPerPage
  );

  const denseHeight = table.dense ? 52 : 72;

  const canReset =
    !!filters.name || filters.status !== 'all' || (!!filters.startDate && !!filters.endDate);

  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

  const handleFilters = useCallback(
    (name: string, value: ITransactionTableFilterValue) => {
      table.onResetPage();
      setFilters((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [table]
  );

  const handleDeleteRow = useCallback(
    (id: string) => {
      const deleteRow = tableData.filter((row: any) => row.id !== id);
      setTableData(deleteRow);

      table.onUpdatePageDeleteRow(dataInPage.length);
    },
    [dataInPage.length, table, tableData]
  );

  const handleDeleteRows = useCallback(() => {
    const deleteRows = tableData.filter((row: any) => !table.selected.includes(row.id));
    setTableData(deleteRows);

    table.onUpdatePageDeleteRows({
      totalRows: tableData.length,
      totalRowsInPage: dataInPage.length,
      totalRowsFiltered: dataFiltered.length,
    });
  }, [dataFiltered.length, dataInPage.length, table, tableData]);

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  // const handleViewRow = useCallback(
  //   (id: string) => {
  //     router.push(paths.dashboard.order.details(id));
  //   },
  //   [router]
  // );

  // const navigate = useNavigation()
  const navigate = useNavigate()

  const handleViewRow = (id: string) => {
    navigate(`/dashboard/transactions/${id}`)
  }

  const handleFilterStatus = useCallback(
    (event: React.SyntheticEvent, newValue: string) => {
      handleFilters('status', newValue);
    },
    [handleFilters]
  );


  return (
    <>
      <Container maxWidth={settings.themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading={t('list')}
          links={[
            {
              name: t('dashboard'),
              href: paths.dashboard.root,
            },
            {
              name: t('order'),
              href: paths.dashboard.order.root,
            },
            { name: t('list') },
          ]}
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        />

        <Card>
          <Tabs
            value={filters.status}
            onChange={handleFilterStatus}
            sx={{
              px: 2.5,
              boxShadow: (theme) => `inset 0 -2px 0 0 ${alpha(theme.palette.grey[500], 0.08)}`,
            }}
          >
            {STATUS_OPTIONS().map((tab) => (
              <Tab
                key={tab.value}
                iconPosition="end"
                value={tab.value}
                label={tab.label}
                icon={
                  <Label
                    variant={
                      ((tab.value === 'all' || tab.value === filters.status) && 'filled') || 'soft'
                    }
                    color={
                      (tab.value === 'completed' && 'success') ||
                      (tab.value === 'pending' && 'warning') ||
                      (tab.value === 'cancelled' && 'error') ||
                      'default'
                    }
                  >
                    {tab.value === 'all' && _orders.length}
                    {tab.value === 'completed' &&
                      _orders().filter((order) => order.status === 'completed').length}

                    {tab.value === 'pending' &&
                      _orders().filter((order) => order.status === 'pending').length}
                    {tab.value === 'cancelled' &&
                      _orders().filter((order) => order.status === 'cancelled').length}
                    {tab.value === 'refunded' &&
                      _orders().filter((order) => order.status === 'refunded').length}
                  </Label>
                }
              />
            ))}
          </Tabs>

          <OrderTableToolbar
            filters={filters}
            onFilters={handleFilters}
            //
            canReset={canReset}
            onResetFilters={handleResetFilters}
            onChangeCheckbox={handleToggleShowOnly}
          />

          {canReset && (
            <OrderTableFiltersResult
              filters={filters}
              onFilters={handleFilters}
              //
              onResetFilters={handleResetFilters}
              //
              results={dataFiltered.length}
              sx={{ p: 2.5, pt: 0 }}
            />
          )}

          <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
            <TableSelectedAction
              dense={table.dense}
              numSelected={table.selected.length}
              rowCount={tableData.length}
              onSelectAllRows={(checked) =>
                table.onSelectAllRows(
                  checked,
                  tableData.map((row: any) => row.id)
                )
              }
              action={
                <Tooltip title={t('delete')}>
                  <IconButton color="primary" onClick={confirm.onTrue}>
                    <Iconify icon="solar:trash-bin-trash-bold" />
                  </IconButton>
                </Tooltip>
              }
            />

            <Scrollbar>
              <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 960 }}>
                <TableHeadCustom
                  order={table.order}
                  orderBy={table.orderBy}
                  headLabel={TABLE_HEAD()}
                  rowCount={tableData.length}
                  numSelected={table.selected.length}
                  onSort={table.onSort}
                  onSelectAllRows={(checked) =>
                    table.onSelectAllRows(
                      checked,
                      tableData.map((row: any) => row.id)
                    )
                  }
                />

                <TableBody>
                  {dataFiltered
                    .reverse()
                    .slice(
                      table.page * table.rowsPerPage,
                      table.page * table.rowsPerPage + table.rowsPerPage
                    )
                    .map((row) => (
                      <OrderTableRow
                        key={row.id}
                        row={row}
                        selected={table.selected.includes(row.id)}
                        onSelectRow={() => table.onSelectRow(row.id)}
                        onDeleteRow={() => handleDeleteRow(row.id)}
                        onViewRow={() => handleViewRow(row.id)}
                      />
                    ))}

                  <TableEmptyRows
                    height={denseHeight}
                    emptyRows={emptyRows(table.page, table.rowsPerPage, tableData.length)}
                  />

                  <TableNoData notFound={notFound} />
                </TableBody>
              </Table>
            </Scrollbar>
          </TableContainer>

          <TablePaginationCustom
            count={dataFiltered.length}
            page={table.page}
            rowsPerPage={table.rowsPerPage}
            onPageChange={table.onChangePage}
            onRowsPerPageChange={table.onChangeRowsPerPage}
            //
            dense={table.dense}
            onChangeDense={table.onChangeDense}
          />
        </Card>
      </Container>

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title={t('delete')}
        content={
          <>
            {t('are_you_sure_want_to_delete')} <strong> {table.selected.length} </strong> {t('items')}?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDeleteRows();
              confirm.onFalse();
            }}
          >
            {t('delete')}
          </Button>
        }
      />
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter({
  inputData,
  comparator,
  filters,
  dateError,
}: {
  inputData: ITransactionItem[];
  comparator: (a: any, b: any) => number;
  filters: ITransactionTableFilters;
  dateError: boolean;
}) {
  const { status, name, startDate, endDate } = filters;

  const stabilizedThis = inputData.map((el, index) => [el, index] as const);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (name) {
    inputData = inputData.filter(
      (order) =>
        order.orderNumber.toLowerCase().indexOf(name.toLowerCase()) !== -1 ||
        order.customer.name.toLowerCase().indexOf(name.toLowerCase()) !== -1 ||
        order.customer.email.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }

  if (status !== 'all') {
    inputData = inputData.filter((order) => order.status === status);
  }

  if (!dateError) {
    if (startDate && endDate) {
      inputData = inputData.filter(
        (order) =>
          fTimestamp(order.createdAt) >= fTimestamp(startDate) &&
          fTimestamp(order.createdAt) <= fTimestamp(endDate)
      );
    }
  }

  return inputData;
}
