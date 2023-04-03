import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import { CONST_STRINGS } from "./constants/strings";

const Stack = createNativeStackNavigator();

export default function App() {
  const [globalLanguage, setGlobalLanguage] = useState("DE");

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: CONST_STRINGS.homeScreen.title[globalLanguage],
          }}
          initialParams={{globalLanguage: globalLanguage}}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            title: CONST_STRINGS.chatScreen.title[globalLanguage],
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

