import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bottomBunnerLayout: {
    "position": "absolute",
    "bottom": 10,
    "width": "100%",
    "height": 100,
    "justify-content": "center",
    "align-items": "center",
  },
  buttonContainer: {
    "width": "235px",
    "height": "44px",
    "background": "rgb(9, 188, 131)",
    "border-radius": "10px",
    "flex-direction": "row",
    "justify-content": "center",
    "align-items": "center",
  },
  buttonText: {
    "width": "144px",
    "height": "17px",
    "color": "rgb(255, 255, 255)",
    "font-size": "17px",
    "font-weight": "bold",
    "text-align": "center",
  }
})

export const buttonContainerProps = {
  shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
}