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
  WidgetsSliderBasicCode,
  WidgetsSliderBasicPCode,
  WidgetsSliderColorCode,
  WidgetsSliderColorPCode,
  WidgetsSliderRangeCode,
  WidgetsSliderRangePCode,
  WidgetsSliderStepwiseCode,
  WidgetsSliderStepwisePCode,
} from '@/constant/code/Widgets/Slider';

type SliderPageProps = {};

const { prevConfig, nextConfig } = getConfigByTitle('Slider') || {};

export default function SliderPage(props: SliderPageProps) {
  const { t } = useLocale();

  const body = t.WidgetSlider;

  return (
    <Page config={{ title: body.title }}>
      <PostWrapper prevConfig={prevConfig} nextConfig={nextConfig}>
        <Typography variant="h1">Slider</Typography>
        <Typography variant="body1" mt={2}>
          {body[0]}
        </Typography>

        <PostTypography mt={5} variant="h2">
          {body['1_head']}
        </PostTypography>

        <ul>
          <li>Slider</li>
        </ul>
        <Typography variant="body1">{body[1]}</Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Slider/Basic"
          height={130}
          parentCode={WidgetsSliderBasicPCode}
          code={WidgetsSliderBasicCode}
        />

        <PostTypography mt={8} variant="h2">
          {body['2_head']}
        </PostTypography>

        <Typography variant="body1" mt={2}>
          {body[2]}
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Slider/Stepwise"
          height={180}
          parentCode={WidgetsSliderStepwisePCode}
          code={WidgetsSliderStepwiseCode}
        />

        <PostTypography mt={8} variant="h2">
          {body['3_head']}
        </PostTypography>

        <ul>
          <li>RangeSlider</li>
        </ul>

        <Typography variant="body1">{body[3]}</Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Slider/Range"
          height={200}
          parentCode={WidgetsSliderRangePCode}
          code={WidgetsSliderRangeCode}
        />

        <PostTypography mt={8} variant="h2">
          {body['4_head']}
        </PostTypography>

        <Typography variant="body1" mt={2}>
          {body[4]}
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Slider/Color"
          height={280}
          parentCode={WidgetsSliderColorPCode}
          code={WidgetsSliderColorCode}
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
              href="https://api.flutter.dev/flutter/material/Slider-class.html"
              target="_blank"
            >
              Slider()
            </Link>
          </li>
          <li>
            <Link
              href="https://api.flutter.dev/flutter/material/RangeSlider-class.html"
              target="_blank"
            >
              RangeSlider()
            </Link>
          </li>
        </ul>
      </PostWrapper>
    </Page>
  );
}
