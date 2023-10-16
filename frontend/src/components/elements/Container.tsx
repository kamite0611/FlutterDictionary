import { ReactNode } from 'react';

import { Stack, StackProps, styled } from '@mui/material';

//----------------------------------------------

type ContainerProps = StackProps & {
  children: ReactNode;
};

const StyledMainContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  paddingLeft: '20px',
  paddingRight: '20px',
  margin: 'auto',
  maxWidth: '1200px',

  /** スマホ以上 */
  [theme.breakpoints.up('sm')]: {
    paddingLeft: '40px',
    paddingRight: '40px',
  },
}));

export const MainContainer = ({ children, ...other }: ContainerProps) => {
  return <StyledMainContainer {...other}>{children}</StyledMainContainer>;
};

//----------------------------------------------

type ItemContainerProps = StackProps & {
  children?: ReactNode;
};

const StyledItemContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: 'white',
  width: '100%',
  overflow: 'hidden',
  /** スマホ以上 */
  [theme.breakpoints.up('md')]: {
    borderRadius: '16px',
  },
}));

export const ItemContainer = ({ children, ...other }: ItemContainerProps) => {
  return <StyledItemContainer {...other}>{children}</StyledItemContainer>;
};
