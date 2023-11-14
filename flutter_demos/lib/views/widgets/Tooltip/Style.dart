import 'package:flutter/material.dart';

class WidgetsTooltipStyle extends StatelessWidget {
  const WidgetsTooltipStyle({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Tooltip(
      message: "I'm tooltip!",
      padding: const EdgeInsets.symmetric(vertical: 5, horizontal: 20),
      decoration: BoxDecoration(
          color: Colors.purple[300], borderRadius: BorderRadius.circular(10)),
      textStyle: const TextStyle(fontSize: 14, color: Colors.white),
      child: TextButton(
          onPressed: () {}, child: const Text("Mouse over this text")),
    ));
  }
}
