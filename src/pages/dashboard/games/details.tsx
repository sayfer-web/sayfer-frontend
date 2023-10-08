import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// routes
import { useParams } from 'src/routes/hooks';
import { GamesDetailsView } from 'src/sections/games/view';
// sections
import { TourDetailsView } from 'src/sections/tour/view';

// ----------------------------------------------------------------------

export default function GamesDetailsPage() {

  const { t } = useLocales()

  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('analytic')}</title>
      </Helmet>

      <GamesDetailsView id={`${id}`} />
    </>
  );
}
