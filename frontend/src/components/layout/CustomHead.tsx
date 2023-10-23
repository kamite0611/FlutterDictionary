import Head from 'next/head';

import { useLocale } from '@/common/hooks';
import { PageConfig } from '@/config';

type HeadProps = {
  config: PageConfig;
};

export const CustomHead = ({ config }: HeadProps) => {
  const { t } = useLocale();
  const { title, imageUrl = t.common.ogImageURL, url } = config;

  return (
    <Head>
      {/* タイトル */}
      <title>{title}</title>
      <meta name="twitter:title" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />

      {/* 説明 */}

      {/* その他 */}
      <meta property="og:type" content="website" />

      {/* 画像 */}
      {imageUrl && (
        <>
          <meta property="twitter:image" content={imageUrl} />
          <meta property="og:image" content={imageUrl} />
        </>
      )}

      {/* URL */}
      {url && (
        <>
          <meta property="og:url" content={url} />
        </>
      )}

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
      />
    </Head>
  );
};
