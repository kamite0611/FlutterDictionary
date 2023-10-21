import 'package:flutter/material.dart';

class WidgetsButtonIconWithTextButton extends StatelessWidget {
  const WidgetsButtonIconWithTextButton({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            ElevatedButton.icon(
              onPressed: () {},
              icon: const Icon(
                Icons.download,
                size: 16,
              ),
              label: const Text('Download'),
            ),
            const SizedBox(
              width: 10,
            ),
            TextButton.icon(
              onPressed: () {},
              style: TextButton.styleFrom(foregroundColor: Colors.orange),
              icon: const Icon(
                Icons.add,
                size: 16,
              ),
              label: const Text('Add'),
            ),
          ]),
    );
  }
}
