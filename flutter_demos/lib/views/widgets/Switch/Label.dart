import 'package:flutter/material.dart';

class WidgetsSwitchLabel extends StatefulWidget {
  const WidgetsSwitchLabel({Key? key}) : super(key: key);

  @override
  _WidgetsSwitchLabelState createState() => _WidgetsSwitchLabelState();
}

class _WidgetsSwitchLabelState extends State<WidgetsSwitchLabel> {
  bool isChecked = true;

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Row(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        SizedBox(
          width: 300,
          child: SwitchListTile(
            title: const Text("Notification"),
            subtitle: const Text("Allow notifications"),
            secondary: const SizedBox(
              width: 40,
              height: 80,
              child: Icon(Icons.notifications_none_rounded),
            ),
            value: isChecked,
            onChanged: (value) {
              setState(() {
                isChecked = value;
              });
            },
          ),
        ),
      ],
    ));
  }
}
