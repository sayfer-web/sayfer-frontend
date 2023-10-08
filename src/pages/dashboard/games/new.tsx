import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
import { GamesCreateView } from 'src/sections/games/view';
// sections
import { TourCreateView } from 'src/sections/tour/view';

// ----------------------------------------------------------------------

export default function GamesCreatePage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('add_a_new_game')}</title>
      </Helmet>

      <GamesCreateView />
    </>
  );
}
