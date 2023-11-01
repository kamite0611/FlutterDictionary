import 'package:flutter/material.dart';

class WidgetsSliderRange extends StatefulWidget {
  const WidgetsSliderRange({Key? key}) : super(key: key);

  @override
  _WidgetsSliderRangeState createState() => _WidgetsSliderRangeState();
}

class _WidgetsSliderRangeState extends State<WidgetsSliderRange> {
  RangeValues sliderValue = const RangeValues(20, 60);

  @override
  Widget build(BuildContext context) {
    return Center(
        child: SizedBox(
      width: 250,
      child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            RangeSlider(
                values: sliderValue,
                max: 100,
                labels: RangeLabels(
                  sliderValue.start.round().toString(),
                  sliderValue.end.round().toString(),
                ),
                divisions: 5,
                min: 0,
                onChanged: (value) {
                  setState(() {
                    sliderValue = value;
                  });
                }),
            RangeSlider(
                values: sliderValue,
                max: 100,
                labels: RangeLabels(
                  sliderValue.start.round().toString(),
                  sliderValue.end.round().toString(),
                ),
                divisions: 5,
                min: 0,
                onChanged: null),
          ]),
    ));
  }
}
