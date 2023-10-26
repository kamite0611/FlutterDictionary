import Link from 'next/link';

import { Typography } from '@mui/material';

import { useLocale } from '@/common/hooks';
import {
  FlutterDemo,
  PostTypography,
  PostWrapper,
} from '@/components/elements';
import { Page } from '@/components/functional';
import {
  WidgetsSelectBasicCode,
  WidgetsSelectBasicDropdownButtonCode,
  WidgetsSelectBasicDropdownButtonPCode,
  WidgetsSelectBasicDropdownMenuCode,
  WidgetsSelectBasicDropdownMenuPCode,
  WidgetsSelectBasicPCode,
  WidgetsSelectValidationCode,
  WidgetsSelectValidationPCode,
} from '@/constant/code/Widgets/Select';

type SelectPageProps = {};

export default function SelectPage(props: SelectPageProps) {
  const { t } = useLocale();

  const body = t.WidgetSelect;

  return (
    <Page config={{ title: body.title }}>
      <PostWrapper>
        <Typography variant="h1">Select</Typography>
        <Typography mt={2} variant="body1">
          {body[0]}
        </Typography>

        <PostTypography mt={5} variant="h2">
          {body['1_head']}
        </PostTypography>
        <ul>
          <li>DropdownButton</li>
          <li>DropdownMenu</li>
        </ul>

        <Typography variant="body1">{body[1]}</Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Select/Basic"
          height={220}
          parentCode={WidgetsSelectBasicPCode}
          code={WidgetsSelectBasicCode}
        />

        <PostTypography mt={8} variant="h3">
          DropdownButton
        </PostTypography>

        <Typography mt={2} variant="body1">
          {body[2]}
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Select/BasicDropdownButton"
          height={220}
          parentCode={WidgetsSelectBasicDropdownButtonPCode}
          code={WidgetsSelectBasicDropdownButtonCode}
        />

        <PostTypography mt={8} variant="h3">
          DropdownMenu
        </PostTypography>

        <Typography mt={2} variant="body1">
          {body[3]}
        </Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Select/BasicDropdownMenu"
          height={220}
          parentCode={WidgetsSelectBasicDropdownMenuPCode}
          code={WidgetsSelectBasicDropdownMenuCode}
        />

        <PostTypography mt={5} variant="h2">
          Validation
        </PostTypography>

        <ul>
          <li>DropdownButtonFormField</li>
        </ul>

        <Typography variant="body1">{body[4]}</Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Select/Validation"
          height={220}
          parentCode={WidgetsSelectValidationPCode}
          code={WidgetsSelectValidationCode}
        />

        <PostTypography mt={5} variant="h2">
          API
        </PostTypography>

        <Typography mt={1} variant="body1">
          {t.common.api_desc}
        </Typography>

        <ul>
          <li>
            <Link
              href="https://api.flutter.dev/flutter/material/DropdownButton-class.html"
              target="_blank"
            >
              DropdownButton()
            </Link>
          </li>
          <li>
            <Link
              href="https://api.flutter.dev/flutter/material/DropdownButtonFormField-class.html"
              target="_blank"
            >
              DropdownButtonFormField()
            </Link>
          </li>
          <li>
            <Link
              href="https://api.flutter.dev/flutter/material/DropdownMenu-class.html"
              target="_blank"
            >
              DropdownMenu()
            </Link>
          </li>
        </ul>
      </PostWrapper>
    </Page>
  );
}
