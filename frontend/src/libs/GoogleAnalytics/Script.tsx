import Script from 'next/script';

import { GA_ID } from '.';

type GAScriptProps = {};

export const GAScript = (props: GAScriptProps) => {
  if (!GA_ID) return <></>;
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
 
           gtag('config', '${GA_ID}');
           `,
        }}
      />
    </>
  );
};
