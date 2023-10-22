import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

import { StyledComponentProps, styled } from '@mui/material';

type NoStyleProps = StyledComponentProps &
  LinkProps & {
    children: ReactNode;
    noStyle?: boolean;
    as?: any;
  };

const NoStyleLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
}));

const DefaultLink = styled(Link)(({ theme }) => ({}));

export const CustomLink = ({ children, noStyle, ...other }: NoStyleProps) => {
  if (noStyle) {
    return <NoStyleLink {...other}>{children}</NoStyleLink>;
  }

  return <DefaultLink {...other}>{children}</DefaultLink>;
};
