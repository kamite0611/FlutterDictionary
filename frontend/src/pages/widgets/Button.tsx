import { Typography, styled } from '@mui/material';
import { Stack } from '@mui/system';

import { FlutterDemo } from '@/components/elements';
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
} from '@/constant/code/Widgets/Button';

type ButtonPageProps = {};

const StyledBody = styled(Stack)(({ theme }) => ({
  padding: '40px 60px',
  maxWidth: '800px',

  '& li': {
    margin: '16px 24px',
  },

  '& code': {
    color: 'red',
    fontSize: '13px',
    backgroundColor: '#f6f6f6',
    border: '1px solid #d2d2d2',
    padding: '3px',
    margin: '0 3px',
    borderRadius: '4px',
  },

  [theme.breakpoints.down('lg')]: {
    padding: '20px 30px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
  },
}));

export default function ButtonPage(props: ButtonPageProps) {
  return (
    <Page
      config={{
        title: 'Button Widgetのサンプル集 - Flutter図鑑',
      }}
    >
      <StyledBody>
        <Typography variant="h1">Button</Typography>
        <Typography mt={2} variant="body1">
          FlutterではさまざまなButton Widgetが提供されています。
          <br />
          ここでは基本的なウィジェットの使用方法を紹介します。
        </Typography>

        <Typography mt={5} variant="h2">
          基本的な使用方法
        </Typography>
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

        <Typography mt={8} variant="h3">
          TextButton Widget
        </Typography>
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

        <Typography mt={8} variant="h3">
          OutlinedButton Widget
        </Typography>

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

        <Typography mt={8} variant="h3">
          ElevatedButton Widget
        </Typography>

        <Typography mt={1} variant="body1">
          OutlinedButtonは色合いが強く、重要度の高いアクションで使用するのに最も適しています。
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Button/BasicElevatedButton"
          height={100}
          parentCode={WidgetsButtonBasicElevatedButtonPCode}
          code={WidgetsButtonBasicElevatedButtonCode}
        />
      </StyledBody>
    </Page>
  );
}
