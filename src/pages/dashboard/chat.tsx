import { Helmet } from 'react-helmet-async';
import { useLocales } from 'src/locales';
// sections
import { ChatView } from 'src/sections/chat/view';

// ----------------------------------------------------------------------

export default function ChatPage() {

  const { t } = useLocales()

  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('chat')}</title>
      </Helmet>

      <ChatView />
    </>
  );
}
