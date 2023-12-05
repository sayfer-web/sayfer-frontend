// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card, { CardProps } from '@mui/material/Card';
// utils
import { fCurrency } from 'src/utils/format-number';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import { Fragment, useEffect, useState } from 'react';
import { useBoolean } from 'src/hooks/use-boolean';
import Box from '@mui/material/Box';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { StarBorder } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { selectCurrentUsername } from 'src/app/features/auth/authSlice';
import React from 'react';
import { useGetWalletLtcAddressQuery } from 'src/app/features/wallet/walletApiSlice';
import LoadingButton from '@mui/lab/LoadingButton';
import { useLocales } from 'src/locales';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title: string;
  sentAmount: number;
  currentBalance: number;
}

export default function WalletRefillFounds({
  title,
  sentAmount,
  currentBalance,
  sx,
  ...other
}: Props) {

  const mdUp = useResponsive('up', 'md');

  const { t } = useLocales()

  const username = useSelector(selectCurrentUsername)

  const [ltcAddress, setLtcAddress] = useState('no address')

  const { data, isLoading } = useGetWalletLtcAddressQuery(username)
  // const tokenBalanceSFR = useSelector(selectCurrentTokenBalanceSFR)

  useEffect(() => {
    !isLoading && setLtcAddress(data?.result)
  }, [data])

  // console.log(data)

  const coinsList = [
    {
      network: 'Litecoin',
      coinTitle: 'LTC',
      address: ltcAddress,
      icon: '',
      enabled: true
    },
    {
      network: 'Bitcoin',
      coinTitle: 'BTC',
      address: t('in_developing'),
      icon: '',
      enabled: false
    },
    {
      network: 'Ethereum',
      coinTitle: 'USDT',
      address: t('in_developing'),
      icon: '',
      enabled: false
    },
  ]

  const [dialogInputVisible, toggleDialogInputVisible] = useState(false)
  const [dialogOutputVisible, toggleDialogOutputVisible] = useState(false)
  const [dialogSendVisible, toggleDialogSendVisible] = useState(false)
  const confirm = useBoolean();

  const coins = ['ltc', 'btc', 'eth', 'usdt']

  const [open, toggleOpen] = useState(
    {
      ltc: false,
      btc: false,
      eth: false,
      usdt: false
    }
  );


  const [openBtc, toggleOpenBtc] = useState(true);
  const [openLtc, toggleOpenLtc] = useState(true);
  const [openEth, toggleOpenEth] = useState(true);
  const [openUsdt, toggleOpenUsdt] = useState(true);

  const handleClick = (coinTitle: string) => {
    switch (coinTitle) {
      case 'LTC':
        toggleOpen(state => ({ ...state, ltc: !state.ltc }))
        break;

      case 'BTC':
        toggleOpen(state => ({ ...state, btc: !state.btc }))
        break;

      case 'USDT':
        toggleOpen(state => ({ ...state, eth: !state.eth }))
        break;

      default:
        break;
    }
  };

  const totalAmount = currentBalance - sentAmount;



  const renderInputDialog = (<Dialog
    open={dialogInputVisible}
    onClose={() => toggleDialogInputVisible(false)}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {t('wallet_input')}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">

        <Stack sx={{ minWidth: 450 }} >
          {coinsList.map((item, idx) => {

            return (
              <Fragment key={item.coinTitle}>
                <ListItemButton onClick={() => handleClick(item.coinTitle)}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={(item.network)} />
                  {/* @ts-ignore */}
                  {/* {open[item.coinTitle] ? <ExpandLess /> : <ExpandMore />} */}
                </ListItemButton>
                {/* @ts-ignore */}
                <p style={{ fontSize: mdUp ? 16 : 12 }}>{item.address}</p>
              </Fragment>
            )
          }

          )}
        </Stack>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button variant='soft' color='error' onClick={() => toggleDialogInputVisible(false)}>{t('close')}</Button>
    </DialogActions>
  </Dialog>
  )

  const renderOutputDialog = (<Dialog
    open={dialogOutputVisible}
    onClose={() => toggleDialogOutputVisible(false)}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {t('wallet_output')}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">

        <Stack sx={{ minWidth: 450 }} >
          {t('in_developing')}
        </Stack>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button variant='soft' color='error' onClick={() => toggleDialogOutputVisible(false)}>{t('close')}</Button>
    </DialogActions>
  </Dialog>
  )

  const renderSendDialog = (<Dialog
    open={dialogSendVisible}
    onClose={() => toggleDialogSendVisible(false)}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {t('wallet_send')}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">

        <Stack sx={{ minWidth: 450 }} >
          {t('in_developing')}
        </Stack>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button variant='soft' color='error' onClick={() => toggleDialogSendVisible(false)}>{t('close')}</Button>

    </DialogActions>
  </Dialog>
  )


  return (
    <>

      {renderInputDialog}
      {renderOutputDialog}
      {renderSendDialog}

      <Card sx={{ p: 3, height: '100%', ...sx }} {...other}>
        <Typography variant="subtitle2" gutterBottom>
          {title}
        </Typography>

        <Stack spacing={2}>
          <Typography variant="h3">{fCurrency(totalAmount)}</Typography>

          {/* <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {t('current_balance')}
          </Typography>
          <Typography variant="body2">{fCurrency(currentBalance)}</Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {t('sent')}
          </Typography>
          <Typography variant="body2">- {fCurrency(sentAmount)}</Typography>
        </Stack> */}

          {/* <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {t('total_amount')}
          </Typography>
          <Typography variant="subtitle1">{fCurrency(totalAmount)}</Typography>
        </Stack> */}

          <Stack direction="row" spacing={1.5}>
            <Button fullWidth onClick={() => toggleDialogInputVisible(true)} variant="contained" color="success">
              {t('input')}
            </Button>

            <Button onClick={() => toggleDialogOutputVisible(true)} fullWidth variant="contained" color="primary">
              {t('output')}
            </Button>

          </Stack>

          <Button onClick={() => toggleDialogSendVisible(true)} fullWidth variant="contained" color="primary">
            {t('send')}
          </Button>

        </Stack>

      </Card>

    </>
  );
}


// ----------------------------------------------------------------------

type TConfirmTransferDialogProps = DialogProps;

interface ConfirmTransferDialogProps extends TConfirmTransferDialogProps {
  contactInfo?: {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  };
  onClose: VoidFunction;
}

function ConfirmTransferDialog({
  open,
  //   amount,
  //   autoWidth,
  //   contactInfo,
  onClose,
  //   onBlur,
  onChange,
}: ConfirmTransferDialogProps) {
  return (
    <Dialog open={open} fullWidth maxWidth="xs" onClose={onClose}>
      <DialogTitle>Transfer to</DialogTitle>

      <Stack spacing={3} sx={{ px: 3 }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          {/* <Avatar src={contactInfo?.avatarUrl} sx={{ width: 48, height: 48 }} /> */}

          {/* <ListItemText
            primary={contactInfo?.name}
            secondary={contactInfo?.email}
            secondaryTypographyProps={{ component: 'span', mt: 0.5 }}
          /> */}
        </Stack>

        {/* <InputAmount
          onBlur={onBlur}
          onChange={onChange}
          autoWidth={autoWidth}
          amount={amount}
          disableUnderline={false}
          sx={{ justifyContent: 'flex-end' }}
        /> */}

        <TextField fullWidth multiline rows={3} placeholder="Write a message..." />
      </Stack>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button variant="contained" disabled={false} onClick={onClose}>
          Confirm & Transfer
        </Button>
      </DialogActions>
    </Dialog>
  );
}
