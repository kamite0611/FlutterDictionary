import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Box, Collapse, Drawer, Link, Stack } from '@mui/material';

import { BreakpointChanger } from '@/components/functional';
import { LogoWithTitle } from '@/components/parts';
import {
  ConfigWithSubtitle,
  HEADER_HEIGHT,
  NavConfigItem,
  NavConfigWithSubtitle,
} from '@/config';
import { ibmPlex } from '@/libs/theme/overrides/CssBaseline';

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
                minWidth: '300px',
                height: '100%',
              })}
            >
              <LogoWithTitle sx={{ padding: '10px' }} />

              {ConfigWithSubtitle.map((NavConfig, i) => {
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
              height: `calc(100vh - ${HEADER_HEIGHT}px)`,
              overflow: 'scroll',

              [theme.breakpoints.up('lg')]: {
                minWidth: '260px',
              },
            })}
          >
            {ConfigWithSubtitle.map((NavConfig, i) => {
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
  NavConfig: NavConfigWithSubtitle;
  pathname: string;
}) => {
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
        <Stack gap="5px">
          {Object.entries(NavConfig.items).map(([subtitle, items]) => {
            return (
              <Stack
                key={subtitle}
                sx={{
                  position: 'relative',
                  my: '5px',
                }}
              >
                <Stack
                  sx={{
                    fontFamily: ibmPlex.style.fontFamily,
                    color: '#6B7A90',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '5px',
                    paddingLeft: '40px',
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'relative',

                    /** 線 */
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      zIndex: '1',
                      bottom: '0',
                      left: '9.5px',
                      height: '10px',
                      width: '1px',
                      opacity: '1',
                      background: 'rgb(229, 234, 242)',
                    },

                    /** サブタイトルの丸 */
                    '&:after': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      zIndex: '5',
                      left: '6px',
                      height: '8px',
                      width: '8px',
                      borderRadius: '2px',
                      opacity: '1',
                      background: 'rgba(243, 246, 249, 0.5)',
                      border: '1px solid',
                      borderColor: '#DAE2ED',
                    },
                  }}
                >
                  {subtitle}
                </Stack>
                {items.map((NavConfigItem, i) => (
                  <SideMenuItem
                    key={i}
                    item={NavConfigItem}
                    pathname={pathname}
                  />
                ))}
              </Stack>
            );
          })}
        </Stack>
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
        fontSize: '14px',
        borderRadius: '6px',
        cursor: 'pointer',
        padding: '5px',
        paddingLeft: 5,
        position: 'relative',

        letterSpacing: '0.7px',

        color: (theme) =>
          isIncludePath ? `${theme.palette.primary.main}` : 'rgb(67, 77, 91)',
        backgroundColor: (theme) =>
          isIncludePath ? `${theme.palette.primary.main}17` : 'initial',

        fontWeight: isIncludePath ? 'bold' : '500',

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
