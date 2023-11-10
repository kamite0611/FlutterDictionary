import 'package:flutter/material.dart';

class WidgetsToggleButtonSingle extends StatefulWidget {
  const WidgetsToggleButtonSingle({Key? key}) : super(key: key);

  @override
  _WidgetsToggleButtonSingleState createState() =>
      _WidgetsToggleButtonSingleState();
}

class _WidgetsToggleButtonSingleState extends State<WidgetsToggleButtonSingle> {
  int selectedIndex = 0;

  @override
  Widget build(BuildContext context) {
    final List<bool> selected = [false, false, false, false];
    selected[selectedIndex] = true;

    return Center(
        child: ToggleButtons(
      isSelected: selected,
      children: const [Text("S"), Text("M"), Text("L"), Text("XL")],
      onPressed: (int index) {
        setState(() {
          selectedIndex = index;
        });
      },
    ));
  }
}
