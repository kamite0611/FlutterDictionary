export type PageConfig = {
  title: string;
  imageUrl?: string;
  url?: string;
};

export type PageDynamicConfig = (params?: any) => PageConfig;

export const HEADER_HEIGHT = 62;

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
    ],
  },
];
