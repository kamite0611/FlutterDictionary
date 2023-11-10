import { Typography } from '@mui/material';

import { useLocale } from '@/common/hooks';
import { getConfigByTitle } from '@/common/utils';
import {
  FlutterDemo,
  PostTypography,
  PostWrapper,
} from '@/components/elements';
import { Page } from '@/components/functional';
import {
  WidgetsToggleButtonBasicCode,
  WidgetsToggleButtonBasicPCode,
} from '@/constant/code/Widgets/ToggleButton';

type ToggleButtonPageProps = {};

const { prevConfig, nextConfig } = getConfigByTitle('Toggle Button') || {};

export default function ToggleButtonPage(props: ToggleButtonPageProps) {
  const { t } = useLocale();

  const body = t.WidgetRadio;
  return (
    <Page config={{ title: body.title }}>
      <PostWrapper prevConfig={prevConfig} nextConfig={nextConfig}>
        <Typography variant="h1">Toggle Button</Typography>

        <Typography mt={2} variant="body1">
          ToggleButton
          Widgetは複数の選択肢から一つをユーザーに選択させる時に有効です。
          <br />
          ここではFlutterから提供されているToggleButton
          Widgetの使い方と応用例を解説します。
        </Typography>

        <PostTypography mt={5} variant="h2">
          {body['1_head']}
        </PostTypography>

        <ul>
          <li>ToggleButtons</li>
        </ul>

        <Typography variant="body1">
          Flutterでシンプルなトグルボタンを作成するためには
          <code>ToggleButtons</code>
          が有効です。
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/ToggleButton/Basic"
          height={130}
          parentCode={WidgetsToggleButtonBasicPCode}
          code={WidgetsToggleButtonBasicCode}
        />
      </PostWrapper>
    </Page>
  );
}
