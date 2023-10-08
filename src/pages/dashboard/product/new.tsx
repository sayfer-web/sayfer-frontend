import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { ProductCreateView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export default function ProductCreatePage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('create_a_new_product')}</title>
      </Helmet>

      <ProductCreateView />
    </>
  );
}
