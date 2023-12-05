// @mui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
// types
import {
  IOrderCustomer,
  IOrderDelivery,
  IOrderPayment,
  IOrderShippingAddress,
} from 'src/types/order';
// components
import Iconify from 'src/components/iconify';
import { useLocales } from 'src/locales';
import { useState } from 'react';
import { ITransactionCustomer, ITransactionDelivery, ITransactionPayment, ITransactionShippingAddress } from 'src/types/transaction';

// ----------------------------------------------------------------------

type Props = {
  customer: ITransactionCustomer;
  delivery: ITransactionDelivery;
  payment: ITransactionPayment;
  shippingAddress: ITransactionShippingAddress;
};

export default function TransactionsDetailsInfo({ customer, delivery, payment, shippingAddress }: Props) {

  const [transaction, setTransaction] = useState({
    senderId: 12,
    senderUsername: null,
    // receiverId: 32,
    receiverUsername: customer.name,
    tokenType: 'SFRX',
    tokenQuantity: 1242,
    status: 'success',
    type: 'send_user',
    createdAt: new Date().toISOString(),
    error: null,
  })

  // console.log(customer)

  const { t } = useLocales()

  const renderSender = (
    <>
      <CardHeader
        title={t('sender_info')}
      // action={
      //   <IconButton>
      //     <Iconify icon="solar:pen-bold" />
      //   </IconButton>
      // }
      />
      <Stack direction="row" sx={{ p: 3 }}>
        <Avatar
          alt={customer.name}
          src={customer.avatarUrl}
          sx={{ width: 48, height: 48, mr: 2 }}
        />

        <Stack spacing={0.5} alignItems="flex-start" sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2">{transaction.senderUsername}</Typography>

          <Box sx={{ color: 'text.secondary' }}>{t('sender_id')}: {transaction.senderId}</Box>

          <Button
            size="small"
            color="error"
            startIcon={<Iconify icon="mingcute:add-line" />}
            sx={{ mt: 1 }}
          >
            {t('add_to_black_list')}
          </Button>
        </Stack>
      </Stack>
    </>
  );

  const renderReceiver = (
    <>
      <CardHeader
        title={t('receiver_info')}
      // action={
      //   <IconButton>
      //     <Iconify icon="solar:pen-bold" />
      //   </IconButton>
      // }
      />
      <Stack direction="row" sx={{ p: 3 }}>
        <Avatar
          alt={customer.name}
          src={customer.avatarUrl}
          sx={{ width: 48, height: 48, mr: 2 }}
        />

        <Stack spacing={0.5} alignItems="flex-start" sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2">{customer.name}</Typography>

          {/* <Box sx={{ color: 'text.secondary' }}>{t('receiver_id')}: {transaction.receiverId}</Box> */}

          <Button
            size="small"
            color="error"
            startIcon={<Iconify icon="mingcute:add-line" />}
            sx={{ mt: 1 }}
          >
            {t('add_to_black_list')}
          </Button>
        </Stack>
      </Stack>
    </>
  );

  // const renderDelivery = (
  //   <>
  //     <CardHeader
  //       title={t('tokens')}
  //     // action={
  //     //   <IconButton>
  //     //     <Iconify icon="solar:pen-bold" />
  //     //   </IconButton>
  //     // }
  //     />
  //     <Stack spacing={1.5} sx={{ p: 3, typography: 'body2' }}>
  //       <Stack direction="row" alignItems="center">
  //         <Box component="span" sx={{ color: 'text.secondary', width: 120, flexShrink: 0 }}>
  //           {t('tokens_type')}
  //         </Box>
  //         {transaction.tokenType}
  //       </Stack>
  //       <Stack direction="row" alignItems="center">
  //         <Box component="span" sx={{ color: 'text.secondary', width: 120, flexShrink: 0 }}>
  //           {t('tokens_quantity')}
  //         </Box>
  //         {transaction.tokenQuantity} {t('coins')}
  //       </Stack>

  //     </Stack>
  //   </>
  // );

  const renderStatus = (
    <>
      <CardHeader
        title={t('transaction_state')}
        action={
          <IconButton>
            <Iconify icon="solar:pen-bold" />
          </IconButton>
        }
      />
      <Stack spacing={1.5} sx={{ p: 3, typography: 'body2' }}>
        <Stack direction="row" alignItems="center">
          <Box component="span" sx={{ color: 'text.secondary', width: 120, flexShrink: 0 }}>
            {t('transaction_status')}
          </Box>
          <Link underline="always" color="inherit">
            {transaction.status === 'success' && t('transaction_success') || t('transaction_pending')}
          </Link>
        </Stack>

        {
          transaction.error && <Stack direction="row" alignItems="center">
            <Box component="span" sx={{ color: 'text.secondary', width: 120, flexShrink: 0 }}>
              {t('transaction_error')}
            </Box>
            {transaction.error === 'error_123' && t('transaction_error_123')}
          </Stack>
        }

        {/* <Stack direction="row" alignItems="center">
          <Box component="span" sx={{ color: 'text.secondary', width: 120, flexShrink: 0 }}>
            {t('transaction_createdAt')}
          </Box>
          {transaction.createdAt}
        </Stack> */}

      </Stack>
    </>
  );

  const renderPayment = (
    <>
      <CardHeader
        title={t('payment')}
      // action={
      //   <IconButton>
      //     <Iconify icon="solar:pen-bold" />
      //   </IconButton>
      // }
      />
      <Stack direction="row" alignItems="center" sx={{ p: 3, typography: 'body2' }}>
        <Box component="span" sx={{ color: 'text.secondary', flexGrow: 1 }}>
          {t('phone_number')}
        </Box>

        {payment.cardNumber}
        <Iconify icon="logos:mastercard" width={24} sx={{ ml: 0.5 }} />
      </Stack>
    </>
  );

  return (
    <Card>

      {transaction?.senderUsername ? renderSender: null}

      <Divider sx={{ borderStyle: 'dashed' }} />

      {renderReceiver}

      {/* <Divider sx={{ borderStyle: 'dashed' }} />

      {renderDelivery} */}

      <Divider sx={{ borderStyle: 'dashed' }} />

      {renderStatus}

      {/* <Divider sx={{ borderStyle: 'dashed' }} />

      {renderPayment} */}
    </Card>
  );
}
