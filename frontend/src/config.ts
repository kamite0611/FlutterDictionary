export type PageConfig = {
  title: string;
  description: string;
  keywords: string;
  imageUrl?: string;
  url?: string;
};

export type PageDynamicConfig = (params?: any) => PageConfig;

export const HEADER_HEIGHT = 62;

const ROOT_CONFIG = {
  title: ``,
  description: '',
  keywords: 'HelloChill,チル,シーシャ,水タバコ',
  imageUrl:
    'https://storage.googleapis.com/shishahrprod.appspot.com/public/LogoWithBG.png',
  url: 'https://www.hello-chill.com',
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
    title: 'Components',
    link: '/components',
    items: [
      {
        subTitle: 'INPUTS',
        title: 'Button',
        link: '/components/Button',
      },
    ],
  },
];
