import Link from 'next/link';

import { Typography } from '@mui/material';

import { useLocale } from '@/common/hooks';
import { getConfigByTitle } from '@/common/utils';
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

const { prevConfig, nextConfig } = getConfigByTitle('Button') || {};

export default function ButtonPage(props: ButtonPageProps) {
  const { t } = useLocale();

  const body = t.WidgetButton;

  return (
    <Page
      config={{
        title: body.title,
      }}
    >
      <PostWrapper prevConfig={prevConfig} nextConfig={nextConfig}>
        <Typography variant="h1">Button</Typography>
        <Typography mt={2} variant="body1">
          {body[0]}
        </Typography>

        <PostTypography mt={5} variant="h2">
          {body['1_head']}
        </PostTypography>
        <ul>
          <li>TextButton</li>
          <li>OutlinedButton</li>
          <li>ElevatedButton</li>
        </ul>

        <Typography variant="body1">{body[1]}</Typography>

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
          {body[2]}
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
          {body[3]}
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
          {body[4]}
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Button/BasicElevatedButton"
          height={100}
          parentCode={WidgetsButtonBasicElevatedButtonPCode}
          code={WidgetsButtonBasicElevatedButtonCode}
        />

        <PostTypography mt={8} variant="h2">
          {body['5_head']}
        </PostTypography>

        <Typography mt={1} variant="body1">
          {body[5]}
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Button/SizeButton"
          height={250}
          parentCode={WidgetsButtonSizeButtonPCode}
          code={WidgetsButtonSizeButtonCode}
        />

        <PostTypography mt={8} variant="h2">
          {body['6_head']}
        </PostTypography>

        <Typography mt={1} variant="body1">
          {body[6]}
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
          {t.common.api_desc}
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
