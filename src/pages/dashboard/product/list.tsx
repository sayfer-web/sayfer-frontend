import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { ProductListView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export default function ProductListPage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('product_list')}</title>
      </Helmet>

      <ProductListView />
    </>
  );
}
