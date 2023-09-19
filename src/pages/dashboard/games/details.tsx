import { Helmet } from 'react-helmet-async';
// routes
import { useParams } from 'src/routes/hooks';
// sections
import { TourDetailsView } from 'src/sections/tour/view';

// ----------------------------------------------------------------------

export default function GamesDetailsPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Analytics</title>
      </Helmet>

      <TourDetailsView id={`${id}`} />
    </>
  );
}
