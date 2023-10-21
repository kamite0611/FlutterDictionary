import Image from 'next/image';

import { Stack, Typography } from '@mui/material';

import { Page } from '@/components/functional';

export default function Home() {
  return (
    <Page
      config={{
        title: 'Flutter図鑑 - 触って理解するFlutterサンプル集',
      }}
    >
      <Stack sx={{ padding: '60px' }}>
        <Stack direction="row" alignItems="center">
          <Stack>
            <Typography variant="h1">Flutterをもっとシンプルに。</Typography>
            <Typography variant="body1">
              Flutter図鑑は
              Flutterから提供されているWidgetサンプルが集まった情報メディアです。
            </Typography>
          </Stack>
          <Image
            src="/images/lp/undraw_mobile_content_xvgr.png"
            alt=""
            width={500}
            height={422}
            style={{ objectFit: 'contain' }}
          />
        </Stack>
        <Stack>
          Flutter図鑑はFlutterから提供されているWidgetサンプルが集まったメディアです。
        </Stack>
        <Stack>Widget一覧</Stack>
        <Stack>Button</Stack>
      </Stack>
    </Page>
  );
}
