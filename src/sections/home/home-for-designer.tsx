import { m } from 'framer-motion';
// @mui
import { useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// theme
import { textGradient, bgGradient } from 'src/theme/css';
// routes
import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';
import { HomePresent } from './home-present';
import { Style } from 'util';
import { useLocales } from 'src/locales';

// ----------------------------------------------------------------------

export default function HomeForDesigner({ onScroll = () => { } }) {

  const { t } = useLocales()

  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const renderDescription = (
    <Box sx={{ textAlign: { xs: 'center', md: 'unset' }, mt: { xs: 10, md: 20 } }}>
      <m.div variants={varFade().inUp}>
        {/* <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
          {t('general_token')}
        </Typography> */}
      </m.div>

      {/* <m.div variants={varFade().inUp}>
        <Typography
          variant="h2"
          sx={{
            mt: 3,
            mb: 5,
            ...textGradient(
              `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 100%`
            ),
          }}
        >
          {t('sfr_token')}
        </Typography>
      </m.div> */}

      <m.div variants={varFade().inUp}>
        <Typography variant="h3" sx={{ my: 3 }}>
          {t('unique_tokens')}
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography
          sx={{
            mb: 5,
            color: 'text.secondary',
          }}
        >
          {t('another_tokens')}
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Button
          color="inherit"
          size="large"
          variant="contained"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
          // target="_blank"
          // rel="noopener"
          // href={paths.figma}
          onClick={onScroll}
        >
          {t('details')}
        </Button>
      </m.div>
    </Box>
  );

  const renderImg = (
    <div style={{ zIndex: 20 }}>

      {/* <Box
      component={m.img}
      src="/assets/images/home/for_designer.webp"
      variants={varFade().in}
      sx={{
        height: 1,
        width: 0.5,
        objectFit: 'cover',
        position: 'absolute',
        boxShadow: `-80px 80px 80px ${
          theme.palette.mode === 'light'
            ? alpha(theme.palette.grey[500], 0.48)
            : alpha(theme.palette.common.black, 0.24)
        }`,
      }}
    /> */}
      <HomePresent />
    </div>
  );

  return (
    <Box
      sx={{
        minHeight: 560,
        // overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
        ...bgGradient({
          startColor: `${theme.palette.grey[900]} 25%`,
          endColor: alpha(theme.palette.grey[900], 1),
          // imgUrl: '/assets/images/home/for_designer.webp',
        }),
        ...(mdUp && {
          ...bgGradient({
            // color: alpha(theme.palette.background.default, 0.8),
            color: alpha('#000', 0.9),
            imgUrl: '/assets/background/overlay_4.jpg',
          }),
        }),
      }}
    >
      <Container component={MotionViewport}>
        <Grid container>
          <Grid sx={{ height: 777 }} xs={12} md={6}>
            {renderDescription}
          </Grid>

          {mdUp && <Grid md={6}>{renderImg}</Grid>}
          {!mdUp && <div style={{ left: -500 }}><HomePresent /></div>}

        </Grid>
      </Container>
    </Box>
  );
}
