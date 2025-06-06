import { AlertTitle } from '@mui/material';

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
          <CustomLink href="https://ichis.jp" target="_blank">
            ichis inc.
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

  //////////////////////////////////////
  // Button
  WidgetButton: {
    title: 'Button Widget Usage and Applications - FlutterGallery',
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

  //////////////////////////////////////
  // TextField
  WidgetTextField: {
    title: 'TextField Widget Usage and Applications - FlutterGallery',
    0: (
      <>
        TextFiled can receive text information from the user.
        <br />
        Here are some basic uses of TextField provided by Flutter.
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

  //////////////////////////////////////
  // Select
  WidgetSelect: {
    title: 'Select Widget Usage and Applications - FlutterGallery',
    0: (
      <>
        Flutter offers two types of Select Widgets.
        <br />
        The Select Widget is suitable for receiving information from a user's
        choice of options.
        <br />
        <br />
        Here we will show you how to use the Select Widget provided by Flutter.
      </>
    ),
    '1_head': 'Basic Usage',
    1: (
      <>
        There are the above types of Select Widgets provided by Flutter.
        <br />
        <code>DropdownMenu</code> allows text input and features the ability to
        search for options.
      </>
    ),
    2: (
      <>
        <code>DropdownButton</code> is useful when you want to create a general
        selection field.
        <br />
        <br />
        It can be deactivated by setting <code>onChange</code> to null.
        <br />
        If complex style changes are needed, enclose the field in a widget such
        as <code>Container()</code> to achieve a wider range of styles.
      </>
    ),
    3: (
      <>
        <code>DropdownMenu</code> allows retrieval of choices and is suited for
        cases with a large number of choices.
        <br />
        Retrieving the selected data can be handled using{' '}
        <code>TextEditingController()</code>.
        <br />
        <br />
        It is a very easy-to-use widget, but since Disable and validation
        settings cannot be set by default, it is a widget that must be devised
        for use in forms.
      </>
    ),
    4: (
      <>
        Validation of selected data can be handled using{' '}
        <code>DropdownButtonFormField</code>.
        <br />
        The basic usage is not much different from <code>DropdownButton</code>,
        but by enclosing it in <code>Form()</code>and specifying a{' '}
        <code>validator</code>, you can freely set error messages.
      </>
    ),
  },

  //////////////////////////////////////
  // Switch
  WidgetSwitch: {
    title: 'Switch Widget Usage and Applications - FlutterGallery',
    0: (
      <>
        The Switch Widget is useful for getting a Boolean type (boolean{' '}
        <code>true</code> or <code>false</code> value) from the user.
        <br />
        Here we explain how to use the Switch Widget provided by Flutter, and
        give an example of its application.
      </>
    ),
    '1_head': 'Basic Usage',
    1: (
      <>
        <code>Switch</code> is useful if you want to create a general Switch
        button.
        <br />
        You can get whether the button is checked or not by{' '}
        <code>onChanged</code>.
        <br />
        <br />
        You can also set the value of <code>onChanged</code> to Null to
        deactivate the button.
      </>
    ),
    '2_head': 'Label',
    2: (
      <>
        <code>SwitchListTile</code> is useful when you want to create a Switch
        with a label.
        <br />
        You can change the value of the <code>title</code> or{' '}
        <code>subtitle</code> and add a description of the Switch.
        <br />
        <br />
        Also, by using <code>secondary</code>, a free widget such as an icon can
        be displayed next to the label.
      </>
    ),
    '3_head': 'Colors',
    3: (
      <>
        <code>activeTrackColor</code>: background color when value=true
        <br />
        <code>inactiveTrackColor</code>: background color when value=false
        <br />
        The Switch Widget allows you to specify colors in detail by changing
        values such as
      </>
    ),
    '4_head': 'Button with icon',
    4: (
      <>
        Using <code>thumbIcon</code>, you can specify an icon within a button.
        <br />
        The icon can be changed depending on the button status, allowing for a
        high degree of freedom in setting the icon.
      </>
    ),
  },

  //////////////////////////////////////
  // Checkbox
  WidgetCheckbox: {
    title: 'Checkbox Widget Usage and Applications - FlutterGallery',
    0: (
      <>
        Checkbox Widget is useful when you want the user to select one or more
        pieces of information.
        <br />
        Here we explain how to use the Checkbox Widget provided by Flutter and
        some examples of its applications.
      </>
    ),
    '1_head': 'Basic Usage',
    1: (
      <>
        <code>Checkbox</code> is a generic simple checkbox widget.
        <br />
        The field can be deactivated by setting the value of{' '}
        <code>onChange</code> to null.
      </>
    ),
    '2_head': 'Label',
    2: (
      <>
        <code>CheckboxListTile</code> is useful when you want to create a
        Checkbox with a label.
        <br />
        By using <code>title</code>, you can label a Checkbox.
        <br />
        <br />
        As with <code>Checkbox()</code>, the field can be deactivated by setting
        the value of <code>onChange</code> to null.
      </>
    ),
    '3_head': 'Colors',
    3: (
      <>
        <code>activeColor</code>: the background color when value=true
        <br />
        <code>hoverColor</code>: the background color when the cursor is
        hovering
        <br />
        <br />
        Checkbox Widget allows you to specify colors in detail by changing
        values such as
      </>
    ),
    4: (
      <>
        The Checkbox Widget can handle input value validation by using a{' '}
        <code>FormField</code>.
        <br />
        Note that it must be enclosed in a <code>Form() </code> and the{' '}
        <code>formKey</code> must be set.
        <br />
        <br />
        You can freely create validation by changing the value of{' '}
        <code>validator</code>.
      </>
    ),
  },

  //////////////////////////////////////
  // Slider
  WidgetSlider: {
    title: 'Slider Widget Usage and Applications - FlutterGallery',
    0: (
      <>
        The Slider Widget is useful for users to select and adjust values.
        <br />
        Here we explain how to use the Slider Widget provided by Flutter and
        examples of its application.
      </>
    ),
    '1_head': 'Basic Usage',
    1: (
      <>
        <code>Slider</code> consists of a horizontal or vertical bar and a knob
        (handle) to move over it.
        <br />
        The slider can be deactivated by setting the value of{' '}
        <code>onChanged</code> to Null.
      </>
    ),
    '2_head': 'Stepwise',
    2: (
      <>
        <code>divisions</code> allows you to set how many steps you want the
        Slider Widget to have.
        <br />
        The Slider will be divided into the number of divisions you set,
        allowing you to select values in stages.
        <br />
        <br />
        It is also useful to use the <code>label</code> option to indicate what
        value is selected.
      </>
    ),
    '3_head': 'Range Slider',
    3: (
      <>
        To get a certain range of values from the user, <code>RangeSlider</code>{' '}
        can be used.
        <br />
        The difference with Slider is that <code>value</code> and{' '}
        <code>label</code> must be defined using their own class.
        <br />
        <br />
        It should also be noted, though, that the values that can be received{' '}
        <code>onChanged</code> are also changed to <code>RangeValues</code>,
        <br />
        Other than what has been mentioned, there is no significant difference
        in the feel between Slider and RangeSlider.
      </>
    ),
    '4_head': 'Colors',
    4: (
      <>
        <code>activeColor</code>: background and button color below the selected
        value
        <br />
        <code>inactiveColor</code>: background color above the selected value
        <br />
        The Slider Widget allows you to specify colors in detail by changing
        values such as
      </>
    ),
  },

  //////////////////////////////////////
  // Radio
  WidgetRadio: {
    title: 'Radio Widget Usage and Applications - FlutterGallery',
    '0': (
      <>
        Radio Widget is useful when users have multiple or one of several
        options to choose from.
        <br />
        Here we explain how to use the Radio Widget provided by Flutter and
        examples of its applications.
      </>
    ),
    '1_head': 'Basic Usage',
    1: (
      <>
        <code>Radio</code> is a great way to create simple Radio buttons in
        Flutter.
        <br />
        With <code>onChanged</code>, you can get whether the value set in the
        Radio Widget has been selected by the user.
      </>
    ),
    '2_head': 'Label',
    2: (
      <>
        <code>RadioListTile</code> is useful if you want to create radio buttons
        with labels.
        <br />
        You can change the field to disabled by setting the value of{' '}
        <code>onChanged</code> to null.
      </>
    ),
    '3_head': 'Colors',
    3: (
      <>
        By changing the values of <code>activeColor</code>,{' '}
        <code>hoverColor</code>, etc., you can change the color when active or
        hovering.
        <br />
        If you want to change the color more freely, you can use{' '}
        <code>MaterialStateProperty</code>.
      </>
    ),
    4: (
      <>
        To validate input values in the Radio Widget, you can use a{' '}
        <code>FormField</code>.
        <br />
        Note that it must be enclosed in a <code>Form()</code> and the{' '}
        <code>formKey</code> must be set.
      </>
    ),
  },

  //////////////////////////////////////
  // Toggle Button
  WidgetToggleButton: {
    title: 'ToggleButton Widget Usage and Applications - FlutterGallery',
    0: (
      <>
        The ToggleButton Widget is useful when you want the user to select one
        of several options.
        <br />
        Here we explain how to use the ToggleButton Widget provided by Flutter,
        as well as some examples of its application.
      </>
    ),
    '1_head': 'Basic Usage',
    1: (
      <>
        <code>ToggleButtons</code> is an effective way to create simple toggle
        buttons in Flutter.
      </>
    ),
    2: (
      <>
        By adjusting the value that goes into <code>isSelected</code>, you can
        make a single selection.
      </>
    ),
    '3_head': 'Size',
    3: (
      <>
        By adjusting the value of <code>constraints</code>, you can adjust the
        size of the button.
        <br />
        If you want to set the size to the full width, you can use{' '}
        <code>MediaQuery</code> to do so.
      </>
    ),
    '4_head': 'Colors',
    4: (
      <>
        You can adjust the color in detail, such as{' '}
        <code>selectedBorderColor</code>(color of the currently selected
        border).
        <br />
        You can also change <code>borderRadius</code> to adjust the roundness of
        the button.
      </>
    ),
    '5_head': 'Button with icon',
    5: (
      <>
        To improve UX, it is useful to display icons that make it easier to
        understand the meaning of buttons.
        <br />
        <code>Icon()</code> can be used to change the button text to an icon.
      </>
    ),
  },

  //////////////////////////////////////
  // Dialog
  WidgetDialog: {
    title: 'Dialog Widget Usage and Applications - FlutterGallery',
    0: (
      <>
        Dialog Widget is used to display a popup on the screen.
        <br />
        This is useful for displaying important messages such as alerts and
        confirmation messages.
      </>
    ),
    '1_head': 'Basic Usage',
    1: (
      <>
        In Flutter, you can call the Dialog using the <code>showDialog</code>{' '}
        function.
        <br />
        If you want to close the Dialog, you can use{' '}
        <code>Navigator.pop(context)</code> to do so.
      </>
    ),
    '2_head': 'FullScreen',
    2: (
      <>
        To display a full-screen dialog, you can use{' '}
        <code>Dialog.fullscreen</code>.
        <br />
        Note that a "close button" is required to display the dialog in
        fullscreen mode.
      </>
    ),
    3: (
      <>
        <code>AlertDialog</code> is used to alert or confirm users.
        <br />
        It is not highly customizable, but it is simple and easy to use, and is
        useful in situations where user confirmation is required.
      </>
    ),
    '4_head': 'Animation',
    4: (
      <>
        <code>showGeneralDialog</code> is used to implement advanced dialogs or
        to create dialogs with a specific design.
        <br />
        <code>transitionBuilder</code> is a function that controls the animation
        of a dialog when it is shown and hidden, and can implement various
        animations such as scaling and fading.
      </>
    ),
  },

  //////////////////////////////////////
  // Tooltip
  WidgetTooltip: {
    title: 'Tooltip Widgetの使い方と応用例 - Flutter図鑑',
    0: (
      <>
        The Tooltip Widget is used to provide information to the user for a
        specific unit.
        <br />
        This is useful when there is additional information that you wish to
        convey to the user.
      </>
    ),
    '1_head': 'Basic Usage',
    1: (
      <>
        In Flutter, tooltips can be displayed using <code>Tooltip</code>.
        <br />
        Specify any text in <code>message</code> and the widget you wish to
        target in <code>child</code>.
      </>
    ),
    '2_head': 'Position',
    2: (
      <>
        By adjusting the value of <code>verticalOffset</code>, the position of
        the tooltip in the vertical direction can be adjusted.
        <br />
        It is also possible to adjust the left and right directions by adjusting
        the value of <code>margin</code>.
      </>
    ),
    '2_alert': (
      <>
        <AlertTitle>
          Note when Tooltip is displayed on the right or left
        </AlertTitle>
        We have confirmed that <b>onPressed does not fire</b> on buttons
        specified with `child` when `margin` is specified.
        <br />
        If you wish to use this function, please test it thoroughly in your
        environment and consider using it.
        <br />
        <br />
        We are currently investigating a solution to this problem.
      </>
    ),
    '3_head': 'Styling',
    3: (
      <>
        The <code>decoration</code> property can be used to change the style of
        the background color, border, etc.
        <br />
        Various other properties are also available to flexibly change the
        appearance.
      </>
    ),
  },
} as const;

export default en;
