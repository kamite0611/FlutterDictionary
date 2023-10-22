import { useRef, useState } from 'react';

import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import {
  Button,
  IconButton,
  Stack,
  StackProps,
  Tooltip,
  styled,
} from '@mui/material';

import useCopyToClipboard from '@/common/hooks/useCopyToClipboard';
import { sleep } from '@/common/utils';
import { PrismCode } from '@/libs/prism';

type FlutterDemoProps = StackProps & {
  height?: number;
  path: string;
  parentCode?: string;
  code: string;
};

const StyledIframe = styled('iframe')(({ theme }) => ({
  border: 'none',
}));

export const FlutterDemo = (props: FlutterDemoProps) => {
  const { path, height = 200, code, parentCode, ...stackProps } = props;
  const { copy } = useCopyToClipboard();
  const [openAll, setOpenAll] = useState(false);
  const [copyHelperText, setCopyHelperText] = useState('copy the souce');
  const flutterDemoIframe = useRef<HTMLIFrameElement>(null);

  const src = `http://localhost:5555?path=${path}`;

  /** 「ShowAllCode」押下時 */
  const handleClickOpenAll = () => {
    setOpenAll(true);
  };

  /** 「Expand Code」押下時 */
  const handleClickCloseAll = () => {
    setOpenAll(false);
  };

  /** 「Copy」ボタン押した時 */
  const handleClickCopy = async () => {
    const text = openAll ? parentCode : code;
    if (!text) return;

    copy(text);
    setCopyHelperText('copied!');
    await sleep(1000);
    setCopyHelperText('copy the souce');
  };

  /** 「Reload」ボタン押下時 */
  const handleClickReload = () => {
    if (!flutterDemoIframe.current) return;
    flutterDemoIframe.current.src = flutterDemoIframe.current.src;
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
      <StyledIframe src={src} height={height} ref={flutterDemoIframe} />

      <Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="end"
          sx={{
            gap: '3px',
            padding: '8px 10px',
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          {openAll && (
            <Button
              variant="outlined"
              sx={{
                height: '25px',
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
                height: '25px',
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

          <Tooltip title={copyHelperText}>
            <IconButton
              onClick={handleClickCopy}
              sx={{
                p: 1,
                borderRadius: '8px',
                '&:hover': { backgroundColor: 'rgb(0 0 0 / 5%)' },
              }}
            >
              <ContentCopyRoundedIcon
                sx={{ fontSize: '16px', color: 'black' }}
              />
            </IconButton>
          </Tooltip>

          <Tooltip title="reset demo">
            <IconButton
              onClick={handleClickReload}
              sx={{
                p: 1,
                borderRadius: '8px',
                '&:hover': { backgroundColor: 'rgb(0 0 0 / 5%)' },
              }}
            >
              <ReplayRoundedIcon sx={{ fontSize: '16px', color: 'black' }} />
            </IconButton>
          </Tooltip>
        </Stack>
        {openAll && <PrismCode code={parentCode || ''} />}
        {!openAll && <PrismCode code={code} />}
      </Stack>
    </Stack>
  );
};
