import 'package:flutter/material.dart';

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
