import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { OverviewFileView } from 'src/sections/overview/file/view';

// ----------------------------------------------------------------------

export default function OverviewFilePage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('file')}</title>
      </Helmet>

      <OverviewFileView />
    </>
  );
}
