import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { InvoiceListView } from 'src/sections/invoice/view';

// ----------------------------------------------------------------------

export default function InvoiceListPage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('invoice_list')}</title>
      </Helmet>

      <InvoiceListView />
    </>
  );
}
