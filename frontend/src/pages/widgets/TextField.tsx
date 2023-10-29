import Link from 'next/link';

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
  WidgetsTextFieldBasicCode,
  WidgetsTextFieldBasicPCode,
  WidgetsTextFieldColorsCode,
  WidgetsTextFieldColorsPCode,
  WidgetsTextFieldFormControlCode,
  WidgetsTextFieldFormControlPCode,
  WidgetsTextFieldValidationsCode,
  WidgetsTextFieldValidationsPCode,
} from '@/constant/code/Widgets/TextField';

type TextFieldPageProps = {};

const { prevConfig, nextConfig } = getConfigByTitle('TextField') || {};

export default function TextFieldPage(props: TextFieldPageProps) {
  const { t } = useLocale();
  const body = t.WidgetTextField;

  return (
    <Page config={{ title: body.title }}>
      <PostWrapper prevConfig={prevConfig} nextConfig={nextConfig}>
        <Typography variant="h1">Text Field</Typography>
        <Typography mt={2} variant="body1">
          {body[0]}
        </Typography>

        <PostTypography mt={5} variant="h2">
          {body['1_head']}
        </PostTypography>

        <ul>
          <li>TextField</li>
          <li>TextFormField</li>
        </ul>
        <Typography variant="body1">{body[1]}</Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/TextField/Basic"
          height={100}
          parentCode={WidgetsTextFieldBasicPCode}
          code={WidgetsTextFieldBasicCode}
        />

        <PostTypography mt={8} variant="h2">
          Colors
        </PostTypography>

        <Typography variant="body1" mt={1}>
          {body[2]}
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/TextField/Colors"
          height={100}
          parentCode={WidgetsTextFieldColorsPCode}
          code={WidgetsTextFieldColorsCode}
        />

        <PostTypography mt={8} mb={1} variant="h2">
          Validation
        </PostTypography>

        <ul>
          <li>TextFormField</li>
        </ul>

        <Typography variant="body1">{body[3]}</Typography>

        <FlutterDemo
          mt={3}
          path="/widgets/TextField/Validations"
          height={130}
          parentCode={WidgetsTextFieldValidationsPCode}
          code={WidgetsTextFieldValidationsCode}
        />

        <PostTypography mt={8} variant="h2">
          {body['4_head']}
        </PostTypography>

        <Typography variant="body1" mt={1}>
          {body[4]}
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/TextField/FormControl"
          height={130}
          parentCode={WidgetsTextFieldFormControlPCode}
          code={WidgetsTextFieldFormControlCode}
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
              href="https://api.flutter.dev/flutter/material/TextField-class.html"
              target="_blank"
            >
              TextField()
            </Link>
          </li>
          <li>
            <Link
              href="https://api.flutter.dev/flutter/material/TextFormField-class.html"
              target="_blank"
            >
              TextFormField()
            </Link>
          </li>
        </ul>
      </PostWrapper>
    </Page>
  );
}
