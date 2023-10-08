import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { OverviewAnalyticsView } from 'src/sections/overview/analytics/view';

// ----------------------------------------------------------------------

export default function OverviewAnalyticsPage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('analytics')}</title>
      </Helmet>

      <OverviewAnalyticsView />
    </>
  );
}
