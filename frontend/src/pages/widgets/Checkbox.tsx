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
  WidgetsCheckboxBasicCode,
  WidgetsCheckboxBasicPCode,
  WidgetsCheckboxColorCode,
  WidgetsCheckboxColorPCode,
  WidgetsCheckboxLabelCode,
  WidgetsCheckboxLabelPCode,
  WidgetsCheckboxValidateCode,
  WidgetsCheckboxValidatePCode,
} from '@/constant/code/Widgets/Checkbox';

type CheckboxPageProps = {};

const { prevConfig, nextConfig } = getConfigByTitle('Checkbox') || {};

export default function CheckboxPage(props: CheckboxPageProps) {
  const { t } = useLocale();
  const body = t.WidgetCheckbox;

  return (
    <Page config={{ title: body.title }}>
      <PostWrapper prevConfig={prevConfig} nextConfig={nextConfig}>
        <Typography variant="h1">Checkbox</Typography>

        <Typography mt={2} variant="body1">
          {body[0]}
        </Typography>

        <PostTypography mt={5} variant="h2">
          {body['1_head']}
        </PostTypography>

        <ul>
          <li>Checkbox</li>
        </ul>

        <Typography variant="body1">{body[1]}</Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Checkbox/Basic"
          height={100}
          parentCode={WidgetsCheckboxBasicPCode}
          code={WidgetsCheckboxBasicCode}
        />

        <PostTypography mt={8} variant="h2">
          {body['2_head']}
        </PostTypography>

        <ul>
          <li>CheckboxListTile</li>
        </ul>

        <Typography variant="body1">{body[2]}</Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Checkbox/Label"
          height={250}
          parentCode={WidgetsCheckboxLabelPCode}
          code={WidgetsCheckboxLabelCode}
        />

        <PostTypography mt={8} variant="h2">
          {body['3_head']}
        </PostTypography>

        <Typography variant="body1" mt={2}>
          {body[3]}
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Checkbox/Color"
          height={100}
          parentCode={WidgetsCheckboxColorPCode}
          code={WidgetsCheckboxColorCode}
        />

        <PostTypography mt={8} variant="h2">
          Validation
        </PostTypography>

        <ul>
          <li>FormField</li>
        </ul>

        <Typography variant="body1">{body[4]}</Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Checkbox/Validate"
          height={100}
          parentCode={WidgetsCheckboxValidatePCode}
          code={WidgetsCheckboxValidateCode}
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
              href="https://api.flutter.dev/flutter/material/Checkbox-class.html"
              target="_blank"
            >
              Checkbox()
            </Link>
          </li>
          <li>
            <Link
              href="https://api.flutter.dev/flutter/material/CheckboxListTile-class.html"
              target="_blank"
            >
              CheckboxListTile()
            </Link>
          </li>
          <li>
            <Link
              href="https://api.flutter.dev/flutter/widgets/FormField-class.html"
              target="_blank"
            >
              FormField()
            </Link>
          </li>
        </ul>
      </PostWrapper>
    </Page>
  );
}
