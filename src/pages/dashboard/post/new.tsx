import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { PostCreateView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export default function PostCreatePage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('create_a_new_post')}</title>
      </Helmet>

      <PostCreateView />
    </>
  );
}
