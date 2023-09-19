import { Helmet } from 'react-helmet-async';
// sections
import { TourCreateView } from 'src/sections/tour/view';

// ----------------------------------------------------------------------

export default function GamesCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Add a new game</title>
      </Helmet>

      <TourCreateView />
    </>
  );
}
