import React from "react";
import { View, Dimensions, Image, Modal } from "react-native";
import { BrandColor } from "../../utils/constants/BrandColor";
import { loading_gif } from "../../assets/loading";

/**
 * @author
 * @function LoadingComponent
 **/
export const LoadingComponent = ({
  isLoadingVisible,
  handleLoadingVisible,
}) => {
  const { width, height } = Dimensions.get("window");
  return (
    <Modal
      visible={isLoadingVisible}
      //   visible={true}
      onRequestClose={() => {
        handleLoadingVisible(false);
      }}
      animationType="fade"
      transparent={true}
      style={{ flex: 1 }}
    >
      <View
        style={{
          height: height,
          width: width,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          backgroundColor: BrandColor?.LoadingTransparent,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: BrandColor?.TextInputBgColor,

            paddingHorizontal: 48,
            paddingVertical: 44,

            // height: width * 0.4,
            // width: width * 0.4,
            borderRadius: 8,
          }}
        >
          <Image
            source={loading_gif}
            height={64}
            width={64}
            style={{ height: 48, width: 48 }}
          />
        </View>
      </View>
    </Modal>
  );
};
