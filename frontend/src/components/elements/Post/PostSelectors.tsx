import { ReactNode } from 'react';

import { Typography, TypographyProps } from '@mui/material';

/**
 * 投稿用のカスタムタイトル
 */
type PostTypographyProps = TypographyProps & {
  children: ReactNode;
};

export const PostTypography = ({ children, ...other }: PostTypographyProps) => {
  return (
    <Typography id={`${children}`} variant="h2" {...other}>
      {children}
    </Typography>
  );
};
