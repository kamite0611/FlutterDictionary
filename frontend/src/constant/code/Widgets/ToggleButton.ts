export const WidgetsToggleButtonBasicPCode = `import 'package:flutter/material.dart';

class WidgetsToggleButtonBasic extends StatefulWidget {
  const WidgetsToggleButtonBasic({Key? key}) : super(key: key);

  @override
  _WidgetsToggleButtonBasicState createState() =>
      _WidgetsToggleButtonBasicState();
}

class _WidgetsToggleButtonBasicState extends State<WidgetsToggleButtonBasic> {
  final List<bool> selected = [true, false, false, false];

  @override
  Widget build(BuildContext context) {
    return Center(
        child: ToggleButtons(
      isSelected: selected,
      children: const [Text("S"), Text("M"), Text("L"), Text("XL")],
      onPressed: (int index) {
        setState(() {
          selected[index] = !selected[index];
        });
      },
    ));
  }
}`;

export const WidgetsToggleButtonBasicCode = `final List<bool> selected = [true, false, false, false];
ToggleButtons(
  isSelected: selected,
  children: const [Text("S"), Text("M"), Text("L"), Text("XL")],
  onPressed: (int index) {
    setState(() {
      selected[index] = !selected[index];
    });
  },
)`;
