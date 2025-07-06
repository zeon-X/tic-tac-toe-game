import { TouchableOpacity, View } from "react-native";
import { BrandColor } from "../../utils/constants/BrandColor";
import { SemiBoldText } from "../TextView";

export const BottomCallToActionButton = ({ onPress, ctaText }) => {
  return (
    <View
      style={{
        backgroundColor: BrandColor?.White,
        paddingTop: 18,
        paddingBottom: 42,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        paddingHorizontal: 16,
        position: "static",
        bottom: 0,

        // iOS Shadow
        shadowColor: "#000", // Shadow color (black)
        shadowOffset: { width: 0, height: -2 }, // Move shadow upwards by setting a smaller negative height
        shadowRadius: 4, // Smaller blur radius for a less intense shadow
        shadowOpacity: 0.15, // Lower opacity for a lighter shadow effect
        // Android Shadow
        elevation: 3, // Lower elevation for a more subtle shadow on Android
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 14,
          borderRadius: 100,
          backgroundColor: BrandColor?.DeepMain,
        }}
      >
        <SemiBoldText style={{ color: BrandColor?.White, fontSize: 16 }}>
          {ctaText}
        </SemiBoldText>
      </TouchableOpacity>
    </View>
  );
};

export const CallToActionButton = ({ onPress, ctaText, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 14,
          borderRadius: 100,
          backgroundColor: BrandColor?.DeepMain,
        },
        style,
      ]}
    >
      <SemiBoldText style={{ color: BrandColor?.White, fontSize: 16 }}>
        {ctaText}
      </SemiBoldText>
    </TouchableOpacity>
  );
};
