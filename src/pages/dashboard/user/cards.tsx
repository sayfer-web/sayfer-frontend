import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { UserCardsView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function UserCardsPage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('user_cards')}</title>
      </Helmet>

      <UserCardsView />
    </>
  );
}
