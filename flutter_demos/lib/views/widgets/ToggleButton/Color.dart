import 'package:flutter/material.dart';

class WidgetsToggleButtonColor extends StatefulWidget {
  const WidgetsToggleButtonColor({Key? key}) : super(key: key);

  @override
  _WidgetsToggleButtonColorState createState() =>
      _WidgetsToggleButtonColorState();
}

class _WidgetsToggleButtonColorState extends State<WidgetsToggleButtonColor> {
  final List<bool> selected = [true, false, false];

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
      ToggleButtons(
        isSelected: selected,
        color: Colors.red,
        fillColor: Colors.red[300],
        borderColor: Colors.red[100],
        splashColor: Colors.red[300],
        selectedBorderColor: Colors.red[800],
        selectedColor: Colors.white,
        borderRadius: const BorderRadius.all(Radius.circular(10)),
        constraints: const BoxConstraints(minWidth: 100, minHeight: 40),
        onPressed: (int index) {
          setState(() {
            selected[index] = !selected[index];
          });
        },
        children: const [Text("Apple"), Text("Grape"), Text("Banana")],
      ),
      const SizedBox(
        height: 10,
      ),
      ToggleButtons(
        isSelected: selected,
        color: Colors.blue,
        fillColor: Colors.blue[300],
        borderColor: Colors.blue[100],
        splashColor: Colors.blue[300],
        selectedBorderColor: Colors.blue[800],
        selectedColor: Colors.white,
        borderRadius: const BorderRadius.all(Radius.circular(10)),
        constraints: const BoxConstraints(minWidth: 100, minHeight: 40),
        onPressed: (int index) {
          setState(() {
            selected[index] = !selected[index];
          });
        },
        children: const [Text("Apple"), Text("Grape"), Text("Banana")],
      ),
      const SizedBox(
        height: 10,
      ),
      ToggleButtons(
        isSelected: selected,
        color: Colors.green,
        fillColor: Colors.green[300],
        borderColor: Colors.green[100],
        splashColor: Colors.green[300],
        selectedBorderColor: Colors.green[800],
        selectedColor: Colors.white,
        borderRadius: const BorderRadius.all(Radius.circular(10)),
        constraints: const BoxConstraints(minWidth: 100, minHeight: 40),
        onPressed: (int index) {
          setState(() {
            selected[index] = !selected[index];
          });
        },
        children: const [Text("Apple"), Text("Grape"), Text("Banana")],
      ),
    ]));
  }
}
