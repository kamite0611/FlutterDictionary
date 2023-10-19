import { Highlight, themes } from 'prism-react-renderer';

import { Box, styled } from '@mui/material';

type PrismProps = {
  code: string;
  language?: string;
};

const CustomCodeBox = styled(Box)(({ theme }) => ({
  padding: '16px',
  backgroundColor: '#1E1E1E',
  fontWeight: 600,
  letterSpacing: '0.5px',
  fontSize: '11px',
  '& .maybe-class-name': {
    color: 'rgb(78, 201, 176)',
  },
  maxHeight: '500px',
  overflow: 'scroll',
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
