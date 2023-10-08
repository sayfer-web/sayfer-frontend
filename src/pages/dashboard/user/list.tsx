import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { UserListView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function UserListPage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('user_list')}</title>
      </Helmet>

      <UserListView />
    </>
  );
}
