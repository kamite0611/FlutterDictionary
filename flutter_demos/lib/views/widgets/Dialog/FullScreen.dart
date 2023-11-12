import 'package:flutter/material.dart';

class WidgetsDialogFullScreen extends StatelessWidget {
  const WidgetsDialogFullScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
        onPressed: () => showDialog(
            context: context,
            builder: (BuildContext context) => Dialog.fullscreen(
                  child: Center(
                      child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text("hello. I'm full-screen dialog."),
                      const SizedBox(
                        height: 10,
                      ),
                      TextButton(
                          onPressed: () {
                            Navigator.pop(context);
                          },
                          child: const Text("Close"))
                    ],
                  )),
                )),
        child: const Text("Show FullScreen"),
      ),
    );
  }
}
