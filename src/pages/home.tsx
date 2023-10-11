import { t } from 'i18next';
import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

export default function HomePage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('sayfer_invest_platform')}</title>
      </Helmet>

      <HomeView />
    </>
  );
}
