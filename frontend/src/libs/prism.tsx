import { Highlight, themes } from 'prism-react-renderer';

import { Box, styled } from '@mui/material';

import { robotoMono } from './theme/overrides/CssBaseline';

type PrismProps = {
  code: string;
  language?: string;
};

const CustomCodeBox = styled(Box)(({ theme }) => ({
  padding: '16px',
  backgroundColor: '#1E1E1E',
  fontWeight: 600,

  '& .maybe-class-name': {
    color: 'rgb(78, 201, 176)',
  },
  maxHeight: '500px',
  overflow: 'scroll',

  '& pre': {
    fontSize: '13px',
    letterSpacing: 0,
    fontFamily: robotoMono.style.fontFamily,
  },
}));

export const PrismCode = ({ code, language = 'tsx' }: PrismProps) => {
  return (
    <CustomCodeBox>
      <Highlight theme={themes.vsDark} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </CustomCodeBox>
  );
};
