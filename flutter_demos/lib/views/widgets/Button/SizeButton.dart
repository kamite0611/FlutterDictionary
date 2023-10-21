import 'package:flutter/material.dart';

class WidgetsButtonSizeButton extends StatelessWidget {
  const WidgetsButtonSizeButton({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Row(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              TextButton(
                style: TextButton.styleFrom(
                    textStyle: const TextStyle(fontSize: 12),
                    padding:
                        const EdgeInsets.symmetric(vertical: 0, horizontal: 8)),
                onPressed: () {},
                child: const Text("Small"),
              ),
              const SizedBox(
                width: 10,
              ),
              TextButton(
                style: TextButton.styleFrom(
                    textStyle: const TextStyle(fontSize: 20),
                    padding: const EdgeInsets.symmetric(
                        vertical: 16, horizontal: 16)),
                onPressed: () {},
                child: const Text("Medium"),
              ),
              const SizedBox(
                width: 10,
              ),
              TextButton(
                style: TextButton.styleFrom(
                    textStyle: const TextStyle(fontSize: 30),
                    padding: const EdgeInsets.symmetric(
                        vertical: 16, horizontal: 30)),
                onPressed: () {},
                child: const Text("Large"),
              ),
            ]),
        const SizedBox(
          height: 10,
        ),
        Row(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              OutlinedButton(
                style: OutlinedButton.styleFrom(
                    textStyle: const TextStyle(fontSize: 12),
                    padding:
                        const EdgeInsets.symmetric(vertical: 0, horizontal: 8)),
                onPressed: () {},
                child: const Text("Small"),
              ),
              const SizedBox(
                width: 10,
              ),
              OutlinedButton(
                style: OutlinedButton.styleFrom(
                    textStyle: const TextStyle(fontSize: 20),
                    padding: const EdgeInsets.symmetric(
                        vertical: 16, horizontal: 16)),
                onPressed: () {},
                child: const Text("Medium"),
              ),
              const SizedBox(
                width: 10,
              ),
              OutlinedButton(
                style: OutlinedButton.styleFrom(
                    textStyle: const TextStyle(fontSize: 30),
                    padding: const EdgeInsets.symmetric(
                        vertical: 16, horizontal: 30)),
                onPressed: () {},
                child: const Text("Large"),
              ),
            ]),
        const SizedBox(
          height: 10,
        ),
        Row(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                    textStyle: const TextStyle(fontSize: 12),
                    padding:
                        const EdgeInsets.symmetric(vertical: 0, horizontal: 8)),
                onPressed: () {},
                child: const Text("Small"),
              ),
              const SizedBox(
                width: 10,
              ),
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                    textStyle: const TextStyle(fontSize: 20),
                    padding: const EdgeInsets.symmetric(
                        vertical: 16, horizontal: 16)),
                onPressed: () {},
                child: const Text("Medium"),
              ),
              const SizedBox(
                width: 10,
              ),
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                    textStyle: const TextStyle(fontSize: 30),
                    padding: const EdgeInsets.symmetric(
                        vertical: 16, horizontal: 30)),
                onPressed: () {},
                child: const Text("Large"),
              ),
            ]),
      ],
    ));
  }
}
