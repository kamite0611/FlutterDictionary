import 'package:flutter/material.dart';
import 'package:flutter_demos/views/widgets/Button/BasicButton.dart';
import 'package:flutter_demos/views/widgets/Button/BasicElevatedButton.dart';
import 'package:flutter_demos/views/widgets/Button/BasicOutlinedButton.dart';
import 'package:flutter_demos/views/widgets/Button/BasicTextButton.dart';

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
        fontFamily: "NotoSansJP",
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
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
