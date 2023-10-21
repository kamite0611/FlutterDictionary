import { useEffect } from 'react';

import tocbot from 'tocbot';

import { styled } from '@mui/material';

type PostTOCProps = {};

const StyledNav = styled('nav')(({ theme }) => ({
  position: 'sticky',
  top: '100px',
  minWidth: '300px',
  maxWidth: '300px',
  height: 'fit-content',
  padding: '16px',

  '& li': {
    listStyleType: 'none',
  },
  '& a': {
    textDecoration: 'none',
    display: 'block',
    padding: '5px',
    fontSize: '13px',
  },
  '& .toc-list-item': {},

  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

export const PostTOC = (props: PostTOCProps) => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '#MainContent',
      headingSelector: 'h2::before, h3::before',
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <>
      <StyledNav className="toc" />
    </>
  );
};
