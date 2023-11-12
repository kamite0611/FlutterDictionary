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
  WidgetsDialogAlertCode,
  WidgetsDialogAlertPCode,
  WidgetsDialogAnimateCode,
  WidgetsDialogAnimatePCode,
  WidgetsDialogBasicCode,
  WidgetsDialogBasicPCode,
  WidgetsDialogFullScreenCode,
  WidgetsDialogFullScreenPCode,
} from '@/constant/code/Widgets/Dialog';

type DialogPageProps = {};

const { prevConfig, nextConfig } = getConfigByTitle('Dialog') || {};

export default function DialogPage(props: DialogPageProps) {
  const { t } = useLocale();

  const body = t.WidgetDialog;

  return (
    <Page config={{ title: body.title }}>
      <PostWrapper prevConfig={prevConfig} nextConfig={nextConfig}>
        <Typography variant="h1">Dialog</Typography>

        <Typography mt={2} variant="body1">
          {body[0]}
        </Typography>

        <PostTypography mt={5} variant="h2">
          {body['1_head']}
        </PostTypography>

        <ul>
          <li>showDialog</li>
          <li>Dialog</li>
        </ul>

        <Typography variant="body1">{body[1]}</Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Dialog/Basic"
          height={150}
          parentCode={WidgetsDialogBasicPCode}
          code={WidgetsDialogBasicCode}
        />

        <PostTypography mt={8} variant="h2">
          {body['2_head']}
        </PostTypography>

        <ul>
          <li>Dialog.fullscreen</li>
        </ul>

        <Typography variant="body1">{body[2]}</Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Dialog/FullScreen"
          height={150}
          parentCode={WidgetsDialogFullScreenPCode}
          code={WidgetsDialogFullScreenCode}
        />

        <PostTypography mt={8} variant="h2">
          AlertDialog
        </PostTypography>

        <ul>
          <li>AlertDialog</li>
        </ul>

        <Typography variant="body1">{body[3]}</Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Dialog/Alert"
          height={250}
          parentCode={WidgetsDialogAlertPCode}
          code={WidgetsDialogAlertCode}
        />

        <PostTypography mt={8} variant="h2">
          {body['4_head']}
        </PostTypography>

        <ul>
          <li>showGeneralDialog</li>
        </ul>

        <Typography variant="body1">{body[4]}</Typography>

        <FlutterDemo
          mt={2}
          path="/widgets/Dialog/Animate"
          height={200}
          parentCode={WidgetsDialogAnimatePCode}
          code={WidgetsDialogAnimateCode}
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
              href="https://api.flutter.dev/flutter/material/showDialog.html"
              target="_blank"
            >
              showDialog()
            </Link>
          </li>
          <li>
            <Link
              href="https://api.flutter.dev/flutter/widgets/showGeneralDialog.html"
              target="_blank"
            >
              showGeneralDialog()
            </Link>
          </li>
          <li>
            <Link
              href="https://api.flutter.dev/flutter/material/Dialog-class.html"
              target="_blank"
            >
              Dialog()
            </Link>
          </li>
          <li>
            <Link
              href="https://api.flutter.dev/flutter/material/AlertDialog-class.html"
              target="_blank"
            >
              AlertDialog()
            </Link>
          </li>
        </ul>
      </PostWrapper>
    </Page>
  );
}
