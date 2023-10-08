import { t } from 'i18next';
import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { MailView } from 'src/sections/mail/view';

// ----------------------------------------------------------------------

export default function MailPage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('mail')}</title>
      </Helmet>

      <MailView />
    </>
  );
}
