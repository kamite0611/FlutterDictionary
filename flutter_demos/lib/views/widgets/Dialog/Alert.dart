import 'package:flutter/material.dart';

class WidgetsDialogAlert extends StatelessWidget {
  const WidgetsDialogAlert({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
        onPressed: () => showDialog(
            context: context,
            builder: (BuildContext context) => AlertDialog(
                  title: const Text("Notifications"),
                  content: const Text("Do you allow notifications?"),
                  actions: <Widget>[
                    TextButton(
                      onPressed: () => Navigator.pop(context, 'Cancel'),
                      child: const Text('Cancel'),
                    ),
                    TextButton(
                      child: const Text('Approve'),
                      onPressed: () {
                        Navigator.of(context).pop();
                      },
                    ),
                  ],
                )),
        child: const Text("Alert Dialog"),
      ),
    );
  }
}
