import 'package:flutter/material.dart';

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
}
