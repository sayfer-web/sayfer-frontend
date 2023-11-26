// @mui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
// hooks
import { useMockedUser } from 'src/hooks/use-mocked-user';
// _mock
import { _appFeatured, _appAuthors, _appInstalled, _appRelated, _appInvoices } from 'src/_mock';
// components
import { useSettingsContext } from 'src/components/settings';
// assets
import { SeoIllustration } from 'src/assets/illustrations';
//
import AppWidget from '../app-widget';
import AppWelcome from '../app-welcome';
import AppFeatured from '../app-featured';
import AppNewInvoice from '../app-new-invoice';
import AppTopAuthors from '../app-top-authors';
import AppTopRelated from '../app-top-related';
import AppAreaInstalled from '../app-area-installed';
import AppWidgetSummary from '../app-widget-summary';
import AppCurrentDownload from '../app-current-download';
import AppTopInstalledCountries from '../app-top-installed-countries';
import { useLocales } from 'src/locales';
import { useAuth } from 'src/hooks/use-auth';
import { useSelector } from 'react-redux';
import { selectCurrentUsername } from 'src/app/features/auth/authSlice';

// ----------------------------------------------------------------------

export default function OverviewAppView() {

  // const { username, status } = useAuth()

  const username = useSelector(selectCurrentUsername) || 'Guest'

  // let username = 'Sayfer'
  let status = 'User'

  const { t } = useLocales()

  const { user } = useMockedUser();

  const theme = useTheme();

  const settings = useSettingsContext();

  const fetchedChart = {
    categories: [
      t('jan'),
      t('feb'),
      t('mar'),
      t('apr'),
      t('may'),
      t('jun'),
      t('jul'),
      t('aug'),
      t('sep'),
      t('oct'),
      t('nov'),
      t('dec'),
    ],
    colors: [['#0f0', '#0f0'], ['#070', '#070']],
    series: [
      {
        year: '2023',
        data: [
          {
            name: 'SFR',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49],
          },
          {
            name: 'SFRX',
            data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56, 77],
          },
        ],
      },
      {
        year: '2024',
        data: [
          {
            name: t('asia'),
            data: [51, 35, 41, 10, 91, 69, 62, 148, 91, 69, 62, 49],
          },
          {
            name: t('america'),
            data: [56, 13, 34, 10, 77, 99, 88, 45, 77, 99, 88, 77],
          },
        ],
      },
    ],
  }


  // -------------------

  const recs = [
    {
      id: '1',
      title: 'SFR',
      description: 'Купить токен',
      coverUrl: 'url',
    },
    {
      id: '2',
      title: 'Хочешь сыграть в покер?',
      description: 'Подробнее',
      coverUrl: 'url',
    },
  ]


  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>
        <Grid xs={12} md={8}>
          <AppWelcome
            title={`${t('welcome')}, ${username || 'Guest'}`}
            description={`${t('dashboard_welcome')}`}
          // img={<SeoIllustration />}
          // action={
          //   <Button variant="contained" color="primary">
          //     {t('go_now')}
          //   </Button>
          // }
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppFeatured list={recs} />
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title={t('sfr_current_price')}
            percent={0}
            total={1}
            postfix={'$'}
            chart={{
              series: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title={t('all_bought_tokens')}
            percent={0}
            total={1}
            postfix={'$'}
            chart={{
              // colors: [theme.palette.info.light, theme.palette.info.main],
              series: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title={t('tokens_counter')}
            percent={0}
            total={0}
            chart={{
              // colors: [theme.palette.warning.light, theme.palette.warning.main],
              series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            }}
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={4}>
          <AppCurrentDownload
            title={t('tokens_relations')}
            subheader={t('tokens_relations_info')}
            chart={{
              colors: ['#070', '#0f0', '#0a0', '#080', '#010'],
              series: [
                { label: 'SFR', value: 50 },
                { label: 'SFRX', value: 10 },
              ],
            }}
          />
        </Grid> */}

        <Grid xs={12} md={12} lg={12}>
          <AppAreaInstalled
            title={t('transactions_counter')}
            subheader={`(+43%) ${t('than_last_year')}`}
            chart={fetchedChart}
          />
        </Grid>

        {/* <Grid xs={12} lg={8}>
          <AppNewInvoice
            title={t('last_transactions')}
            tableData={_appInvoices}
            tableLabels={[
              { id: 'id', label: t('invoice_id') },
              { id: 'category', label: t('category') },
              { id: 'price', label: t('price') },
              { id: 'status', label: t('status') },
              { id: '' },
            ]}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <AppTopRelated title={t('top_related_applications')} list={_appRelated} />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <AppTopInstalledCountries title={t('top_installed_countries')} list={_appInstalled} />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <AppTopAuthors title={t('top_authors')} list={_appAuthors} />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <Stack spacing={3}>
            <AppWidget
              title={t('conversion')}
              total={38566}
              icon="solar:user-rounded-bold"
              color='success'
              chart={{
                series: 48,
              }}
            />

            <AppWidget
              title={t('applications')}
              total={55566}
              icon="fluent:mail-24-filled"
              color="success"
              chart={{
                series: 75,
              }}
            />

            <AppWidget
              title={t('applications')}
              total={55566}
              icon="fluent:mail-24-filled"
              color="success"
              chart={{
                series: 75,
              }}
            />
          </Stack>
        </Grid> */}
      </Grid>
    </Container>
  );
}
