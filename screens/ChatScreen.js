import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Chat screen</Text>
      <View style={styles.chatWindow}> 

      </View>
      <View style={styles.inputContainer} >
        <View style={styles.textInputContainer}>
          <TextInput placeholder='type to chat'/>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} title="send" onPress={() => console.log("send")}/>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start' ,
  },
  chatWindow: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    width: '100%',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    width: '100%',
    borderWidth: 2,
    borderColor: 'red',
  },
  buttonContainer: {
    alignSelf: 'center',
  },
  textInputContainer: {
    borderWidth: 2,
    borderColor: 'yellow',
    flex: 4,
  }
});