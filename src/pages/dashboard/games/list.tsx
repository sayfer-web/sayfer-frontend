import { Helmet } from 'react-helmet-async';
import GamesListView from 'src/sections/games/view/tour-list-view';
// sections
import { TourListView } from 'src/sections/tour/view';

// ----------------------------------------------------------------------

export default function GamesListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Games List</title>
      </Helmet>

      <GamesListView />
    </>
  );
}
