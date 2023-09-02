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
         <path
      d="M1248 0c689.3 0 1248 558.7 1248 1248s-558.7 1248-1248 1248S0 1937.3 0 1248 558.7 0 1248 0z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#f0b90b",
      }}
    />
    <path
      d="m685.9 1248 .9 330 280.4 165v193.2l-444.5-260.7v-524l163.2 96.5zm0-330v192.3l-163.3-96.6V821.4l163.3-96.6L850 821.4 685.9 918zm398.4-96.6 163.3-96.6 164.1 96.6-164.1 96.6-163.3-96.6z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M803.9 1509.6v-193.2l163.3 96.6v192.3l-163.3-95.7zm280.4 302.6 163.3 96.6 164.1-96.6v192.3l-164.1 96.6-163.3-96.6v-192.3zm561.6-990.8 163.3-96.6 164.1 96.6v192.3l-164.1 96.6V918l-163.3-96.6zm163.3 756.6.9-330 163.3-96.6v524l-444.5 260.7v-193.2l280.3-164.9z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="m1692.1 1509.6-163.3 95.7V1413l163.3-96.6v193.2z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="m1692.1 986.4.9 193.2-281.2 165v330.8l-163.3 95.7-163.3-95.7v-330.8l-281.2-165V986.4l164-96.6 279.5 165.8 281.2-165.8 164.1 96.6h-.7zM803.9 656.5l443.7-261.6 444.5 261.6-163.3 96.6-281.2-165.8-280.4 165.8-163.3-96.6z"
      style={{
        fill: "#fff",
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