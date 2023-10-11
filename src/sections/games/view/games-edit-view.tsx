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
import TourNewEditForm from '../games-new-edit-form';
import { useLocales } from 'src/locales';
import GamesNewEditForm from '../games-new-edit-form';

// ----------------------------------------------------------------------

type Props = {
  id: string;
};

const newGames = [{
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
  gameGuides: [{
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

export default function GamesEditView({ id }: Props) {

  const { t } = useLocales()

  const settings = useSettingsContext();

  const currentGame = newGames.find((tour) => tour.id === id);

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
            name: t('games'),
            href: paths.dashboard.games.root,
          },
          { name: currentGame?.name },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <GamesNewEditForm currentGame={currentGame} />
    </Container>
  );
}
