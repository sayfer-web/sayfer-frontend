import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { FileManagerView } from 'src/sections/file-manager/view';

// ----------------------------------------------------------------------

export default function FileManagerPage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('file_manager')}</title>
      </Helmet>

      <FileManagerView />
    </>
  );
}
