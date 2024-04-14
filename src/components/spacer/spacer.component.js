import React from "react";
import { View } from "react-native";
import { styled } from "styled-components/native";

const positionVariants = {
  top: "margin-top",
  right: "margin-right",
  bottom: "margin-bottom",
  left: "margin-left",
};

const sizeVariants = {
  s: 1,
  m: 2,
  l: 3,
  xl: 4,
  xxl: 5,
};

const getPropertyAndSizeIndex = (position, size) => {
  const property = positionVariants[position];
  const sizeIndex = sizeVariants[size];

  return [property, sizeIndex];
};

const Spacer = React.memo(({ position, size, children }) => {
  let [property, sizeIndex] = getPropertyAndSizeIndex(position, size);
  const SpacerComponent = styled(View)`
      ${property}: ${props => {
      props.theme.space[sizeIndex]
    }};
  `
  return <SpacerComponent>{children}</SpacerComponent>
});

export default Spacer;
