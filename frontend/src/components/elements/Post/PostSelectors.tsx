import { ReactNode } from 'react';

import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import {
  Button,
  Link,
  Stack,
  StackProps,
  SxProps,
  Typography,
  styled,
} from '@mui/material';

import { spaceToDashes } from '@/common/utils';

/**
 * 投稿用のカスタムタイトル
 */
type PostTypographyProps = StackProps & {
  children?: ReactNode;
  variant: 'h2' | 'h3';
};

const StyledTypography = styled(Typography)(({ theme }) => ({
  paddingTop: '100px' /** ScrollMargin */,
  marginTop: '-100px',
  width: 'fit-content',
}));

export const PostTypography = ({
  children,
  variant,
  ...other
}: PostTypographyProps) => {
  const linkId = spaceToDashes(`${children}`);

  return (
    <Stack
      direction="row"
      alignItems="center"
      {...other}
      sx={
        {
          '&:hover': {
            ...other.sx,
            '& a': {
              opacity: 1,
            },
          },
        } as SxProps
      }
    >
      <StyledTypography id={linkId} variant={variant}>
        {children}
      </StyledTypography>
      <Link
        href={`#${linkId}`}
        sx={{ ml: '10px', opacity: 0, transition: '0.2s' }}
      >
        <Button
          sx={{
            minWidth: '20px',
            padding: '5px',
            borderRadius: '10px',
          }}
        >
          <InsertLinkRoundedIcon sx={{ fontSize: '20px' }} />
        </Button>
      </Link>
    </Stack>
  );
};
