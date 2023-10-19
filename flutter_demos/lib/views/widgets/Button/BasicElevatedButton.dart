import 'package:flutter/material.dart';

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
}
