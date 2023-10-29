import 'package:flutter/material.dart';

class WidgetsCheckboxBasic extends StatefulWidget {
  const WidgetsCheckboxBasic({Key? key}) : super(key: key);

  @override
  _WidgetsCheckboxBasicState createState() => _WidgetsCheckboxBasicState();
}

class _WidgetsCheckboxBasicState extends State<WidgetsCheckboxBasic> {
  bool isChecked = true;

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Row(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Checkbox(
            value: isChecked,
            onChanged: (val) {
              if (val == null) return;
              setState(() {
                isChecked = val;
              });
            }),
        const SizedBox(
          width: 10,
        ),
        Checkbox(value: isChecked, onChanged: null)
      ],
    ));
  }
}
