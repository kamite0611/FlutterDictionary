import { Typography } from '@mui/material';

import {
  FlutterDemo,
  PostTypography,
  PostWrapper,
} from '@/components/elements';
import { Page } from '@/components/functional';
import {
  WidgetsSelectBasicCode,
  WidgetsSelectBasicPCode,
} from '@/constant/code/Widgets/Select';

type SelectPageProps = {};

export default function SelectPage(props: SelectPageProps) {
  return (
    <Page config={{ title: 'Select Widgetの使い方と応用例 - Flutter図鑑' }}>
      <PostWrapper>
        <Typography variant="h1">Select</Typography>
        <Typography mt={2} variant="body1">
          Flutterでは二種類のSelect Widgetが提供されています。
          <br />
          Select
          Widgetは選択肢の中からユーザーが選択した情報を受け取ることに適しています。
          <br />
          <br />
          ここではFlutterから提供されているSelect
          Widgetの使用方法をご紹介します。
        </Typography>

        <PostTypography mt={5} variant="h2">
          基本的な使用方法
        </PostTypography>
        <ul>
          <li>DropdownButton</li>
          <li>DropdownMenu</li>
        </ul>

        <Typography mt={2} variant="body1">
          Flutterから提供されているText Fieldには上記種類があります。
          <br />
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Select/Basic"
          height={220}
          parentCode={WidgetsSelectBasicPCode}
          code={WidgetsSelectBasicCode}
        />
      </PostWrapper>
    </Page>
  );
}
