export const WidgetsSliderBasicPCode = `import 'package:flutter/material.dart';

class WidgetsSliderBasic extends StatefulWidget {
  const WidgetsSliderBasic({Key? key}) : super(key: key);

  @override
  _WidgetsSliderBasicState createState() => _WidgetsSliderBasicState();
}

class _WidgetsSliderBasicState extends State<WidgetsSliderBasic> {
  double sliderValue = 20;

  @override
  Widget build(BuildContext context) {
    return Center(
        child: SizedBox(
      width: 250,
      child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Slider(
                value: sliderValue,
                max: 100,
                min: 0,
                onChanged: (value) {
                  setState(() {
                    sliderValue = value;
                  });
                }),
            Slider(value: sliderValue, max: 100, min: 0, onChanged: null),
          ]),
    ));
  }
}`;
export const WidgetsSliderBasicCode = `Slider(
  value: sliderValue,
  max: 100,
  min: 0,
  onChanged: (value) {
    setState(() {
      sliderValue = value;
    });
  }
),
Slider(
  value: sliderValue, 
  max: 100, 
  min: 0, 
  onChanged: null
),`;

export const WidgetsSliderStepwisePCode = `import 'package:flutter/material.dart';

class WidgetsSliderStepwise extends StatefulWidget {
  const WidgetsSliderStepwise({Key? key}) : super(key: key);

  @override
  _WidgetsSliderStepwiseState createState() => _WidgetsSliderStepwiseState();
}

class _WidgetsSliderStepwiseState extends State<WidgetsSliderStepwise> {
  double sliderValue = 20;

  @override
  Widget build(BuildContext context) {
    return Center(
        child: SizedBox(
      width: 250,
      child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Slider(
                value: sliderValue,
                max: 100,
                divisions: 5,
                label: sliderValue.round().toString(),
                min: 0,
                onChanged: (value) {
                  setState(() {
                    sliderValue = value;
                  });
                }),
            Slider(
                value: sliderValue,
                max: 100,
                divisions: 5,
                label: sliderValue.round().toString(),
                min: 0,
                onChanged: null),
          ]),
    ));
  }
}`;

export const WidgetsSliderStepwiseCode = `Slider(
  value: sliderValue,
  max: 100,
  divisions: 5,
  label: sliderValue.round().toString(),
  min: 0,
  onChanged: (value) {
    setState(() {
      sliderValue = value;
    });
  }
),`;

export const WidgetsSliderColorPCode = `import 'package:flutter/material.dart';

class WidgetsSliderColor extends StatefulWidget {
  const WidgetsSliderColor({Key? key}) : super(key: key);

  @override
  _WidgetsSliderColorState createState() => _WidgetsSliderColorState();
}

class _WidgetsSliderColorState extends State<WidgetsSliderColor> {
  double sliderValue = 20;

  @override
  Widget build(BuildContext context) {
    return Center(
        child: SizedBox(
      width: 250,
      child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Slider(
                activeColor: Colors.amber,
                inactiveColor: Colors.amber[100],
                value: sliderValue,
                max: 100,
                divisions: 5,
                label: sliderValue.round().toString(),
                min: 0,
                onChanged: (value) {
                  setState(() {
                    sliderValue = value;
                  });
                }),
            Slider(
                activeColor: Colors.blue,
                inactiveColor: Colors.blue[100],
                value: sliderValue,
                max: 100,
                divisions: 5,
                label: sliderValue.round().toString(),
                min: 0,
                onChanged: (value) {
                  setState(() {
                    sliderValue = value;
                  });
                }),
            Slider(
                activeColor: Colors.green,
                inactiveColor: Colors.green[100],
                value: sliderValue,
                max: 100,
                divisions: 5,
                label: sliderValue.round().toString(),
                min: 0,
                onChanged: (value) {
                  setState(() {
                    sliderValue = value;
                  });
                }),
            Slider(
                activeColor: Colors.purple,
                inactiveColor: Colors.purple[100],
                value: sliderValue,
                max: 100,
                divisions: 5,
                label: sliderValue.round().toString(),
                min: 0,
                onChanged: (value) {
                  setState(() {
                    sliderValue = value;
                  });
                }),
          ]),
    ));
  }
}
`;

export const WidgetsSliderColorCode = `Slider(
  activeColor: Colors.blue,
  inactiveColor: Colors.blue[100],
),`;
