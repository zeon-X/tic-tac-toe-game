import { SafeAreaView, StatusBar, View } from "react-native";

export const AppStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[{}, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);
