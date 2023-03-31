import { Pressable, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const LanguageSelectorButton = (props) => {
  return (
    <Pressable android_ripple={{ color: "#bbb" }} onPress={props.onPress}>
      <View>
        <Ionicons name="language-sharp" size={24} color="black" />
      </View>
    </Pressable>
  );
};

export default LanguageSelectorButton;