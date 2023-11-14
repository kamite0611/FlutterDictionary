import Link from 'next/link';

import { Alert, Typography } from '@mui/material';

import { useLocale } from '@/common/hooks';
import { getConfigByTitle } from '@/common/utils';
import {
  FlutterDemo,
  PostTypography,
  PostWrapper,
} from '@/components/elements';
import { Page } from '@/components/functional';
import {
  WidgetsTooltipBasicCode,
  WidgetsTooltipBasicPCode,
  WidgetsTooltipPositionCode,
  WidgetsTooltipPositionPCode,
  WidgetsTooltipStyleCode,
  WidgetsTooltipStylePCode,
} from '@/constant/code/Widgets/Tooltip';

type TooltipPageProps = {};

const { prevConfig, nextConfig } = getConfigByTitle('Tooltip') || {};

export default function TooltipPage(props: TooltipPageProps) {
  const { t } = useLocale();
  const body = t.WidgetTooltip;
  return (
    <Page config={{ title: body.title }}>
      <PostWrapper prevConfig={prevConfig} nextConfig={nextConfig}>
        <Typography variant="h1">Tooltip</Typography>

        <Typography mt={2} variant="body1">
          {body[0]}
        </Typography>

        <PostTypography mt={5} variant="h2">
          {body['1_head']}
        </PostTypography>

        <ul>
          <li>Tooltip</li>
        </ul>

        <Typography variant="body1">{body[1]}</Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Tooltip/Basic"
          height={150}
          parentCode={WidgetsTooltipBasicPCode}
          code={WidgetsTooltipBasicCode}
        />

        <PostTypography mt={8} variant="h2">
          {body['2_head']}
        </PostTypography>

        <ul>
          <li>verticalOffset</li>
        </ul>

        <Typography variant="body1">{body[2]}</Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Tooltip/Position"
          height={200}
          parentCode={WidgetsTooltipPositionPCode}
          code={WidgetsTooltipPositionCode}
        />
        <Alert severity="warning" sx={{ mt: 2 }}>
          {body['2_alert']}
        </Alert>

        <PostTypography mt={8} variant="h2">
          {body['3_head']}
        </PostTypography>

        <ul>
          <li>BoxDecoration</li>
        </ul>

        <Typography variant="body1">{body[3]}</Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Tooltip/Style"
          height={150}
          parentCode={WidgetsTooltipStylePCode}
          code={WidgetsTooltipStyleCode}
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
              href="https://api.flutter.dev/flutter/material/Tooltip-class.html"
              target="_blank"
            >
              Tooltip()
            </Link>
          </li>
        </ul>
      </PostWrapper>
    </Page>
  );
}
