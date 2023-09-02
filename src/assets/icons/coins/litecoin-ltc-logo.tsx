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
              <title>{"litecoin-ltc-logo"}</title>
        <circle
            cx={41.3}
            cy={41.3}
            r={36.83}
            style={{
                fill: "#fff",
            }}
        />
        <path
            d="M41.3 0a41.3 41.3 0 1 0 41.3 41.3A41.18 41.18 0 0 0 41.54 0Zm.7 42.7-4.3 14.5h23a1.16 1.16 0 0 1 1.2 1.12v.38l-2 6.9a1.49 1.49 0 0 1-1.5 1.1H23.2l5.9-20.1-6.6 2L24 44l6.6-2 8.3-28.2a1.51 1.51 0 0 1 1.5-1.1h8.9a1.16 1.16 0 0 1 1.2 1.12v.38l-7 23.8 6.6-2-1.4 4.8Z"
            style={{
                fill: "#345d9d",
            }}
        />

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