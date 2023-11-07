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

export const WidgetsRadioColorPCode = `import 'package:flutter/material.dart';

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
}`;

export const WidgetsRadioColorCode = `Radio(
  activeColor: Colors.red,
  hoverColor: Colors.red[50],
  value: RadioValue.apple,
  groupValue: selectedValue,
  onChanged: (val) {
    setState(() {
      selectedValue = val;
    });
  }),`;

export const WidgetsRadioValidationPCode = `import 'package:flutter/material.dart';

class WidgetsRadioValidation extends StatefulWidget {
  const WidgetsRadioValidation({Key? key}) : super(key: key);

  @override
  _WidgetsRadioValidationState createState() => _WidgetsRadioValidationState();
}

enum RadioValue { apple, grape, lemon, orange }

class _WidgetsRadioValidationState extends State<WidgetsRadioValidation> {
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Center(
          child: FormField(
              autovalidateMode: AutovalidateMode.always,
              initialValue: RadioValue.apple,
              validator: (value) {
                if (value == RadioValue.apple) {
                  return "Apple is Error!";
                }
                return null;
              },
              builder: (FormFieldState<RadioValue> state) {
                return Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      SizedBox(
                        width: 300,
                        child: RadioListTile(
                            title: const Text("Apple (Error)"),
                            subtitle: state.hasError
                                ? Text(
                                    state.errorText!,
                                    style: const TextStyle(color: Colors.red),
                                  )
                                : null,
                            value: RadioValue.apple,
                            groupValue: state.value,
                            onChanged: (val) {
                              state.didChange(val);
                            }),
                      ),
                      SizedBox(
                        width: 300,
                        child: RadioListTile(
                            title: const Text("Grape"),
                            value: RadioValue.grape,
                            groupValue: state.value,
                            onChanged: (val) {
                              state.didChange(val);
                            }),
                      ),
                    ]);
              })),
    );
  }
}`;

export const WidgetsRadioValidationCode = `FormField(
  autovalidateMode: AutovalidateMode.always,
  initialValue: RadioValue.apple,
  validator: (value) {
    if (value == RadioValue.apple) {
      return "Apple is Error!";
    }
    return null;
  },
  builder: (FormFieldState<RadioValue> state) {
    return  RadioListTile(
      ...
    )
  }
)`;
