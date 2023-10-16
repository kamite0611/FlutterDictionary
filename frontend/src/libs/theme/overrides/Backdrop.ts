import { alpha, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function MyBackdrop(theme: Theme) {
  const white = alpha('#5A8FDD', 0.5);
  const main = alpha('#AE9FEA', 0.5);

  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            theme.palette.primary.main,
            `linear-gradient(-60deg, ${main} 0%,  ${white} 100%)`,
          ],
          '&.MuiBackdrop-invisible': {
            background: 'transparent',
          },
        },
      },
    },
  };
}
