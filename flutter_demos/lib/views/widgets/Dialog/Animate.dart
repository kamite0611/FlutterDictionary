import 'package:flutter/material.dart';

class WidgetsDialogAnimate extends StatelessWidget {
  const WidgetsDialogAnimate({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final dialogWidget = Dialog(
        child: Padding(
      padding: const EdgeInsets.all(30),
      child: TextButton(
        onPressed: () {
          Navigator.pop(context);
        },
        child: const Text("Close"),
      ),
    ));

    return Center(
        child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
      Row(mainAxisAlignment: MainAxisAlignment.center, children: [
        ElevatedButton(
          onPressed: () => showGeneralDialog(
            context: context,
            barrierDismissible: true,
            barrierLabel: "",
            pageBuilder: (c, a1, a2) => Container(),
            transitionBuilder: (ctx, a1, a2, child) {
              return Transform.scale(
                  scale: Curves.easeInOut.transform(a1.value),
                  child: dialogWidget);
            },
          ),
          child: const Text("Scale"),
        ),
        const SizedBox(
          width: 10,
        ),
        ElevatedButton(
          onPressed: () => showGeneralDialog(
            context: context,
            barrierDismissible: true,
            barrierLabel: "",
            pageBuilder: (c, a1, a2) => Container(),
            transitionBuilder: (ctx, a1, a2, child) {
              return FadeTransition(
                  opacity: CurvedAnimation(parent: a1, curve: Curves.easeIn),
                  child: dialogWidget);
            },
          ),
          child: const Text("Fade"),
        ),
      ]),
      const SizedBox(
        height: 10,
      ),
      Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          ElevatedButton(
            onPressed: () => showGeneralDialog(
              context: context,
              barrierDismissible: true,
              barrierLabel: "",
              pageBuilder: (c, a1, a2) => Container(),
              transitionDuration: const Duration(milliseconds: 180),
              transitionBuilder: (ctx, a1, a2, child) {
                return SlideTransition(
                    position: Tween(
                            begin: const Offset(0, 1), end: const Offset(0, 0))
                        .animate(a1),
                    child: dialogWidget);
              },
            ),
            child: const Text("Bottom"),
          ),
          const SizedBox(
            width: 10,
          ),
          ElevatedButton(
            onPressed: () => showGeneralDialog(
              context: context,
              barrierDismissible: true,
              barrierLabel: "",
              pageBuilder: (c, a1, a2) => Container(),
              transitionDuration: const Duration(milliseconds: 180),
              transitionBuilder: (ctx, a1, a2, child) {
                return SlideTransition(
                    position: Tween(
                            begin: const Offset(0, -1), end: const Offset(0, 0))
                        .animate(a1),
                    child: dialogWidget);
              },
            ),
            child: const Text("Top"),
          ),
        ],
      ),
      const SizedBox(
        height: 10,
      ),
      Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          ElevatedButton(
            onPressed: () => showGeneralDialog(
              context: context,
              barrierDismissible: true,
              barrierLabel: "",
              pageBuilder: (c, a1, a2) => Container(),
              transitionDuration: const Duration(milliseconds: 180),
              transitionBuilder: (ctx, a1, a2, child) {
                return SlideTransition(
                    position: Tween(
                            begin: const Offset(-1, 0), end: const Offset(0, 0))
                        .animate(a1),
                    child: dialogWidget);
              },
            ),
            child: const Text("Left"),
          ),
          const SizedBox(
            width: 10,
          ),
          ElevatedButton(
            onPressed: () => showGeneralDialog(
              context: context,
              barrierDismissible: true,
              barrierLabel: "",
              pageBuilder: (c, a1, a2) => Container(),
              transitionDuration: const Duration(milliseconds: 180),
              transitionBuilder: (ctx, a1, a2, child) {
                return SlideTransition(
                    position: Tween(
                            begin: const Offset(1, 0), end: const Offset(0, 0))
                        .animate(a1),
                    child: dialogWidget);
              },
            ),
            child: const Text("Right"),
          ),
        ],
      ),
    ]));
  }
}
