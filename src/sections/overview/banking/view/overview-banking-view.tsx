// @mui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
// _mock
import { 
  _bankingContacts, 
  _bankingCreditCard, 
  _bankingRecentTransitions 
} from 'src/_mock';
// components
import { useSettingsContext } from 'src/components/settings';
//
import BankingContacts from '../banking-contacts';
import BankingQuickTransfer from '../banking-quick-transfer';
import BankingInviteFriends from '../banking-invite-friends';
import BankingWidgetSummary from '../banking-widget-summary';
import BankingCurrentBalance from '../banking-current-balance';
import BankingBalanceStatistics from '../banking-balance-statistics';
import BankingRecentTransitions from '../banking-recent-transitions';
import BankingExpensesCategories from '../banking-expenses-categories';
import { useState } from 'react';
import EcommerceCurrentBalance from '../../e-commerce/ecommerce-current-balance';
import WalletRefillFounds from '../wallet-refill-founds';
import { useSelector } from 'react-redux';
import { selectCurrentUsername } from 'src/app/features/auth/authSlice';
import { useLocales } from 'src/locales';

// ----------------------------------------------------------------------

export default function OverviewBankingView() {

  const { t } = useLocales()

  const [income, setIncome] = useState(
    [
      {
        title: 'SFR',
        icon: '',
        series: [
          { x: 2010, y: 88 },
          { x: 2011, y: 120 },
          { x: 2012, y: 156 },
          { x: 2013, y: 123 },
          { x: 2014, y: 88 },
          { x: 2015, y: 66 },
          { x: 2016, y: 45 },
          { x: 2017, y: 29 },
          { x: 2018, y: 45 },
          { x: 2019, y: 88 },
          { x: 2020, y: 132 },
          { x: 2021, y: 146 },
          { x: 2022, y: 169 },
          { x: 2023, y: 184 },
        ],
        percent: 1,
        total: 1000
      },
      {
        title: 'SFRX',
        icon: '',
        series: [
          { x: 2010, y: 88 },
          { x: 2011, y: 120 },
          { x: 2012, y: 156 },
          { x: 2013, y: 123 },
          { x: 2014, y: 88 },
          { x: 2015, y: 66 },
          { x: 2016, y: 45 },
          { x: 2017, y: 29 },
          { x: 2018, y: 45 },
          { x: 2019, y: 88 },
          { x: 2020, y: 132 },
          { x: 2021, y: 146 },
          { x: 2022, y: 169 },
          { x: 2023, y: 184 },
        ],
        percent: 10,
        total: 100
      }
    ]
  )

  const username = useSelector(selectCurrentUsername)

  console.log('username: ', username)


  const _bankingCreditCard = [
    {
      id: 1,
      balance: 0,
      cardType: 'SFR',
      // cardHolder: _mock.fullName(2),
      cardHolder: username,
      cardNumber: '**** **** **** 3640',
      cardValid: '',
    },
    {
      id: 1,
      balance: 18000.23,
      cardType: 'SFRX',
      // cardHolder: _mock.fullName(3),
      cardHolder: username,
      cardNumber: '**** **** **** 8864',
      cardValid: '',
    },
    {
      id: 3,
      balance: 2000.89,
      cardType: 'mastercard',
      // cardHolder: _mock.fullName(4),
      cardHolder: username,
      cardNumber: '**** **** **** 7755',
      cardValid: '',
    },
  ];
  

  // const expenses = useState()

  const theme = useTheme();

  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>
        <Grid xs={12} md={7}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
           
            {income.map(item => (
              <BankingWidgetSummary
              key={item.title}
              title={item.title}
              icon={item.icon}
              percent={item.percent}
              total={item.total}
              chart={{
                series: item.series
              }}
              />
              )) }
            
            {/* <BankingWidgetSummary
              title={income[0][1].title}
              icon={income[0][1].icon}
              percent={income[0][1].percent}
              total={income[0][1].total}
              chart={{
                series: income[0][1].series
              }}
            /> */}

            {/* <BankingWidgetSummary
              title={expenses.title}
              color="success"
              icon="eva:diagonal-arrow-right-up-fill"
              percent={expenses.percent}
              total={expenses.total}
              chart={{
                series: expenses.series
              }}
            /> */}
          </Stack>
        </Grid>

        <Grid xs={12} md={5}>
          {/* @ts-ignore */}
          <BankingCurrentBalance list={_bankingCreditCard} />
        </Grid>

        <Grid xs={12} md={8}>
          <Stack spacing={3}>
            <BankingBalanceStatistics
              title={t('balance_statistics')}
              // subheader="(+43% Income | +12% Expense) than last year"
              chart={{
                categories: [t('jan'), t('feb'), t('mar'), t('apr'), t('may'), t('jun'), t('jul'), t('aug'), t('sep')],
                // categoriesLabels: [t('jan'), t('Feb'), t('mar'), t('apr'), t('may'), t('jun'), t('jul'), t('aug'), t('sep')],
                series: [
                  {
                    type: 'Week',
                    label: t('week'),
                    data: [
                      {
                        label: 'Income',
                        name: t('income'),
                        data: [10, 41, 35, 151, 49, 62, 69, 91, 48],
                      },
                      {
                        label: 'Expenses',
                        name: t('expenses'),
                        data: [10, 34, 13, 56, 77, 88, 99, 77, 45],
                      },
                    ],
                  },
                  {
                    type: 'Month',
                    label: t('month'),
                    data: [
                      {
                        label: 'Income',
                        name: t('income'),
                        data: [148, 91, 69, 62, 49, 51, 35, 41, 10],
                      },
                      {
                        label: 'Expenses',
                        name: t('expenses'),
                        data: [45, 77, 99, 88, 77, 56, 13, 34, 10],
                      },
                    ],
                  },
                  {
                    type: 'Year',
                    label: t('year'),
                    data: [
                      {
                        label: 'Income',
                        name: t('income'),
                        data: [76, 42, 29, 41, 27, 138, 117, 86, 63],
                      },
                      {
                        label: 'Expenses',
                        name: t('expenses'),
                        data: [80, 55, 34, 114, 80, 130, 15, 28, 55],
                      },
                    ],
                  },
                ],
              }}
            />

            

            <BankingExpensesCategories
              title={t('expenses_categories')}
              chart={{
                series: [
                  { label: 'Category 1', value: 14 },
                  { label: 'Category 2', value: 23 },
                  { label: 'Category 3', value: 21 },
                  { label: 'Category 4', value: 17 },
                  { label: 'Category 5', value: 15 },
                  { label: 'Category 6', value: 10 },
                  { label: 'Category 7', value: 12 },
                  { label: 'Category 8', value: 17 },
                  { label: 'Category 9', value: 21 },
                ],
                colors: [
                  theme.palette.primary.main,
                  theme.palette.warning.dark,
                  theme.palette.success.darker,
                  theme.palette.error.main,
                  theme.palette.info.dark,
                  theme.palette.info.darker,
                  theme.palette.success.main,
                  theme.palette.warning.main,
                  theme.palette.info.main,
                ],
              }}
            />

            <BankingRecentTransitions
              title={t('recent_transitions')}
              tableData={_bankingRecentTransitions()}
              tableLabels={[
                { id: 'description', label: t('description') },
                { id: 'date', label: t('date') },
                { id: 'amount', label: t('amount') },
                { id: 'status', label: t('status') },
                { id: '' },
              ]}
            />
          </Stack>
        </Grid>


        <Grid xs={12} md={4}>
          <Stack spacing={3}>
            
          <WalletRefillFounds
            title={t('total_money_received')}
            currentBalance={187650}
            sentAmount={25500}
          />

            <BankingQuickTransfer title={t('quick_transfer')} list={_bankingContacts} />
            
            {/* 
              <BankingContacts
                title="Contacts"
                subheader="You have 122 contacts"
                list={_bankingContacts.slice(-5)}
              /> 
            */}

            <BankingInviteFriends
              price="$50"
              title={`${t('invite_friends')} \n ${t('and_earn')}`}
              description={t('present_egestas')}
              img="/assets/illustrations/characters/character_11.png"
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
