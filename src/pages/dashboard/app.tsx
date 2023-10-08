import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { OverviewAppView } from 'src/sections/overview/app/view';

// ----------------------------------------------------------------------

export default function OverviewAppPage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('app')}</title>
      </Helmet>

      <OverviewAppView />
    </>
  );
}
