import 'package:flutter/material.dart';

class WidgetsTextFieldColors extends StatelessWidget {
  const WidgetsTextFieldColors({Key? key}) : super(key: key);

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
                decoration: InputDecoration(
                    labelStyle: TextStyle(color: Colors.orange),
                    enabledBorder: UnderlineInputBorder(
                        borderSide: BorderSide(color: Colors.orange)),
                    focusedBorder: UnderlineInputBorder(
                        borderSide: BorderSide(color: Colors.orange)),
                    labelText: "Standard Field"),
              ),
            ),
            SizedBox(
              width: 20,
            ),
            SizedBox(
              width: 200,
              child: TextField(
                decoration: InputDecoration(
                    labelStyle: TextStyle(color: Colors.green),
                    enabledBorder: OutlineInputBorder(
                        borderSide: BorderSide(color: Colors.green)),
                    focusedBorder: OutlineInputBorder(
                        borderSide: BorderSide(color: Colors.green)),
                    labelText: "Outlined Field"),
              ),
            ),
          ]),
    );
  }
}
