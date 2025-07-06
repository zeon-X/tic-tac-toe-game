import React from "react";
import {
  Dimensions,
  Image,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
import { BrandColor } from "../../utils/constants/BrandColor";
import { BoldText, RegularText, SemiBoldText } from "../TextView";

/**
 * @author
 * @function ShowStatusComponent
 **/
export const ShowStatusComponent = ({
  title,
  subTitle,
  icon,
  onPress,
  ctaText,
}) => {
  const { width, height } = Dimensions.get("window");

  return (
    <View
      style={{
        flex: 1,
        marginTop: StatusBar?.currentHeight || 28,
        paddingHorizontal: 16,
        paddingVertical: 24,
        // backgroundColor: BrandColor?.DeepMain,
      }}
    >
      <View
        style={{
          flex: 1,
          marginTop: 20,
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: 24,
        }}
      >
        <View>
          <SemiBoldText
            style={{
              fontSize: 24,
              textAlign: "center",
              color: BrandColor?.DeepMain,
            }}
          >
            {title}
          </SemiBoldText>
          <RegularText style={{ textAlign: "center", marginVertical: 12 }}>
            {subTitle}
          </RegularText>
        </View>
        <View
          style={{
            width: width * 0.8,
            height: width * 0.8,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={icon}
            style={{
              width: width * 0.8,
              height: width * 0.8,
              borderRadius: 12,
            }}
          />
        </View>

        <TouchableOpacity
          onPress={onPress}
          style={{
            width: "100%",
            backgroundColor: BrandColor?.DeepMain,
            paddingVertical: 16,
            borderRadius: 100,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 24,
          }}
        >
          <BoldText style={{ color: BrandColor?.White }}>{ctaText}</BoldText>
        </TouchableOpacity>
      </View>
    </View>
  );
};
