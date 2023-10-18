import { useState } from 'react';

import { Button, Stack, StackProps, styled } from '@mui/material';

import { PrismCode } from '@/libs/prism';

type FlutterDemoProps = StackProps & {
  height?: number;
  path: string;
  parentCode?: string;
  code: string;
};

const StyledIframe = styled('iframe')(({ theme }) => ({
  pointerEvents: 'none',
  border: 'none',
}));

export const FlutterDemo = (props: FlutterDemoProps) => {
  const { path, height = 200, code, parentCode, ...stackProps } = props;
  const [openAll, setOpenAll] = useState(false);

  const src = `http://localhost:5555/#${path}`;

  /** 「ShowAllCode」押下時 */
  const handleClickOpenAll = () => {
    setOpenAll(true);
  };

  /** 「Expand Code」押下時 */
  const handleClickCloseAll = () => {
    setOpenAll(false);
  };

  return (
    <Stack
      sx={{
        borderRadius: '10px',
        overflow: 'hidden',
        border: (theme) => `1px solid ${theme.palette.divider}`,
        ...stackProps.sx,
      }}
      {...stackProps}
    >
      <StyledIframe src={src} height={height} />
      <Stack>
        <Stack
          sx={{
            padding: '10px',
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          {openAll && (
            <Button
              variant="outlined"
              sx={{
                fontSize: '10px',
                width: '96px',
                textTransform: 'none',
                padding: '2px',
              }}
              onClick={handleClickCloseAll}
            >
              Expand Code
            </Button>
          )}
          {parentCode && !openAll && (
            <Button
              variant="outlined"
              sx={{
                fontSize: '10px',
                width: '96px',
                textTransform: 'none',
                padding: '2px',
              }}
              onClick={handleClickOpenAll}
            >
              Show All Code
            </Button>
          )}
        </Stack>
        {openAll && <PrismCode code={parentCode || ''} />}
        {!openAll && <PrismCode code={code} />}
      </Stack>
    </Stack>
  );
};
