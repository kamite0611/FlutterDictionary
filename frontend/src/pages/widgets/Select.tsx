import Link from 'next/link';

import { Typography } from '@mui/material';

import { useLocale } from '@/common/hooks';
import {
  FlutterDemo,
  PostTypography,
  PostWrapper,
} from '@/components/elements';
import { Page } from '@/components/functional';
import {
  WidgetsSelectBasicCode,
  WidgetsSelectBasicDropdownButtonCode,
  WidgetsSelectBasicDropdownButtonPCode,
  WidgetsSelectBasicDropdownMenuCode,
  WidgetsSelectBasicDropdownMenuPCode,
  WidgetsSelectBasicPCode,
} from '@/constant/code/Widgets/Select';

type SelectPageProps = {};

export default function SelectPage(props: SelectPageProps) {
  const { t } = useLocale();

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

        <Typography variant="body1">
          Flutterから提供されているSelect Widgetには上記種類があります。
          <br />
          <code>DropdownMenu</code>
          はテキスト入力が可能であり、選択肢の検索ができる特徴があります。
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Select/Basic"
          height={220}
          parentCode={WidgetsSelectBasicPCode}
          code={WidgetsSelectBasicCode}
        />

        <PostTypography mt={8} variant="h3">
          DropdownButton
        </PostTypography>

        <Typography mt={2} variant="body1">
          <code>DropdownButton</code>
          は、一般的な選択フィールドを作成したい時に有効です。
          <br />
          <br />
          <code>onChange</code>
          をnullに設定することで非活性化させることができます。
          <br />
          複雑なスタイルの変更が必要な場合は<code>Container()</code>
          などのWidgetで囲うとより幅広いスタイルを実現することができます。
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Select/BasicDropdownButton"
          height={220}
          parentCode={WidgetsSelectBasicDropdownButtonPCode}
          code={WidgetsSelectBasicDropdownButtonCode}
        />

        <PostTypography mt={8} variant="h3">
          DropdownMenu
        </PostTypography>

        <Typography mt={2} variant="body1">
          <code>DropdownMenu</code>
          は選択肢の検索が可能であり、多数の選択肢がある場合に向いています。
          <br />
          選択されたデータを取得するには<code>TextEditingController()</code>
          を使用して対応することができます。
          <br />
          <br />
          非常に使いやすいWidgetですが、Disableやバリデーションの設定はデフォルトで設定できないため、フォームでの活用は工夫しなければならないWidgetです。
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Select/BasicDropdownMenu"
          height={220}
          parentCode={WidgetsSelectBasicDropdownMenuPCode}
          code={WidgetsSelectBasicDropdownMenuCode}
        />

        <PostTypography mt={5} variant="h2">
          Validation
        </PostTypography>

        <FlutterDemo
          mt={2}
          path="/widgets/Select/BasicDropdownButton"
          height={220}
          parentCode={WidgetsSelectBasicDropdownButtonPCode}
          code={WidgetsSelectBasicDropdownButtonCode}
        />

        <PostTypography mt={5} variant="h2">
          API
        </PostTypography>

        <Typography mt={1} variant="body1">
          {t.common.api_desc}
        </Typography>

        <ul>
          <li>
            <Link
              href="https://api.flutter.dev/flutter/material/DropdownButton-class.html"
              target="_blank"
            >
              DropdownButton()
            </Link>
          </li>
          <li>
            <Link
              href="https://api.flutter.dev/flutter/material/DropdownMenu-class.html"
              target="_blank"
            >
              DropdownMenu()
            </Link>
          </li>
        </ul>
      </PostWrapper>
    </Page>
  );
}
