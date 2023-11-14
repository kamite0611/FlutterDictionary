import {
  Brightness4Rounded,
  CheckBoxRounded,
  HighlightAltRounded,
  LayersRounded,
  LinearScale,
  LiveHelpRounded,
  RadioButtonChecked,
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
      /////////////////////////////////////
      /** INPUT */
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
      {
        subTitle: 'INPUTS',
        title: 'Checkbox',
        link: '/widgets/Checkbox',
        icon: CheckBoxRounded,
      },
      {
        subTitle: 'INPUTS',
        title: 'Slider',
        link: '/widgets/Slider',
        icon: LinearScale,
      },
      {
        subTitle: 'INPUTS',
        title: 'Radio',
        link: '/widgets/Radio',
        icon: RadioButtonChecked,
      },
      {
        subTitle: 'INPUTS',
        title: 'Toggle Button',
        link: '/widgets/ToggleButton',
        icon: Brightness4Rounded,
      },

      /////////////////////////////////////
      /** Utils */
      {
        subTitle: 'UTILS',
        title: 'Dialog',
        link: '/widgets/Dialog',
        icon: LayersRounded,
      },
      {
        subTitle: 'UTILS',
        title: 'Tooltip',
        link: '/widgets/Tooltip',
        icon: LiveHelpRounded,
      },
    ],
  },
];

export type NavConfigWithSubtitle = {
  title: string;
  link: string;
  items: Record<string, NavConfigItem[]>;
};

export const ConfigWithSubtitle: NavConfigWithSubtitle[] = NAV_CONFIG.map(
  (navConfig) => {
    const subTItles: Record<string, NavConfigItem[]> = {};
    navConfig.items.map((item) => {
      const subTitle = item.subTitle || '';
      const currentSubtitle = subTItles[subTitle];

      if (!currentSubtitle) {
        subTItles[subTitle] = [item];
      }

      if (currentSubtitle) {
        subTItles[subTitle] = [...subTItles[subTitle], item];
      }
    });
    return {
      ...navConfig,
      items: subTItles,
    };
  }
);
