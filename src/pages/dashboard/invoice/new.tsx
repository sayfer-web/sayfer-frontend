import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { InvoiceCreateView } from 'src/sections/invoice/view';

// ----------------------------------------------------------------------

export default function InvoiceCreatePage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('create_a_new_invoice')}</title>
      </Helmet>

      <InvoiceCreateView />
    </>
  );
}
