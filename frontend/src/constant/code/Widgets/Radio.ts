export const WidgetsRadioBasicPCode = `import 'package:flutter/material.dart';

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
      width: 140,
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
}`;

export const WidgetsRadioBasicCode = `enum RadioValue { apple, grape, lemon }
RadioValue? selectedValue = RadioValue.apple;

return Radio(
  value: RadioValue.apple,
  groupValue: selectedValue,
  onChanged: (val) {
    setState(() {
      selectedValue = val;
    });
  }
),`;

export const WidgetsRadioLabelPCode = `import 'package:flutter/material.dart';

class WidgetsRadioLabel extends StatefulWidget {
  const WidgetsRadioLabel({Key? key}) : super(key: key);

  @override
  _WidgetsRadioLabelState createState() => _WidgetsRadioLabelState();
}

enum RadioValue { apple, grape, lemon, orange }

class _WidgetsRadioLabelState extends State<WidgetsRadioLabel> {
  RadioValue? selectedValue = RadioValue.apple;

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        SizedBox(
          width: 300,
          child: RadioListTile(
              title: const Text("Label"),
              value: RadioValue.apple,
              groupValue: selectedValue,
              onChanged: (val) {
                setState(() {
                  selectedValue = val;
                });
              }),
        ),
        SizedBox(
          width: 300,
          child: RadioListTile(
              title: const Text("Disable Radio"),
              value: RadioValue.grape,
              groupValue: selectedValue,
              onChanged: null),
        ),
        SizedBox(
          width: 300,
          child: RadioListTile(
              title: const Text("Label"),
              subtitle: const Text("Label with description"),
              value: RadioValue.lemon,
              groupValue: selectedValue,
              onChanged: (val) {
                setState(() {
                  selectedValue = val;
                });
              }),
        ),
        SizedBox(
          width: 300,
          child: RadioListTile(
              title: const Text("IconLabel"),
              subtitle: const Text("Label with description"),
              secondary: const Icon(Icons.notifications_none_rounded),
              value: RadioValue.orange,
              groupValue: selectedValue,
              onChanged: (val) {
                setState(() {
                  selectedValue = val;
                });
              }),
        ),
      ],
    ));
  }
}`;

export const WidgetsRadioLabelCode = `RadioListTile(
  title: const Text("Label"),
  value: RadioValue.apple,
  groupValue: selectedValue,
  onChanged: (val) {
    setState(() {
      selectedValue = val;
    });
  }
),`;
