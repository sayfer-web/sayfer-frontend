import { t } from 'i18next';
import { Helmet } from 'react-helmet-async';
// sections
import PermissionDeniedView from 'src/sections/permission/view';

// ----------------------------------------------------------------------

export default function PermissionDeniedPage() {
  return (
    <>
      <Helmet>
        <title> {t('dashboard')}: {t('permission_denied')}</title>
      </Helmet>

      <PermissionDeniedView />
    </>
  );
}
