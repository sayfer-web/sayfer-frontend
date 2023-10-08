import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { OrderListView } from 'src/sections/order/view';

// ----------------------------------------------------------------------

export default function OrderListPage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('order_list')}</title>
      </Helmet>

      <OrderListView />
    </>
  );
}
