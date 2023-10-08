// @mui
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
// _mock
import { _bookings, _bookingNew, _bookingsOverview, _bookingReview } from 'src/_mock';
// assets
import {
  BookingIllustration,
  CheckInIllustration,
  CheckoutIllustration,
} from 'src/assets/illustrations';
// components
import { useSettingsContext } from 'src/components/settings';
//
import BookingBooked from '../booking-booked';
import BookingNewest from '../booking-newest';
import BookingDetails from '../booking-details';
import BookingAvailable from '../booking-available';
import BookingStatistics from '../booking-statistics';
import BookingTotalIncomes from '../booking-total-incomes';
import BookingWidgetSummary from '../booking-widget-summary';
import BookingCheckInWidgets from '../booking-check-in-widgets';
import BookingCustomerReviews from '../booking-customer-reviews';
import { useLocales } from 'src/locales';

// ----------------------------------------------------------------------

const SPACING = 3;

export default function OverviewBookingView() {

  const { t } = useLocales()

  const theme = useTheme();

  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={SPACING} disableEqualOverflow>
        <Grid xs={12} md={4}>
          <BookingWidgetSummary
            title={t('total_booking')}
            total={714000}
            icon={<BookingIllustration />}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <BookingWidgetSummary title={t('sold')} total={311000} icon={<CheckInIllustration />} />
        </Grid>

        <Grid xs={12} md={4}>
          <BookingWidgetSummary title={t('cancelled')} total={124000} icon={<CheckoutIllustration />} />
        </Grid>

        <Grid container xs={12}>
          <Grid container xs={12} md={8}>
            <Grid xs={12} md={6}>
              <BookingTotalIncomes
                title={t('total_incomes')}
                total={18765}
                percent={2.6}
                chart={{
                  series: [
                    { x: 2016, y: 111 },
                    { x: 2017, y: 136 },
                    { x: 2018, y: 76 },
                    { x: 2019, y: 108 },
                    { x: 2020, y: 74 },
                    { x: 2021, y: 54 },
                    { x: 2022, y: 57 },
                    { x: 2023, y: 84 },
                  ],
                }}
              />
            </Grid>

            <Grid xs={12} md={6}>
              <BookingBooked title={t('booked')} data={_bookingsOverview} />
            </Grid>

            <Grid xs={12}>
              <BookingCheckInWidgets
                chart={{
                  series: [
                    { label: t('sold'), percent: 72, total: 38566 },
                    { label: t('pending_for_payment'), percent: 64, total: 18472 },
                  ],
                }}
              />
            </Grid>

            <Grid xs={12}>
              {/* <BookingStatistics
                title={t('statistics')}
                subheader={`(+43% ${t('sold')} | +12% ${t('canceled')}) ${t('than_last_year')}`}
                chart={{
                  colors: [theme.palette.primary.main, theme.palette.error.light],
                  categories: [t('jan'), t('feb'), t('mar'), t('apr'), t('may'), t('jun'), t('jul'), t('aug'), t('sep')],
                  series: [
                    {
                      type: t('week'),
                      data: [
                        {
                          name: t('sold'),
                          data: [10, 41, 35, 151, 49, 62, 69, 91, 48],
                        },
                        {
                          name: t('canceled'),
                          data: [10, 34, 13, 56, 77, 88, 99, 77, 45],
                        },
                      ],
                    },
                    {
                      type: t('month'),
                      data: [
                        {
                          name: t('sold'),
                          data: [148, 91, 69, 62, 49, 51, 35, 41, 10],
                        },
                        {
                          name: t('canceled'),
                          data: [45, 77, 99, 88, 77, 56, 13, 34, 10],
                        },
                      ],
                    },
                    {
                      type: t('year'),
                      data: [
                        {
                          name: t('sold'),
                          data: [76, 42, 29, 41, 27, 138, 117, 86, 63],
                        },
                        {
                          name: t('canceled'),
                          data: [80, 55, 34, 114, 80, 130, 15, 28, 55],
                        },
                      ],
                    },
                  ],
                }}
              /> */}
            </Grid>
          </Grid>

          <Grid xs={12} md={4}>
            <BookingAvailable
              title={t('tours_available')}
              chart={{
                series: [
                  { label: t('sold_out'), value: 120 },
                  { label: t('available'), value: 66 },
                ],
              }}
            />
  {/* 
              <BookingCustomerReviews
                title={t('customer_reviews')}
                subheader={`${_bookingReview.length} ${t('reviews')}`}
                list={_bookingReview}
                sx={{ mt: SPACING }}
              /> */}
          </Grid>
        </Grid>

        {/* <Grid xs={12}>
          <BookingNewest title={t('newest_booking')} subheader={t('twelve_booking')} list={_bookingNew} />
        </Grid> */}

        <Grid xs={12}>
          <BookingDetails
            title={t('booking_details')}
            tableData={_bookings}
            tableLabels={[
              { id: 'destination', label: t('destination') },
              { id: 'customer', label: t('customer') },
              { id: 'checkIn', label: t('check_in') },
              { id: 'checkOut', label: t('check_out') },
              { id: 'status', label: t('status') },
              { id: '' },
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
