import 'package:flutter/material.dart';

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
}
