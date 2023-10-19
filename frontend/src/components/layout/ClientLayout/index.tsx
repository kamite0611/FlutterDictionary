import { ReactNode, useState } from 'react';

import { Box, Divider, Stack } from '@mui/material';

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

      <Stack direction="row" sx={{ flexGrow: 1 }}>
        <SideMenu
          isSideMenuOpen={openSideMenu}
          onCloseSideMenu={handleCloseSideMenu}
        />
        <Box
          component="main"
          sx={{
            flexGrow: '1',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {children}
        </Box>
      </Stack>
    </Stack>
  );
};
