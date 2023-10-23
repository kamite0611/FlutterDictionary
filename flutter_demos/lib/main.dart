import 'package:flutter/material.dart';
import 'package:flutter_demos/views/widgets/Button/BasicButton.dart';
import 'package:flutter_demos/views/widgets/Button/BasicElevatedButton.dart';
import 'package:flutter_demos/views/widgets/Button/BasicOutlinedButton.dart';
import 'package:flutter_demos/views/widgets/Button/BasicTextButton.dart';
import 'package:flutter_demos/views/widgets/Button/IconWithTextButton.dart';
import 'package:flutter_demos/views/widgets/Button/SizeButton.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: false,
        fontFamily: "NotoSansJP",
        primaryColor: Colors.blue,
      ),
      home: const MyHomePage(),
    );
  }
}

class Route {
  final String path;
  final Widget widget;
  const Route({required this.path, required this.widget});
}

const List<Route> routes = [
  Route(path: "/", widget: SizedBox()),
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
];

class MyHomePage extends StatelessWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    String path = Uri.base.queryParameters["path"] ?? "/";

    final currentRoute = routes.firstWhere((element) => element.path == path);

    return Scaffold(
      body: currentRoute.widget,
    );
  }
}
