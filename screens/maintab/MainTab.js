import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomHeightAndroid,
  BottomHeightIos,
} from "../../utils/constants/AppConstant";
import { Dimensions, Image, Platform, Text, View } from "react-native";
import { BrandColor } from "../../utils/constants/BrandColor";
import {
  home_f_icon,
  home_o_icon,
  settings_f_icon,
  settings_o_icon,
} from "../../assets/icons";
import { Settings } from "./Settings";
import { Home } from "./Home";

import { RORegularText } from "../../components/TextView/RORegularText";
import { SemiBoldText } from "../../components/TextView";

export const bottomNavigationLinks = [
 

  {
    name: "Home",
    component: Home,
    icon: home_o_icon,
    focused_icon: home_f_icon,
    text: "Home",
  },
  {
    name: "Settings",
    component: Settings,
    icon: settings_o_icon,
    focused_icon: settings_f_icon,
    text: "Settings",
  },
];

const Tab = createBottomTabNavigator();

/**
 * @author
 * @function MainTab
 **/
export const MainTab = (props) => {
  const { width, height } = Dimensions.get("window");
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            backgroundColor: BrandColor.White,
            height:
              Platform.OS === "android"
                ? BottomHeightAndroid
                : Math.min(0.11 * height, BottomHeightIos),
          },
        }}
      >
        {bottomNavigationLinks?.map((nav, index) => {
          return (
            <Tab.Screen
              key={index}
              name={nav?.name}
              component={nav?.component}
              options={{
                tabBarIcon: ({ focused }) => (
                  <TabLink focused={focused} nav={nav} />
                ),
              }}
            />
          );
        })}
      </Tab.Navigator>
    </>
  );
};

const TabLink = ({ focused, nav }) => {
  const { width, height } = Dimensions.get("window");
  return (
    <View
      style={{
        width: width / bottomNavigationLinks?.length,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: -26,
        // borderWidth: 1,
        // borderColor: "black",
      }}
    >
      <Image
        source={focused ? nav?.focused_icon : nav?.icon}
        resizeMode="contain"
        style={{
          width: Math.min(width * 0.075, 34),
          height: Math.min(width * 0.075, 34),
          tintColor: focused
            ? nav?.text !== "Compass"
              ? BrandColor?.secondary
              : undefined
            : BrandColor.GrayIgnored,
          marginBottom: 6,
        }}
      />
      <RORegularText
        style={{
          color: focused ? BrandColor.secondary : BrandColor.GrayIgnored,
          fontSize: Math.min(width * 0.029, 12),
        }}
      >
        {nav?.text}
      </RORegularText>
    </View>
  );
};
