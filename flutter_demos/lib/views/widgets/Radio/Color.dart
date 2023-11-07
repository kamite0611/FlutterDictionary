import 'package:flutter/material.dart';

class WidgetsRadioColor extends StatefulWidget {
  const WidgetsRadioColor({Key? key}) : super(key: key);

  @override
  _WidgetsRadioColorState createState() => _WidgetsRadioColorState();
}

enum RadioValue { apple, grape, lemon, orange }

class _WidgetsRadioColorState extends State<WidgetsRadioColor> {
  RadioValue? selectedValue = RadioValue.apple;

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Row(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Radio(
            activeColor: Colors.red,
            hoverColor: Colors.red[50],
            value: RadioValue.apple,
            groupValue: selectedValue,
            onChanged: (val) {
              setState(() {
                selectedValue = val;
              });
            }),
        const SizedBox(
          width: 10,
        ),
        Radio(
            hoverColor: Colors.orange[50],
            activeColor: Colors.orange,
            value: RadioValue.grape,
            groupValue: selectedValue,
            onChanged: (val) {
              setState(() {
                selectedValue = val;
              });
            }),
        const SizedBox(
          width: 10,
        ),
        Radio(
            hoverColor: Colors.green[50],
            fillColor: MaterialStateProperty.all(Colors.green),
            value: RadioValue.lemon,
            groupValue: selectedValue,
            onChanged: (val) {
              setState(() {
                selectedValue = val;
              });
            }),
        const SizedBox(
          width: 10,
        ),
        Radio(
            hoverColor: Colors.blue[50],
            fillColor: MaterialStateProperty.all(Colors.blue),
            value: RadioValue.orange,
            groupValue: selectedValue,
            onChanged: (val) {
              setState(() {
                selectedValue = val;
              });
            }),
      ],
    ));
  }
}
