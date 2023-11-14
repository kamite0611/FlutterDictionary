import 'package:flutter/material.dart';

class WidgetsTooltipBasic extends StatelessWidget {
  const WidgetsTooltipBasic({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Tooltip(
      message: "I'm tooltip!",
      child: TextButton(
          onPressed: () {}, child: const Text("Mouse over this text")),
    ));
  }
}
