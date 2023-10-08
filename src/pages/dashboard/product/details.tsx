import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// routes
import { useParams } from 'src/routes/hooks';
// sections
import { ProductDetailsView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export default function ProductDetailsPage() {
  
  const { t } = useLocales()

  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('product_details')}</title>
      </Helmet>

      <ProductDetailsView id={`${id}`} />
    </>
  );
}
