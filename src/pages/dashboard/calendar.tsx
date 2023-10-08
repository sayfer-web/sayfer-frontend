import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { CalendarView } from 'src/sections/calendar/view';

// ----------------------------------------------------------------------

export default function CalendarPage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('calendar')}</title>
      </Helmet>

      <CalendarView />
    </>
  );
}
