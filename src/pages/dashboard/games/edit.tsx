import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// routes
import { useParams } from 'src/routes/hooks';
import { GamesEditView } from 'src/sections/games/view';
// sections
import { TourEditView } from 'src/sections/tour/view';

// ----------------------------------------------------------------------

export default function GamesEditPage() {

  const { t } = useLocales()

  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('tour_edit')}</title>
      </Helmet>

      <GamesEditView id={`${id}`} />
    </>
  );
}
