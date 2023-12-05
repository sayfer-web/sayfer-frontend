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

  // console.log('PARAMS: ', params)

  const { id } = params;

  // console.log(title)

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('post_details')}</title>
      </Helmet>

      <PostDetailsView id={`${id}`} />
    </>
  );
}
