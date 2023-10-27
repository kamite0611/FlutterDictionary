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
  WidgetsSwitchBasicCode,
  WidgetsSwitchBasicPCode,
  WidgetsSwitchColorCode,
  WidgetsSwitchColorPCode,
  WidgetsSwitchIconCode,
  WidgetsSwitchIconPCode,
  WidgetsSwitchLabelCode,
  WidgetsSwitchLabelPCode,
} from '@/constant/code/Widgets/Switch';

type SwitchPageProps = {};

const { prevConfig, nextConfig } = getConfigByTitle('Switch') || {};

export default function SwitchPage(props: SwitchPageProps) {
  const { t } = useLocale();

  const body = t.WidgetSwitch;

  return (
    <Page config={{ title: body.title }}>
      <PostWrapper prevConfig={prevConfig} nextConfig={nextConfig}>
        <Typography variant="h1">Switch</Typography>
        <Typography mt={2} variant="body1">
          {body[0]}
        </Typography>

        <PostTypography mt={5} variant="h2">
          {body['1_head']}
        </PostTypography>

        <ul>
          <li>Switch</li>
        </ul>

        <Typography variant="body1">{body[1]}</Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Switch/Basic"
          height={100}
          parentCode={WidgetsSwitchBasicPCode}
          code={WidgetsSwitchBasicCode}
        />

        <PostTypography mt={8} variant="h2">
          {body['2_head']}
        </PostTypography>

        <ul>
          <li>SwitchListTile</li>
        </ul>
        <Typography variant="body1">{body[2]}</Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Switch/Label"
          height={100}
          parentCode={WidgetsSwitchLabelPCode}
          code={WidgetsSwitchLabelCode}
        />

        <PostTypography mt={8} variant="h2">
          {body['3_head']}
        </PostTypography>

        <Typography variant="body1" mt={2}>
          {body[3]}
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Switch/Color"
          height={100}
          parentCode={WidgetsSwitchColorPCode}
          code={WidgetsSwitchColorCode}
        />

        <PostTypography mt={8} variant="h2">
          {body['4_head']}
        </PostTypography>

        <Typography variant="body1" mt={2}>
          {body[4]}
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Switch/Icon"
          height={100}
          parentCode={WidgetsSwitchIconPCode}
          code={WidgetsSwitchIconCode}
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
              href="https://api.flutter.dev/flutter/material/Switch-class.html"
              target="_blank"
            >
              Switch()
            </Link>
          </li>
          <li>
            <Link
              href="https://api.flutter.dev/flutter/material/SwitchListTile-class.html"
              target="_blank"
            >
              SwitchListTile()
            </Link>
          </li>
        </ul>
      </PostWrapper>
    </Page>
  );
}
