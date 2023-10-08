import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// routes
import { useParams } from 'src/routes/hooks';
// sections
// import { InvoiceDetailsView } from 'src/sections/invoice/view';
import TransactionsDetailsView from 'src/sections/transactions/view/transactions-details-view';

// ----------------------------------------------------------------------

export default function InvoiceDetailsPage() {

  const { t } = useLocales()

  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('invoice_details')}</title>
      </Helmet>

      <TransactionsDetailsView id={`${id}`} />
    </>
  );
}
