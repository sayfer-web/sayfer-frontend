import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { JwtRegisterView } from 'src/sections/auth/jwt';

// ----------------------------------------------------------------------

export default function RegisterPage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title>{t('registration')}</title>
      </Helmet>
{/* < div>lol</div> */}
      <JwtRegisterView />
    </>
  );
}
