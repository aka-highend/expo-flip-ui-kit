import { extendTheme } from "native-base";
import { Platform } from "react-native";
import BadgeOverride from "./BadgeOverride";
import ButtonOverride from "./ButtonOverride";
import IconButtonOverride from "./IconButtonOverride";
import FlipColors from "../demo/pages/FlipColors/index";

const isIOS = Platform.OS === "ios";

const FlipCustomTheme = extendTheme({
  colors: {
    ...FlipColors,
  },
  sizes: {
    11: 44,
    "11.5": 46,
  },
  fonts: {
    proxima: "Proxima",
  },
  fontConfig: {
    Proxima: {
      500: {
        normal: "ProximaNova-Medium",
        italic: isIOS ? "ProximaNova-MediumIt" : "ProximaNova-Medium-It",
      },
      700: {
        normal: "ProximaNova-Bold",
        italic: isIOS ? "ProximaNova-BoldIt" : "ProximaNova-Bold-It",
      },
    },
  },
  fontSizes: {
    /**
     * xs:12
     * sm:14
     * md:16
     * lg:18
     * xl:20
     * 2xl:26
     */
    "2xl": 26,
  },
  components: {
    /**
     * override default button
     */
    ...ButtonOverride,

    /**
     * override default icon button
     */
    ...IconButtonOverride,

    Icon: {
      baseStyle: {
        _light: {
          color: FlipColors.neutral.MainText,
        },
      },
    },

    /**
     * override default badge
     */
    ...BadgeOverride,

    /**
     * override default text
     */

    /**
     * override default text
     */
    Text: {
      baseStyle: {
        color: "neutral.MainText",
        fontFamily: "proxima",
        fontWeight: "medium",
      },
    },

    /**
     * override default text
     */
    Input: {
      baseStyle: {
        placeholderTextColor: "neutral.SecondaryText",
        fontFamily: "proxima",
        fontWeight: "medium",
      },
    },
  },
});

export default FlipCustomTheme;
