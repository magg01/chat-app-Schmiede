import { Pressable, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ChatUserListItem = ({ userName }) => {
  const navigation = useNavigation();
  
  const pressHandler = () => {
    navigation.navigate("ChatScreen");
  };

  return (
    <View style={styles.container}>
      <Pressable android_ripple={{ color: "#bbb" }} onPress={pressHandler}>
        <View style={styles.innerContainer}>
          <Text>{userName}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ChatUserListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "80%",
    backgroundColor: "#ccc",
    margin: 8,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
