import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
import { useParams } from 'src/routes/hooks';
// import ReferralsListView from 'src/sections/referrals/view/referral-list-view';
// sections
import { UserProfileView } from 'src/sections/user/view';
import ReferralsListView from 'src/sections/user/view/user-referrals-view';
// import ReferralsListView from 'src/sections/user/view/user-referrals-view';

// ----------------------------------------------------------------------

// type Props = {
//     username: string
// }

export default function ReferralsProfilePage() {

  const { t } = useLocales()
  
//   const params = useParams();

//   const { id } = params;

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('user_profile')}</title>
      </Helmet>

      <ReferralsListView />
    </>
  );
}
