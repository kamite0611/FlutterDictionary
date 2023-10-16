import { ReactNode } from 'react';

import { Divider, Stack } from '@mui/material';

import { ClientLayoutHeader } from './header';

type ClientLayoutProps = {
  children: ReactNode;
  headerMode: 'default' | 'map' | 'none';
  footer: boolean;
  guard?: 'auth';
};

export const ClientLayout = (props: ClientLayoutProps) => {
  const { headerMode, children } = props;
  return (
    <Stack sx={{ height: '100%', minHeight: '100dvh' }}>
      {headerMode === 'default' && <ClientLayoutHeader />}

      <Divider />
      <Stack sx={{ flexGrow: 1 }}>{children}</Stack>
    </Stack>
  );
};
