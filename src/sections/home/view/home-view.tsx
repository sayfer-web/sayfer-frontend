import { useRef, useEffect } from "react"
import { useScroll } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import HomeHero from '../home-hero';
import HomeMinimal from '../home-minimal';
import HomePricing from '../home-pricing';
import HomeDarkMode from '../home-dark-mode';
import HomeLookingFor from '../home-looking-for';
import HomeForDesigner from '../home-for-designer';
import HomeColorPresets from '../home-color-presets';
import HomeAdvertisement from '../home-advertisement';
import HomeCleanInterfaces from '../home-clean-interfaces';
import HomeHugePackElements from '../home-hugepack-elements';
import { HomeAdvantages } from '../home-advantages';
import { HomePresent } from '../home-present';
import { HomeCallback } from '../home-callback';
import HomeBuildings from '../home-building';
import { HomeNews } from '../home-news';

// ----------------------------------------------------------------------

type StyledPolygonProps = {
  anchor?: 'top' | 'bottom';
};



/* @ts-ignore */
const StyledPolygon = styled('div')<StyledPolygonProps>(({ anchor = 'top', theme }) => ({
  left: 0,
  zIndex: 9,
  height: 80,
  width: '100%',
  position: 'absolute',
  clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
  backgroundColor: theme.palette.background.default,
  display: 'block',
  lineHeight: 0,
  ...(anchor === 'top' && {
    top: -1,
    transform: 'scale(-1, -1)',
  }),
  ...(anchor === 'bottom' && {
    bottom: -1,
    backgroundColor: theme.palette.grey[900],
  }),
}));

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  const scrollCallbackRef = useRef(null)

  /* @ts-ignore*/
  const executeScroll = () => scrollCallbackRef?.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          // bgcolor: 'background.default',
          bgcolor: '#002102',
        }}
      >

        {/* <button onClick={executeScroll}>Click</button> */}

        {/* <HomeAdvantages /> */}

        {/* <HomePresent /> */}

        <HomeHugePackElements onScroll={executeScroll} />

        <Box sx={{ position: 'relative' }}>
          {/* <StyledPolygon style={{ zIndex: 2 }} /> */}
          <HomeForDesigner onScroll={executeScroll} />
          {/* <StyledPolygon anchor="bottom" /> */}
        </Box>

        <HomeBuildings onScroll={executeScroll} />

        {/* <HomePricing /> */}

        <HomeNews />

        {/* <HomeDarkMode /> */}

        {/* <HomeColorPresets /> */}

        {/* <HomeCleanInterfaces /> */}

        {/* <HomePricing /> */}

        <Box sx={{}}>
          <div ref={scrollCallbackRef} >
            <HomeCallback />
          </div>
        </Box>

        {/* <HomeLookingFor /> */}

        {/* <HomeAdvertisement /> */}
      </Box>
    </>
  );
}
