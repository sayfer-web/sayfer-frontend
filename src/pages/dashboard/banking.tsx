import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { OverviewBankingView } from 'src/sections/overview/banking/view';

// ----------------------------------------------------------------------

export default function OverviewBankingPage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('wallet')}</title>
      </Helmet>

      <OverviewBankingView />
    </>
  );
}
