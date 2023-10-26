import 'package:flutter/material.dart';

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
}
