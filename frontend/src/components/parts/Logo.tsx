import Image from 'next/image';

import { styled } from '@mui/material';

import { useLocale } from '@/common/hooks';

import { CustomLink, CustomLinkProps } from './CustomLink';

type LogoWithTitleProps = Omit<CustomLinkProps, 'href'>;

const StyledImage = styled(Image)(({ theme }) => ({}));

export const LogoWithTitle = ({ ...other }: LogoWithTitleProps) => {
  const { locale, t } = useLocale();
  const iconTitleURL = t.common.iconTitleURL;

  return (
    <CustomLink href="/" {...other}>
      <StyledImage
        src={iconTitleURL}
        alt={t.common.title}
        width={locale === 'ja' ? 144 : 154}
        height={33}
        priority
        style={{ objectFit: 'contain' }}
      />
    </CustomLink>
  );
};
