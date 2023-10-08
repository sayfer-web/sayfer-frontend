import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import BlankView from 'src/sections/blank/view';

// ----------------------------------------------------------------------

export default function BlankPage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('blank')}</title>
      </Helmet>

      <BlankView />
    </>
  );
}
