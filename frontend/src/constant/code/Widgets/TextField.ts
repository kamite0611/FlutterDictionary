export const WidgetsTextFieldBasicPCode = `import 'package:flutter/material.dart';

class WidgetsTextFieldBasic extends StatelessWidget {
  const WidgetsTextFieldBasic({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            SizedBox(
              width: 200,
              child: TextField(
                decoration: InputDecoration(labelText: "Standard Field"),
              ),
            ),
            SizedBox(
              width: 20,
            ),
            SizedBox(
              width: 200,
              child: TextField(
                decoration: InputDecoration(
                    border: OutlineInputBorder(), labelText: "Outlined Field"),
              ),
            ),
          ]),
    );
  }
}`;

export const WidgetsTextFieldBasicCode = `TextField(
  decoration: InputDecoration(labelText: "Standard Field"),
),
TextField(
  decoration: InputDecoration(
      border: OutlineInputBorder(), labelText: "Outlined Field"),
),`;

export const WidgetsTextFieldColorsPCode = `import 'package:flutter/material.dart';

class WidgetsTextFieldColors extends StatelessWidget {
  const WidgetsTextFieldColors({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            SizedBox(
              width: 200,
              child: TextField(
                decoration: InputDecoration(
                    labelStyle: TextStyle(color: Colors.orange),
                    enabledBorder: UnderlineInputBorder(
                        borderSide: BorderSide(color: Colors.orange)),
                    focusedBorder: UnderlineInputBorder(
                        borderSide: BorderSide(color: Colors.orange)),
                    labelText: "Standard Field"),
              ),
            ),
            SizedBox(
              width: 20,
            ),
            SizedBox(
              width: 200,
              child: TextField(
                decoration: InputDecoration(
                    labelStyle: TextStyle(color: Colors.green),
                    enabledBorder: OutlineInputBorder(
                        borderSide: BorderSide(color: Colors.green)),
                    focusedBorder: OutlineInputBorder(
                        borderSide: BorderSide(color: Colors.green)),
                    labelText: "Outlined Field"),
              ),
            ),
          ]),
    );
  }
}`;

export const WidgetsTextFieldColorsCode = `TextField(
  decoration: InputDecoration(
      labelStyle: TextStyle(color: Colors.green),
      enabledBorder: OutlineInputBorder(
          borderSide: BorderSide(color: Colors.green)),
      focusedBorder: OutlineInputBorder(
          borderSide: BorderSide(color: Colors.green)),
      labelText: "Outlined Field"),
),`;

export const WidgetsTextFieldValidationsPCode = `import 'package:flutter/material.dart';

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
}`;

export const WidgetsTextFieldValidationsCode = `final _formKey = GlobalKey<FormState>();
Form(
  key: _formKey,
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
)`;

export const WidgetsTextFieldFormControlPCode = `import 'package:flutter/material.dart';

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
                    // Please change your function
                    setState(() {
                      textValue = textController.text;
                    });
                  },
                  child: const Text("submit"))
            ]),
      ],
    ));
  }
}`;

export const WidgetsTextFieldFormControlCode = `final textController = TextEditingController(text: "default value");
TextField(
  controller: textController,
  decoration: const InputDecoration(
    border: OutlineInputBorder(),
    labelText: "Control Field",
  ),
),`;
