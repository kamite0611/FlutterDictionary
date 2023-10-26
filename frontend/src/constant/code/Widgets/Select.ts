export const WidgetsSelectBasicPCode = `import 'package:flutter/material.dart';

class WidgetsSelectBasic extends StatefulWidget {
  const WidgetsSelectBasic({Key? key}) : super(key: key);

  @override
  _WidgetsSelectBasicState createState() => _WidgetsSelectBasicState();
}

class _WidgetsSelectBasicState extends State<WidgetsSelectBasic> {
  String selectedValue = "Apple";

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 20),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          DropdownButton(
              value: selectedValue,
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
              }),
          const SizedBox(
            width: 20,
          ),
          const DropdownMenu(
            initialSelection: "Red",
            menuHeight: 140,
            dropdownMenuEntries: [
              DropdownMenuEntry(value: "Red", label: "Red"),
              DropdownMenuEntry(value: "Green", label: "Green"),
              DropdownMenuEntry(value: "Blue", label: "Blue"),
            ])
        ],
      ),
    );
  }
}`;

export const WidgetsSelectBasicCode = `DropdownButton(
  value: selectedValue,
  items: const [
    DropdownMenuItem(value: "Apple", child: Text("Apple")),
    DropdownMenuItem(value: "Grape", child: Text("Grape")),
    DropdownMenuItem(value: "Lemon", child: Text("Lemon")),
  ],
),
DropdownMenu(
  initialSelection: "Red",
  dropdownMenuEntries: [
    DropdownMenuEntry(value: "Red", label: "Red"),
    DropdownMenuEntry(value: "Green", label: "Green"),
    DropdownMenuEntry(value: "Blue", label: "Blue"),
  ]
)`;

export const WidgetsSelectBasicDropdownButtonPCode = `import 'package:flutter/material.dart';

class WidgetsSelectBasicDropdownButton extends StatefulWidget {
  const WidgetsSelectBasicDropdownButton({Key? key}) : super(key: key);

  @override
  _WidgetsSelectBasicDropdownButtonState createState() =>
      _WidgetsSelectBasicDropdownButtonState();
}

class _WidgetsSelectBasicDropdownButtonState
    extends State<WidgetsSelectBasicDropdownButton> {
  String selectedValue = "";

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          DropdownButton(
              value: selectedValue,
              hint: const Text("Button"),
              items: const [
                DropdownMenuItem(
                  value: "",
                  child: Text("Disable Select"),
                ),
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
              onChanged: null),
          const SizedBox(
            width: 20,
          ),
          Container(
            decoration: BoxDecoration(
              color: Colors.white,
              border: Border.all(color: Colors.black),
              borderRadius: BorderRadius.circular(10),
            ),
            child: DropdownButton(
                underline: const SizedBox(),
                borderRadius: BorderRadius.circular(10),
                padding: const EdgeInsets.symmetric(horizontal: 10),
                value: selectedValue,
                items: const [
                  DropdownMenuItem(
                    value: "",
                    child: Text(
                      "Outline Select",
                      style: TextStyle(color: Colors.black54),
                    ),
                  ),
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
                }),
          ),
          const SizedBox(
            width: 20,
          ),
          DropdownButton(
              value: selectedValue,
              underline: const SizedBox(),
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 3),
              borderRadius: BorderRadius.circular(10),
              items: const [
                DropdownMenuItem(
                  value: "",
                  child: Text(
                    "Initial Select",
                    style: TextStyle(color: Colors.black54),
                  ),
                ),
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
              })
        ],
      ),
    );
  }
}`;

export const WidgetsSelectBasicDropdownButtonCode = `Container(
  decoration: BoxDecoration(
    color: Colors.white,
    border: Border.all(color: Colors.black),
    borderRadius: BorderRadius.circular(10),
  ),
  child: DropdownButton(
    underline: const SizedBox(),
    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 3),
    borderRadius: BorderRadius.circular(10),
    items: [...]
  ),
),`;

export const WidgetsSelectBasicDropdownMenuPCode = `import 'package:flutter/material.dart';

class WidgetsSelectBasicDropdownMenu extends StatefulWidget {
  const WidgetsSelectBasicDropdownMenu({Key? key}) : super(key: key);

  @override
  _WidgetsSelectBasicDropdownMenuState createState() =>
      _WidgetsSelectBasicDropdownMenuState();
}

class _WidgetsSelectBasicDropdownMenuState
    extends State<WidgetsSelectBasicDropdownMenu> {
  String selectedValue = "";
  final controller = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(color: Colors.white),
      height: double.infinity,
      padding: const EdgeInsets.only(top: 20),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          DropdownMenu(
              label: const Text("Outline"),
              controller: controller,
              menuHeight: 140,
              width: 150,
              textStyle: const TextStyle(color: Colors.blue),
              menuStyle: MenuStyle(
                backgroundColor:
                    MaterialStateProperty.all(Colors.lightBlue[100]),
              ),
              inputDecorationTheme: InputDecorationTheme(
                labelStyle: const TextStyle(color: Colors.blue),
                enabledBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.lightBlue[100]!)),
                focusedBorder: const OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.blue)),
              ),
              dropdownMenuEntries: const [
                DropdownMenuEntry(value: "Apple", label: "Apple"),
                DropdownMenuEntry(value: "Grape", label: "Grape"),
                DropdownMenuEntry(value: "Lemon", label: "Lemon"),
              ]),
          const SizedBox(
            width: 20,
          ),
          DropdownMenu(
              label: const Text("Underline"),
              controller: controller,
              menuHeight: 140,
              width: 150,
              inputDecorationTheme: const InputDecorationTheme(
                border: UnderlineInputBorder(),
              ),
              dropdownMenuEntries: const [
                DropdownMenuEntry(value: "Apple", label: "Apple"),
                DropdownMenuEntry(value: "Grape", label: "Grape"),
                DropdownMenuEntry(value: "Lemon", label: "Lemon"),
              ]),
        ],
      ),
    );
  }
}`;

export const WidgetsSelectBasicDropdownMenuCode = `DropdownMenu(
  label: const Text("Outline"),
  ...
  inputDecorationTheme: InputDecorationTheme(
    labelStyle: const TextStyle(color: Colors.blue),
    enabledBorder: OutlineInputBorder(
        borderSide: BorderSide(color: Colors.lightBlue[100]!)),
    focusedBorder: const OutlineInputBorder(
        borderSide: BorderSide(color: Colors.blue)),
  ),
  dropdownMenuEntries: const [
    DropdownMenuEntry(value: "Apple", label: "Apple"),
    DropdownMenuEntry(value: "Grape", label: "Grape"),
    DropdownMenuEntry(value: "Lemon", label: "Lemon"),
  ]
),`;

export const WidgetsSelectValidationPCode = `import 'package:flutter/material.dart';

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
}`;

export const WidgetsSelectValidationCode = `final _formKey = GlobalKey<FormState>();
Form(
  key: _formKey,
  child: DropdownButtonFormField(
    value: selectedValue,
    validator: (value) {
      if (value == "Apple") return "Apple is error!";
      return null;
    },
    ...
  ),
),`;
