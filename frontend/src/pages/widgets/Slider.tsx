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

  return (
    <Page
      config={{ title: 'Flutter Slider Widgetの使い方と応用例 - Flutter図鑑' }}
    >
      <PostWrapper prevConfig={prevConfig} nextConfig={nextConfig}>
        <Typography variant="h1">Slider</Typography>
        <Typography variant="body1" mt={2}>
          Slider Widgetはユーザーが値を選択・調整するのに有効です。
          <br />
          ここではFlutterから提供されているSlider
          Widgetの使い方と応用例を解説します。
        </Typography>

        <PostTypography mt={5} variant="h2">
          基本的な使用方法
        </PostTypography>

        <ul>
          <li>Slider</li>
        </ul>
        <Typography variant="body1">
          <code>Slider</code>
          は水平または垂直のバーと、その上を動かすためのつまみ（ハンドル）から構成されます。
          <br />
          ユーザーは、つまみをクリックまたはドラッグして、値を変更できます。
          <br />
          <br />
          <code>onChanged</code>
          の値をNullに設定することで、スライダーを非活性にすることができます。
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Slider/Basic"
          height={130}
          parentCode={WidgetsSliderBasicPCode}
          code={WidgetsSliderBasicCode}
        />

        <PostTypography mt={8} variant="h2">
          段階的なスライダー
        </PostTypography>

        <Typography variant="body1" mt={2}>
          <code>divisions</code>を使用することで、Slider
          Widgetにどれだけ段階を設けるかを設定できます。
          <br />
          設定した数だけSliderがが分割され、段階的に値を選択できるようになります。
          <br />
          <br />
          また、何の値を選択しているかを示すために、<code>label</code>
          オプションを使用するのも有効です。
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Slider/Stepwise"
          height={180}
          parentCode={WidgetsSliderStepwisePCode}
          code={WidgetsSliderStepwiseCode}
        />

        <PostTypography mt={8} variant="h2">
          範囲スライダー
        </PostTypography>

        <ul>
          <li>RangeSlider</li>
        </ul>

        <Typography variant="body1">
          ある範囲の値をユーザーから取得するためには<code>RangeSlider</code>
          を使用することで対応できます。
          <br />
          <code>values</code>
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Slider/Range"
          height={200}
          parentCode={WidgetsSliderRangePCode}
          code={WidgetsSliderRangeCode}
        />

        <PostTypography mt={8} variant="h2">
          色の変更
        </PostTypography>

        <Typography variant="body1" mt={2}>
          <code>activeColor</code>: 選択されている値以下の背景色とボタンの色
          <br />
          <code>inactiveColor</code>: 選択されている値以上の背景色
          <br />
          などの値を変更することで、Slider
          Widgetでは細かく色を指定することができます。
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
