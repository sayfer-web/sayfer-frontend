import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { JobListView } from 'src/sections/job/view';

// ----------------------------------------------------------------------

export default function JobListPage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('job_list')}</title>
      </Helmet>

      <JobListView />
    </>
  );
}
