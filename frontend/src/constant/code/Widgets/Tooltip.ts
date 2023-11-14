export const WidgetsTooltipBasicPCode = `import 'package:flutter/material.dart';

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
}`;

export const WidgetsTooltipBasicCode = `Tooltip(
  message: "I'm tooltip!",
  child: TextButton(
    onPressed: () {}, child: const Text("Mouse over this text")
  ),
)`;

export const WidgetsTooltipPositionPCode = `import 'package:flutter/material.dart';

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
          message: "I'm tooltip!",
          child: TextButton(onPressed: () {}, child: const Text("Bottom")),
        )
      ],
    ));
  }
}`;

export const WidgetsTooltipPositionCode = `Tooltip(
  verticalOffset: -48,
  message: "I'm tooltip!",
  child: TextButton(onPressed: () {}, child: const Text("Top")),
),`;

export const WidgetsTooltipStylePCode = `import 'package:flutter/material.dart';

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
}`;

export const WidgetsTooltipStyleCode = `Tooltip(
  message: "I'm tooltip!",
  padding: const EdgeInsets.symmetric(vertical: 5, horizontal: 20),
  decoration: BoxDecoration(
    color: Colors.purple[300],  // background color
    borderRadius: BorderRadius.circular(10) // border radius
  ),
  textStyle: const TextStyle(fontSize: 14, color: Colors.white),
  child: TextButton(
      onPressed: () {}, child: const Text("Mouse over this text")
  ),
)`;
