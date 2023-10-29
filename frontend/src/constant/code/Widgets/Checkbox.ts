export const WidgetsCheckboxBasicPCode = `import 'package:flutter/material.dart';

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
}`;

export const WidgetsCheckboxBasicCode = `Checkbox(
  value: isChecked,
  onChanged: (val) {
    if (val == null) return;
    setState(() {
      isChecked = val;
    });
  }
),
Checkbox(
  value: isChecked, 
  onChanged: null
)`;

export const WidgetsCheckboxLabelPCode = `import 'package:flutter/material.dart';

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
}`;

export const WidgetsCheckboxLabelCode = `SizedBox(
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
),`;

export const WidgetsCheckboxColorPCode = `import 'package:flutter/material.dart';

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
}`;

export const WidgetsCheckboxColorCode = `Checkbox(
  activeColor: Colors.blue,
  hoverColor: Colors.blue[50],
  value: isChecked,
  onChanged: (value) {
    if (value == null) return;
    setState(() {
      isChecked = value;
    });
  }
),`;

export const WidgetsCheckboxValidatePCode = `import 'package:flutter/material.dart';

class WidgetsCheckboxValidate extends StatefulWidget {
  const WidgetsCheckboxValidate({Key? key}) : super(key: key);

  @override
  _WidgetsCheckboxValidateState createState() =>
      _WidgetsCheckboxValidateState();
}

class _WidgetsCheckboxValidateState extends State<WidgetsCheckboxValidate> {
  final _formKey = GlobalKey<FormState>();

  // NOTE: Run validation when mounted.
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _formKey.currentState!.validate();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Center(
          child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
            FormField(
                autovalidateMode: AutovalidateMode.always,
                initialValue: false,
                validator: (value) {
                  if (value == false) {
                    return "You need to accept terms!";
                  }
                  return null;
                },
                builder: (FormFieldState<bool> state) {
                  return SizedBox(
                    width: 300,
                    child: CheckboxListTile(
                        title: const Text("Agree Terms os Service"),
                        subtitle: state.hasError
                            ? Text(
                                state.errorText!,
                                style: const TextStyle(color: Colors.red),
                              )
                            : const SizedBox(),
                        value: state.value,
                        onChanged: (val) {
                          state.didChange(val);
                        }),
                  );
                })
          ])),
    );
  }
}`;

export const WidgetsCheckboxValidateCode = `FormField(
  autovalidateMode: AutovalidateMode.always,
  initialValue: false,
  validator: (value) {
    if (value != true) {
      return "You need to accept terms!";
    }
    return null;
  },
  builder: (FormFieldState<bool> state) {
    return SizedBox(
      width: 300,
      child: CheckboxListTile(
          title: const Text("Agree Terms os Service"),
          subtitle: state.hasError
              ? Text(
                  state.errorText!,
                  style: const TextStyle(color: Colors.red),
                )
              : const SizedBox(),
          value: state.value,
          onChanged: (val) {
            state.didChange(val);
          }),
    );
  }
)`;
