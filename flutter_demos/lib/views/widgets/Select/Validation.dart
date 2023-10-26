import 'package:flutter/material.dart';

class WidgetsSelectValidation extends StatefulWidget {
  const WidgetsSelectValidation({Key? key}) : super(key: key);

  @override
  _WidgetsSelectValidationState createState() =>
      _WidgetsSelectValidationState();
}

class _WidgetsSelectValidationState extends State<WidgetsSelectValidation> {
  final _formKey = GlobalKey<FormState>();
  String selectedValue = "Apple";

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
          child: SizedBox(
            width: 200,
            child: DropdownButtonFormField(
                value: selectedValue,
                validator: (value) {
                  if (value == "Apple") return "Apple is error!";
                  return null;
                },
                decoration: const InputDecoration(
                  labelText: 'Validation',
                ),
                hint: const Text("Button"),
                items: const [
                  DropdownMenuItem(
                    value: "Apple",
                    child: Text("Apple"),
                  ),
                  DropdownMenuItem(
                    value: "Grape",
                    child: Text("Grape"),
                  ),
                  DropdownMenuItem(
                    value: "Lemon",
                    child: Text("Lemon"),
                  ),
                ],
                onChanged: (txt) {
                  if (txt == null) return;
                  setState(() {
                    selectedValue = txt;
                  });
                  _formKey.currentState!.validate();
                }),
          ),
        ));
  }
}
