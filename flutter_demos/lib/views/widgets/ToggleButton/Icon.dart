import 'package:flutter/material.dart';

class WidgetsToggleButtonIcon extends StatefulWidget {
  const WidgetsToggleButtonIcon({Key? key}) : super(key: key);

  @override
  _WidgetsToggleButtonIconState createState() =>
      _WidgetsToggleButtonIconState();
}

class _WidgetsToggleButtonIconState extends State<WidgetsToggleButtonIcon> {
  final List<bool> selected = [true, false, false];

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
      ToggleButtons(
        isSelected: selected,
        color: Colors.black45,
        fillColor: Colors.blue[50],
        splashColor: Colors.blue[50],
        selectedBorderColor: Colors.blue,
        selectedColor: Colors.blue,
        borderRadius: const BorderRadius.all(Radius.circular(10)),
        constraints: const BoxConstraints(minWidth: 100, minHeight: 40),
        onPressed: (int index) {
          setState(() {
            selected[index] = !selected[index];
          });
        },
        children: const [
          Icon(Icons.sunny),
          Icon(Icons.nights_stay),
          Icon(Icons.brightness_4)
        ],
      ),
      const SizedBox(
        height: 10,
      ),
      ToggleButtons(
        isSelected: selected,
        color: Colors.black45,
        fillColor: Colors.blue[50],
        splashColor: Colors.blue[50],
        selectedBorderColor: Colors.blue,
        selectedColor: Colors.blue,
        borderRadius: const BorderRadius.all(Radius.circular(10)),
        constraints: const BoxConstraints(minWidth: 120, minHeight: 40),
        onPressed: (int index) {
          setState(() {
            selected[index] = !selected[index];
          });
        },
        children: const [
          Row(
            children: [
              Icon(Icons.sunny),
              SizedBox(
                width: 5,
              ),
              Text(
                "Light",
                style: TextStyle(fontSize: 13, fontWeight: FontWeight.w500),
              )
            ],
          ),
          Row(
            children: [
              Icon(Icons.nights_stay),
              SizedBox(
                width: 5,
              ),
              Text(
                "Dark",
                style: TextStyle(fontSize: 13, fontWeight: FontWeight.w500),
              )
            ],
          ),
          Row(
            children: [
              Icon(Icons.brightness_4),
              SizedBox(
                width: 5,
              ),
              Text(
                "System",
                style: TextStyle(fontSize: 13, fontWeight: FontWeight.w500),
              )
            ],
          ),
        ],
      ),
    ]));
  }
}
