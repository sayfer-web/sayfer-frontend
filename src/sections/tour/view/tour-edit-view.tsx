// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// _mock
import { _tours } from 'src/_mock';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import TourNewEditForm from '../tour-new-edit-form';
import { useLocales } from 'src/locales';

// ----------------------------------------------------------------------

type Props = {
  id: string;
};

export default function TourEditView({ id }: Props) {

  const { t } = useLocales()

  const settings = useSettingsContext();

  const newTour = [{
    id: '1',
    name: 'Poker',
    price: 0,
    totalViews: 0,
    tags: ['string'],
    content: 'string;',
    publish: 'string;',
    images: [
      'https://sayfer.club/assets/images/travel/travel_1.jpg',
      'https://sayfer.club/assets/images/travel/travel_2.jpg',
      'https://sayfer.club/assets/images/travel/travel_3.jpg',
    ],
    durations: 'string;',
    priceSale: 0,
    services: ['string'],
    destination: 'Subtitle',
    ratingNumber: 0,
    bookers: [{
      id: 'string;',
      name: 'string;',
      avatarUrl: 'string;',
      guests: 0,
    }],
    tourGuides: [{
      id: 'string;',
      name: 'string;',
      avatarUrl: 'string;',
      phoneNumber: 'string;',
    }],
    createdAt: new Date(),
    available: {
      startDate: new Date(),
      endDate: new Date(),
    },
  }]

  const currentTour = newTour.find((tour) => tour.id === id);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading={t('edit')}
        links={[
          {
            name: t('dashboard'),
            href: paths.dashboard.root,
          },
          {
            name: t('tour'),
            href: paths.dashboard.tour.root,
          },
          { name: currentTour?.name },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <TourNewEditForm currentTour={currentTour} />
    </Container>
  );
}
