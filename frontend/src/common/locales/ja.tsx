import { CustomLink } from '@/components/parts';

const ja = {
  common: {
    title: 'Flutter図鑑',
    ogImageURL:
      'https://storage.googleapis.com/fluttergallery-f98c6.appspot.com/public/FlutterGalleryLogoWithBG.png',
    iconTitleURL: '/images/Title.png',
    api_desc:
      'さらに詳しく知りたい場合は、以下の公式ドキュメントから参照してください。',
    footer: {
      operation: (
        <>
          このサービスは
          <CustomLink href="https://twitter.com/kamite0611" target="_blank">
            @kamite0611
          </CustomLink>
          が運営しています
        </>
      ),
    },
  },
  TopPage: {
    title: 'Flutter図鑑 - 触って理解するFlutterWidgetサンプル集',
    0: 'Flutterをもっとシンプルに。',
    1: 'Flutter図鑑は Flutterから提供されているWidgetサンプルが集まった情報メディアです。',
    '2_head': 'Widget一覧',
  },
  WidgetButton: {
    title: 'Flutter Button Widgetのサンプル集 - Flutter図鑑',
    0: (
      <>
        FlutterではさまざまなButton Widgetが提供されています。
        <br />
        ここではFlutterから提供されているボタンの基本的な使用法を紹介します。
      </>
    ),
    '1_head': '基本的な使用方法',
    1: (
      <>
        Flutterからデフォルトで提供されているボタンには上記3つの種類があります。
        <br />
        ボタンWidgetはクリックを検知し、ユーザーからアクションを促すことができます。
      </>
    ),
    2: (
      <>
        TextButtonは<code>TextButton.styleFrom()</code>
        でスタイルの変更をすることができます。
        <br />
        また、無効化するには<code>onPressed</code>
        にNULLを設定することで対応できます。
      </>
    ),
    3: (
      <>
        OutlinedButtonはデフォルトではアウトラインの色の変更はされない仕様になっています。
        <br />
        変更したい場合は<code>OutlinedButton.styleForm</code>の<code>side</code>
        を使用して対応することができます。
      </>
    ),
    4: (
      <>
        ElevatedButtonは色合いが強く、重要度の高いアクションで使用するのに最も適しています。
      </>
    ),
    '5_head': 'サイズの変更',
    5: (
      <>
        ボタンのサイズを変更したい場合は、<code>fontSize</code>
        の変更が有効です。
        <br />
        また、フォントのサイズを変更せずにボタンのサイズを変更したい場合は、
        <code>EdgeInsets.symmetric</code>
        の値を変更して対応することができます。
      </>
    ),
    '6_head': 'アイコン付きのボタン',
    6: (
      <>
        ボタンの意味をわかりやすくするために、アイコンをつけるのが有効です。
        <br />
        TextButton, OutlinedButton, ElevatedButton 全てにつけることができます。
      </>
    ),
  },
  WidgetTextField: {
    title: 'Flutter TextFiled Widgetのサンプル集 - Flutter図鑑',
    0: (
      <>
        TextFiledはユーザーからのテキスト情報を受け取ることができます。
        <br />
        ここではFlutterから提供されているTextFieldの基本的な方法を紹介します。
      </>
    ),
    '1_head': '基本的な使用方法',
    1: (
      <>
        Flutterから提供されているText Fieldには上記種類があります。
        <br />
        TextFieldは横幅いっぱいに伸びるため、サイズを指定する場合は
        <code>SizedBox</code>
        など他のWidgetを使用して対応します。
      </>
    ),
    2: (
      <>
        TextFiledの色を指定するためには<code>OutlineInputBorder</code>や
        <code>OutlineInputBorder</code>で対応することができます。
        <br />
        また、<code>focusedBorder</code>
        の値を変更してフォーカス時の色を指定することもできます。
      </>
    ),
    3: (
      <>
        TextFieldでエラーテキストを表示するには<code>TextFormField</code>
        を使用して対応することができます。
        <br />
        使用する際は必ず<code>Form()</code>で囲い、<code>formKey</code>
        を設定しなければなりません。
        <br />
        <br />
        <code>validator</code>
        の値を組み換えれば自在にValidationを作成することができます。
      </>
    ),
    '4_head': '入力値の操作',
    4: (
      <>
        入力値を取得または変更するには<code>TextEditingController()</code>
        が最も適しています。
      </>
    ),
  },
} as const;

export default ja;
