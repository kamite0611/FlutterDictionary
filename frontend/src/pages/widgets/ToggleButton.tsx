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
  WidgetsToggleButtonBasicCode,
  WidgetsToggleButtonBasicPCode,
  WidgetsToggleButtonColorCode,
  WidgetsToggleButtonColorPCode,
  WidgetsToggleButtonIconCode,
  WidgetsToggleButtonIconPCode,
  WidgetsToggleButtonSingleCode,
  WidgetsToggleButtonSinglePCode,
  WidgetsToggleButtonSizeCode,
  WidgetsToggleButtonSizePCode,
} from '@/constant/code/Widgets/ToggleButton';

type ToggleButtonPageProps = {};

const { prevConfig, nextConfig } = getConfigByTitle('Toggle Button') || {};

export default function ToggleButtonPage(props: ToggleButtonPageProps) {
  const { t } = useLocale();

  const body = t.WidgetToggleButton;
  return (
    <Page config={{ title: body.title }}>
      <PostWrapper prevConfig={prevConfig} nextConfig={nextConfig}>
        <Typography variant="h1">Toggle Button</Typography>

        <Typography mt={2} variant="body1">
          {body[0]}
        </Typography>

        <PostTypography mt={5} variant="h2">
          {body['1_head']}
        </PostTypography>

        <ul>
          <li>ToggleButtons</li>
        </ul>

        <Typography variant="body1">{body[1]}</Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/ToggleButton/Basic"
          height={130}
          parentCode={WidgetsToggleButtonBasicPCode}
          code={WidgetsToggleButtonBasicCode}
        />

        <PostTypography mt={8} variant="h2">
          Single selection
        </PostTypography>

        <Typography variant="body1" mt={2}>
          {body[2]}
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/ToggleButton/Single"
          height={130}
          parentCode={WidgetsToggleButtonSinglePCode}
          code={WidgetsToggleButtonSingleCode}
        />

        <PostTypography mt={8} variant="h2">
          {body['3_head']}
        </PostTypography>

        <Typography variant="body1" mt={2}>
          {body[3]}
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/ToggleButton/Size"
          height={300}
          parentCode={WidgetsToggleButtonSizePCode}
          code={WidgetsToggleButtonSizeCode}
        />

        <PostTypography mt={8} variant="h2">
          {body['4_head']}
        </PostTypography>

        <Typography variant="body1" mt={2}>
          {body[4]}
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/ToggleButton/Color"
          height={200}
          parentCode={WidgetsToggleButtonColorPCode}
          code={WidgetsToggleButtonColorCode}
        />

        <PostTypography mt={8} variant="h2">
          {body['5_head']}
        </PostTypography>

        <Typography variant="body1" mt={2}>
          {body[5]}
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/ToggleButton/Icon"
          height={150}
          parentCode={WidgetsToggleButtonIconPCode}
          code={WidgetsToggleButtonIconCode}
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
              href="https://api.flutter.dev/flutter/material/ToggleButtons-class.html"
              target="_blank"
            >
              ToggleButtons()
            </Link>
          </li>
        </ul>
      </PostWrapper>
    </Page>
  );
}
