import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// routes
import { useParams } from 'src/routes/hooks';
// sections
import { JobDetailsView } from 'src/sections/job/view';

// ----------------------------------------------------------------------

export default function JobDetailsPage() {

  const { t } = useLocales()

  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('job_detials')}</title>
      </Helmet>

      <JobDetailsView id={`${id}`} />
    </>
  );
}
