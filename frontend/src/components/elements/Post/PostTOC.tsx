import { useEffect } from 'react';

import tocbot from 'tocbot';

import { Box, Stack, styled } from '@mui/material';

import { useLocale } from '@/common/hooks';
import { HEADER_HEIGHT } from '@/config';

type PostTOCProps = {};

const StyledWrapper = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: `${HEADER_HEIGHT + 40}px`,
  minWidth: '300px',
  maxWidth: '300px',
  height: 'fit-content',
  padding: '0 16px',

  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

const StyledNav = styled(Stack)(({ theme }) => ({
  '& li': {
    listStyleType: 'none',
  },
  '& a': {
    textDecoration: 'none',
    display: 'block',
    padding: '5px 0',
    fontSize: '13px',
    color: 'black',
  },
  '& .toc-list-item': {},
  '& .is-active-link': {
    fontWeight: 'bold',
  },
}));

export const PostTOC = (props: PostTOCProps) => {
  const { locale } = useLocale();
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '#MainContent',
      headingSelector: 'h2, h3',
      scrollSmooth: false,
      scrollSmoothDuration: 0,
    });

    return () => tocbot.destroy();
  }, [locale]);

  return (
    <StyledWrapper component="nav">
      <Stack sx={{ color: 'gray', marginBottom: '8px', fontSize: '10px' }}>
        CONTENTS
      </Stack>
      <StyledNav className="toc" />
    </StyledWrapper>
  );
};
