import { Typography, styled } from '@mui/material';
import { Stack } from '@mui/system';

import { FlutterDemo } from '@/components/elements';
import { Page } from '@/components/functional';

type ButtonPageProps = {};

const StyledBody = styled(Stack)(({ theme }) => ({
  padding: '40px 60px',
  maxWidth: '800px',

  '& li': {
    margin: '16px 24px',
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
        <ul>
          <li>TextButton</li>
          <li>OutlinedButton</li>
          <li>ElevatedButton</li>
        </ul>

        <Typography mt={4} variant="h2">
          基本的な使用方法
        </Typography>
        <Typography mt={2} variant="body1">
          ボタンWidgetはクリックを検知しユーザーからアクションを促すことができます。
        </Typography>

        <FlutterDemo
          mt={2}
          path="/components/Button/BasicButton"
          height={100}
        />
      </StyledBody>
    </Page>
  );
}
