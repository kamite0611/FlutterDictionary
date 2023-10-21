import { ReactNode } from 'react';

import { Stack, styled } from '@mui/material';

import { PostTOC } from './PostTOC';

const StyledWrapper = styled(Stack)(({ theme }) => ({
  padding: '40px 60px',
  maxWidth: '800px',

  '& li': {
    margin: '16px 24px',
  },

  '& code': {
    color: 'red',
    fontSize: '13px',
    backgroundColor: '#f6f6f6',
    border: '1px solid #d2d2d2',
    padding: '3px',
    margin: '0 3px',
    borderRadius: '4px',
  },

  [theme.breakpoints.down('lg')]: {
    padding: '20px 30px',
    maxWidth: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
  },
}));

type PostWrapperProps = {
  children: ReactNode;
};

export const PostWrapper = ({ children }: PostWrapperProps) => {
  return (
    <Stack direction="row">
      <StyledWrapper id="MainContent">{children}</StyledWrapper>
      <PostTOC />
    </Stack>
  );
};
