import { useState } from 'react';

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Collapse, Link, Stack } from '@mui/material';

type SideMenuProps = {};

export const SideMenu = (props: SideMenuProps) => {
  const [open, setOpen] = useState(false);

  /** Components等 カテゴリーがクリックされた時 */
  const handleClickCategory = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Stack
      sx={{
        borderRight: (theme) => `1px solid ${theme.palette.divider}`,
        p: 1,
        minWidth: '200px',
      }}
    >
      <Stack
        sx={{
          fontWeight: 700,
          fontSize: '14px',
          padding: '5px',
          borderRadius: '6px',
          cursor: 'pointer',

          '&:hover': {
            backgroundColor: '#f6f6f6',
          },
        }}
        direction="row"
        alignItems="center"
        gap="10px"
        onClick={handleClickCategory}
      >
        <ArrowForwardIosRoundedIcon
          sx={{
            fontSize: '10px',
            transform: open ? 'rotate(90deg)' : '',
          }}
        />
        Components
      </Stack>
      <Collapse in={open}>
        <Link
          href="/"
          sx={{
            display: 'block',
            fontSize: '13px',
            borderRadius: '6px',
            cursor: 'pointer',
            padding: '5px',
            paddingLeft: 5,

            '&:hover': {
              backgroundColor: '#f6f6f6',
            },
          }}
        >
          Button
        </Link>
      </Collapse>
    </Stack>
  );
};
