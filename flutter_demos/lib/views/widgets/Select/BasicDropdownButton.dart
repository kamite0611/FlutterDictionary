import 'package:flutter/material.dart';

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
}
