export const WidgetsButtonBasicButtonPCode = `import 'package:flutter/material.dart';

class ComponentsButtonBasicButton extends StatelessWidget {
  const ComponentsButtonBasicButton({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            TextButton(
              onPressed: () {},
              child: const Text("TextButton"),
            ),
            const SizedBox(
              width: 10,
            ),
            OutlinedButton(
              onPressed: () {},
              child: const Text("OutlinedButton"),
            ),
            const SizedBox(
              width: 10,
            ),
            ElevatedButton(
              onPressed: () {},
              child: const Text("ElevatedButton"),
            ),
          ]),
    );
  }
}`;

export const WidgetsButtonBasicButtonCode = `TextButton(
  onPressed: () {},
  child: const Text("TextButton"),
),
OutlinedButton(
  onPressed: () {},
  child: const Text("OutlinedButton"),
),
ElevatedButton(
  onPressed: () {},
  child: const Text("ElevatedButton"),
),`;

export const WidgetsButtonBasicTextButtonPCode = `import 'package:flutter/material.dart';

class WidgetsButtonBasicTextButton extends StatelessWidget {
  const WidgetsButtonBasicTextButton({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const TextButton(
              onPressed: null,
              child: Text("Disabled"),
            ),
            const SizedBox(
              width: 10,
            ),
            TextButton(
              onPressed: () {},
              style: TextButton.styleFrom(
                foregroundColor: Colors.orange[900],
              ),
              child: const Text(
                "Warning",
              ),
            ),
            const SizedBox(
              width: 10,
            ),
            TextButton(
              onPressed: () {},
              child: const Text("Primary"),
            ),
          ]),
    );
  }
}
`;

export const WidgetsButtonBasicTextButtonCode = `TextButton(
  onPressed: () {},
  style: TextButton.styleFrom(
    foregroundColor: Colors.orange[900],
  ),
  child: const Text(
    "Warning",
  ),
),`;

export const WidgetsButtonBasicOutlinedButtonPCode = `import 'package:flutter/material.dart';

class WidgetsButtonBasicOutlinedButton extends StatelessWidget {
  const WidgetsButtonBasicOutlinedButton({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const OutlinedButton(
              onPressed: null,
              child: Text("Disabled"),
            ),
            const SizedBox(
              width: 10,
            ),
            OutlinedButton(
              onPressed: () {},
              style: OutlinedButton.styleFrom(
                side: const BorderSide(width: 1, color: Colors.orange),
                foregroundColor: Colors.orange[900],
              ),
              child: const Text(
                "Warning",
              ),
            ),
            const SizedBox(
              width: 10,
            ),
            OutlinedButton(
              onPressed: () {},
              style: OutlinedButton.styleFrom(
                side:
                    BorderSide(width: 1, color: Theme.of(context).primaryColor),
              ),
              child: const Text("Primary"),
            ),
          ]),
    );
  }
}`;

export const WidgetsButtonBasicOutlinedButtonCode = `OutlinedButton(
  onPressed: () {},
  style: OutlinedButton.styleFrom(
    side: const BorderSide(width: 1, color: Colors.orange),
    foregroundColor: Colors.orange[900],
  ),
  child: const Text(
    "Warning",
  ),
),`;

export const WidgetsButtonBasicElevatedButtonPCode = `import 'package:flutter/material.dart';

class WidgetsButtonBasicElevatedButton extends StatelessWidget {
  const WidgetsButtonBasicElevatedButton({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const ElevatedButton(
              onPressed: null,
              child: Text("Disabled"),
            ),
            const SizedBox(
              width: 10,
            ),
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.orange,
                  foregroundColor: Colors.orange[900]),
              onPressed: () {},
              child: const Text(
                "Warning",
                style: TextStyle(color: Colors.white),
              ),
            ),
            const SizedBox(
              width: 10,
            ),
            ElevatedButton(
              onPressed: () {},
              child: const Text("Primary"),
            ),
          ]),
    );
  }
}`;

export const WidgetsButtonBasicElevatedButtonCode = `ElevatedButton(
  style: ElevatedButton.styleFrom(
      backgroundColor: Colors.orange,
      foregroundColor: Colors.orange[900]),
  onPressed: () {},
  child: const Text(
    "Warning",
    style: TextStyle(color: Colors.white),
  ),
),`;
