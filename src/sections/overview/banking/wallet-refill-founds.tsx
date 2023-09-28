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
import { Fragment, useState } from 'react';
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
import { useGetWalletAddressesMutation } from 'src/app/features/wallet/walletApiSlice';
import LoadingButton from '@mui/lab/LoadingButton';
import { useLocales } from 'src/locales';

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

  const { t } = useLocales()

  const username = useSelector(selectCurrentUsername)

  const [getWalletAddresses, { isLoading, data }] = useGetWalletAddressesMutation()

    const coinsList = [
      {
        network: 'Litecoin - LTC', 
        coinTitle: 'ltc', 
        icon: '',
        enabled: true
      },
      {
        network: 'Bitcoin - BTC', 
        coinTitle: 'btc', 
        icon: '',
        enabled: false
      },
      {
        network: 'Ethereum - ETC', 
        coinTitle: 'eth', 
        icon: '',
        enabled: false
      },
      {
        network: 'Ethereum - USDT', 
        coinTitle: 'usdt', 
        icon: '',
        enabled: false
      },
    ]

    const [dialogVisible, toggleDialogVisible] = useState(false)
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
        case 'ltc':
          toggleOpen(state => ({ ...state, ltc: !state.ltc}))
          break;

        case 'btc':
          toggleOpen(state => ({ ...state, btc: !state.btc}))
          break;

        case 'eth':
          toggleOpen(state => ({ ...state, eth: !state.eth}))
          break;

        case 'usdt':
          toggleOpen(state => ({ ...state, usdt: !state.usdt}))
          break;
      
        default:
          break;
      }
    };

  const totalAmount = currentBalance - sentAmount;

  return (
    <>

    <Card sx={{ p: 3, ...sx }} {...other}>
      <Typography variant="subtitle2" gutterBottom>
        {title}
      </Typography>

      <Stack spacing={2}>
        <Typography variant="h3">{fCurrency(totalAmount)}</Typography>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Order Total
          </Typography>
          <Typography variant="body2">{fCurrency(currentBalance)}</Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Earning
          </Typography>
          <Typography variant="body2">- {fCurrency(sentAmount)}</Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Refunded
          </Typography>
          <Typography variant="subtitle1">{fCurrency(totalAmount)}</Typography>
        </Stack>

        <Stack direction="row" spacing={1.5}>
          <Button fullWidth onClick={() => toggleDialogVisible(true)} variant="contained" color="warning">
            {t('request')}
          </Button>

          <Button onClick={() => toggleDialogVisible(true)} fullWidth variant="contained" color="primary">
            {t('transfer')}
          </Button>

          
      <Dialog
        open={dialogVisible}
        onClose={() => toggleDialogVisible(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Пополнение кошелька"}
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
                      {open[item.coinTitle] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    {/* @ts-ignore */}
                    <Collapse in={open[item.coinTitle]} timeout="auto" unmountOnExit>
                      { item.enabled ?
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                          { !data
                          ? <LoadingButton variant='soft' color='warning' loading={isLoading} onClick={getWalletAddresses}>Получить адрес для пополнения</LoadingButton>
                          : <ListItemText primary={ !data ? null : data?.ltcAddressExist } />
                          }
                          </ListItemIcon>
                        </ListItemButton>
                      </List>
                      : 'This network is disabled for now' }
                    </Collapse>
                  </Fragment>
                )}
                
                )}
            </Stack>
            <br />
            Пополните
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='soft' color='error' onClick={() => {}}>Отменить</Button>
          <Button variant='contained' color='success' onClick={() => {}} autoFocus>
            Я оплатил
          </Button>
        </DialogActions>
      </Dialog>



        </Stack>
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
