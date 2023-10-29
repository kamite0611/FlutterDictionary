import 'package:flutter/material.dart';

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
                })
          ])),
    );
  }
}
