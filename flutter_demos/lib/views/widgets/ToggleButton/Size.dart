import 'package:flutter/material.dart';

class WidgetsToggleButtonSize extends StatefulWidget {
  const WidgetsToggleButtonSize({Key? key}) : super(key: key);

  @override
  _WidgetsToggleButtonSizeState createState() =>
      _WidgetsToggleButtonSizeState();
}

class _WidgetsToggleButtonSizeState extends State<WidgetsToggleButtonSize> {
  final List<bool> selected = [true, false, false, false];

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
      ToggleButtons(
        isSelected: selected,
        constraints: const BoxConstraints(
          minHeight: 40,
          minWidth: 40,
        ),
        onPressed: (int index) {
          setState(() {
            selected[index] = !selected[index];
          });
        },
        children: const [Text("S"), Text("M"), Text("L"), Text("XL")],
      ),
      const SizedBox(
        height: 10,
      ),
      ToggleButtons(
        isSelected: selected,
        constraints: const BoxConstraints(minHeight: 50, minWidth: 80),
        onPressed: (int index) {
          setState(() {
            selected[index] = !selected[index];
          });
        },
        children: const [Text("S"), Text("M"), Text("L"), Text("XL")],
      ),
      const SizedBox(
        height: 10,
      ),
      ToggleButtons(
        isSelected: selected,
        constraints: BoxConstraints(
            minHeight: 40,
            minWidth: (MediaQuery.of(context).size.width - 36) / 4),
        onPressed: (int index) {
          setState(() {
            selected[index] = !selected[index];
          });
        },
        children: const [Text("S"), Text("M"), Text("L"), Text("XL")],
      ),
    ]));
  }
}
