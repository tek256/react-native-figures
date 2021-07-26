<div id="header">
    <p align="center">
      <b>react-native-figures</b><br>
  	  <span font-size="16px">a shape library for react-native</span><br>
      <span font-size="12px">Made by <a href="http://tek256.com">Devon</a> with love.</span><br><br>
      <span><a href="#examples">Examples</a> | <a href="https://github.com/sponsors/tek256">Support</a></span><br><br>
    </p>
</div>

## About

react-native-figures is an attempt to streamline the implementation of various shapes for quick and easy usage. It offers an option to pass an array of figures into a container or to just manage individual shapes yourself.

## Shapes
Currently react-native-figures supports the following shape types:
```
- Circle 
- Donut
- Square
- DiamondNarrow
- CutDiamond
- Triangle
```

## Examples

Shapes Container style:

```js
import React from "react";
import { View } from "react-native";
import { Shapes } from "react-native-figures";

export const Example = () => {
  return (
    <View>
      <Shapes
        figureColor="red"
        figures={[
          {
            type: "circle",
            x: "50%",
            y: "50%",
            offsetX: -100,
            offsetY: -100,
            size: 200,
          },
          {
            type: "donut",
            color: "#1F85DE",
            x: "50%",
            y: "50%",
            offsetX: 100,
            offsetY: 75,
            size: 200,
          },
          {
            type: "triangle",
            size: 100,
            x: "10%",
            y: "15%",
            rotation: 10,
          },
        ]}
      />
    </View>
  );
};
```

Individual Shape Components:

```js
import React from "react";
import { View } from "react-native";
import { Circle, Triangle, DiamondNarrow } from "react-native-figures";

export const Example = () => {
  return (
    <View>
      <Circle x="50%" y="50%" offsetX={-100} offsetY={-100} size={200} />
      <Triangle x="10%" y="15%" rotation={10} />
      <DiamondNarrow x="15%" y="45%" rotation={36} />
    </View>
  );
};
```

## Props / Options

| Name | Options | Note | 
| ---- | ------- | ---- |
| `type` | Square, Circle, Donut, DiamondNarrow, CutDiamond, Triangle | Only used in `<Shapes/>` container figure objects |
| `size` | Number | |
| `color` | Color | Color per specific shape |
| `figureColor` | Color | Default color for figures |
| `figures` | Lits of figures (js objects) i.e `[{ type: "circle" ...},{type: "square" ...}]` | Only used in `<Shapes/>` container |
| `offsetX` | Numbered offset (i.e 50, 1, -100) | |
| `offsetY` | Numbered offset (i.e 51, -49, 99) | |
| `rotation` | Numbered rotation in Degrees | |
| `borderRadius` | Numbered size for border radius | Only works with Square |
| `opacity` | Float between 0 and 1 (i.e 0.4) | |

## License
MIT © [Devon (tek256)](https://github.com/tek256/react-native-figures/blob/main/LICENSE)
