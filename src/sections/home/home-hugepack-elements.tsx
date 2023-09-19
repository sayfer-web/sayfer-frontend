import { useState, useCallback } from 'react';
import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Tab from '@mui/material/Tab';
import Chip from '@mui/material/Chip';
import Tabs from '@mui/material/Tabs';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Alert from '@mui/material/Alert';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import AlertTitle from '@mui/material/AlertTitle';
import AvatarGroup from '@mui/material/AvatarGroup';
import ToggleButton from '@mui/material/ToggleButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// routes
import { paths } from 'src/routes/paths';
// _mock
import { _mock } from 'src/_mock';
// components
import Label from 'src/components/label';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';
import { HomePresent } from './home-present';

// ----------------------------------------------------------------------

export default function HomeHugePackElements() {
  const mdUp = useResponsive('up', 'md');

  const [slider, setSlider] = useState<number>(24);

  const [select, setSelect] = useState('Option 1');

  const [app, setApp] = useState('chat');

  const [rating, setRating] = useState<number | null>(2);

  const [currentTab, setCurrentTab] = useState('Angular');

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  }, []);

  const handleChangeSelect = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSelect(event.target.value);
  }, []);

  const viewAllBtn = (
    <m.div variants={varFade().inUp}>
      <Button
        size="large"
        color="inherit"
        variant="outlined"
        target="_blank"
        rel="noopener"
        href={paths.components}
        endIcon={<Iconify icon="eva:arrow-ios-forward-fill" width={18} sx={{ ml: -0.5 }} />}
      >
        View All Components
      </Button>
    </m.div>
  );

  const renderDescription = (
    <Stack
      sx={{
        textAlign: { xs: 'center', md: 'unset' },
        pl: { md: 5 },
        pt: { md: 15 },
      }}
    >
      <m.div variants={varFade().inUp}>
        <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
          Interface Starter Kit
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ my: 3 }}>
          Huge pack <br />
          of elements
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography
          sx={{
            mb: 5,
            color: 'text.secondary',
          }}
        >
          We collected most popular elements. Menu, sliders, buttons, inputs etc. are all here. Just
          dive in!
        </Typography>
      </m.div>

      {mdUp && viewAllBtn}
    </Stack>
  );

  const renderContent = (
    <Stack
      component={Paper}
      variant="outlined"
      alignItems="center"
      spacing={{ xs: 3, md: 5 }}
      sx={{
        borderRadius: 2,
        bgcolor: 'unset',
        borderStyle: 'dashed',
        p: { xs: 3, md: 5 },
        position: 'relative'
      }}
    >
      
      {/* <HomePresent /> */}
      test
    </Stack>
  );

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Grid container direction={{ xs: 'column', md: 'row-reverse' }} spacing={5}>
        <Grid xs={12} md={5}>
          {renderDescription}
        </Grid>

        <Grid xs={12} md={7}>
          {renderContent}
        </Grid>

        {!mdUp && (
          <Grid xs={12} sx={{ textAlign: 'center' }}>
            {viewAllBtn}
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
