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
  WidgetsRadioBasicCode,
  WidgetsRadioBasicPCode,
  WidgetsRadioColorCode,
  WidgetsRadioColorPCode,
  WidgetsRadioLabelCode,
  WidgetsRadioLabelPCode,
  WidgetsRadioValidationCode,
  WidgetsRadioValidationPCode,
} from '@/constant/code/Widgets/Radio';

type RadioPageProps = {};

const { prevConfig, nextConfig } = getConfigByTitle('Radio') || {};

export default function RadioPage(props: RadioPageProps) {
  const { t } = useLocale();

  const body = t.WidgetRadio;

  return (
    <Page config={{ title: body.title }}>
      <PostWrapper prevConfig={prevConfig} nextConfig={nextConfig}>
        <Typography variant="h1">Radio</Typography>

        <Typography mt={2} variant="body1">
          {body[0]}
        </Typography>

        <PostTypography mt={5} variant="h2">
          {body['1_head']}
        </PostTypography>

        <ul>
          <li>Radio</li>
        </ul>

        <Typography variant="body1">{body[1]}</Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Radio/Basic"
          height={200}
          parentCode={WidgetsRadioBasicPCode}
          code={WidgetsRadioBasicCode}
        />

        <PostTypography mt={8} variant="h3">
          {body['2_head']}
        </PostTypography>

        <ul>
          <li>RadioListTile</li>
        </ul>

        <Typography variant="body1">{body[2]}</Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Radio/Label"
          height={250}
          parentCode={WidgetsRadioLabelPCode}
          code={WidgetsRadioLabelCode}
        />

        <PostTypography mt={8} variant="h3">
          {body['3_head']}
        </PostTypography>

        <Typography variant="body1" mt={2}>
          {body[3]}
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Radio/Color"
          height={100}
          parentCode={WidgetsRadioColorPCode}
          code={WidgetsRadioColorCode}
        />

        <PostTypography mt={8} variant="h3">
          Validation
        </PostTypography>

        <ul>
          <li>FormField</li>
        </ul>

        <Typography variant="body1">{body[4]}</Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Radio/Validation"
          height={150}
          parentCode={WidgetsRadioValidationPCode}
          code={WidgetsRadioValidationCode}
        />

        <PostTypography mt={8} variant="h3">
          API
        </PostTypography>

        <Typography mt={1} variant="body1">
          {t.common.api_desc}
        </Typography>

        <ul>
          <li>
            <Link
              href="https://api.flutter.dev/flutter/material/Radio-class.html"
              target="_blank"
            >
              Radio()
            </Link>
          </li>
          <li>
            <Link
              href="https://api.flutter.dev/flutter/material/RadioListTile-class.html"
              target="_blank"
            >
              RadioListTile()
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
