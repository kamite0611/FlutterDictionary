import {
  HighlightAltRounded,
  SmartButtonRounded,
  SvgIconComponent,
  TextFormatRounded,
  ToggleOnRounded,
} from '@mui/icons-material';

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
  icon?: SvgIconComponent;
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
        icon: SmartButtonRounded,
      },
      {
        subTitle: 'INPUTS',
        title: 'TextField',
        link: '/widgets/TextField',
        icon: TextFormatRounded,
      },
      {
        subTitle: 'INPUTS',
        title: 'Select',
        link: '/widgets/Select',
        icon: HighlightAltRounded,
      },
      {
        subTitle: 'INPUTS',
        title: 'Switch',
        link: '/widgets/Switch',
        icon: ToggleOnRounded,
      },
    ],
  },
];
