import 'package:flutter/material.dart';

class WidgetsSwitchColor extends StatefulWidget {
  const WidgetsSwitchColor({Key? key}) : super(key: key);

  @override
  _WidgetsSwitchColorState createState() => _WidgetsSwitchColorState();
}

class _WidgetsSwitchColorState extends State<WidgetsSwitchColor> {
  bool isChecked = true;

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Row(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Switch(
            activeTrackColor: Colors.amber[800],
            inactiveTrackColor: Colors.amber[200],
            value: isChecked,
            onChanged: (value) {
              setState(() {
                isChecked = value;
              });
            }),
        Switch(
            activeTrackColor: Colors.blue[800],
            inactiveTrackColor: Colors.blue[200],
            value: isChecked,
            onChanged: (value) {
              setState(() {
                isChecked = value;
              });
            }),
        Switch(
            activeTrackColor: Colors.green[800],
            inactiveTrackColor: Colors.green[200],
            value: isChecked,
            onChanged: (value) {
              setState(() {
                isChecked = value;
              });
            }),
        Switch(
            activeTrackColor: Colors.purple[800],
            inactiveTrackColor: Colors.purple[200],
            value: isChecked,
            onChanged: (value) {
              setState(() {
                isChecked = value;
              });
            }),
      ],
    ));
  }
}
