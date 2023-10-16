import Head from 'next/head';

import { PageConfig } from '@/config';

type HeadProps = {
  config: PageConfig;
};

export const CustomHead = ({ config }: HeadProps) => {
  const { title, description, keywords, imageUrl, url } = config;

  return (
    <Head>
      {/* タイトル */}
      <title>{title}</title>
      <meta name="twitter:title" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />

      {/* 説明 */}
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />

      {/* その他 */}
      <meta name="keywords" content={keywords} />
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
