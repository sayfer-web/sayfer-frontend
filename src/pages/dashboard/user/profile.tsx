import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { UserProfileView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function UserProfilePage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('user_profile')}</title>
      </Helmet>

      <UserProfileView />
    </>
  );
}
