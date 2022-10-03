import { StyleSheet } from "react-native";

export default StyleSheet.create({
  defaultButtonContainer: {
    height: 46,
    borderRadius: 100.0,
    overflow: "hidden",
  },
  defaultButtonBody: {
    height: 46,
    paddingVertical: 13,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  smallButtonContainer: {
    height: 28,
    borderRadius: 100.0,
    overflow: "hidden",
  },
  smallButtonBody: {
    height: 28,
    paddingVertical: 7,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  leftIcon: {
    height: 20,
    width: 20,
    marginRight: 6,
  },
  rightIcon: {
    height: 20,
    width: 20,
    marginLeft: 6,
  },
});
