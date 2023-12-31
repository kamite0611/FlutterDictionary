import Link from 'next/link';
import { useState } from 'react';

import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import { Box, Button, Menu, MenuItem, Stack, styled } from '@mui/material';

import { BreakpointChanger } from '@/components/functional';
import { LogoWithTitle } from '@/components/parts';
import { HEADER_HEIGHT } from '@/config';

type ClientLayoutHeaderProps = { onOpenSideMenu: () => void };

const HeaderWrapper = styled(Box)(({ theme }) => ({
  minHeight: `${HEADER_HEIGHT}px`,
  maxHeight: `${HEADER_HEIGHT}px`,
  backgroundColor: 'white',
  maxWidth: '1200px',
  padding: '0 16px',
  display: 'flex',
  alignItems: 'center',
}));

export const ClientLayoutHeader = (props: ClientLayoutHeaderProps) => {
  return (
    <HeaderWrapper component="header">
      <Stack
        direction="row"
        alignItems="center"
        sx={{ flexGrow: 1, gap: '10px' }}
      >
        <BreakpointChanger
          smDown={
            <Button
              variant="outlined"
              onClick={props.onOpenSideMenu}
              sx={{
                padding: '4px',
                minWidth: '0',
                borderRadius: '8px',
                marginRight: '12px',
              }}
            >
              <DragHandleRoundedIcon />
            </Button>
          }
        />
        <LogoWithTitle />
        <TranslateButton />
      </Stack>
    </HeaderWrapper>
  );
};

/**
 * Header翻訳ボタン
 */
const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
}));

export const TranslateButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="translate-button"
        sx={{ gap: '5px', fontSize: '13px' }}
        onClick={handleClickMenu}
      >
        <TranslateRoundedIcon sx={{ fontSize: '20px' }} />
        <Box>Languages</Box>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'translate-button',
        }}
      >
        <StyledLink href="" locale="en">
          <MenuItem
            sx={{ padding: '10px 16px', width: '200px' }}
            onClick={handleClose}
          >
            English
          </MenuItem>
        </StyledLink>
        <StyledLink href="" locale="ja">
          <MenuItem
            sx={{ padding: '10px 16px', width: '200px' }}
            onClick={handleClose}
          >
            日本語
          </MenuItem>
        </StyledLink>
      </Menu>
    </>
  );
};
