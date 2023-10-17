import { useRouter } from 'next/router';
import { useState } from 'react';

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Collapse, Link, Stack } from '@mui/material';

import { NAV_CONFIG, NavConfig, NavConfigItem } from '@/config';

/**
 * 左メニュー
 */
export const SideMenu = (props: {}) => {
  const { pathname } = useRouter();

  return (
    <Stack
      sx={{
        borderRight: (theme) => `1px solid ${theme.palette.divider}`,
        p: 1,
        minWidth: '220px',
      }}
    >
      {NAV_CONFIG.map((NavConfig, i) => {
        return (
          <SideMenuCategory key={i} NavConfig={NavConfig} pathname={pathname} />
        );
      })}
    </Stack>
  );
};

/**
 * 左メニューカテゴリー Getting Started,Components等
 * @param NavConfig
 * @returns
 */
const SideMenuCategory = ({
  NavConfig,
  pathname,
}: {
  NavConfig: NavConfig;
  pathname: string;
}) => {
  const isIncludePath = pathname.includes(NavConfig.link);

  const [open, setOpen] = useState(isIncludePath);

  /** Components等 カテゴリーがクリックされた時 */
  const handleClickCategory = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Stack
        sx={{
          fontWeight: 700,
          fontSize: '14px',
          padding: '5px',
          margin: '3px 0px',
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
            color: '#2855A3',
            fontSize: '10px',
            transform: open ? 'rotate(90deg)' : '',
          }}
        />
        {NavConfig.title}
      </Stack>
      <Collapse in={open}>
        {NavConfig.items.map((NavConfigItem, i) => {
          return (
            <SideMenuItem key={i} item={NavConfigItem} pathname={pathname} />
          );
        })}
      </Collapse>
    </>
  );
};

/**
 * 左メニューカテゴリー内のLink Button,Card等
 * @param param0
 * @returns
 */
const SideMenuItem = ({
  item,
  pathname,
}: {
  item: NavConfigItem;
  pathname: string;
}) => {
  const isIncludePath = pathname.includes(item.link);

  return (
    <Link
      href={item.link}
      sx={{
        display: 'block',
        fontSize: '13px',
        borderRadius: '6px',
        cursor: 'pointer',
        padding: '5px',
        paddingLeft: 5,
        position: 'relative',

        color: isIncludePath ? '#2855A3' : 'initial',
        backgroundColor: isIncludePath ? '#2855a317' : 'initial',

        fontWeight: isIncludePath ? 'bold' : 'initial',

        '&:hover': {
          backgroundColor: isIncludePath ? '#2855a326' : '#f6f6f6',
        },
        '&:before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          zIndex: '1',
          top: '0',
          left: '9.5px',
          height: '100%',
          width: '1px',
          opacity: '1',
          background: isIncludePath ? '#2855A3' : 'rgb(229, 234, 242)',
        },
      }}
    >
      {item.title}
    </Link>
  );
};
