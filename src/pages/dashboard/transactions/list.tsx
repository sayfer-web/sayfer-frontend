import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { InvoiceListView } from 'src/sections/invoice/view';
import TransactionsListView from 'src/sections/transactions/view/transactions-list-view';
// import TransactionsListView from 'src/sections/transactions/view/invoice-list-view';

// ----------------------------------------------------------------------

export default function InvoiceListPage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('invoice_list')}</title>
      </Helmet>

      <TransactionsListView />
    </>
  );
}
