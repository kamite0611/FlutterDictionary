export type PageConfig = {
  title: string;
  imageUrl?: string;
  url?: string;
};

export type PageDynamicConfig = (params?: any) => PageConfig;

export const HEADER_HEIGHT = 62;

const ROOT_CONFIG = {
  title: 'Flutter図鑑 - 触って理解するWidgetサンプル集',
  imageUrl:
    'https://storage.googleapis.com/shishahrprod.appspot.com/public/LogoWithBG.png',
};

export const PAGE_CONFIG: Record<string, PageDynamicConfig> = {
  root: () => ROOT_CONFIG,
};

export type NavConfigItem = {
  subTitle?: string;
  title: string;
  link: string;
};

export type NavConfig = {
  title: string;
  link: string;
  items: NavConfigItem[];
};

export const NAV_CONFIG: NavConfig[] = [
  {
    title: 'Widgets',
    link: '/widgets',
    items: [
      {
        subTitle: 'INPUTS',
        title: 'Button',
        link: '/widgets/Button',
      },
      {
        subTitle: 'INPUTS',
        title: 'Modal',
        link: '/widgets/Modal',
      },
    ],
  },
];
