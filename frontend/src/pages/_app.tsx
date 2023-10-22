import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import { Layout } from '@/components/layout';
import Providers from '@/components/providers';
import { GAScript } from '@/libs/GoogleAnalytics';
import { createEmotionCache } from '@/libs/theme';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
export interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <CacheProvider value={emotionCache}>
      <GAScript />
      <Providers>{getLayout(<Component {...pageProps} />)}</Providers>
    </CacheProvider>
  );
}
