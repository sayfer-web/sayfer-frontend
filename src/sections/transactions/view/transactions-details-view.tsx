import { useState, useCallback, useEffect } from 'react';
// @mui
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
// routes
import { paths } from 'src/routes/paths';
// _mock
import { _orders, ORDER_STATUS_OPTIONS } from 'src/_mock';
// components
import { useSettingsContext } from 'src/components/settings';
//
import OrderDetailsInfo from '../transactions-details-info';
import OrderDetailsItems from '../transactions-details-item';
import OrderDetailsToolbar from '../transactions-details-toolbar';
import OrderDetailsHistory from '../transactions-details-history';
import { useLocales } from 'src/locales';
import { useGetTransactionByIdQuery } from 'src/app/features/transactions/transactionsApiSlice';
import { ITransactionItem } from 'src/types/transaction';

// ----------------------------------------------------------------------

type Props = {
  id: string;
};

const oldTransaction = {
  id: 1,
  orderNumber: '1',
  createdAt: new Date().toISOString(),
  taxes: 0,
  items: [{
    id: '1',
    sku: 'sky',
    quantity: 12,
    name: 'product name',
    coverUrl: 'url',
    price: 120,
  }],
  history: {
    orderTime: new Date(),
    paymentTime: new Date(),
    deliveryTime: new Date(),
    completionTime: new Date(),
    successedAt: new Date(),
    createdAt: new Date(),
    timeline: [
      { title: 'Delivery successful', time: new Date() },
      { title: 'Transporting to [2]', time: new Date() },
      { title: 'Transporting to [1]', time: new Date() },
      {
        title: 'The shipping unit has picked up the goods',
        time: new Date(),
      },
      { title: 'Order has been created', time: new Date() },
    ],
  },
  subTotal: 0,
  shipping: 0,
  discount: 0,
  customer: {
    id: '1',
    name: 'Username',
    email: 'deposit',
    avatarUrl: 'avatar',
    ipAddress: '192.158.1.38',
  },
  delivery: {
    shipBy: 'DHL',
    speedy: 'Standard',
    trackingNumber: 'SPX037739199373',
  },
  totalAmount: 0,
  totalQuantity: 0,
  shippingAddress: {
    fullAddress: '19034 Verna Unions Apt. 164 - Honolulu, RI / 87535',
    phoneNumber: '365-374-4961',
  },
  payment: {
    cardType: 'mastercard',
    cardNumber: '**** **** **** 5678',
  },
  status: 'Pending'
  // ...data
}

export default function TransactionsDetailsView({ id }: Props) {


  const { t } = useLocales()

  const { data: transaction, error, isLoading, isSuccess } = useGetTransactionByIdQuery(id)

  const [currentTransaction, setCurrentTransaction] = useState(oldTransaction)

  useEffect(() => {

    console.log('TRANSACTION: ', transaction)

    if (transaction) {
      const { id: transactionId, txid, address, category, sender, confirmations, receiver: user, tokenType, amount, exchangeRate, status: newStatus, errMsg, createdAt, successedAt } = transaction

      const newTransaction = {
        id: +transactionId,
        orderNumber: transactionId,
        createdAt,
        taxes: 0,
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
          completionTime: successedAt,
          successedAt,
          createdAt,
          timeline: [
            { title: 'Delivery successful', time: successedAt },
            { title: 'Transporting to [2]', time: createdAt },
            { title: 'Transporting to [1]', time: createdAt },
            {
              title: 'The shipping unit has picked up the goods',
              time: createdAt,
            },
            { title: 'Order has been created', time: createdAt },
          ],
        },
        subTotal: amount * exchangeRate,
        shipping: 0,
        discount: 0,
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
        totalAmount: amount,
        totalQuantity: exchangeRate,
        shippingAddress: {
          fullAddress: '19034 Verna Unions Apt. 164 - Honolulu, RI / 87535',
          phoneNumber: '365-374-4961',
        },
        payment: {
          cardType: 'mastercard',
          cardNumber: '**** **** **** 5678',
        },
        status: newStatus
        // ...data
      }

      setCurrentTransaction(newTransaction)
    }

  }, [transaction])

  const settings = useSettingsContext();

  // const currentTransaction = _orders().filter((order) => order.id === id)[0];

  const [status, setStatus] = useState(currentTransaction.status);

  const handleChangeStatus = useCallback((newValue: string) => {
    setStatus(newValue);
  }, []);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <OrderDetailsToolbar
        backLink={paths.dashboard.transactions.root}
        orderNumber={currentTransaction.orderNumber}
        createdAt={new Date(currentTransaction.createdAt)}
        status={status}
        onChangeStatus={handleChangeStatus}
        statusOptions={ORDER_STATUS_OPTIONS()}
      />

      <Grid container spacing={3}>
        <Grid xs={12} md={8}>
          <Stack spacing={3} direction={{ xs: 'column-reverse', md: 'column' }}>
            <OrderDetailsItems
              id={currentTransaction.id}
              items={currentTransaction.items}
              taxes={currentTransaction.taxes}
              shipping={currentTransaction.shipping}
              discount={currentTransaction.discount}
              subTotal={currentTransaction.subTotal}
              exchangeRate={currentTransaction.totalQuantity}
              totalAmount={currentTransaction.totalAmount}
            />

            <OrderDetailsHistory history={currentTransaction.history} />
          </Stack>
        </Grid>

        <Grid xs={12} md={4}>
          <OrderDetailsInfo
            /* @ts-ignore */
            customer={currentTransaction.customer}
            delivery={currentTransaction.delivery}
            payment={currentTransaction.payment}
            shippingAddress={currentTransaction.shippingAddress}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
