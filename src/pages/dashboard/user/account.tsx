import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { AccountView } from 'src/sections/account/view';

// ----------------------------------------------------------------------

export default function AccountPage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('account_settings')}</title>
      </Helmet>

      <AccountView />
    </>
  );
}
