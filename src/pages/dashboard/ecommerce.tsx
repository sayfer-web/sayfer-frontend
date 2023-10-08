import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { OverviewEcommerceView } from 'src/sections/overview/e-commerce/view';

// ----------------------------------------------------------------------

export default function OverviewEcommercePage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('e-commerce')}</title>
      </Helmet>

      <OverviewEcommerceView />
    </>
  );
}
