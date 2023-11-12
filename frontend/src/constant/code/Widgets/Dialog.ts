export const WidgetsDialogBasicPCode = `import 'package:flutter/material.dart';

class WidgetsDialogBasic extends StatelessWidget {
  const WidgetsDialogBasic({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
        onPressed: () => showDialog(
            context: context,
            builder: (BuildContext context) => Dialog(
                  child: Padding(
                      padding: const EdgeInsets.all(30),
                      child: TextButton(
                          onPressed: () {
                            Navigator.pop(context);
                          },
                          child: const Text("Close"))),
                )),
        child: const Text("Show Dialog"),
      ),
    );
  }
}`;

export const WidgetsDialogBasicCode = `onPressed: () => showDialog(
  context: context,
  builder: (BuildContext context) => Dialog(
    child: ...
  )
),`;

export const WidgetsDialogFullScreenPCode = `import 'package:flutter/material.dart';

class WidgetsDialogFullScreen extends StatelessWidget {
  const WidgetsDialogFullScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
        onPressed: () => showDialog(
            context: context,
            builder: (BuildContext context) => Dialog.fullscreen(
                  child: Center(
                      child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text("hello. I'm full-screen dialog."),
                      const SizedBox(
                        height: 10,
                      ),
                      TextButton(
                          onPressed: () {
                            Navigator.pop(context);
                          },
                          child: const Text("Close"))
                    ],
                  )),
                )),
        child: const Text("Show FullScreen"),
      ),
    );
  }
}`;

export const WidgetsDialogFullScreenCode = `onPressed: () => showDialog(
  context: context,
  builder: (BuildContext context) => Dialog.fullscreen(
    child: ...
  )
)`;

export const WidgetsDialogAlertPCode = `import 'package:flutter/material.dart';

class WidgetsDialogAlert extends StatelessWidget {
  const WidgetsDialogAlert({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
        onPressed: () => showDialog(
            context: context,
            builder: (BuildContext context) => AlertDialog(
                  title: const Text("Notifications"),
                  content: const Text("Do you allow notifications?"),
                  actions: <Widget>[
                    TextButton(
                      onPressed: () => Navigator.pop(context, 'Cancel'),
                      child: const Text('Cancel'),
                    ),
                    TextButton(
                      child: const Text('Approve'),
                      onPressed: () {
                        Navigator.of(context).pop();
                      },
                    ),
                  ],
                )),
        child: const Text("Alert Dialog"),
      ),
    );
  }
}`;

export const WidgetsDialogAlertCode = `onPressed: () => showDialog(
  context: context,
  builder: (BuildContext context) => AlertDialog(
    title: const Text("Notifications"),
    content: const Text("Do you allow notifications?"),
    actions: <Widget>[
      TextButton(
        onPressed: () => Navigator.pop(context, 'Cancel'),
        child: const Text('Cancel'),
      ),
      TextButton(
        child: const Text('Approve'),
        onPressed: () {
          Navigator.of(context).pop();
        },
      ),
    ],
  )
),`;

export const WidgetsDialogAnimatePCode = `import 'package:flutter/material.dart';

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

        /* Scale Transition Dialog */
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

        /* Fade Transition Dialog */
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

          /* Bottom Transition Dialog */
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

          /* Top Transition Dialog */
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

          /* Left Transition Dialog */
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

          /* Right Transition Dialog */
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
}`;

export const WidgetsDialogAnimateCode = `onPressed: () => showGeneralDialog(
  context: context,
  pageBuilder: (c, a1, a2) => Container(),
  transitionBuilder: (ctx, a1, a2, child) {
    return Transform.scale(
        scale: Curves.easeInOut.transform(a1.value), // this is animation code
        child: Dialog(child: ...)
    );
  },
),`;
