import React from "react";
import { View, Image, Dimensions } from "react-native";
import {
  MultipleSelectList,
  SelectList,
} from "react-native-dropdown-select-list";
import { BrandColor } from "../../utils/constants/BrandColor";
import {
  close_dropdown_arrow_icon,
  open_dropdown_arrow_icon,
} from "../../assets/icons";
import { SemiBoldText } from "../TextView";
import { responsiveSize } from "../../utils/UtilFunctions";

export const SelectInputByListCustom = ({
  labelText,
  onChangeText,
  data,
  searchEnable,
  defaultOption,
  placeholder,
  searchPlaceholder,
  notFoundText,
  dropdownShown,
  style,
  labelTextStyle,
  boxStyles,
}) => {
  // console.log(searchEnable == undefined ? "undi" : "veri");
  // console.log("defaultOption: ", defaultOption);
  // console.log("data: ", data);

  const { width, height } = Dimensions.get("window");

  let defOptionVal = data?.find((item) => item?.value === defaultOption);
  // console.log("def option val: ", defOptionVal);

  // let xxx = 375 / 14;
  // console.log(1 / xxx);
  // console.log(width * (1 / xxx));

  return (
    <View style={[{ width: "100%" }, { ...style }]}>
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
      <SelectList
        search={searchEnable !== undefined ? searchEnable : true}
        setSelected={onChangeText}
        data={data}
        defaultOption={
          defaultOption !== undefined || defOptionVal !== null
            ? defOptionVal
            : null
        }
        notFoundText={
          notFoundText !== undefined ? notFoundText : "No data found"
        }
        dropdownShown={dropdownShown !== undefined ? dropdownShown : false}
        placeholder={placeholder !== undefined ? placeholder : "Select option"}
        searchPlaceholder={
          searchPlaceholder !== undefined ? searchPlaceholder : "search"
        }
        save="value"
        // maxHeight={80}
        arrowicon={
          <Image
            source={open_dropdown_arrow_icon}
            style={{
              height: 7,
              width: Math.min(14, width * 0.0373333333),
            }}
          />
        }
        closeicon={
          <Image
            source={close_dropdown_arrow_icon}
            style={{
              height: 7,
              width: Math.min(14, width * 0.0373333333),
            }}
          />
        }
        boxStyles={{
          height: responsiveSize(54, height * 0.067),
          paddingHorizontal: responsiveSize(14, width * 0.037),
          borderWidth: 1,
          borderColor: BrandColor?.TextInputBgColor,
          backgroundColor: BrandColor.White,
          borderRadius: 8,
          marginTop: responsiveSize(6, height * 0.015),
          fontSize: responsiveSize(14, width * 0.037),
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          ...boxStyles,
        }}
        inputStyles={{
          // color: BrandColor.inputlabelText,
          fontSize: Math.min(14, width * 0.0373333333),
        }}
        dropdownStyles={{
          backgroundColor: BrandColor.White,
          borderWidth: 1,
          borderColor: BrandColor?.TextInputBgColor,
          borderRadius: 8,
        }}
        dropdownItemStyles={{
          height: Math.min(36, width * 0.096),
        }}
        dropdownTextStyles={{
          fontSize: Math.min(14, width * 0.0373333333),
        }}
      />
    </View>
  );
};
export const MultiSelectInputByListCustom = ({
  labelText,
  onChangeText,
  data,
  searchEnable,
  defaultOption,
  placeholder,
  searchPlaceholder,
  notFoundText,
  dropdownShown,
  style,
  labelTextStyle,
}) => {
  // console.log(searchEnable == undefined ? "undi" : "veri");
  // console.log("defaultOption: ", defaultOption);
  // console.log("data: ", data);

  const { width, height } = Dimensions.get("window");

  let defOptionVal = data?.find((item) => item?.value === defaultOption);
  // console.log("def option val: ", defOptionVal);

  // let xxx = 375 / 14;
  // console.log(1 / xxx);
  // console.log(width * (1 / xxx));

  return (
    <View style={[{ width: "100%" }, { ...style }]}>
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
      <MultipleSelectList
        search={searchEnable !== undefined ? searchEnable : true}
        setSelected={onChangeText}
        data={data}
        defaultOption={
          defaultOption !== undefined || defOptionVal !== null
            ? defOptionVal
            : null
        }
        notFoundText={
          notFoundText !== undefined ? notFoundText : "No data found"
        }
        dropdownShown={dropdownShown !== undefined ? dropdownShown : false}
        placeholder={placeholder !== undefined ? placeholder : "Select option"}
        searchPlaceholder={
          searchPlaceholder !== undefined ? searchPlaceholder : "search"
        }
        save="value"
        // maxHeight={80}
        arrowicon={
          <Image
            source={open_dropdown_arrow_icon}
            style={{
              height: 7,
              width: Math.min(14, width * 0.0373333333),
            }}
          />
        }
        closeicon={
          <Image
            source={close_dropdown_arrow_icon}
            style={{
              height: 7,
              width: Math.min(14, width * 0.0373333333),
            }}
          />
        }
        boxStyles={{
          height: responsiveSize(54, height * 0.067),
          paddingHorizontal: responsiveSize(14, width * 0.037),
          borderWidth: 0,
          backgroundColor: BrandColor.TextInputBgColor,
          borderRadius: 8,
          marginTop: responsiveSize(6, height * 0.015),
          fontSize: responsiveSize(14, width * 0.037),
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        inputStyles={{
          // color: BrandColor.inputlabelText,
          fontSize: Math.min(14, width * 0.0373333333),
        }}
        dropdownStyles={{
          backgroundColor: BrandColor.TextInputBgColor,
          borderWidth: 1,
          borderColor: BrandColor?.GrayIgnored,
          borderRadius: 8,
        }}
        dropdownItemStyles={{
          height: Math.min(36, width * 0.096),
        }}
        dropdownTextStyles={{
          fontSize: Math.min(14, width * 0.0373333333),
        }}
      />
    </View>
  );
};

// export const SelectInputCustom = ({
//   onChangeText,
//   data,
//   searchEnable,
//   defaultOption,
//   placeholder,
//   searchPlaceholder,
//   notFoundText,
//   dropdownShown,
//   style,
// }) => {
//   // console.log(searchEnable == undefined ? "undi" : "veri");
//   // console.log("defaultOption: ", defaultOption);
//   // console.log("data: ", data);

//   let defOptionVal = data?.find((item) => item?.value === defaultOption);
//   // console.log("def option val: ", defOptionVal);

//   return (
//     <View style={[{ width: "40%" }, { ...style }]}>
//       <SelectList
//         search={searchEnable !== undefined ? searchEnable : true}
//         setSelected={onChangeText}
//         data={data}
//         defaultOption={
//           defaultOption !== undefined || defOptionVal !== null
//             ? defOptionVal
//             : null
//         }
//         notFoundText={
//           notFoundText !== undefined ? notFoundText : "No data found"
//         }
//         dropdownShown={dropdownShown !== undefined ? dropdownShown : false}
//         placeholder={placeholder !== undefined ? placeholder : "Select option"}
//         searchPlaceholder={
//           searchPlaceholder !== undefined ? searchPlaceholder : "search"
//         }
//         save="value"
//         // maxHeight={80}
//         arrowicon={
//           <Image
//             source={open_dropdown_arrow_icon}
//             style={{
//               height: 7,
//               width: 14,
//             }}
//           />
//         }
//         closeicon={
//           <Image
//             source={close_dropdown_arrow_icon}
//             style={{
//               height: 7,
//               width: 14,
//             }}
//           />
//         }
//         boxStyles={{
//           height: 42,
//           paddingHorizontal: 14,
//           backgroundColor: BrandColor.White,
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//           //   borderWidth: 1,
//           //   borderColor: "red",
//         }}
//         inputStyles={{
//           // color: BrandColor.inputlabelText,
//           fontSize: 14,
//         }}
//         dropdownStyles={{
//           backgroundColor: BrandColor.White,
//           borderRadius: 8,
//         }}
//         dropdownItemStyles={{
//           height: 36,
//         }}
//         dropdownTextStyles={{
//           fontSize: 14,
//         }}
//       />
//     </View>
//   );
// };
