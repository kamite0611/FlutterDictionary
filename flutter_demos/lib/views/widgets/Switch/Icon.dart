import 'package:flutter/material.dart';

class WidgetsSwitchIcon extends StatefulWidget {
  const WidgetsSwitchIcon({Key? key}) : super(key: key);

  @override
  _WidgetsSwitchIconState createState() => _WidgetsSwitchIconState();
}

class _WidgetsSwitchIconState extends State<WidgetsSwitchIcon> {
  bool isChecked = false;

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
          },
          thumbIcon: MaterialStateProperty.resolveWith((states) {
            if (states.contains(MaterialState.selected)) {
              return const Icon(Icons.check);
            }
            return const Icon(Icons.close);
          }),
        )
      ],
    ));
  }
}
