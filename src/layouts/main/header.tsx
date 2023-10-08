// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Badge, { badgeClasses } from '@mui/material/Badge';
// hooks
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
// theme
import { bgBlur } from 'src/theme/css';
// routes
import { paths } from 'src/routes/paths';
// components
import Logo from 'src/components/logo';
import Label from 'src/components/label';
//
import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';
import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
//
import { SettingsButton, HeaderShadow, LoginButton, LanguagePopover } from '../_common';
import { useNavigate, useNavigation } from 'react-router';
import { useLocales } from 'src/locales';

// ----------------------------------------------------------------------

export default function Header() {

  const { t } = useLocales()

  const theme = useTheme();

  const navigate = useNavigate()

  const mdUp = useResponsive('up', 'md');

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar
    color='transparent'
    enableColorOnDark
    sx={{
      backgroundColor: '#00000000',
      // opacity: 0.5
    }}
    >
      <Toolbar
        disableGutters
        sx={{
          // backgroundColor: 'rgba(0, 0, 0, 0.2)', // Прозрачный фон
          backdropFilter: 'blur(10px)', // Размытие
          WebkitBackdropFilter: 'blur(10px)', // Для поддержки в Safari
          // height: {
          //   xs: HEADER.H_MOBILE,
          //   md: HEADER.H_DESKTOP,
          // },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              // color: '#00000055'
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Badge
            sx={{
              [`& .${badgeClasses.badge}`]: {
                top: 8,
                right: -16,
              },
            }}
            // badgeContent={
            //   <Link
            //     href={paths.changelog}
            //     target="_blank"
            //     rel="noopener"
            //     underline="none"
            //     sx={{ ml: 1 }}
            //   >
            //     <Label color="info" sx={{ textTransform: 'unset', height: 22, px: 0.5 }}>
            //       v0.0.1
            //     </Label>
            //   </Link>
            // }
          >
            {/* <Logo /> */}

          </Badge>

          <Box sx={{ flexGrow: 1 }} />

          {mdUp && <NavDesktop offsetTop={offsetTop} data={navConfig()} />}

          <Stack alignItems="center" direction={{ xs: 'row', md: 'row-reverse' }}>
            <Button variant="contained" rel="noopener" 
            // target="_blank"
            // href={paths.minimalUI}
            // href="/auth/jwt/login"
            onClick={() => { navigate('/auth/jwt/login') } }
            >
              {t('login')}
            </Button>

            <LanguagePopover 
              sx={{
                // ml: { xs: 1, md: 0 },
                // mr: { md: 2 },
              }} 
            />

            {/* {mdUp && <LoginButton />} */}

            <SettingsButton
              sx={{
                ml: { xs: 1, md: 0 },
                mr: { md: 2 },
              }}
            />

            {!mdUp && <NavMobile offsetTop={offsetTop} data={navConfig()} />}
          </Stack>
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
