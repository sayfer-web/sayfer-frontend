import { m } from 'framer-motion';
// @mui
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// assets
import { ForbiddenIllustration } from 'src/assets/illustrations';
// components
import { RouterLink } from 'src/routes/components';
import { MotionContainer, varBounce } from 'src/components/animate';
import { useLocales } from 'src/locales';

// ----------------------------------------------------------------------

export default function View403() {

  const { t } = useLocales()

  return (
    <MotionContainer>
      <m.div variants={varBounce().in}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          {t('no_permission_title')}
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <Typography sx={{ color: 'text.secondary' }}>
          {t('no_permission_details_first')}
          <br />
          {t('no_permission_details_second')}
        </Typography>
      </m.div>

      {/* <m.div variants={varBounce().in}>
        <ForbiddenIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
      </m.div> */}

      <Button component={RouterLink} href="/" size="large" variant="contained">
        {t('go_to_home')}
      </Button>
    </MotionContainer>
  );
}
