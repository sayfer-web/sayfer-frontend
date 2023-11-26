import { Helmet } from 'react-helmet-async';
// sections
import ComingSoonView from 'src/sections/coming-soon/view';

// ----------------------------------------------------------------------

type Props = {
  date: string
}

export default function ComingSoonPage({ date }: Props) {
  return (
    <>
      <Helmet>
        <title> Coming Soon</title>
      </Helmet>

      <ComingSoonView date={date} />
    </>
  );
}
