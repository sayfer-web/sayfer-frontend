import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { TourListView } from 'src/sections/tour/view';

// ----------------------------------------------------------------------

export default function TourListPage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('tour_list')}</title>
      </Helmet>

      <TourListView />
    </>
  );
}
