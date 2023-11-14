import 'package:flutter/material.dart';

class WidgetsTooltipPosition extends StatelessWidget {
  const WidgetsTooltipPosition({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Tooltip(
          verticalOffset: -48,
          message: "I'm tooltip!",
          child: TextButton(onPressed: () {}, child: const Text("Top")),
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Tooltip(
              verticalOffset: -13,
              margin: const EdgeInsets.only(right: 150),
              message: "I'm tooltip!",
              child: TextButton(onPressed: () {}, child: const Text("Left")),
            ),
            const SizedBox(
              width: 100,
            ),
            Tooltip(
              verticalOffset: -13,
              margin: const EdgeInsets.only(left: 150),
              message: "I'm tooltip!",
              child: TextButton(onPressed: () {}, child: const Text("Right")),
            ),
          ],
        ),
        Tooltip(
          verticalOffset: 22,
          message: "I'm tooltip!",
          child: TextButton(onPressed: () {}, child: const Text("Bottom")),
        )
      ],
    ));
  }
}
