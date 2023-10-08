import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { PostListView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export default function PostListPage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('post_list')}</title>
      </Helmet>

      <PostListView />
    </>
  );
}
