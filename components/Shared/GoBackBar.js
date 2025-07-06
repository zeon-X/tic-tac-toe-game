import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { back_icon } from "../../assets/icons";
import { BrandColor } from "../../utils/constants/BrandColor";
import { useNavigation } from "@react-navigation/native";
import { SemiBoldText } from "../TextView";

/**
 * @author
 * @function GoBackBar
 **/
export const GoBackBar = ({
  barTitle,
  style,
  parentStyle,
  imageStyle,
  textStyle,
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        },
        parentStyle,
      ]}
    >
      <View
        style={{
          width: "18%",
        }}
      >
        <BackBtn
          navigation={navigation}
          imageStyle={imageStyle}
          style={{ style }}
        />
      </View>

      {
        <SemiBoldText
          style={{
            width: "64%",
            textAlign: "center",
            ...textStyle,
          }}
        >
          {barTitle}
        </SemiBoldText>
      }

      <View
        style={{
          width: "18%",
        }}
      />
    </View>
  );
};

const BackBtn = ({ navigation, imageStyle, style }) => {
  return (
    <TouchableOpacity
      style={[
        {
          width: 36,
          height: 36,
          borderRadius: 100,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          borderColor: BrandColor?.GrayIgnored,
        },
        style,
      ]}
      onPress={() => {
        navigation?.goBack();
      }}
    >
      <Image
        source={back_icon}
        style={[
          {
            width: 20,
            height: 12,
            tintColor: BrandColor?.DeepMain,
          },
          imageStyle,
        ]}
      />
    </TouchableOpacity>
  );
};
