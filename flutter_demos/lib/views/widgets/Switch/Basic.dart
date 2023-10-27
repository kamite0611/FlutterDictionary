import 'package:flutter/material.dart';

class WidgetsSwitchBasic extends StatefulWidget {
  const WidgetsSwitchBasic({Key? key}) : super(key: key);

  @override
  _WidgetsSwitchBasicState createState() => _WidgetsSwitchBasicState();
}

class _WidgetsSwitchBasicState extends State<WidgetsSwitchBasic> {
  bool isChecked = true;

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Row(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Switch(
            value: isChecked,
            onChanged: (value) {
              setState(() {
                isChecked = value;
              });
            }),
        Switch(value: isChecked, onChanged: null)
      ],
    ));
  }
}
