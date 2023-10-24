import 'package:flutter/material.dart';

class WidgetsTextFieldValidations extends StatefulWidget {
  const WidgetsTextFieldValidations({Key? key}) : super(key: key);

  @override
  _WidgetsTextFieldValidationsState createState() =>
      _WidgetsTextFieldValidationsState();
}

class _WidgetsTextFieldValidationsState
    extends State<WidgetsTextFieldValidations> {
  final _formKey = GlobalKey<FormState>();
  bool isValidText = false;

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
          child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                SizedBox(
                  width: 200,
                  child: TextFormField(
                    onChanged: (text) {
                      _formKey.currentState!.validate();
                    },
                    initialValue: "Hello World",
                    validator: (value) {
                      if (value == "Hello World") {
                        return "Error!";
                      }
                      return null;
                    },
                    decoration: const InputDecoration(
                      labelText: "Error Field",
                    ),
                  ),
                ),
                const SizedBox(
                  width: 20,
                ),
                SizedBox(
                  width: 200,
                  child: TextFormField(
                    initialValue: "Hello World",
                    onChanged: (text) {
                      _formKey.currentState!.validate();
                    },
                    validator: (value) {
                      if (value == "Hello World") {
                        setState(() {
                          isValidText = true;
                        });
                        return "Error!";
                      }
                      setState(() {
                        isValidText = false;
                      });
                      return null;
                    },
                    decoration: InputDecoration(
                        errorStyle: const TextStyle(color: Colors.orange),
                        labelStyle: TextStyle(
                            color: isValidText ? Colors.orange : Colors.green),
                        focusedBorder: const OutlineInputBorder(
                            borderSide: BorderSide(color: Colors.green)),
                        enabledBorder: const OutlineInputBorder(
                            borderSide: BorderSide(color: Colors.green)),
                        errorBorder: const OutlineInputBorder(
                            borderSide: BorderSide(color: Colors.orange)),
                        focusedErrorBorder: const OutlineInputBorder(
                            borderSide: BorderSide(color: Colors.orange)),
                        labelText: "Outlined Field"),
                  ),
                ),
              ]),
        ));
  }
}
