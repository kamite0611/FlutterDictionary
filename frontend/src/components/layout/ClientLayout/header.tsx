import Image from 'next/image';

import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import { Box, Button, Link, Stack, styled } from '@mui/material';

import { BreakpointChanger } from '@/components/functional';
import { HEADER_HEIGHT } from '@/config';

type ClientLayoutHeaderProps = { onOpenSideMenu: () => void };

const HeaderWrapper = styled(Box)(({ theme }) => ({
  minHeight: `${HEADER_HEIGHT}px`,
  maxHeight: `${HEADER_HEIGHT}px`,
  backgroundColor: 'white',
}));

export const ClientLayoutHeader = (props: ClientLayoutHeaderProps) => {
  return (
    <HeaderWrapper component="header">
      <Stack
        direction="row"
        alignItems="center"
        sx={{ flexGrow: 1, padding: '16px' }}
      >
        <BreakpointChanger
          smDown={
            <Button
              variant="outlined"
              onClick={props.onOpenSideMenu}
              sx={{
                padding: '4px',
                minWidth: '0',
                borderRadius: '8px',
                marginRight: '12px',
              }}
            >
              <DragHandleRoundedIcon />
            </Button>
          }
        />
        <Link href="/">
          <Image
            src="/images/Title.png"
            alt={''}
            width={140}
            height={33}
            priority
            style={{ objectFit: 'contain' }}
          />
        </Link>
      </Stack>
    </HeaderWrapper>
  );
};
