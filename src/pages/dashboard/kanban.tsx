import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { KanbanView } from 'src/sections/kanban/view';

// ----------------------------------------------------------------------

export default function KanbanPage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('kanban')}</title>
      </Helmet>

      <KanbanView />
    </>
  );
}
