import Link from 'next/link';
import { ReactNode, useEffect } from 'react';

import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Box, Button, Divider, Stack, styled } from '@mui/material';

import { NavConfigItem } from '@/config';

import { PostTOC } from './PostTOC';

const StyledWrapper = styled(Stack)(({ theme }) => ({
  padding: '40px 60px',
  maxWidth: '900px',
  width: '100%',

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
    padding: '36px 16px',
  },
}));

type PostWrapperProps = {
  children?: ReactNode;
  prevConfig?: NavConfigItem;
  nextConfig?: NavConfigItem;
};

export const PostWrapper = ({
  children,
  prevConfig,
  nextConfig,
}: PostWrapperProps) => {
  useEffect(() => {
    const urlHash = window.location.hash;
    const urlID = decodeURI(urlHash);
    if (!urlID) return;
    const targetEl = window.document?.querySelector(urlID);
    if (!targetEl) return;

    window.scrollTo(targetEl.getBoundingClientRect());
  }, []);

  return (
    <Stack direction="row">
      <StyledWrapper id="MainContent" className="no-smooth-scroll">
        {children}

        {(prevConfig || nextConfig) && (
          <>
            <Divider sx={{ mt: 3 }} />

            <Stack direction="row" py={3} justifyContent="space-between">
              <Stack>
                {prevConfig && (
                  <>
                    <Box
                      sx={{
                        fontSize: '13px',
                        marginBottom: '6px',
                        color: '#6d6d6d',
                      }}
                    >
                      Previous
                    </Box>
                    <Link href={prevConfig.link}>
                      <Button
                        variant="outlined"
                        sx={{ borderRadius: '10px' }}
                        startIcon={<NavigateBefore />}
                      >
                        {prevConfig.title}
                      </Button>
                    </Link>
                  </>
                )}
              </Stack>
              <Stack sx={{ textAlign: 'end' }}>
                {nextConfig && (
                  <>
                    <Box
                      sx={{
                        fontSize: '13px',
                        marginBottom: '6px',
                        color: '#6d6d6d',
                      }}
                    >
                      Next
                    </Box>
                    <Link href={nextConfig.link}>
                      <Button
                        variant="outlined"
                        sx={{ borderRadius: '10px' }}
                        endIcon={<NavigateNext />}
                      >
                        {nextConfig.title}
                      </Button>
                    </Link>
                  </>
                )}
              </Stack>
            </Stack>
          </>
        )}
      </StyledWrapper>
      <PostTOC />
    </Stack>
  );
};
