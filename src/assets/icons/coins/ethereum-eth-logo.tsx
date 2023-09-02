import { memo } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

function CheckInIllustration({ ...other }: BoxProps) {
  const theme = useTheme();

  const PRIMARY_LIGHTER = theme.palette.primary.lighter;

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  const PRIMARY_DARKER = theme.palette.primary.darker;

  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <g fillRule="nonzero">
      <path
        fill="#343434"
        d="m392.07 0-8.57 29.11v844.63l8.57 8.55 392.06-231.75z"
      />
      <path fill="#8C8C8C" d="M392.07 0 0 650.54l392.07 231.75V472.33z" />
      <path
        fill="#3C3C3B"
        d="m392.07 956.52-4.83 5.89v300.87l4.83 14.1 392.3-552.49z"
      />
      <path fill="#8C8C8C" d="M392.07 1277.38V956.52L0 724.89z" />
      <path fill="#141414" d="m392.07 882.29 392.06-231.75-392.06-178.21z" />
      <path fill="#393939" d="m0 650.54 392.07 231.75V472.33z" />
    </g>

      <defs>
        <linearGradient
          id="a"
          x1="64.751"
          x2="64.751"
          y1="99.643"
          y2="186.617"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={PRIMARY_LIGHT} />
          <stop offset="1" stopColor={PRIMARY_DARK} />
        </linearGradient>

        <linearGradient
          id="b"
          x1="95.286"
          x2="95.286"
          y1="280.421"
          y2="185.693"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={PRIMARY_LIGHT} />
          <stop offset="1" stopColor={PRIMARY_DARK} />
        </linearGradient>
      </defs>
    </Box>
  );
}