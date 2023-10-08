import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// routes
import { useParams } from 'src/routes/hooks';
// sections
import { OrderDetailsView } from 'src/sections/order/view';

// ----------------------------------------------------------------------

export default function OrderDetailsPage() {

  const { t } = useLocales()

  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('order_details')}</title>
      </Helmet>

      <OrderDetailsView id={`${id}`} />
    </>
  );
}
