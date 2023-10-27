export const WidgetsSwitchBasicPCode = `import 'package:flutter/material.dart';

class WidgetsSwitchBasic extends StatefulWidget {
  const WidgetsSwitchBasic({Key? key}) : super(key: key);

  @override
  _WidgetsSwitchBasicState createState() => _WidgetsSwitchBasicState();
}

class _WidgetsSwitchBasicState extends State<WidgetsSwitchBasic> {
  bool isChecked = true;

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Row(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Switch(
            value: isChecked,
            onChanged: (value) {
              setState(() {
                isChecked = value;
              });
            }),
        Switch(value: isChecked, onChanged: null)
      ],
    ));
  }
}
`;

export const WidgetsSwitchBasicCode = `bool isChecked = true;
Widget build(BuildContext context) {
  return Switch(
    value: isChecked,
    onChanged: (value) {
      setState(() {
        isChecked = value;
      });
    }
  )
}`;

export const WidgetsSwitchLabelPCode = `import 'package:flutter/material.dart';

class WidgetsSwitchLabel extends StatefulWidget {
  const WidgetsSwitchLabel({Key? key}) : super(key: key);

  @override
  _WidgetsSwitchLabelState createState() => _WidgetsSwitchLabelState();
}

class _WidgetsSwitchLabelState extends State<WidgetsSwitchLabel> {
  bool isChecked = true;

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Row(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        SizedBox(
          width: 300,
          child: SwitchListTile(
            title: const Text("Notification"),
            subtitle: const Text("Allow notifications"),
            secondary: const SizedBox(
              width: 40,
              height: 80,
              child: Icon(Icons.notifications_none_rounded),
            ),
            value: isChecked,
            onChanged: (value) {
              setState(() {
                isChecked = value;
              });
            },
          ),
        ),
      ],
    ));
  }
}`;

export const WidgetsSwitchLabelCode = `SwitchListTile(
  title: const Text("Notification"),
  subtitle: const Text("Allow notifications"),
  secondary: const SizedBox(
    width: 40,
    height: 80,
    child: Icon(Icons.notifications_none_rounded),
  ),
  value: isChecked,
  onChanged: (value) {
    setState(() {
      isChecked = value;
    });
  },
),`;

export const WidgetsSwitchColorPCode = `import 'package:flutter/material.dart';

class WidgetsSwitchColor extends StatefulWidget {
  const WidgetsSwitchColor({Key? key}) : super(key: key);

  @override
  _WidgetsSwitchColorState createState() => _WidgetsSwitchColorState();
}

class _WidgetsSwitchColorState extends State<WidgetsSwitchColor> {
  bool isChecked = true;

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Row(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Switch(
            activeTrackColor: Colors.amber[800],
            inactiveTrackColor: Colors.amber[200],
            value: isChecked,
            onChanged: (value) {
              setState(() {
                isChecked = value;
              });
            }),
        Switch(
            activeTrackColor: Colors.blue[800],
            inactiveTrackColor: Colors.blue[200],
            value: isChecked,
            onChanged: (value) {
              setState(() {
                isChecked = value;
              });
            }),
        Switch(
            activeTrackColor: Colors.green[800],
            inactiveTrackColor: Colors.green[200],
            value: isChecked,
            onChanged: (value) {
              setState(() {
                isChecked = value;
              });
            }),
        Switch(
            activeTrackColor: Colors.purple[800],
            inactiveTrackColor: Colors.purple[200],
            value: isChecked,
            onChanged: (value) {
              setState(() {
                isChecked = value;
              });
            }),
      ],
    ));
  }
}`;

export const WidgetsSwitchColorCode = `Switch(
  activeTrackColor: Colors.blue[800],
  inactiveTrackColor: Colors.blue[200],
  value: isChecked,
  onChanged: (value) {
    setState(() {
      isChecked = value;
    });
  }
),`;

export const WidgetsSwitchIconPCode = `import 'package:flutter/material.dart';

class WidgetsSwitchIcon extends StatefulWidget {
  const WidgetsSwitchIcon({Key? key}) : super(key: key);

  @override
  _WidgetsSwitchIconState createState() => _WidgetsSwitchIconState();
}

class _WidgetsSwitchIconState extends State<WidgetsSwitchIcon> {
  bool isChecked = false;

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Row(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Switch(
          value: isChecked,
          onChanged: (value) {
            setState(() {
              isChecked = value;
            });
          },
          thumbIcon: MaterialStateProperty.resolveWith((states) {
            if (states.contains(MaterialState.selected)) {
              return const Icon(Icons.check);
            }
            return const Icon(Icons.close);
          }),
        )
      ],
    ));
  }
}`;

export const WidgetsSwitchIconCode = `Switch(
  value: isChecked,
  onChanged: (value) {
    setState(() {
      isChecked = value;
    });
  },
  thumbIcon: MaterialStateProperty.resolveWith((states) {
    if (states.contains(MaterialState.selected)) {
      return const Icon(Icons.check);
    }
    return const Icon(Icons.close);
  }),
)`;
