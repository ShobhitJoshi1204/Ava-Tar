import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ColorScreen from "./src/screens/ColorScreen";
import BoxLayout from "./src/screens/BoxLayout";
import LeaveScreen from "./src/screens/LeaveScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    List: ListScreen,
    Colors: ColorScreen,
    Layout: BoxLayout,
    Leaves: LeaveScreen,
  },
  {
    initialRouteName: "Home",
  }
);

HomeScreen.navigationOptions = () => {
  return {
    title: "AvaTar",
  };
};

export default createAppContainer(navigator);
