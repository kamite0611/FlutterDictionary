import { ReactNode } from 'react';

import { Box, BoxProps, styled } from '@mui/material';

type BreakpointChangerProps = BoxProps & {
  smDown?: ReactNode;
  smUp?: ReactNode;
  smOnly?: ReactNode;
  mdDown?: ReactNode;
  mdUp?: ReactNode;
  mdOnly?: ReactNode;
  lgDown?: ReactNode;
  lgUp?: ReactNode;
  lgOnly?: ReactNode;
};

const Wrapper = styled(Box)(({ theme }) => ({
  '&.Changer': {
    '&_smDown': {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    '&_smUp': {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    '&_smOnly': {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    '&_mdDown': {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    '&_mdUp': {
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    '&_mdOnly': {
      display: 'none',
      [theme.breakpoints.only('md')]: {
        display: 'initial',
      },
    },
    '&_lgDown': {
      [theme.breakpoints.up('lg')]: {
        display: 'none',
      },
    },
    '&_lgUp': {
      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
    },
    '&_lgOnly': {
      display: 'none',
      [theme.breakpoints.only('lg')]: {
        display: 'initial',
      },
    },
  },
}));

export const BreakpointChanger = ({
  smDown,
  smUp,
  smOnly,
  mdDown,
  mdUp,
  mdOnly,
  lgDown,
  lgUp,
  lgOnly,
  ...other
}: BreakpointChangerProps) => {
  return (
    <>
      {smDown && (
        <Wrapper {...other} className="Changer_smDown">
          {smDown}
        </Wrapper>
      )}
      {smUp && (
        <Wrapper {...other} className="Changer_smUp">
          {smUp}
        </Wrapper>
      )}
      {smOnly && (
        <Wrapper {...other} className="Changer_smOnly">
          {smOnly}
        </Wrapper>
      )}
      {mdDown && (
        <Wrapper {...other} className="Changer_mdDown">
          {mdDown}
        </Wrapper>
      )}
      {mdUp && (
        <Wrapper {...other} className="Changer_mdUp">
          {mdUp}
        </Wrapper>
      )}
      {mdOnly && (
        <Wrapper {...other} className="Changer_mdOnly">
          {mdOnly}
        </Wrapper>
      )}
      {lgDown && (
        <Wrapper {...other} className="Changer_lgDown">
          {lgDown}
        </Wrapper>
      )}
      {lgUp && (
        <Wrapper {...other} className="Changer_lgUp">
          {lgUp}
        </Wrapper>
      )}
      {lgOnly && (
        <Wrapper {...other} className="Changer_lgOnly">
          {lgOnly}
        </Wrapper>
      )}
    </>
  );
};
