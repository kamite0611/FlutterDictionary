import 'package:flutter/material.dart';

class WidgetsRadioBasic extends StatefulWidget {
  const WidgetsRadioBasic({Key? key}) : super(key: key);

  @override
  _WidgetsRadioBasicState createState() => _WidgetsRadioBasicState();
}

enum RadioValue { apple, grape, lemon }

class _WidgetsRadioBasicState extends State<WidgetsRadioBasic> {
  RadioValue? selectedValue = RadioValue.apple;

  @override
  Widget build(BuildContext context) {
    return Center(
        child: SizedBox(
      width: 160,
      child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
        ListTile(
          title: const Text("Apple"),
          leading: Radio(
              value: RadioValue.apple,
              groupValue: selectedValue,
              onChanged: (val) {
                setState(() {
                  selectedValue = val;
                });
              }),
        ),
        ListTile(
          title: const Text("Grape"),
          leading: Radio(
              value: RadioValue.grape,
              groupValue: selectedValue,
              onChanged: (val) {
                setState(() {
                  selectedValue = val;
                });
              }),
        ),
        ListTile(
          title: const Text(
            "Lemon",
            style: TextStyle(color: Colors.black54),
          ),
          leading: Radio(
              value: RadioValue.lemon,
              groupValue: selectedValue,
              onChanged: null),
        ),
      ]),
    ));
  }
}
