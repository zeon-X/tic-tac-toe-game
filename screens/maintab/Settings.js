import React, { useEffect, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  View,
  Switch,
  TouchableOpacity,
  Modal,
  Image,
  Alert,
} from "react-native";
import { RORegularText } from "../../components/TextView/RORegularText";
import { BrandColor } from "../../utils/constants/BrandColor";
import { applogo, islamic_art_1 } from "../../assets/images";
import {
  MuezzinList,
  prayerTimeMethodList,
  settingOptions,
} from "../../constants/settings";
import { BoldText, RegularText } from "../../components/TextView";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSettings,
  setSettingsItemValues,
} from "../../redux/actions/settings.action";
import { useNavigation } from "@react-navigation/native";
import {
  back_icon,
  logout_icon,
  profile_icon,
  tick_mark_icon,
} from "../../assets/icons";
import { LoadingComponent } from "../../components/Shared/LoadingComponent";

/**
 * @author
 * @function Settings
 **/

export const Settings = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { width, height } = Dimensions.get("window");

  // BOLD CHANGE
  const settingsState = useSelector((state) => state?.settings);
  // console.log(settingsState);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleToggle = (key) => {
    dispatch(toggleSettings(key)); // Dispatch the toggle action
  };
  const handleSetValue = (key, value) => {
    dispatch(setSettingsItemValues(key, value)); // Dispatch the toggle action
  };

  // Profile model section
  const openProfileModal = () => {
    setIsModalVisible(true);
  };

  const closeProfileModal = () => {
    setIsModalVisible(false);
  };

  // LOADING - Tools - start
  const [isLoadingVisible, setLoadingVisible] = useState(
    settingsState?.loading || false
  );
  const handleLoadingVisible = (status) => {
    setLoadingVisible((current) => status);
  };

  useEffect(() => {
    handleLoadingVisible(settingsState.loading);
  }, [settingsState.loading]);

  // LOADING - Tools - end

  return (
    <>
      <ScrollView
        style={{
          width: width,
          height: height,
          paddingBottom: 120,
        }}
      >
        <>
          <ImageBackground
            style={{ flex: 1 }}
            source={islamic_art_1}
            height={height}
            width={width}
          >
            <View
              style={{
                width: "100%",
                height: height * 0.28,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <RORegularText style={{ fontSize: 24 }}>Settings</RORegularText>
            </View>
          </ImageBackground>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              // gap: 12,

              paddingBottom: 32,
              backgroundColor: BrandColor?.White,
              position: "relative",
              top: -40,
              width: "100%",
            }}
          >
            <View style={{}}>
              <BoldText
                style={{
                  backgroundColor: BrandColor?.secondary,
                  width: "100%",
                  paddingHorizontal: 24,
                  paddingVertical: 6,
                  color: BrandColor?.White,
                }}
              >
                General settings
              </BoldText>
              {settingOptions?.map((option, index) => {
                return (
                  <SettingItem
                    key={option.key}
                    label={option.label}
                    value={settingsState?.settings[option.key]} // Ensure the key exists in the settings state
                    onChange={() => handleToggle(option.key)}
                    isLastItem={index === settingOptions.length - 1}
                  />
                );
              })}
            </View>

            <View
              style={{
                width: "100%",
                marginTop: 12,
              }}
            >
              <BoldText
                style={{
                  backgroundColor: BrandColor?.secondary,
                  width: "100%",
                  paddingHorizontal: 24,
                  paddingVertical: 6,
                  color: BrandColor?.White,
                }}
              >
                Prayer time method
              </BoldText>

              <View>
                {prayerTimeMethodList?.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() =>
                        handleSetValue("prayerTimeMethod", item?.key)
                      }
                      style={{
                        width: "100%",
                        paddingHorizontal: 24,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingVertical: 12,
                        borderTopWidth: index !== 0 ? 1 : 0,
                        borderColor: BrandColor?.LightGrey,
                      }}
                    >
                      <RegularText style={{ fontSize: 16 }}>
                        {item?.value}
                      </RegularText>
                      {settingsState?.settings?.prayerTimeMethod ===
                        item?.key && (
                        <Image
                          source={tick_mark_icon}
                          style={{
                            width: 14,
                            height: 14,
                            tintColor: BrandColor?.secondary,
                          }}
                        />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            <View
              style={{
                width: "100%",
              }}
            >
              <BoldText
                style={{
                  backgroundColor: BrandColor?.secondary,
                  width: "100%",
                  paddingHorizontal: 24,
                  paddingVertical: 6,
                  color: BrandColor?.White,
                }}
              >
                Muezzin
              </BoldText>

              <View>
                {MuezzinList?.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleSetValue("muezzin", item?.key)}
                      style={{
                        width: "100%",
                        paddingHorizontal: 24,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingVertical: 12,
                        borderTopWidth: index !== 0 ? 1 : 0,
                        borderColor: BrandColor?.LightGrey,
                      }}
                    >
                      <RegularText style={{ fontSize: 16 }}>
                        {item?.value}
                      </RegularText>
                      {settingsState?.settings?.muezzin === item?.key && (
                        <Image
                          source={tick_mark_icon}
                          style={{
                            width: 14,
                            height: 14,
                            tintColor: BrandColor?.secondary,
                          }}
                        />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            <View
              style={{
                width: "100%",
              }}
            >
              <BoldText
                style={{
                  backgroundColor: BrandColor?.secondary,
                  width: "100%",
                  paddingHorizontal: 24,
                  paddingVertical: 6,
                  color: BrandColor?.White,
                }}
              >
                Others
              </BoldText>

              <TouchableOpacity
                style={{
                  width: "100%",
                  paddingVertical: 12,
                  paddingHorizontal: 24,
                  marginBottom: 12,
                  flexDirection: "row",
                  gap: 8,
                  alignItems: "center",
                  // borderWidth: 1,
                }}
                onPress={openProfileModal}
              >
                <Image
                  source={profile_icon}
                  style={{ height: 36, width: 36 }}
                />
                <RegularText
                  style={{
                    fontSize: 16,
                    color: "#333",
                    marginTop: 4,
                  }}
                >
                  User Profile
                </RegularText>
              </TouchableOpacity>
            </View>

            {/* Profile modal */}
            {/* Profile Modal */}
            <Modal
              visible={isModalVisible} // Controls visibility of the modal
              animationType="slide" // The slide-in animation for modal
              transparent={true} // Background will be semi-transparent
              onRequestClose={closeProfileModal} // Handles back button press on Android
            >
              <ProfileModalView onPress={closeProfileModal} />
            </Modal>
          </View>
        </>
      </ScrollView>
      <LoadingComponent
        isLoadingVisible={isLoadingVisible}
        handleLoadingVisible={handleLoadingVisible}
      />
    </>
  );
};

const SettingItem = ({ label, value, onChange, isLastItem }) => (
  <View
    style={{
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 6,
      borderBottomWidth: isLastItem ? 0 : 1,
      borderBottomColor: BrandColor?.LightGrey,
      backgroundColor: "#fff",
      paddingHorizontal: 24,
    }}
  >
    <RegularText
      style={{
        fontSize: 16,
        color: "#333",
        width: 250,
      }}
    >
      {label}
    </RegularText>
    <Switch value={value} onValueChange={onChange} />
  </View>
);

const ProfileModalView = ({ onPress }) => {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleConfirmLogout = () => {};

  const handleLogout = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Logout canceled"),
          style: "cancel",
        },
        {
          text: "Yes, Logout",
          onPress: handleConfirmLogout,
          style: "destructive", // Optional styling for the button
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View
      style={{
        flex: 1,
        height: height,
        width: width,
        paddingHorizontal: 24,
        paddingVertical: 24,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: BrandColor?.White, // Dark background with opacity
      }}
    >
      <View style={{ marginVertical: 12 }}>
        <TouchableOpacity
          style={{
            padding: 12,
            borderWidth: 1,
            width: 44,
            height: 44,
            borderRadius: 100,
            borderColor: BrandColor?.secondary,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={onPress}
        >
          <Image
            source={back_icon}
            style={[
              {
                width: 20,
                height: 12,
                tintColor: BrandColor?.secondary,
              },
            ]}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          height: height * 0.8,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={applogo}
            style={[
              {
                width: 120,
                height: 120,
                borderRadius: 100,
              },
            ]}
          />
          <BoldText
            style={{
              fontSize: 20,
              textAlign: "center",
              marginTop: 12,
            }}
          >
            User
          </BoldText>

          <RegularText
            style={{
              marginVertical: 10,
              width: "100%",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Email:
          </RegularText>
        </View>

        <TouchableOpacity
          onPress={handleLogout}
          style={{
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            backgroundColor: BrandColor?.secondary,
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 8,
          }}
        >
          <Image
            source={logout_icon}
            style={{ height: 32, width: 32, tintColor: BrandColor.White }}
          />
          <BoldText style={{ color: BrandColor.White }}>Logout</BoldText>
        </TouchableOpacity>
      </View>
    </View>
  );
};
