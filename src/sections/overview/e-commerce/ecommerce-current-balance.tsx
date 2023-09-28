// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card, { CardProps } from '@mui/material/Card';
// utils
import { fCurrency } from 'src/utils/format-number';
import { useLocales } from 'src/locales';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title: string;
  sentAmount: number;
  currentBalance: number;
}

export default function EcommerceCurrentBalance({
  title,
  sentAmount,
  currentBalance,
  sx,
  ...other
}: Props) {

  const { t } = useLocales()

  const totalAmount = 123456
  const dividends = 1234

  return (
    <Card sx={{ p: 3, ...sx }} {...other}>
      <Typography variant="subtitle2" gutterBottom>
        {title}
      </Typography>

      <Stack spacing={2}>
        <Typography variant="h3">{fCurrency(totalAmount)}</Typography>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {t('received')}
          </Typography>
          <Typography variant="body2">{fCurrency(currentBalance)}</Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {t('sent')}
          </Typography>
          <Typography variant="body2">- {fCurrency(sentAmount)}</Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {t('dividends')}
          </Typography>
          <Typography variant="subtitle1">{fCurrency(dividends)}</Typography>
        </Stack>

        <Stack direction="row" spacing={1.5}>
          <Button fullWidth variant="contained" color="warning">
            {t('request')}
          </Button>

          <Button fullWidth variant="contained" color="primary">
            {t('transfer')}
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}
