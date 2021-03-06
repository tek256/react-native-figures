import React from "react";
import { Dimensions } from "react-native";
import { View } from "react-native";

const Square = ({
  size,
  color,
  x,
  y,
  offsetX,
  offsetY,
  rotation,
  borderRadius,
  opacity,
}) => {
  let style = {
    wrapper: {
      position: "absolute",
      left: x,
      top: y,
      marginLeft: offsetX,
      marginTop: offsetY,
      transform: [{ rotate: `${rotation}deg` }],
      opacity: opacity,
    },
    square: {
      width: size,
      height: size,
      borderRadius: borderRadius,
      backgroundColor: color,
    },
  };
  return (
    <View style={style.wrapper}>
      <View style={style.square} />
    </View>
  );
};

const Circle = ({ size, color, x, y, offsetX, offsetY, opacity }) => {
  let style = {
    wrapper: {
      position: "absolute",
      left: x,
      top: y,
      marginLeft: offsetX,
      marginTop: offsetY,
      opacity: opacity,
    },
    circle: {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: color,
    },
  };
  return (
    <View style={style.wrapper}>
      <View style={style.circle} />
    </View>
  );
};

const Donut = ({ size, color, x, y, offsetX, offsetY, opacity }) => {
  let style = {
    wrapper: {
      position: "absolute",
      left: x,
      top: y,
      marginLeft: offsetX,
      marginTop: offsetY,
      opacity: opacity,
    },
    donut: {
      width: size,
      height: size,
      borderRadius: size / 2,
      borderWidth: size / 4,
      borderColor: color,
    },
  };
  return (
    <View style={style.wrapper}>
      <View style={style.donut} />
    </View>
  );
};

const DiamondNarrow = ({
  size,
  color,
  x,
  y,
  offsetX,
  offsetY,
  rotation,
  borderRadius,
  opacity,
}) => {
  let style = {
    wrapper: {
      position: "absolute",
      left: x,
      top: y,
      marginLeft: offsetX,
      marginTop: offsetY,
      transform: [{ rotate: `${rotation}deg` }],
      opacity: opacity,
    },
    diamondNarrow: {},
    diamondNarrowTop: {
      width: 0,
      height: 0,
      borderTopWidth: 0,
      borderTopColor: "transparent",
      borderLeftColor: "transparent",
      borderLeftWidth: size / 2,
      borderRightColor: "transparent",
      borderRightWidth: size / 2,
      borderBottomColor: color,
      borderBottomWidth: size / 1.42,
      borderBottomRadius: borderRadius,
      borderRightRadius: borderRadius,
      borderLeftRadius: borderRadius,
    },
    diamondNarrowBottom: {
      width: 0,
      height: 0,
      borderBottomWidth: 0,
      borderBottomColor: "transparent",
      borderRightColor: "transparent",
      borderRightWidth: size / 2,
      borderLeftColor: "transparent",
      borderLeftWidth: size / 2,
      borderTopColor: color,
      borderTopWidth: size / 1.42,
    },
  };
  return (
    <View style={style.wrapper}>
      <View style={style.diamondNarrow}>
        <View style={style.diamondNarrowTop} />
        <View style={style.diamondNarrowBottom} />
      </View>
    </View>
  );
};

const CutDiamond = ({
  size,
  color,
  x,
  y,
  offsetX,
  offsetY,
  rotation,
  opacity,
}) => {
  let style = {
    wrapper: {
      position: "absolute",
      left: x,
      top: y,
      marginLeft: offsetX,
      marginTop: offsetY,
      transform: [{ rotate: `${rotation}deg` }],
      opacity: opacity,
    },
    cutDiamond: {},
    cutDiamondTop: {
      width: size,
      height: 0,
      borderTopWidth: 0,
      borderTopColor: "transparent",
      borderLeftColor: "transparent",
      borderLeftWidth: size / 4,
      borderRightColor: "transparent",
      borderRightWidth: size / 4,
      borderBottomColor: color,
      borderBottomWidth: size / 4,
    },
    cutDiamondBottom: {
      width: 0,
      height: 0,
      borderTopWidth: size / 1.42,
      borderTopColor: color,
      borderLeftColor: "transparent",
      borderLeftWidth: size / 2,
      borderRightColor: "transparent",
      borderRightWidth: size / 2,
      borderBottomColor: "transparent",
      borderBottomWidth: 0,
    },
  };
  return (
    <View style={style.wrapper}>
      <View style={style.cutDiamond}>
        <View style={style.cutDiamondTop} />
        <View style={style.cutDiamondBottom} />
      </View>
    </View>
  );
};

const Triangle = ({
  size,
  color,
  x,
  y,
  offsetX,
  offsetY,
  rotation,
  opacity,
}) => {
  let style = {
    wrapper: {
      position: "absolute",
      left: x,
      top: y,
      marginLeft: offsetX,
      marginTop: offsetY,
      transform: [{ rotate: `${rotation}deg` }],
      opacity: opacity,
    },
    triangle: {
      width: 0,
      height: 0,
      backgroundColor: "transparent",
      borderSize: "solid",
      borderLeftWidth: size / 2,
      borderRightWidth: size / 2,
      borderBottomWidth: size,
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
      borderBottomColor: color,
    },
  };
  return (
    <View style={style.wrapper}>
      <View style={style.triangle} />
    </View>
  );
};

const Shapes = ({
  figures,
  figureColor,
  figureSize,
  style,
  scaling,
  scalingOffsets,
  sizeBasedOffsets,
}) => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  return (
    <View style={style}>
      {figures.map((e, i) => {
        let sizefigure = e.size || figureSize || 100;
        let offsetX = e.offsetX || 0;
        let offsetY = e.offsetY || 0;

        if (scaling || e.scaling) {
          if (e?.scaling == false) {
            sizefigure = sizefigure;
          } else {
            sizefigure = sizefigure * width;
          }
        }

        if (scalingOffsets || e.scalingOffsets) {
          if (e?.scalingOffsets != false) {
            offsetX *= width;
            offsetY *= height;
          }
        }

        if (sizeBasedOffsets) {
          offsetX = sizefigure * e.offsetX;
          offsetY = sizefigure * e.offsetY;
        }

        const color = e.color || figureColor;
        const props = {
          key: i,
          size: sizefigure,
          offsetX,
          offsetY,
          x: e.x,
          y: e.y,
          opacity: e.opacity,
          rotation: e.rotation,
          color,
          borderRadius: e.borderRadius,
        };

        switch (e.type.toLowerCase()) {
          case "square":
            return <Square {...props} />;
          case "circle":
            return <Circle {...props} />;
          case "donut":
            return <Donut {...props} />;
          case "diamondnarrow":
            return <DiamondNarrow {...props} />;
          case "cutdiamond":
            return <CutDiamond {...props} />;
          case "triangle":
            return <Triangle {...props} />;
        }
        return <></>;
      })}
    </View>
  );
};

export { Shapes, Square, Circle, Donut, DiamondNarrow, CutDiamond, Triangle };
