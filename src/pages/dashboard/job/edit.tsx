import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// routes
import { useParams } from 'src/routes/hooks';
// sections
import { JobEditView } from 'src/sections/job/view';

// ----------------------------------------------------------------------

export default function JobEditPage() {

  const { t } = useLocales()

  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('dashboard')}: {t('job_edit')}</title>
      </Helmet>

      <JobEditView id={`${id}`} />
    </>
  );
}
