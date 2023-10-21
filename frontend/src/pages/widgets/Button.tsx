import Link from 'next/link';
import { useEffect } from 'react';

import tocbot from 'tocbot';

import { Typography } from '@mui/material';

import { FlutterDemo } from '@/components/elements';
import { PostTypography } from '@/components/elements/Post/PostSelectors';
import { PostWrapper } from '@/components/elements/Post/PostWrapper';
import { Page } from '@/components/functional';
import {
  WidgetsButtonBasicButtonCode,
  WidgetsButtonBasicButtonPCode,
  WidgetsButtonBasicElevatedButtonCode,
  WidgetsButtonBasicElevatedButtonPCode,
  WidgetsButtonBasicOutlinedButtonCode,
  WidgetsButtonBasicOutlinedButtonPCode,
  WidgetsButtonBasicTextButtonCode,
  WidgetsButtonBasicTextButtonPCode,
  WidgetsButtonIconWithTextButtonCode,
  WidgetsButtonIconWithTextButtonPCode,
  WidgetsButtonSizeButtonCode,
  WidgetsButtonSizeButtonPCode,
} from '@/constant/code/Widgets/Button';

type ButtonPageProps = {};

export default function ButtonPage(props: ButtonPageProps) {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '#MainContent',
      headingSelector: 'h2, h3',
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <Page
      config={{
        title: 'Button Widgetのサンプル集 - Flutter図鑑',
      }}
    >
      <PostWrapper>
        <Typography variant="h1">Button</Typography>
        <Typography mt={2} variant="body1">
          FlutterではさまざまなButton Widgetが提供されています。
          <br />
          ここではFlutterから提供されているボタンの基本的な使用法を紹介します。
        </Typography>

        <PostTypography mt={5} variant="h2">
          基本的な使用方法
        </PostTypography>
        <ul>
          <li>TextButton</li>
          <li>OutlinedButton</li>
          <li>ElevatedButton</li>
        </ul>

        <Typography variant="body1">
          Flutterからデフォルトで提供されているボタンには上記3つの種類があります。
          <br />
          ボタンWidgetはクリックを検知し、ユーザーからアクションを促すことができます。
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Button/BasicButton"
          height={100}
          parentCode={WidgetsButtonBasicButtonPCode}
          code={WidgetsButtonBasicButtonCode}
        />

        <PostTypography mt={8} variant="h3">
          TextButton Widget
        </PostTypography>
        <Typography mt={1} variant="body1">
          TextButtonは<code>TextButton.styleFrom()</code>
          でスタイルの変更をすることができます。
          <br />
          また、無効化するには<code>onPressed</code>
          にNULLを設定することで対応できます。
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Button/BasicTextButton"
          height={100}
          parentCode={WidgetsButtonBasicTextButtonPCode}
          code={WidgetsButtonBasicTextButtonCode}
        />

        <PostTypography mt={8} variant="h3">
          OutlinedButton Widget
        </PostTypography>

        <Typography mt={1} variant="body1">
          OutlinedButtonはデフォルトではアウトラインの色の変更はされない仕様になっています。
          <br />
          変更したい場合は<code>OutlinedButton.styleForm</code>の
          <code>side</code>を使用して対応することができます。
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Button/BasicOutlinedButton"
          height={100}
          parentCode={WidgetsButtonBasicOutlinedButtonPCode}
          code={WidgetsButtonBasicOutlinedButtonCode}
        />

        <PostTypography mt={8} variant="h3">
          ElevatedButton Widget
        </PostTypography>

        <Typography mt={1} variant="body1">
          ElevatedButtonは色合いが強く、重要度の高いアクションで使用するのに最も適しています。
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Button/BasicElevatedButton"
          height={100}
          parentCode={WidgetsButtonBasicElevatedButtonPCode}
          code={WidgetsButtonBasicElevatedButtonCode}
        />

        <PostTypography mt={8} variant="h2">
          サイズの変更
        </PostTypography>

        <Typography mt={1} variant="body1">
          ボタンのサイズを変更したい場合は、<code>fontSize</code>
          の変更が有効です。
          <br />
          また、フォントのサイズを変更せずにボタンのサイズを変更したい場合は、
          <code>EdgeInsets.symmetric</code>
          の値を変更して対応することができます。
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Button/SizeButton"
          height={250}
          parentCode={WidgetsButtonSizeButtonPCode}
          code={WidgetsButtonSizeButtonCode}
        />

        <PostTypography mt={8} variant="h2">
          アイコン付きのボタン
        </PostTypography>

        <Typography mt={1} variant="body1">
          ボタンの意味をわかりやすくするために、アイコンをつけるのが有効です。
          <br />
          TextButton, OutlinedButton, ElevatedButton
          全てにつけることができます。
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Button/IconWithTextButton"
          height={100}
          parentCode={WidgetsButtonIconWithTextButtonPCode}
          code={WidgetsButtonIconWithTextButtonCode}
        />

        <PostTypography mt={8} variant="h2">
          API
        </PostTypography>
        <Typography mt={1} variant="body1">
          ここで言及したWidgetの詳しい説明は以下の公式ドキュメントから参照してください。
        </Typography>

        <ul>
          <li>
            <Link
              href="https://api.flutter.dev/flutter/material/ElevatedButton-class.html"
              target="_blank"
            >
              ElevatedButton()
            </Link>
          </li>
          <li>
            <Link
              href="https://api.flutter.dev/flutter/material/OutlinedButton-class.html"
              target="_blank"
            >
              OutlinedButton()
            </Link>
          </li>
          <li>
            <Link
              href="https://api.flutter.dev/flutter/material/TextButton-class.html"
              target="_blank"
            >
              TextButton()
            </Link>
          </li>
        </ul>
      </PostWrapper>
    </Page>
  );
}
