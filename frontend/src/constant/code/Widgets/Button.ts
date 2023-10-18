export const WidgetsButtonBasic = {
  parentCode: `import 'package:flutter/material.dart';

class ComponentsButtonBasicButton extends StatelessWidget {
  const ComponentsButtonBasicButton({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
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
    ));
  }
}`,
  code: `TextButton(
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
),`,
};
