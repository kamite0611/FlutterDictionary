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
} from '@/constant/code/Widgets/Radio';

type ToggleButtonPageProps = {};

const { prevConfig, nextConfig } = getConfigByTitle('Toggle Button') || {};

export default function ToggleButtonPage(props: ToggleButtonPageProps) {
  const { t } = useLocale();

  const body = t.WidgetRadio;
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
          <li>ToggleButton</li>
        </ul>

        <Typography variant="body1">{body[1]}</Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Radio/Basic"
          height={200}
          parentCode={WidgetsRadioBasicPCode}
          code={WidgetsRadioBasicCode}
        />
      </PostWrapper>
    </Page>
  );
}
