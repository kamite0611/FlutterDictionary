import { FlutterDemo } from '@/components/elements';
import { Page } from '@/components/functional';

type ButtonPageProps = {};

export default function ButtonPage(props: ButtonPageProps) {
  return (
    <Page
      config={{
        title: '',
        description: '',
        keywords: '',
        imageUrl: undefined,
        url: undefined,
      }}
    >
      hello home
      <FlutterDemo path="/demo" height={200} />
    </Page>
  );
}
