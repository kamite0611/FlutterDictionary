import { useEffect } from 'react';

import tocbot from 'tocbot';

type PostTOCProps = {};

export const PostTOC = (props: PostTOCProps) => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '#MainContent',
      headingSelector: 'h2, h3',
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <>
      <nav className="toc" />
    </>
  );
};
