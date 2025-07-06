import { settingsConstant } from "../constant/constants";

const initialState = {
  settings: {
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
  },
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case settingsConstant?.UPDATE_SETTING_REQUEST:
      state = {
        ...state,
        settings: initialState?.settings,
        loading: true,
      };
      break;
    case settingsConstant?.UPDATE_SETTING_SUCCESS:
      state = {
        ...state,
        settings: action.payload, // toggle the setting
        loading: false,
      };
      break;
    case settingsConstant?.UPDATE_SETTING_FAILURE:
      state = {
        ...state,
        error: action.payload, // toggle the setting
        loading: false,
      };
      break;
  }
  return state;
};
