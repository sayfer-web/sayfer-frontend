import orderBy from 'lodash/orderBy';
import { useState, useCallback } from 'react';
// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// utils
import { fTimestamp } from 'src/utils/format-time';
// _mock
import { _games, _gamesGuides, GAMES_SERVICE_OPTIONS, GAMES_SORT_OPTIONS } from 'src/_mock';
// assets
import { countries } from 'src/assets/data';
// components
import Iconify from 'src/components/iconify';
import EmptyContent from 'src/components/empty-content';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
// types
// import { ITourItem, ITourFilters, ITourFilterValue } from 'src/types/tour';
import { IGameItem, IGameFilters, IGameFilterValue } from 'src/types/games';
//
import GamesList from '../games-list';
import GamesSort from '../games-sort';
import GamesSearch from '../games-search';
import GamesFilters from '../games-filters';
import GamesFiltersResult from '../games-filters-result';
import { useLocales } from 'src/locales';

// ----------------------------------------------------------------------

const defaultFilters: IGameFilters = {
  destination: [],
  gameGuides: [],
  services: [],
  startDate: null,
  endDate: null,
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

// ----------------------------------------------------------------------

export default function GamesListView() {

  const { t } = useLocales()

  const settings = useSettingsContext();

  const openFilters = useBoolean();

  const [sortBy, setSortBy] = useState('latest');

  const [search, setSearch] = useState<{ query: string; results: IGameItem[] }>({
    query: '',
    results: [],
  });

  const [filters, setFilters] = useState(defaultFilters);

  const dateError =
    filters.startDate && filters.endDate
      ? filters.startDate.getTime() > filters.endDate.getTime()
      : false;

  

  const games = _games()

  console.log(games)

  const dataFiltered = applyFilter({
    /* @ts-ignore */
    inputData: newGames,
    filters,
    sortBy,
    dateError,
  });

  const canReset =
    !!filters.destination.length ||
    !!filters.gameGuides.length ||
    !!filters.services.length ||
    (!!filters.startDate && !!filters.endDate);

  const notFound = !dataFiltered.length && canReset;

  const handleFilters = useCallback((name: string, value: IGameFilterValue) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleSortBy = useCallback((newValue: string) => {
    setSortBy(newValue);
  }, []);

  const handleSearch = useCallback(
    (inputValue: string) => {
      setSearch((prevState) => ({
        ...prevState,
        query: inputValue,
      }));

      if (inputValue) {
        const results = _games().filter(
          (game: any) => game.name.toLowerCase().indexOf(search.query.toLowerCase()) !== -1
        );

        // setSearch((prevState) => ({
        //   ...prevState,
        //   results,
        // }));
      }
    },
    [search.query]
  );

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  const renderFilters = (
    <Stack
      spacing={3}
      justifyContent="space-between"
      alignItems={{ xs: 'flex-end', sm: 'center' }}
      direction={{ xs: 'column', sm: 'row' }}
    >
      <GamesSearch
        query={search.query}
        results={search.results}
        onSearch={handleSearch}
        hrefItem={(id: string) => paths.dashboard.tour.details(id)}
      />

      <Stack direction="row" spacing={1} flexShrink={0}>
        <GamesFilters
          open={openFilters.value}
          onOpen={openFilters.onTrue}
          onClose={openFilters.onFalse}
          //
          filters={filters}
          onFilters={handleFilters}
          //
          canReset={canReset}
          onResetFilters={handleResetFilters}
          //
          serviceOptions={GAMES_SERVICE_OPTIONS().map((option) => option.label)}
          gameGuideOptions={_gamesGuides()}
          destinationOptions={countries}
          //
          dateError={dateError}
        />

        <GamesSort sort={sortBy} onSort={handleSortBy} sortOptions={GAMES_SORT_OPTIONS()} />
      </Stack>
    </Stack>
  );

  const renderResults = (
    <GamesFiltersResult
      filters={filters}
      onResetFilters={handleResetFilters}
      //
      canReset={canReset}
      onFilters={handleFilters}
      //
      results={dataFiltered.length}
    />
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading={t('list')}
        links={[
          { name: t('dashboard'), href: paths.dashboard.root },
          {
            name: t('games'),
            href: paths.dashboard.tour.root,
          },
          { name: t('list') },
        ]}
        action={
          <Button
            component={RouterLink}
            href={paths.dashboard.tour.new}
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
          >
            {t('new_game')}
          </Button>
        }
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <Stack
        spacing={2.5}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        {renderFilters}

        {canReset && renderResults}
      </Stack>

      {notFound && <EmptyContent title={t('no_data')} filled sx={{ py: 10 }} />}

      <GamesList tours={dataFiltered} />
    </Container>
  );
}

// ----------------------------------------------------------------------

const applyFilter = ({
  inputData,
  filters,
  sortBy,
  dateError,
}: {
  inputData: IGameItem[];
  filters: IGameFilters;
  sortBy: string;
  dateError: boolean;
}) => {
  const { services, destination, startDate, endDate, gameGuides } = filters;

  const tourGuideIds = gameGuides.map((tourGuide: any) => tourGuide.id);

  // SORT BY
  if (sortBy === 'latest') {
    inputData = orderBy(inputData, ['createdAt'], ['desc']);
  }

  if (sortBy === 'oldest') {
    inputData = orderBy(inputData, ['createdAt'], ['asc']);
  }

  if (sortBy === 'popular') {
    inputData = orderBy(inputData, ['totalViews'], ['desc']);
  }

  // FILTERS
  if (!dateError) {
    if (startDate && endDate) {
      inputData = inputData.filter(
        (tour) =>
          fTimestamp(tour.available.startDate) >= fTimestamp(startDate) &&
          fTimestamp(tour.available.endDate) <= fTimestamp(endDate)
      );
    }
  }

  if (destination.length) {
    inputData = inputData.filter((tour) => destination.includes(tour.destination));
  }

  if (tourGuideIds.length) {
    inputData = inputData.filter((games) =>
      games.gameGuides.some((filterItem) => tourGuideIds.includes(filterItem.id))
    );
  }

  if (services.length) {
    inputData = inputData.filter((tour) => tour.services.some((item) => services.includes(item)));
  }

  return inputData;
};
