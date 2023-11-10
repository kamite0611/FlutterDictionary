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
    title: 'Button Widgetの使い方と応用例 - Flutter図鑑',
    0: (
      <>
        FlutterではさまざまなButton Widgetが提供されています。
        <br />
        ここではFlutterから提供されているボタンの基本的な使用方法をご紹介します。
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
    title: 'TextFiled Widgetの使い方と応用例 - Flutter図鑑',
    0: (
      <>
        TextFiledはユーザーからのテキスト情報を受け取ることができます。
        <br />
        ここではFlutterから提供されているTextFieldの基本的な使用方法をご紹介します。
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

  //////////////////////////////////////
  // Select
  WidgetSelect: {
    title: 'Select Widgetの使い方と応用例 - Flutter図鑑',
    0: (
      <>
        Flutterでは二種類のSelect Widgetが提供されています。
        <br />
        Select
        Widgetは選択肢の中からユーザーが選択した情報を受け取ることに適しています。
        <br />
        <br />
        ここではFlutterから提供されているSelect Widgetの使用方法をご紹介します。
      </>
    ),
    '1_head': '基本的な使用方法',
    1: (
      <>
        Flutterから提供されているSelect Widgetには上記種類があります。
        <br />
        <code>DropdownMenu</code>
        はテキスト入力が可能であり、選択肢の検索ができる特徴があります。
      </>
    ),
    2: (
      <>
        <code>DropdownButton</code>
        は、一般的な選択フィールドを作成したい時に有効です。
        <br />
        <br />
        <code>onChange</code>
        をnullに設定することで非活性化させることができます。
        <br />
        複雑なスタイルの変更が必要な場合は<code>Container()</code>
        などのWidgetで囲うとより幅広いスタイルを実現することができます。
      </>
    ),
    3: (
      <>
        <code>DropdownMenu</code>
        は選択肢の検索が可能であり、多数の選択肢がある場合に向いています。
        <br />
        選択されたデータを取得するには<code>TextEditingController()</code>
        を使用して対応することができます。
        <br />
        <br />
        非常に使いやすいWidgetですが、Disableやバリデーションの設定はデフォルトで設定できないため、フォームでの活用は工夫しなければならないWidgetです。
      </>
    ),
    4: (
      <>
        選択されたデータの検証を行うためには
        <code>DropdownButtonFormField</code>
        を使用して対応することができます。
        <br />
        基本的な使用方法は<code>DropdownButton</code>とあまり変わりませんが、
        <code>Form()</code>で囲み<code>validator</code>
        を指定することで、自由にエラーメッセージを設定できます。
      </>
    ),
  },

  //////////////////////////////////////
  // Switch
  WidgetSwitch: {
    title: 'Switch Widgetの使い方と応用例 - Flutter図鑑',
    0: (
      <>
        Switch Widgetは<code>true</code>または<code>false</code>
        のBoolean型（真偽値）をユーザーから取得する場合に有効です。
        <br />
        ここではFlutterから提供されているSwitch
        Widgetの使い方と応用例を解説します。
      </>
    ),
    '1_head': '基本的な使用方法',
    1: (
      <>
        <code>Switch</code>は一般的なSwitchボタンを作成したい場合に有効です。
        <br />
        <code>onChanged</code>でチェックされたどうかを取得することができます。
        <br />
        <br />
        また、<code>onChanged</code>
        の値をNullに設定すると、ボタンを非活性にすることができます。
      </>
    ),
    '2_head': 'ラベル付きのボタン',
    2: (
      <>
        <code>SwitchListTile</code>
        はラベル付きのSwitchを作成したい場合に有効です。
        <br />
        <code>title</code>もしくは<code>subtitle</code>
        の値を変更し、Switchの説明をつけることができます。
        <br />
        <br />
        また、<code>secondary</code>
        を使用することで、ラベルの横にアイコンなどの自由なWidgetを表示することができます。
      </>
    ),
    '3_head': '色の変更',
    3: (
      <>
        <code>activeTrackColor</code>: value=true の時の背景の色
        <br />
        <code>inactiveTrackColor</code>: value=false の時の背景の色
        <br />
        などの値を変更することで、Switch
        Widgetでは細かく色を指定することができます。
      </>
    ),
    '4_head': 'アイコン付きのボタン',
    4: (
      <>
        <code>thumbIcon</code>
        を使用することで、ボタン内のアイコンを指定することができます。
        <br />
        ボタンの状態によって変更できるため、自由度が高くアイコンを設定できます。
      </>
    ),
  },

  //////////////////////////////////////
  // Checkbox
  WidgetCheckbox: {
    title: 'Checkbox Widgetの使い方と応用例 - Flutter図鑑',
    0: (
      <>
        Checkbox
        Widgetはユーザーから一つまたは複数の情報を選択させる場合に有効です。
        <br />
        ここではFlutterから提供されているCheckbox
        Widgetの使い方と応用例を解説します。
      </>
    ),
    '1_head': '基本的な使用方法',
    1: (
      <>
        <code>Checkbox</code>は一般的なシンプルなチェックボックスのWidgetです。
        <br />
        <code>onChange</code>
        の値をNullにすることで、フィールドを非活性にすることができます。
      </>
    ),
    '2_head': 'ラベル付きのチェックボックス',
    2: (
      <>
        <code>CheckboxListTile</code>
        はラベル付きのCheckboxを作成したい場合に有効です。
        <br />
        <code>title</code>
        を使用することで、Checkboxにラベルをつけることができます。
        <br />
        <br />
        <code>Checkbox()</code>と同様に、
        <code>onChange</code>
        の値をNullにすることで、フィールドを非活性にすることができます。
      </>
    ),
    '3_head': '色の変更',
    3: (
      <>
        <code>activeColor</code>: value=true の時の背景の色
        <br />
        <code>hoverColor</code>: カーソルホバー時の背景の色
        <br />
        などの値を変更することで、Checkbox
        Widgetでは細かく色を指定することができます。
      </>
    ),
    4: (
      <>
        Checkbox Widgetで入力値の検証を行うためには<code>FormField</code>
        を使用することで対応できます。
        <br />
        <code>Form()</code>で囲い、<code>formKey</code>
        を設定しなければならないことに注意してください。
        <br />
        <br />
        <code>validator</code>
        の値を組み換えれば自在にValidationを作成することができます。
      </>
    ),
  },

  //////////////////////////////////////
  // Slider
  WidgetSlider: {
    title: 'Slider Widgetの使い方と応用例 - Flutter図鑑',
    0: (
      <>
        Slider Widgetはユーザーが値を選択・調整するのに有効です。
        <br />
        ここではFlutterから提供されているSlider
        Widgetの使い方と応用例を解説します。
      </>
    ),
    '1_head': '基本的な使用方法',
    1: (
      <>
        <code>Slider</code>
        は水平または垂直のバーと、その上を動かすためのつまみ（ハンドル）から構成されます。
        <br />
        <code>onChanged</code>
        の値をNullに設定することで、スライダーを非活性にすることができます。
      </>
    ),
    '2_head': '段階的なスライダー',
    2: (
      <>
        <code>divisions</code>を使用することで、Slider
        Widgetにどれだけ段階を設けるかを設定できます。
        <br />
        設定した数だけSliderがが分割され、段階的に値を選択できるようになります。
        <br />
        <br />
        また、何の値を選択しているかを示すために、<code>label</code>
        オプションを使用するのも有効です。
      </>
    ),
    '3_head': '範囲スライダー',
    3: (
      <>
        ある範囲の値をユーザーから取得するためには<code>RangeSlider</code>
        を使用することで対応できます。
        <br />
        Sliderと異なる点は、<code>value</code>と<code>label</code>
        が独自のclassを使用して定義しなければなりません。
        <br />
        <br />
        また、<code>onChanged</code>で受け取れる値も<code>RangeValues</code>
        に変化していることにも注意が必要ですが、
        <br />
        言及したこと以外には Slider と RangeSlider
        の使用感の差に大きな違いはありません。
      </>
    ),
    '4_head': '色の変更',
    4: (
      <>
        <code>activeColor</code>: 選択されている値以下の背景色とボタンの色
        <br />
        <code>inactiveColor</code>: 選択されている値以上の背景色
        <br />
        などの値を変更することで、Slider
        Widgetでは細かく色を指定することができます。
      </>
    ),
  },

  //////////////////////////////////////
  // Radio
  WidgetRadio: {
    title: 'Radio Widgetの使い方と応用例 - Flutter図鑑',
    '0': (
      <>
        Radio
        Widgetはユーザーが複数の選択肢から複数または一つを選択する時に有効です。
        <br />
        ここではFlutterから提供されているRadio
        Widgetの使い方と応用例を解説します。
      </>
    ),
    '1_head': '基本的な使用方法',
    1: (
      <>
        FlutterでシンプルなRadioボタンを作成するためには<code>Radio</code>
        が有効です。
        <br />
        <code>onChanged</code>でRadio
        Widgetに設定した値がユーザーが選択されたかどうかを取得することができます。
      </>
    ),
    '2_head': 'ラベル付きのラジオボタン',
    2: (
      <>
        <code>RadioListTile</code>
        はラベル付きのラジオボタンを作成したい場合に有効です。
        <br />
        <code>onChanged</code>の値をNullにすることで、フィールドを disabled
        に変更することができます。
      </>
    ),
    '3_head': '色の変更',
    3: (
      <>
        <code>activeColor</code>, <code>hoverColor</code>
        などの値を変更させることで、アクティブやホバー時の色を変更することができます。
        <br />
        より自在に色を変更したい場合は<code>MaterialStateProperty</code>
        を使用して実現することができます。
      </>
    ),
    4: (
      <>
        Radio Widgetで入力値の検証を行うためには<code>FormField</code>
        を使用することで対応できます。
        <br />
        <code>Form()</code>で囲い、<code>formKey</code>
        を設定しなければならないことに注意してください。
      </>
    ),
  },

  //////////////////////////////////////
  // Toggle Button
  WidgetToggleButton: {
    title: 'ToggleButton Widgetの使い方と応用例 - Flutter図鑑',
    0: (
      <>
        ToggleButton
        Widgetは複数の選択肢から一つをユーザーに選択させる時に有効です。
        <br />
        ここではFlutterから提供されているToggleButton
        Widgetの使い方と応用例を解説します。
      </>
    ),
    '1_head': '基本的な使用方法',
    1: (
      <>
        Flutterでシンプルなトグルボタンを作成するためには
        <code>ToggleButtons</code>
        が有効です。
      </>
    ),
    2: (
      <>
        <code>isSelected</code>
        に入る値を調整することで、単一選択にすることができます。
      </>
    ),
    '3_head': 'サイズの変更',
    3: (
      <>
        <code>constraints</code>
        の値を調整することで、ボタンのサイズ調整をすることができます。
        <br />
        横幅いっぱいにサイズを設定したい場合は<code>MediaQuery</code>
        を使用して調整できます。
      </>
    ),
    '4_head': '色の変更',
    4: (
      <>
        <code>selectedBorderColor</code>
        （選択中のボーダーの色）など、細かく色の調整をすることができます。
        <br />
        また、<code>borderRadius</code>
        を変更して、ボタンの丸みを調整することができます。
      </>
    ),
    '5_head': 'アイコン付きのボタン',
    5: (
      <>
        UXを向上させるためには、ボタンの意味をわかりやすくするアイコンを表示させるのが有効です。
        <br />
        <code>Icon()</code>
        を使用してボタンのテキストをアイコンに変更することができます。
      </>
    ),
  },
} as const;

export default ja;
