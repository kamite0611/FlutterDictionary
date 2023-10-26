import { ReactNode, useState } from 'react';

import { Box, Divider, Stack } from '@mui/material';

import { HEADER_HEIGHT } from '@/config';

import { Footer } from './footer';
import { ClientLayoutHeader } from './header';
import { SideMenu } from './sidemenu';

type ClientLayoutProps = {
  children: ReactNode;
  headerMode: 'default' | 'map' | 'none';
  footer: boolean;
  guard?: 'auth';
};

export const ClientLayout = (props: ClientLayoutProps) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const { headerMode, children } = props;

  const handleOpenSideMenu = () => {
    setOpenSideMenu(true);
  };

  const handleCloseSideMenu = () => {
    setOpenSideMenu(false);
  };

  return (
    <Stack sx={{ height: '100%', minHeight: '100dvh' }}>
      {headerMode === 'default' && (
        <Stack sx={{ position: 'sticky', top: 0, zIndex: 100 }}>
          <ClientLayoutHeader onOpenSideMenu={handleOpenSideMenu} />
          <Divider />
        </Stack>
      )}

      <Stack
        direction="row"
        sx={{ flexGrow: 1, minHeight: `calc(100dvh - ${HEADER_HEIGHT}px)` }}
      >
        <SideMenu
          isSideMenuOpen={openSideMenu}
          onCloseSideMenu={handleCloseSideMenu}
        />
        <Stack
          sx={(theme) => ({
            flexGrow: 1,
            width: '100%',
            [theme.breakpoints.down('md')]: {
              overflow: 'hidden',
            },
          })}
        >
          <Box
            component="main"
            sx={(theme) => ({
              flexGrow: '1',
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
            })}
          >
            {children}
          </Box>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};
