import { Highlight, themes } from 'prism-react-renderer';

import { Stack, StackProps, styled } from '@mui/material';

type FlutterDemoProps = StackProps & {
  height?: number;
  path: string;
};

const StyledIframe = styled('iframe')(({ theme }) => ({
  border: 'none',
}));

const CodeBlock = `import 'package:flutter/material.dart';

class ComponentsButtonBasicButton extends StatelessWidget {
  const ComponentsButtonBasicButton({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
      child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            TextButton(
              onPressed: () {},
              child: const Text("TextButton"),
            ),
            const SizedBox(
              width: 10,
            ),
            OutlinedButton(
              onPressed: () {},
              child: const Text("OutlinedButton"),
            ),
            const SizedBox(
              width: 10,
            ),
            ElevatedButton(
              onPressed: () {},
              child: const Text("ElevatedButton"),
            ),
          ]),
    ));
  }
}`;

export const FlutterDemo = (props: FlutterDemoProps) => {
  const { path, height = 200, ...stackProps } = props;

  const src = `http://localhost:5555/#${path}`;
  return (
    <Stack
      sx={{ borderRadius: '10px', overflow: 'hidden', ...stackProps.sx }}
      {...stackProps}
    >
      <StyledIframe src={src} height={height} />
      <Highlight theme={themes.vsDark} code={CodeBlock} language="tsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Stack>
  );
};
