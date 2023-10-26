import 'package:flutter/material.dart';

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
      decoration: const BoxDecoration(color: Color.fromARGB(1, 250, 250, 250)),
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
}
