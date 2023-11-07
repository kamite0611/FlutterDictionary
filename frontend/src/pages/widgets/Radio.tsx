import { Typography } from '@mui/material';

import { getConfigByTitle } from '@/common/utils';
import {
  FlutterDemo,
  PostTypography,
  PostWrapper,
} from '@/components/elements';
import { Page } from '@/components/functional';
import {
  WidgetsRadioBasicCode,
  WidgetsRadioBasicPCode,
  WidgetsRadioLabelCode,
  WidgetsRadioLabelPCode,
} from '@/constant/code/Widgets/Radio';

type RadioPageProps = {};

const { prevConfig, nextConfig } = getConfigByTitle('Radio') || {};

export default function RadioPage(props: RadioPageProps) {
  return (
    <Page config={{ title: 'Radio Widgetの使い方と応用例 - Flutter図鑑' }}>
      <PostWrapper prevConfig={prevConfig} nextConfig={nextConfig}>
        <Typography variant="h1">Radio</Typography>

        <Typography mt={2} variant="body1">
          Radio
          Widgetはユーザーが複数の選択肢から複数または一つを選択する時に有効です。
          <br />
          ここではFlutterから提供されているRadio
          Widgetの使い方と応用例を解説します。
        </Typography>

        <PostTypography mt={5} variant="h2">
          基本的な使用方法
        </PostTypography>

        <ul>
          <li>Radio</li>
        </ul>

        <Typography variant="body1">
          FlutterでシンプルなRadioボタンを作成するためには<code>Radio</code>
          が有効です。
          <br />
          <code>onChanged</code>でRadio
          Widgetに設定した値がユーザーが選択されたかどうかを取得することができます。
          <br />
          <br />
          <code>onChanged</code>の値をNullにすることで、フィールドを disabled
          にすることができます。
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Radio/Basic"
          height={200}
          parentCode={WidgetsRadioBasicPCode}
          code={WidgetsRadioBasicCode}
        />

        <PostTypography mt={8} variant="h3">
          ラベル付きのラジオボタン
        </PostTypography>

        <ul>
          <li>RadioListTile</li>
        </ul>

        <Typography variant="body1">
          <code>RadioListTile</code>
          はラベル付きのラジオボタンを作成したい場合に有効です。
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Radio/Label"
          height={250}
          parentCode={WidgetsRadioLabelPCode}
          code={WidgetsRadioLabelCode}
        />
      </PostWrapper>
    </Page>
  );
}
