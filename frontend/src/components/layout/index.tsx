import { ReactNode } from 'react';

import { useTransition } from '@/common/hooks';

import { ClientLayout } from './ClientLayout';

export type HeaderMode = 'default' | 'map' | 'none';

type Props = {
  children: ReactNode;
  variant?: 'main' | 'admin' | 'guest';
  HeaderSticky?: boolean;
  headerMode?: HeaderMode;
  footer?: boolean;
  transition?: boolean;
  guard?: 'auth';
};

export function Layout({
  headerMode = 'default',
  footer = true,
  transition = true,
  variant = 'main',
  children,
  guard,
}: Props) {
  useTransition({ disable: !transition });

  if (variant == 'admin') return <>{children}</>;

  return (
    <ClientLayout headerMode={headerMode} footer={footer}>
      {children}
    </ClientLayout>
  );
}
