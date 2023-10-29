import 'package:flutter/material.dart';

class WidgetsCheckboxColor extends StatefulWidget {
  const WidgetsCheckboxColor({Key? key}) : super(key: key);

  @override
  _WidgetsCheckboxColorState createState() => _WidgetsCheckboxColorState();
}

class _WidgetsCheckboxColorState extends State<WidgetsCheckboxColor> {
  bool isChecked = true;

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Row(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Checkbox(
            activeColor: Colors.amber,
            hoverColor: Colors.amber[50],
            value: isChecked,
            onChanged: (value) {
              if (value == null) return;
              setState(() {
                isChecked = value;
              });
            }),
        const SizedBox(
          width: 10,
        ),
        Checkbox(
            activeColor: Colors.blue,
            hoverColor: Colors.blue[50],
            value: isChecked,
            onChanged: (value) {
              if (value == null) return;
              setState(() {
                isChecked = value;
              });
            }),
        const SizedBox(
          width: 10,
        ),
        Checkbox(
            activeColor: Colors.green,
            hoverColor: Colors.green[50],
            value: isChecked,
            onChanged: (value) {
              if (value == null) return;
              setState(() {
                isChecked = value;
              });
            }),
        const SizedBox(
          width: 10,
        ),
        Checkbox(
            activeColor: Colors.red,
            hoverColor: Colors.red[50],
            value: isChecked,
            onChanged: (value) {
              if (value == null) return;
              setState(() {
                isChecked = value;
              });
            }),
      ],
    ));
  }
}
