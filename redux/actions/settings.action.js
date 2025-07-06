import { settingsConstant } from "../constant/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

// The key in which the settings will be saved
const SETTINGS_STORAGE_KEY = "app_settings";

const initialState = {
  is24HourFormat: false,
  isPrayerNotificationsEnabled: true,
  isVibrationEnabled: false,
  isSleepModeEnabled: false,
  isOnlyWDMMasjids: false,
  isQuranicReflectionsEnabled: false,
  isDaylightSavingsEnabled: false,

  // PRAYER
  fajr: false,
  sunrise: false,
  dhuhr: false,
  asr: false,
  maghrib: false,
  isha: false,

  // for dropdown toggle
  prayerTimeMethod: "Karachi",
  muezzin: "mishary_alafasy",
};
// Helper functions
// Save settings to storage
const saveSettingsToStorage = async (settings) => {
  try {
    const settingsToSave = { ...settings }; //Create a copy of the setting
    await AsyncStorage.setItem(
      SETTINGS_STORAGE_KEY,
      JSON.stringify(settingsToSave)
    );
  } catch (error) {
    console.log("Error saving the storage: ", error);
  }
};

// Function to load settings
const loadSettingsFromStorage = async () => {
  try {
    const savedSettings = await AsyncStorage.getItem(SETTINGS_STORAGE_KEY);
    return savedSettings ? JSON.parse(savedSettings) : null;
  } catch (error) {
    console.log("Error loading the settigs: ", error);
  }
};

// Alter settings while toggle function
export const toggleSettings = (key) => {
  return async (dispatch) => {
    try {
      // console.log("toggle setting", key);

      // First dispatch the action to update Redux state
      dispatch({
        type: settingsConstant?.UPDATE_SETTING_REQUEST,
      });

      // Then get current settings from storage
      const savedSettings = (await loadSettingsFromStorage()) || initialState;

      // Update only the changed setting
      const updatedSettings = {
        ...savedSettings,
        [key]: !savedSettings[key],
      };

      // console.log("Updates settings toggle: ", updatedSettings);

      // Save the updated settings
      await saveSettingsToStorage(updatedSettings);

      dispatch({
        type: settingsConstant?.UPDATE_SETTING_SUCCESS,
        payload: updatedSettings,
      });
    } catch (error) {
      console.error("Error in toggleSetting:", error);

      dispatch({
        type: settingsConstant?.UPDATE_SETTING_FAILURE,
        payload: error,
      });
    }
  };
};

export const setSettingsItemValues = (key, value) => {
  return async (dispatch) => {
    try {
      // console.log("set value", key, value);

      // First dispatch the action to update Redux state
      dispatch({
        type: settingsConstant?.UPDATE_SETTING_REQUEST,
      });

      // Then get current settings from storage
      const savedSettings = (await loadSettingsFromStorage()) || initialState;

      // Update only the changed setting
      const updatedSettings = {
        ...savedSettings,
        [key]: value,
      };

      // console.log("Updates settings set value: ", updatedSettings);

      // Save the updated settings
      await saveSettingsToStorage(updatedSettings);

      dispatch({
        type: settingsConstant?.UPDATE_SETTING_SUCCESS,
        payload: updatedSettings,
      });
    } catch (error) {
      console.error("Error in setSettingsItemValues:", error);

      dispatch({
        type: settingsConstant?.UPDATE_SETTING_FAILURE,
        payload: error,
      });
    }
  };
};

// Initialize settings from storage
export const initializeSettings = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: settingsConstant?.UPDATE_SETTING_REQUEST,
      });
      const savedSettings = (await loadSettingsFromStorage()) || initialState;

      if (savedSettings) {
        dispatch({
          type: settingsConstant?.UPDATE_SETTING_SUCCESS,
          payload: savedSettings,
        });
      }
    } catch (error) {
      console.error("Error initializing settings:", error);

      dispatch({
        type: settingsConstant?.UPDATE_SETTING_FAILURE,
        payload: error,
      });
    }
  };
};

// Alter settings while toggle function
export const togglePrayerTimeSettings = (key) => {
  return async (dispatch) => {
    try {
      // console.log("toggle setting", key);

      // First dispatch the action to update Redux state
      dispatch({
        type: settingsConstant?.UPDATE_SETTING_REQUEST,
      });

      // Then get current settings from storage
      const savedSettings = (await loadSettingsFromStorage()) || initialState;

      // Update only the changed setting
      const updatedSettings = {
        ...savedSettings,
        [key]: !savedSettings[key],
      };

      // console.log("Updates settings toggle: ", updatedSettings);

      // Save the updated settings
      await saveSettingsToStorage(updatedSettings);

      dispatch({
        type: settingsConstant?.UPDATE_SETTING_SUCCESS,
        payload: updatedSettings,
      });
    } catch (error) {
      console.error("Error in toggleSetting:", error);

      dispatch({
        type: settingsConstant?.UPDATE_SETTING_FAILURE,
        payload: error,
      });
    }
  };
};
