export const WidgetsToggleButtonBasicPCode = `import 'package:flutter/material.dart';

class WidgetsToggleButtonBasic extends StatefulWidget {
  const WidgetsToggleButtonBasic({Key? key}) : super(key: key);

  @override
  _WidgetsToggleButtonBasicState createState() =>
      _WidgetsToggleButtonBasicState();
}

class _WidgetsToggleButtonBasicState extends State<WidgetsToggleButtonBasic> {
  final List<bool> selected = [true, false, false, false];

  @override
  Widget build(BuildContext context) {
    return Center(
        child: ToggleButtons(
      isSelected: selected,
      children: const [Text("S"), Text("M"), Text("L"), Text("XL")],
      onPressed: (int index) {
        setState(() {
          selected[index] = !selected[index];
        });
      },
    ));
  }
}`;

export const WidgetsToggleButtonBasicCode = `final List<bool> selected = [true, false, false, false];
ToggleButtons(
  isSelected: selected,
  children: const [Text("S"), Text("M"), Text("L"), Text("XL")],
  onPressed: (int index) {
    setState(() {
      selected[index] = !selected[index];
    });
  },
)`;

export const WidgetsToggleButtonSinglePCode = `import 'package:flutter/material.dart';

class WidgetsToggleButtonSingle extends StatefulWidget {
  const WidgetsToggleButtonSingle({Key? key}) : super(key: key);

  @override
  _WidgetsToggleButtonSingleState createState() =>
      _WidgetsToggleButtonSingleState();
}

class _WidgetsToggleButtonSingleState extends State<WidgetsToggleButtonSingle> {
  int selectedIndex = 0;

  @override
  Widget build(BuildContext context) {
    final List<bool> selected = [false, false, false, false];
    selected[selectedIndex] = true;

    return Center(
        child: ToggleButtons(
      isSelected: selected,
      children: const [Text("S"), Text("M"), Text("L"), Text("XL")],
      onPressed: (int index) {
        setState(() {
          selectedIndex = index;
        });
      },
    ));
  }
}`;

export const WidgetsToggleButtonSingleCode = `int selectedIndex = 0;
ToggleButtons(
  isSelected: selected,
  children: const [Text("S"), Text("M"), Text("L"), Text("XL")],
  onPressed: (int index) {
    setState(() {
      selectedIndex = index;
    });
  },
)`;

export const WidgetsToggleButtonSizePCode = `import 'package:flutter/material.dart';

class WidgetsToggleButtonSize extends StatefulWidget {
  const WidgetsToggleButtonSize({Key? key}) : super(key: key);

  @override
  _WidgetsToggleButtonSizeState createState() =>
      _WidgetsToggleButtonSizeState();
}

class _WidgetsToggleButtonSizeState extends State<WidgetsToggleButtonSize> {
  final List<bool> selected = [true, false, false, false];

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
      ToggleButtons(
        isSelected: selected,
        constraints: const BoxConstraints(
          minHeight: 40,
          minWidth: 40,
        ),
        onPressed: (int index) {
          setState(() {
            selected[index] = !selected[index];
          });
        },
        children: const [Text("S"), Text("M"), Text("L"), Text("XL")],
      ),
      const SizedBox(
        height: 10,
      ),
      ToggleButtons(
        isSelected: selected,
        constraints: const BoxConstraints(minHeight: 50, minWidth: 80),
        onPressed: (int index) {
          setState(() {
            selected[index] = !selected[index];
          });
        },
        children: const [Text("S"), Text("M"), Text("L"), Text("XL")],
      ),
      const SizedBox(
        height: 10,
      ),
      ToggleButtons(
        isSelected: selected,
        constraints: BoxConstraints(
            minHeight: 40,
            minWidth: (MediaQuery.of(context).size.width - 36) / 4),
        onPressed: (int index) {
          setState(() {
            selected[index] = !selected[index];
          });
        },
        children: const [Text("S"), Text("M"), Text("L"), Text("XL")],
      ),
    ]));
  }
}`;

export const WidgetsToggleButtonSizeCode = `ToggleButtons(
  isSelected: selected,
  constraints: BoxConstraints(
      minHeight: 40,
      minWidth: (MediaQuery.of(context).size.width - 36) / 4),
  onPressed: (int index) {
    setState(() {
      selected[index] = !selected[index];
    });
  },
  children: const [Text("S"), Text("M"), Text("L"), Text("XL")],
),`;

export const WidgetsToggleButtonColorPCode = `import 'package:flutter/material.dart';

class WidgetsToggleButtonColor extends StatefulWidget {
  const WidgetsToggleButtonColor({Key? key}) : super(key: key);

  @override
  _WidgetsToggleButtonColorState createState() =>
      _WidgetsToggleButtonColorState();
}

class _WidgetsToggleButtonColorState extends State<WidgetsToggleButtonColor> {
  final List<bool> selected = [true, false, false];

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
      ToggleButtons(
        isSelected: selected,
        color: Colors.red,
        fillColor: Colors.red[300],
        borderColor: Colors.red[100],
        splashColor: Colors.red[300],
        selectedBorderColor: Colors.red[800],
        selectedColor: Colors.white,
        borderRadius: const BorderRadius.all(Radius.circular(10)),
        constraints: const BoxConstraints(minWidth: 100, minHeight: 40),
        onPressed: (int index) {
          setState(() {
            selected[index] = !selected[index];
          });
        },
        children: const [Text("Apple"), Text("Grape"), Text("Banana")],
      ),
      const SizedBox(
        height: 10,
      ),
      ToggleButtons(
        isSelected: selected,
        color: Colors.blue,
        fillColor: Colors.blue[300],
        borderColor: Colors.blue[100],
        splashColor: Colors.blue[300],
        selectedBorderColor: Colors.blue[800],
        selectedColor: Colors.white,
        borderRadius: const BorderRadius.all(Radius.circular(10)),
        constraints: const BoxConstraints(minWidth: 100, minHeight: 40),
        onPressed: (int index) {
          setState(() {
            selected[index] = !selected[index];
          });
        },
        children: const [Text("Apple"), Text("Grape"), Text("Banana")],
      ),
      const SizedBox(
        height: 10,
      ),
      ToggleButtons(
        isSelected: selected,
        color: Colors.green,
        fillColor: Colors.green[300],
        borderColor: Colors.green[100],
        splashColor: Colors.green[300],
        selectedBorderColor: Colors.green[800],
        selectedColor: Colors.white,
        borderRadius: const BorderRadius.all(Radius.circular(10)),
        constraints: const BoxConstraints(minWidth: 100, minHeight: 40),
        onPressed: (int index) {
          setState(() {
            selected[index] = !selected[index];
          });
        },
        children: const [Text("Apple"), Text("Grape"), Text("Banana")],
      ),
    ]));
  }
}`;

export const WidgetsToggleButtonColorCode = `ToggleButtons(
  color: Colors.red,
  fillColor: Colors.red[300],
  borderColor: Colors.red[100],
  splashColor: Colors.red[300],
  selectedBorderColor: Colors.red[800],
  selectedColor: Colors.white,
  borderRadius: const BorderRadius.all(Radius.circular(10)),
  ...
),`;

export const WidgetsToggleButtonIconPCode = `import 'package:flutter/material.dart';

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
}`;

export const WidgetsToggleButtonIconCode = `ToggleButtons(
  ...
  children: const [
    Icon(Icons.sunny),
    Icon(Icons.nights_stay),
    Icon(Icons.brightness_4)
  ],
),`;
