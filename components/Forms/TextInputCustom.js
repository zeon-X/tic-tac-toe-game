import React from "react";
import { View, TextInput, Dimensions } from "react-native";
import { SemiBoldText } from "../TextView";
import { BrandColor } from "../../utils/constants/BrandColor";
import { responsiveSize } from "../../utils/UtilFunctions";

/**
 * @_author Md. Shefat Zeon
 * @function TextInputCustom
 **/
export const TextInputCustom = ({
  onChangeText,
  value,
  labelText,
  placeholder = "Type here",
  keyboardType = "default",
  style,
  inputStyle,
  labelTextStyle,
  secureTextEntry,
  isTextArea = false,
}) => {
  const { width, height } = Dimensions.get("window");

  return (
    <View style={[{ width: "100%", marginTop: 14 }, style]}>
      {labelText && (
        <SemiBoldText
          style={{
            fontSize: responsiveSize(14, width * 0.043),
            color: BrandColor.Black,
            ...labelTextStyle,
          }}
        >
          {labelText}
        </SemiBoldText>
      )}
      <TextInput
        style={[
          {
            height: isTextArea ? 200 : responsiveSize(54, height * 0.067),
            paddingHorizontal: responsiveSize(14, width * 0.037),
            paddingVertical: isTextArea
              ? responsiveSize(14, width * 0.037)
              : "auto",
            borderRadius: 8,
            backgroundColor: BrandColor?.TextInputBgColor,
            marginTop: responsiveSize(6, height * 0.015),
            fontSize: responsiveSize(14, width * 0.037),
          },
          inputStyle,
        ]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry || false}
        autoCapitalize="none"
        multiline={isTextArea}
        // numberOfLines={isTextArea && 10}
      />
    </View>
  );
};
