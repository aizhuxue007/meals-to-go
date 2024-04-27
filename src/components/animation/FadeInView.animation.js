import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";
import { styled } from "styled-components/native";

const AnimatedView = styled(Animated.View)``;

const FadeInView = ({ children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return <AnimatedView>{children}</AnimatedView>;
};

export default FadeInView;
