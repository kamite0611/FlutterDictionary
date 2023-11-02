import 'package:flutter/material.dart';
import 'package:flutter_demos/views/widgets/Button/BasicButton.dart';
import 'package:flutter_demos/views/widgets/Button/BasicElevatedButton.dart';
import 'package:flutter_demos/views/widgets/Button/BasicOutlinedButton.dart';
import 'package:flutter_demos/views/widgets/Button/BasicTextButton.dart';
import 'package:flutter_demos/views/widgets/Button/IconWithTextButton.dart';
import 'package:flutter_demos/views/widgets/Button/SizeButton.dart';
import 'package:flutter_demos/views/widgets/Checkbox/Basic.dart';
import 'package:flutter_demos/views/widgets/Checkbox/Color.dart';
import 'package:flutter_demos/views/widgets/Checkbox/Label.dart';
import 'package:flutter_demos/views/widgets/Checkbox/Size.dart';
import 'package:flutter_demos/views/widgets/Radio/Basic.dart';
import 'package:flutter_demos/views/widgets/Select/Basic.dart';
import 'package:flutter_demos/views/widgets/Select/BasicDropdownButton.dart';
import 'package:flutter_demos/views/widgets/Select/BasicDropdownMenu.dart';
import 'package:flutter_demos/views/widgets/Select/Validation.dart';
import 'package:flutter_demos/views/widgets/Slider/Basic.dart';
import 'package:flutter_demos/views/widgets/Slider/Color.dart';
import 'package:flutter_demos/views/widgets/Slider/Range.dart';
import 'package:flutter_demos/views/widgets/Slider/Stepwise.dart';
import 'package:flutter_demos/views/widgets/Switch/Basic.dart';
import 'package:flutter_demos/views/widgets/Switch/Label.dart';
import 'package:flutter_demos/views/widgets/Switch/Color.dart';
import 'package:flutter_demos/views/widgets/Switch/Icon.dart';
import 'package:flutter_demos/views/widgets/TextField/Basic.dart';
import 'package:flutter_demos/views/widgets/TextField/Colors.dart';
import 'package:flutter_demos/views/widgets/TextField/FormControl.dart';
import 'package:flutter_demos/views/widgets/TextField/Validations.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return const Material3App();
  }
}

class Route {
  final String path;
  final Widget widget;
  const Route({required this.path, required this.widget});
}

const List<Route> routes = [
  Route(path: "/", widget: SizedBox()),
  // Buttons
  Route(
      path: "/widgets/Button/BasicButton", widget: WidgetsButtonBasicButton()),
  Route(
      path: "/widgets/Button/BasicTextButton",
      widget: WidgetsButtonBasicTextButton()),
  Route(
      path: "/widgets/Button/BasicOutlinedButton",
      widget: WidgetsButtonBasicOutlinedButton()),
  Route(
      path: "/widgets/Button/BasicElevatedButton",
      widget: WidgetsButtonBasicElevatedButton()),
  Route(path: "/widgets/Button/SizeButton", widget: WidgetsButtonSizeButton()),
  Route(
      path: "/widgets/Button/IconWithTextButton",
      widget: WidgetsButtonIconWithTextButton()),

  // TextFields
  Route(path: "/widgets/TextField/Basic", widget: WidgetsTextFieldBasic()),
  Route(path: "/widgets/TextField/Colors", widget: WidgetsTextFieldColors()),
  Route(
      path: "/widgets/TextField/Validations",
      widget: WidgetsTextFieldValidations()),
  Route(
      path: "/widgets/TextField/FormControl",
      widget: WidgetsTextFieldFormControl()),

  // Select
  Route(path: "/widgets/Select/Basic", widget: WidgetsSelectBasic()),
  Route(
      path: "/widgets/Select/BasicDropdownButton",
      widget: WidgetsSelectBasicDropdownButton()),
  Route(
      path: "/widgets/Select/BasicDropdownMenu",
      widget: WidgetsSelectBasicDropdownMenu()),
  Route(path: "/widgets/Select/Validation", widget: WidgetsSelectValidation()),

  // Switch
  Route(path: "/widgets/Switch/Basic", widget: WidgetsSwitchBasic()),
  Route(path: "/widgets/Switch/Label", widget: WidgetsSwitchLabel()),
  Route(path: "/widgets/Switch/Color", widget: WidgetsSwitchColor()),
  Route(path: "/widgets/Switch/Icon", widget: WidgetsSwitchIcon()),

  // Checkbox
  Route(path: "/widgets/Checkbox/Basic", widget: WidgetsCheckboxBasic()),
  Route(path: "/widgets/Checkbox/Label", widget: WidgetsCheckboxLabel()),
  Route(path: "/widgets/Checkbox/Color", widget: WidgetsCheckboxColor()),
  Route(path: "/widgets/Checkbox/Validate", widget: WidgetsCheckboxValidate()),

  // Slider
  Route(path: "/widgets/Slider/Basic", widget: WidgetsSliderBasic()),
  Route(path: "/widgets/Slider/Stepwise", widget: WidgetsSliderStepwise()),
  Route(path: "/widgets/Slider/Range", widget: WidgetsSliderRange()),
  Route(path: "/widgets/Slider/Color", widget: WidgetsSliderColor()),

  // Radio
  Route(path: "/widgets/Radio/Basic", widget: WidgetsRadioBasic()),
];

class Material3App extends StatelessWidget {
  const Material3App({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    String path = Uri.base.queryParameters["path"] ?? "/";

    final currentRoute = routes.firstWhere((element) => element.path == path);

    return MaterialApp(
        title: 'Flutter Demo',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          useMaterial3: true,
          fontFamily: "NotoSansJP",
        ),
        home: Scaffold(
          backgroundColor: Colors.white,
          body: currentRoute.widget,
        ));
  }
}
