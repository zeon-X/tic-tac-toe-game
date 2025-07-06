import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import * as Font from "expo-font";
import { SEC_Bold } from "../../assets/fonts";

export const SECBoldText = (props) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      SEC_Bold: SEC_Bold,
      SEC_Bold: {
        uri: SEC_Bold,
        display: Font.FontDisplay.FALLBACK,
      },
    }).then(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <Text style={{ ...props?.style, fontFamily: loaded ? "SEC_Bold" : null }}>
      {props.children}
    </Text>
  );
};
