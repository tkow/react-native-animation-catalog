import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bottomBunnerLayout: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    width: 235,
    height: 44,
    backgroundColor: "rgb(9, 188, 131)",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    width: 144,
    height: 17,
    color: "rgb(255, 255, 255)",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export const buttonContainerProps = {
  shadowColor: "rgba(0, 0, 0, 0.3)",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5
};
