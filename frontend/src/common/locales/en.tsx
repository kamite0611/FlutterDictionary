import { CustomLink } from '@/components/parts';

const en = {
  common: {
    title: 'FlutterGallery',
    ogImageURL:
      'https://storage.googleapis.com/fluttergallery-f98c6.appspot.com/public/FlutterGalleryLogoWithBGEn.png',
    iconTitleURL: '/images/TitleEn.png',
    api_desc:
      'For further information, please refer to the official documentation below.',

    footer: {
      operation: (
        <>
          This service is operated by
          <CustomLink href="https://twitter.com/kamite0611" target="_blank">
            @kamite0611
          </CustomLink>
        </>
      ),
    },
  },
  TopPage: {
    title: 'FlutterGallery - Flutter Widget Sample Collection',
    0: 'Making Flutter simpler.',
    1: 'FlutterGallery is an informational media that gathers Widget samples provided by Flutter.',
    '2_head': 'Widget samples',
  },
  WidgetButton: {
    title: 'Button Widget samples - FlutterGallery',
    0: (
      <>
        Flutter offers a variety of Button Widgets.
        <br />
        Here are some basic instructions for using the buttons provided by
        Flutter.
      </>
    ),
    '1_head': 'Basic Usage',
    1: (
      <>
        There are three types of buttons provided by default from Flutter as
        described above.
        <br />
        The Button Widget detects a click and can prompt an action from the
        user.
      </>
    ),
    2: (
      <>
        TextButton can be styled with <code>TextButton.styleFrom()</code>.
        <br />
        It can also be disabled by setting <code>onPressed</code> to NULL.
      </>
    ),
    3: (
      <>
        OutlinedButton is designed not to change the outline color by default.
        <br />
        If you wish to change it, you can use the <code>side</code> of
        <code>OutlinedButton.styleForm</code>.
      </>
    ),
    4: (
      <>
        ElevatedButton has a strong tint and is best used with actions of high
        importance.
      </>
    ),
    '5_head': 'Change Size',
    5: (
      <>
        If you want to change the size of the buttons, changing{' '}
        <code>fontSize</code> is useful.
        <br />
        If you want to change the size of the button without changing the font
        size, you can change the value of <code>EdgeInsets.symmetric</code> to
        accommodate this.
      </>
    ),
    '6_head': 'Button with icon',
    6: (
      <>
        To make it easier to understand the meaning of a button, it is useful to
        add an icon.
        <br />
        TextButton, OutlinedButton, and ElevatedButton can all be labeled with
        icons.
      </>
    ),
  },
  WidgetTextField: {
    title: 'TextField Widget samples - FlutterGallery',
    0: (
      <>
        TextFiled can receive text information from the user.
        <br />
        Here are the basic methods of TextField provided by Flutter.
      </>
    ),
    '1_head': 'Basic Usage',
    1: (
      <>
        There are the above types of Text Field provided by Flutter.
        <br />
        TextField stretches to the full width, so if you want to specify the
        size, use other widgets such as <code>SizedBox</code>.
      </>
    ),
    2: (
      <>
        To specify the color of TextFiled, you can use{' '}
        <code>OutlineInputBorder</code> or <code>OutlineInputBorder</code>.
        <br />
        You can also change the value of <code>focusedBorder</code> to specify
        the color when focused.
      </>
    ),
    3: (
      <>
        Displaying error text in a TextField can be handled using{' '}
        <code>TextFormField</code>.
        <br />
        When used, it must be enclosed in a <code>Form()</code> and the{' '}
        <code>formKey</code> must be set.
        <br />
        <br />
        Validation can be created freely by changing the value of{' '}
        <code>validator</code>.
      </>
    ),
    '4_head': 'Form Control',
    4: (
      <>
        <code>TextEditingController()</code> is best suited for retrieving or
        changing input values.
      </>
    ),
  },
} as const;

export default en;
