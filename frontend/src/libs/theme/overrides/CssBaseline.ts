import { Noto_Sans_JP } from 'next/font/google';

import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

/**
 * ローカルでFontが読み込めない場合がある
 * sudo rm -rf .next
 * の後、Wi-Fi接続を再起動し直ることがある
 */
const sans = Noto_Sans_JP({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const generateFontFamily = () => {
  const fonts = [sans];
  const fontFamilies = fonts.map((f) => f.style.fontFamily);

  return fontFamilies.join(', ') + ', sans-serif';
};

export default function MyCssBaseline(theme: Theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        html: {
          fontFamily: generateFontFamily(),
          margin: 0,
          padding: 0,
          width: '100%',
          height: 'auto',
        },
        body: {
          width: '100%',
          height: '100%',
        },
        '#__next': {
          width: '100%',
          height: '100%',
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },
        img: {
          display: 'block',
          maxWidth: '100%',
        },
        ul: {
          margin: 0,
          padding: 0,
        },
      },
    },
  };
}
