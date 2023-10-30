import 'package:flutter/material.dart';

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
}
