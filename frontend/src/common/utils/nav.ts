import { NAV_CONFIG, NavConfigItem } from '@/config';

export const getConfigByTitle = (
  title: string
):
  | {
      currentConfig: NavConfigItem;
      prevConfig?: NavConfigItem;
      nextConfig?: NavConfigItem;
    }
  | undefined => {
  for (let i = 0; i < NAV_CONFIG.length; i++) {
    const Category = NAV_CONFIG[i];

    for (let j = 0; j < Category.items.length; j++) {
      if (Category.items[j].title == title) {
        const currentConfig = Category.items[j];

        const prevConfig = Category.items[j - 1];
        const nextConfig = Category.items[j + 1];

        return { currentConfig, prevConfig, nextConfig };
      }
    }
  }

  return; // タイトルが見つからない場合
};
