import 'package:flutter/material.dart';

class WidgetsTextFieldFormControl extends StatefulWidget {
  const WidgetsTextFieldFormControl({Key? key}) : super(key: key);

  @override
  _WidgetsTextFieldFormControlState createState() =>
      _WidgetsTextFieldFormControlState();
}

class _WidgetsTextFieldFormControlState
    extends State<WidgetsTextFieldFormControl> {
  String textValue = "";
  final textController = TextEditingController(text: "default value");

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        textValue.isEmpty
            ? const SizedBox(height: 20)
            : Text('value is "$textValue"'),
        const SizedBox(
          height: 20,
        ),
        Row(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              SizedBox(
                width: 200,
                child: TextField(
                  controller: textController,
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                    labelText: "Control Field",
                  ),
                ),
              ),
              const SizedBox(
                width: 20,
              ),
              ElevatedButton(
                  onPressed: () {
                    // plz change any submit functions
                    setState(() {
                      textValue = textController.text;
                    });
                  },
                  child: const Text("submit"))
            ]),
      ],
    ));
  }
}
