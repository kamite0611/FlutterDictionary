import 'package:flutter/material.dart';

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
}
