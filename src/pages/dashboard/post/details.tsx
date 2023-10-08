import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// routes
import { useParams } from 'src/routes/hooks';
// sections
import { PostDetailsView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export default function PostDetailsPage() {

  const { t } = useLocales()

  const params = useParams();

  const { title } = params;

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('post_details')}</title>
      </Helmet>

      <PostDetailsView title={`${title}`} />
    </>
  );
}
