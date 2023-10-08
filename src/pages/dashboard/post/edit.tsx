import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// routes
import { useParams } from 'src/routes/hooks';
// sections
import { PostEditView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export default function PostEditPage() {

  const { t } = useLocales()

  const params = useParams();

  const { title } = params;

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('post_edit')}</title>
      </Helmet>

      <PostEditView title={`${title}`} />
    </>
  );
}
