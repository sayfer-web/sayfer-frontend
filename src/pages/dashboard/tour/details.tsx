import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// routes
import { useParams } from 'src/routes/hooks';
// sections
import { TourDetailsView } from 'src/sections/tour/view';

// ----------------------------------------------------------------------

export default function TourDetailsPage() {

  const { t } = useLocales()

  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('analytics')}</title>
      </Helmet>

      <TourDetailsView id={`${id}`} />
    </>
  );
}
