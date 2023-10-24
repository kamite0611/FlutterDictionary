import 'package:flutter/material.dart';

class WidgetsTextFieldBasic extends StatelessWidget {
  const WidgetsTextFieldBasic({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            SizedBox(
              width: 200,
              child: TextField(
                decoration: InputDecoration(labelText: "Standard Field"),
              ),
            ),
            SizedBox(
              width: 20,
            ),
            SizedBox(
              width: 200,
              child: TextField(
                decoration: InputDecoration(
                    border: OutlineInputBorder(), labelText: "Outlined Field"),
              ),
            ),
          ]),
    );
  }
}
