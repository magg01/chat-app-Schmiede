import { Pressable, View, Text, StyleSheet } from "react-native";

const ChatUserListItem = (props) => {
  return (
    <View style={styles.container}>
      <Pressable android_ripple={{ color: "#bbb" }} onPress={() => {console.log('pressed')}}>
        <View style={styles.innerContainer}>
            <Text>{props.name}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  }
});
