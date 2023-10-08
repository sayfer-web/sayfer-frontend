import { t } from 'i18next';
import { Helmet } from 'react-helmet-async';
// sections
import { OverviewBankingView } from 'src/sections/overview/booking/view';

// ----------------------------------------------------------------------

export default function OverviewBookingPage() {
  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('booking')}</title>
      </Helmet>

      <OverviewBankingView />
    </>
  );
}
