import { useState, useCallback } from 'react';
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

// ----------------------------------------------------------------------

type Props = {
  id: string;
};

export default function TransactionsDetailsView({ id }: Props) {
  const settings = useSettingsContext();

  const currentOrder = _orders.filter((order) => order.id === id)[0];

  const [status, setStatus] = useState(currentOrder.status);

  const handleChangeStatus = useCallback((newValue: string) => {
    setStatus(newValue);
  }, []);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <OrderDetailsToolbar
        backLink={paths.dashboard.order.root}
        orderNumber={currentOrder.orderNumber}
        createdAt={currentOrder.createdAt}
        status={status}
        onChangeStatus={handleChangeStatus}
        statusOptions={ORDER_STATUS_OPTIONS()}
      />

      <Grid container spacing={3}>
        <Grid xs={12} md={8}>
          <Stack spacing={3} direction={{ xs: 'column-reverse', md: 'column' }}>
            <OrderDetailsItems
              items={currentOrder.items}
              taxes={currentOrder.taxes}
              shipping={currentOrder.shipping}
              discount={currentOrder.discount}
              subTotal={currentOrder.subTotal}
              totalAmount={currentOrder.totalAmount}
            />

            <OrderDetailsHistory history={currentOrder.history} />
          </Stack>
        </Grid>

        <Grid xs={12} md={4}>
          <OrderDetailsInfo
            customer={currentOrder.customer}
            delivery={currentOrder.delivery}
            payment={currentOrder.payment}
            shippingAddress={currentOrder.shippingAddress}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
