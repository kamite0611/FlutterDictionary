import Image from 'next/image';

import { Box, Button, Stack } from '@mui/material';

import { useLocale } from '@/common/hooks';
import { CustomLink } from '@/components/parts';

type FooterProps = {};

export const Footer = (props: FooterProps) => {
  const { locale, t } = useLocale();

  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid #E5EAF2',
        textAlign: 'center',
        padding: '40px',
        gap: 1,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CustomLink href="/" locale="en" noStyle>
        <Image
          src={t.common.iconTitleURL}
          alt={''}
          width={locale === 'ja' ? 144 : 154}
          height={33}
          priority
          style={{ objectFit: 'contain' }}
        />
      </CustomLink>
      <Stack direction="row" gap={1}>
        <CustomLink href="/" locale="en" noStyle>
          <Button>English</Button>
        </CustomLink>
        <CustomLink href="/" locale="ja" noStyle>
          <Button>日本語</Button>
        </CustomLink>
      </Stack>

      <Stack sx={{ fontSize: '12px', gap: '3px' }} direction="row">
        {t.common.footer.operation}
      </Stack>
    </Box>
  );
};
