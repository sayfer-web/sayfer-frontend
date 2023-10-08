import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { TourCreateView } from 'src/sections/tour/view';

// ----------------------------------------------------------------------

export default function TourCreatePage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('create_new_tour')}</title>
      </Helmet>

      <TourCreateView />
    </>
  );
}
