import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

import { SxProps, styled } from '@mui/material';

export type CustomLinkProps = LinkProps & {
  children?: ReactNode;
  noStyle?: boolean;
  as?: any;
  sx?: SxProps;
  target?: string;
};

const NoStyleLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
}));

const DefaultLink = styled(Link)(({ theme }) => ({}));

export const CustomLink = ({
  children,
  noStyle,
  ...other
}: CustomLinkProps) => {
  if (noStyle) {
    return <NoStyleLink {...other}>{children}</NoStyleLink>;
  }

  return <DefaultLink {...other}>{children}</DefaultLink>;
};
