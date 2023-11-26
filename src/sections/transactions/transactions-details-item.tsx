// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import ListItemText from '@mui/material/ListItemText';
// utils
import { fCurrency } from 'src/utils/format-number';
// types
import { IOrderProductItem } from 'src/types/order';
// components
import Scrollbar from 'src/components/scrollbar';
import { useLocales } from 'src/locales';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ITransactionProductItem } from 'src/types/transaction';

// ----------------------------------------------------------------------

type Props = {
  id: number;
  taxes: number;
  shipping: number;
  discount: number;
  subTotal: number;
  totalAmount: number;
  exchangeRate: number;
  items: ITransactionProductItem[];
};

export default function TransactionsDetailsItems({
  id,
  items,
  shipping,
  discount,
  taxes,
  subTotal,
  exchangeRate,
  totalAmount,
}: Props) {

  const { t } = useLocales()

  console.log("CACHE: ", id, exchangeRate, totalAmount, subTotal)

  const [transaction, setTransaction] = useState({
    id,
    amount: totalAmount,
    tokensType: 'LTC',
    tokensCourse: 1,
    type: 'deposit',
    comissionPercent: 0,
    status: 'success',
    senderId: 12,
    receiverId: 32,
    receiverUsername: 'Username',
    createdAt: new Date().toISOString(),
    successedAt: new Date().toISOString(),
    coupon: 0,
    exchangeRate
  })

  useEffect(() => {
    setTransaction({
      id,
      amount: totalAmount,
      tokensType: 'LTC',
      tokensCourse: 1,
      type: 'deposit',
      comissionPercent: 0,
      status: 'success',
      senderId: 12,
      receiverId: 32,
      receiverUsername: 'Username',
      createdAt: new Date().toISOString(),
      successedAt: new Date().toISOString(),
      coupon: 0,
      exchangeRate
    })
  }, [id])

  console.log('TRANSACTION: ', transaction)

  const renderTotal = (
    <Stack
      spacing={2}
      alignItems="flex-end"
      sx={{ my: 3, textAlign: 'right', typography: 'body2' }}
    >
      <Stack direction="row">
        <Box sx={{ color: 'text.secondary' }}>{t('subtotal')}</Box>
        <Box sx={{ width: 160, typography: 'subtitle2' }}>{fCurrency(transaction.amount * transaction.exchangeRate) || '-'}</Box>
      </Stack>
      {/* 
      <Stack direction="row">
        <Box sx={{ color: 'text.secondary' }}>{t('shipping')}</Box>
        <Box
          sx={{
            width: 160,
            ...(shipping && { color: 'error.main' }),
          }}
        >
          {shipping ? `- ${fCurrency(shipping)}` : '-'}
        </Box>
      </Stack> */}

      {/* <Stack direction="row">
        <Box sx={{ color: 'text.secondary' }}>{t('coupon')}</Box>
        <Box
          sx={{
            width: 160,
            ...(discount && { color: 'error.main' }),
          }}
        >
          {discount ? `- ${fCurrency(discount)}` : '-'}
        </Box>
      </Stack> */}

      <Stack direction="row">
        <Box sx={{ color: 'text.secondary' }}>{t('transaction_comission')}</Box>
        <Box sx={{ width: 160 }}>{transaction?.comissionPercent ? `${transaction.comissionPercent}%` : '-'}</Box>
      </Stack>

      <Stack direction="row">
        <Box sx={{ color: 'text.secondary' }}>{t('exchange_rate')}</Box>
        <Box sx={{ width: 160 }}>{transaction?.exchangeRate ? `${transaction.exchangeRate}$` : '-'}</Box>
      </Stack>

      <Stack direction="row" sx={{ typography: 'subtitle1' }}>
        <Box>{t('total')}</Box>
        <Box sx={{ width: 160 }}>{fCurrency(transaction.amount * transaction.exchangeRate / 100 * (100 + transaction.comissionPercent)) || '-'}</Box>
      </Stack>
    </Stack>
  );

  return (
    <Card>
      <CardHeader title={t('transaction_details')} />

      <Stack
        sx={{
          px: 3,
        }}
      >
        <Scrollbar>
          {/* {items.map((item) => ( */}
          <Stack
            // key={items[0].id}
            direction="row"
            alignItems="center"
            sx={{
              py: 3,
              minWidth: 340,
              borderBottom: (theme) => `dashed 2px ${theme.palette.background.neutral}`,
            }}
          >
            {/* <Avatar src={item.coverUrl} variant="rounded" sx={{ width: 48, height: 48, mr: 2 }} /> */}

            <ListItemText
              primary={
                transaction.type === 'deposit' && t('deposit') ||
                transaction.type === 'send_user' && t('transaction_send_user') ||
                transaction.type === 'send_user' && t('transaction_send_user')

              }
              secondary={t('transaction_type')}
              primaryTypographyProps={{
                typography: 'body2',
              }}
              secondaryTypographyProps={{
                component: 'span',
                color: 'text.disabled',
                mt: 0.5,
              }}
            />

            <Box sx={{ typography: 'body2' }}>{transaction.amount} {transaction.tokensType}</Box>

            <Box sx={{ width: 110, textAlign: 'right', typography: 'subtitle2' }}>
              {fCurrency(transaction.amount * transaction.exchangeRate)}
            </Box>


          </Stack>
          {/* ))} */}
        </Scrollbar>

        {renderTotal}
      </Stack>
    </Card>
  );
}
