import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Dimensions,
  Animated,
  Image,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { applogo, bg1 } from "../../assets/images";
import { BrandColor } from "../../utils/constants/BrandColor";
import { BoldText, SemiBoldText } from "../../components/TextView";
import { RORegularText } from "../../components/TextView/RORegularText";

/**
 * @author
 * @function SplashScreen
 **/
export const SplashScreen = (props) => {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [animationFinished, setAnimationFinished] = useState(false);

  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fadeAnim]);

  useEffect(() => {
    // Set minimum duration for splash screen
    const timer = setTimeout(() => {
      setAnimationFinished(true);
    }, 3000); // 2 seconds minimum duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground
      source={bg1}
      resizeMode="cover"
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar hidden />
      <View
        style={{
          height: width * 0.5,
          width: width * 0.5,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: BrandColor?.White,
          borderRadius: 1000,
          opacity: 0.9,
        }}
      >
        <Animated.View
          style={{
            opacity: fadeAnim,
          }}
        >
          <Image
            source={applogo}
            style={{
              height: width * 0.35,
              width: width * 0.35,
              borderRadius: 18,
            }}
          />
        </Animated.View>
      </View>

      <View
        style={{
          marginTop: 24,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RORegularText
          style={{
            fontSize: 48,
            color: BrandColor?.White,
            textAlign: "center",
          }}
        >
          Can you win?
        </RORegularText>
        <RORegularText
          style={{
            fontSize: 14,
            color: BrandColor?.White,
            textAlign: "center",
          }}
        >
          Take the challenge & Play with computer
        </RORegularText>

        {/* <BoldText style={{ color: BrandColor?.White, marginTop: 6 }}>
          Play with Computer
        </BoldText> */}
      </View>

      <View style={{ position: "absolute", bottom: 58 }}>
        <TouchableOpacity
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            width: width * 0.75,
            paddingHorizontal: 24,
            paddingVertical: 16,
            backgroundColor: isPressed ? BrandColor?.Red : BrandColor?.White,
            borderRadius: 100,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 6,
            borderColor: BrandColor?.Red,
            borderWidth: 2,
          }}
        >
          <RORegularText
            style={{
              fontSize: 18,
              color: isPressed ? BrandColor?.White : BrandColor?.Red,
              textAlign: "center",
            }}
          >
            Beat Me If You Can
          </RORegularText>
        </TouchableOpacity>

        <BoldText
          style={{
            marginTop: 12,
            color: BrandColor?.White,
            textAlign: "center",
          }}
        >
          Developed By zeon@betafore
        </BoldText>
      </View>
    </ImageBackground>
  );
};
