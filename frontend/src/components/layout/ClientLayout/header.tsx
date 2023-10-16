import Image from 'next/image';

import { Link, Stack, styled } from '@mui/material';

import { MainContainer } from '@/components/elements';
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
      <MainContainer
        direction="row"
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '100%',
        }}
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
      </MainContainer>
    </HeaderWrapper>
  );
};
