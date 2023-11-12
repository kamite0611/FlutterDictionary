import 'package:flutter/material.dart';

class WidgetsDialogBasic extends StatelessWidget {
  const WidgetsDialogBasic({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
        onPressed: () => showDialog(
            context: context,
            builder: (BuildContext context) => Dialog(
                  child: Padding(
                      padding: const EdgeInsets.all(30),
                      child: TextButton(
                          onPressed: () {
                            Navigator.pop(context);
                          },
                          child: const Text("Close"))),
                )),
        child: const Text("Show Dialog"),
      ),
    );
  }
}
