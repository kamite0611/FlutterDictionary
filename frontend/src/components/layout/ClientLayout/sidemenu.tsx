import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Box, Collapse, Drawer, Link, Stack } from '@mui/material';

import { BreakpointChanger } from '@/components/functional';
import { HEADER_HEIGHT, NAV_CONFIG, NavConfig, NavConfigItem } from '@/config';

/**
 * 左メニュー
 */
export const SideMenu = (props: {
  isSideMenuOpen: boolean;
  onCloseSideMenu: () => void;
}) => {
  const { pathname } = useRouter();

  useEffect(() => {
    props.onCloseSideMenu();
  }, [pathname]);

  return (
    <Box component="nav">
      <BreakpointChanger
        sx={{ height: '100%' }}
        smDown={
          <Drawer open={props.isSideMenuOpen} onClose={props.onCloseSideMenu}>
            <Stack
              sx={(theme) => ({
                p: 1,
                minWidth: '220px',
                height: '100%',
              })}
            >
              {NAV_CONFIG.map((NavConfig, i) => {
                return (
                  <SideMenuCategory
                    key={i}
                    NavConfig={NavConfig}
                    pathname={pathname}
                  />
                );
              })}
            </Stack>
          </Drawer>
        }
        smUp={
          <Stack
            sx={(theme) => ({
              borderRight: (theme) => `1px solid ${theme.palette.divider}`,
              p: 1,
              minWidth: '220px',
              position: 'sticky',
              top: `${HEADER_HEIGHT}px`,
              height: `calc(100dvh - ${HEADER_HEIGHT}px)`,
              overflow: 'scroll',
            })}
          >
            {NAV_CONFIG.map((NavConfig, i) => {
              return (
                <SideMenuCategory
                  key={i}
                  NavConfig={NavConfig}
                  pathname={pathname}
                />
              );
            })}
          </Stack>
        }
      />
    </Box>
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
  // const isIncludePath = pathname.includes(NavConfig.link);

  const [open, setOpen] = useState(true);

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
            backgroundColor: (theme) => `${theme.palette.primary.main}0f`,
          },
        }}
        direction="row"
        alignItems="center"
        gap="10px"
        onClick={handleClickCategory}
      >
        <ArrowForwardIosRoundedIcon
          sx={{
            color: (theme) => theme.palette.primary.main,
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

        color: (theme) =>
          isIncludePath ? `${theme.palette.primary.main}` : 'initial',
        backgroundColor: (theme) =>
          isIncludePath ? `${theme.palette.primary.main}17` : 'initial',

        fontWeight: isIncludePath ? 'bold' : 'initial',

        '&:hover': {
          backgroundColor: (theme) =>
            isIncludePath
              ? `${theme.palette.primary.main}26`
              : `${theme.palette.primary.main}0f`,
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
          background: (theme) =>
            isIncludePath
              ? `${theme.palette.primary.main}`
              : 'rgb(229, 234, 242)',
        },
      }}
    >
      {item.title}
    </Link>
  );
};
