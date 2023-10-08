import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// routes
import { useParams } from 'src/routes/hooks';
// sections
import { InvoiceEditView } from 'src/sections/invoice/view';

// ----------------------------------------------------------------------

export default function InvoiceEditPage() {

  const { t } = useLocales()

  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('invoice_edit')}</title>
      </Helmet>

      <InvoiceEditView id={`${id}`} />
    </>
  );
}
