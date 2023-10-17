import { IframeHTMLAttributes } from 'react';

import { styled } from '@mui/material';

type FlutterDemoProps = IframeHTMLAttributes<any> & {
  path: string;
};

const StyledIframe = styled('iframe')(({ theme }) => ({
  border: 'none',
}));

export const FlutterDemo = (props: FlutterDemoProps) => {
  const { path, ...otherProps } = props;

  const src = `http://localhost:5555/#${path}`;
  return (
    <>
      <StyledIframe src={src} {...otherProps} />
    </>
  );
};
