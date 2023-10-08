import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { UserCreateView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function UserCreatePage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('create_a_new_user')}</title>
      </Helmet>

      <UserCreateView />
    </>
  );
}
