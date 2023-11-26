import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
import GamesListView from 'src/sections/games/view/games-list-view';
// sections
import { TourListView } from 'src/sections/tour/view';

// ----------------------------------------------------------------------

export default function GamesListPage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('projects')}</title>
      </Helmet>

      <GamesListView />
    </>
  );
}
