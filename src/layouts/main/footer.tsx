// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// routes
import { paths } from 'src/routes/paths';
import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';
// _mock
import { _socials } from 'src/_mock';
// components
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';


import IconYoutube from 'src/assets/icons/socials/IconYoutube'
import IconFacebook from 'src/assets/icons/socials/IconFacebook'
import IconInstagram from 'src/assets/icons/socials/IconInstagram'
import IconTelegram from 'src/assets/icons/socials/IconTelegram'
import IconVk from 'src/assets/icons/socials/IconVk'
import IconLinkedin from 'src/assets/icons/socials/IconLinkedin'
import IconLogo from 'src/assets/icons/menu/IconLogo'
import { useLocales } from 'src/locales';


// ----------------------------------------------------------------------

const LINKS = () => {
  return [
  {
    headline: 'Minimal',
    children: [
      { name: 'About us', href: paths.about },
      { name: 'Contact us', href: paths.contact },
      { name: 'FAQs', href: paths.faqs },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and Condition', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  }, 
  {
    headline: 'Contact',
    children: [{ name: 'support@minimals.cc', href: '#' }],
  },
];
}

// ----------------------------------------------------------------------

export default function Footer() {

  const { t } = useLocales()

  const pathname = usePathname();

  const isHome = pathname === '/';

  const simpleFooter = (
    <Box
      component="footer"
      sx={{
        py: 5,
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Container>
        <Logo sx={{ mb: 1, mx: 'auto' }} />

        <Typography variant="caption" component="div">
          © All rights reserved
          <br /> made by
          <Link href="https://minimals.cc/"> minimals.cc </Link>
        </Typography>
      </Container>
    </Box>
  );

  const mainFooter = (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Divider />

      <Container
        sx={{
          pt: 10,
          pb: 5,
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Logo sx={{ mb: 3 }} />

        <Grid
          container
          justifyContent={{
            xs: 'center',
            md: 'space-between',
          }}
        >
          <Grid xs={8} md={3}>
            <Typography
              variant="body2"
              sx={{
                maxWidth: 270,
                mx: { xs: 'auto', md: 'unset' },
              }}
            >
              The starting point for your next project with Minimal UI Kit, built on the newest
              version of Material-UI ©, ready to be customized to your style.
            </Typography>

            <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{
                mt: 3,
                mb: { xs: 5, md: 0 },
              }}
            >
              {_socials.map((social) => (
                <IconButton
                  key={social.name}
                  sx={{
                    '&:hover': {
                      bgcolor: alpha(social.color, 0.08),
                    },
                  }}
                >
                  <Iconify color={social.color} icon={social.icon} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }}>
              {LINKS().map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                  sx={{ width: 1 }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 10 }}>
          © 2021. All rights reserved
        </Typography>
      </Container>
    </Box>
  );

  // return isHome ? simpleFooter : mainFooter;

  return (
    <div className='bg-[#000] py-2' style={{ paddingTop: 0,  }}>
    <div style={{ display: 'flex' }} className='flex md:flex md:flex-col'>
      <div className='flex flex-col lg:flex-row flex-1 gap-8 p-6 pl-10 lg:pl-20 pr-10 lg:pr-20 justify-between'
      style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 40, padding: 30, paddingLeft: 20, paddingRight: 20 }}
      >


        <div className='list-none flex flex-row md:flex-col max-[436px]:flex-col gap-4 text-[#fff] lg:flex-1'
        style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
        >
          <div className='flex flex-col md:flex-row items-center max-[436px]:items-center max-[436px]:flex-row justify-center gap-2 lg:justify-start'>
            {/* <IconLogo className='h-12 w-12' color='#fff' /> */}
            <div style={{ color: '#fff', fontWeight: '300' }} className='text-2xl max-[436px]:text-4xl'>SAYFER</div>


          </div>

          <div className='max-w-full font-light max-[436px]:text-2xl text-lg max-[436px]:text-center'
          style={{ width: '100%', fontSize: 20, fontWeight: '200' }}
          >
            {t('footer_title')}
          </div>

        </div>

        <Stack
          sx={{ display: 'flex', flexDirection: { mobile: 'column', sm: 'row' }, flexWrap: 'wrap', flex: 1, 
          justifyContent: {
            sm: 'space-evenly',
            mobile: 'center'
          }, 
          alignItems: {
            sm: 'space-evenly',
            mobile: 'center'
          },
          // gap: 1  
        }}
        >

          <div style={{ listStyle: "none", display: 'flex', flexDirection: 'column', color: '#fff', gap: 0, width: 250 }} className='max-[436px]:w-full w-[168]'>

            <span style={{ fontWeight: '500', color: '#02a30c', fontSize: 20 }} className='text-xl max-[436px]:text-2xl'>{t('user')}</span>
            <ul style={{ listStyle: "none", display: 'flex', gap: 5, flexDirection: 'column', paddingLeft: 0 }}>
              <li style={{ listStyle: 'none'}}>» {t('my_profile')}</li>
              <li>» {t('my_portfolio')}</li>
              <li>» {t('settings')}</li>
              <li className='font-light max-[436px]:text-xl text-lg'>» {t('exit')}</li>
            </ul>

          </div>


          <div style={{ listStyle: "none", display: 'flex', flexDirection: 'column', color: '#fff', gap: 0, width: 250 }} className='max-[436px]:w-full w-[168]'>
            <span style={{ fontWeight: '500', color: '#02a30c', fontSize: 20 }} className='text-xl max-[436px]:text-2xl'>Платформа</span>
            <ul style={{ listStyle: "none", display: 'flex', gap: 5, flexDirection: 'column', paddingLeft: 0 }}>
              <li className='font-light max-[436px]:text-xl text-lg'>» {t('who_we_are')}</li>
              <li className='font-light max-[436px]:text-xl text-lg'>» {t('our_targets')}</li>
              <li className='font-light max-[436px]:text-xl text-lg'>» {t('our_advantages')}</li>
              <li className='font-light max-[436px]:text-xl text-lg'>» {t('starts_with')}</li>
            </ul>

          </div>

          <div style={{ listStyle: "none", display: 'flex', flexDirection: 'column', color: '#fff', gap: 0, width: 250 }} className='max-[436px]:w-full w-[168]'>
            <span style={{ fontWeight: '500', color: '#02a30c', fontSize: 20 }} className='text-xl max-[436px]:text-2xl'>{t('directory')}</span>
            <ul style={{ listStyle: "none", display: 'flex', gap: 5, flexDirection: 'column', paddingLeft: 0 }}>
              <li className='font-light max-[436px]:text-xl text-lg'>» {t('privacy')}</li>
              <li className='font-light max-[436px]:text-xl text-lg'>» {t('security')}</li>
              <li className='font-light max-[436px]:text-xl text-lg'>» {t('terms_of_service')}</li>
              <li className='font-light max-[436px]:text-xl text-lg'>» {t('partnership')}</li>
            </ul>

          </div>

          <div style={{ listStyle: "none", display: 'flex', flexDirection: 'column', color: '#fff', gap: 0, width: 250 }} className='max-[436px]:w-full w-[168]'>
            <span style={{ fontWeight: '500', color: '#02a30c', fontSize: 20 }} className='text-xl max-[436px]:text-2xl'>{t('legal_info')}</span>
            <ul style={{ listStyle: "none", display: 'flex', gap: 5, flexDirection: 'column', paddingLeft: 0 }}>
              <li className='font-light max-[436px]:text-xl text-lg'>» {t('privacy_notice')}</li>
              <li className='font-light max-[436px]:text-xl text-lg'>» {t('security')}</li>
              <li className='font-light max-[436px]:text-xl text-lg'>» {t('terms_of_service')}</li>
              <li className='font-light max-[436px]:text-xl text-lg'>» {t('become_affiliate')}</li>
            </ul>
          </div>
        </Stack>
      </div>

    </div>

    {/* <div className='pl-10 pr-10 lg:pl-20 lg:pr-20'
    style={{ paddingLeft: 20, paddingRight: 20 }}
    > */}
      <hr />
      <Stack
      sx={{ gap: 1, 
        display: 'flex', 
        paddingLeft: 10, paddingRight: 10, 
        // flexDirection: 'row',
        flexDirection: {
          mobile: 'column',
          md: 'row'
        }, 
        flexWrap: 'wrap', 
        justifyContent: {
          mobile: 'center',
          md: 'space-between'
        }, 
        alignItems: 'center', 
        marginLeft: {
          mobile: 4,
          md: '10'
        }, 
        marginRight: {
          mobile: 4,
          md: '10'
        }
        }}
      >
        <div className='text-white w-full justify-between sm:justify-start flex flex-row gap-2 font-light text-lg max-[436px]:text-xl'
        style={{ display: 'flex', justifyContent: 'center', gap: 10, alignItems: 'center' }}
        >
          <span style={{  }}>© 2023 Sayfer. </span>
          <span style={{ }}>{t('all_rights_reserved')}.</span>
        </div>
        <ul className='flex flex-row gap-5 text-white justify-center sm:justify-end w-full'
        style={{ display: 'flex', flexDirection: 'row', gap: 5, justifyContent: 'center', listStyle: 'none', alignItems: 'center', paddingLeft: 0 }}
        >
          <li><IconYoutube /></li>
          <li><IconFacebook /></li>
          <li><IconInstagram /></li>
          <li><IconTelegram /></li>
          <li><IconVk /></li>
          <li><IconLinkedin /></li>
        </ul>
      </Stack>
    {/* </div> */}

    
  </div>
  )
  
}
