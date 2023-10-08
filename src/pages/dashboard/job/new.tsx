import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { JobCreateView } from 'src/sections/job/view';

// ----------------------------------------------------------------------

export default function JobCreatePage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('create_a_new_job')}</title>
      </Helmet>

      <JobCreateView />
    </>
  );
}
