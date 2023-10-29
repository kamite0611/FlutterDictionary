import 'package:flutter/material.dart';

class WidgetsCheckboxLabel extends StatefulWidget {
  const WidgetsCheckboxLabel({Key? key}) : super(key: key);

  @override
  _WidgetsCheckboxLabelState createState() => _WidgetsCheckboxLabelState();
}

class _WidgetsCheckboxLabelState extends State<WidgetsCheckboxLabel> {
  bool isChecked = true;

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        SizedBox(
          width: 300,
          child: CheckboxListTile(
            title: const Text("Label"),
            value: isChecked,
            onChanged: (value) {
              if (value == null) return;
              setState(() {
                isChecked = value;
              });
            },
          ),
        ),
        SizedBox(
          width: 300,
          child: CheckboxListTile(
              title: const Text("Disable Checkbox"),
              value: isChecked,
              onChanged: null),
        ),
        SizedBox(
          width: 300,
          child: CheckboxListTile(
            title: const Text("Label"),
            subtitle: const Text("Label with description"),
            value: isChecked,
            onChanged: (value) {
              if (value == null) return;
              setState(() {
                isChecked = value;
              });
            },
          ),
        ),
        SizedBox(
          width: 300,
          child: CheckboxListTile(
            title: const Text("IconLabel"),
            subtitle: const Text("Label with description"),
            secondary: const Icon(Icons.notifications_none_rounded),
            value: isChecked,
            onChanged: (value) {
              if (value == null) return;
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
