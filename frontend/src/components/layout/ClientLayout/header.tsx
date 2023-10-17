import Image from 'next/image';

import { Link, Stack, styled } from '@mui/material';

import { HEADER_HEIGHT } from '@/config';

type ClientLayoutHeaderProps = {};

const HeaderWrapper = styled(Stack)(({ theme }) => ({
  minHeight: `${HEADER_HEIGHT}px`,
  maxHeight: `${HEADER_HEIGHT}px`,
  backgroundColor: 'white',
}));

export const ClientLayoutHeader = (props: ClientLayoutHeaderProps) => {
  return (
    <HeaderWrapper>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ flexGrow: 1, padding: '16px' }}
      >
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
