import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import LanguageSelectorButton from "../components/ui/LanguageSelectorButton";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { CONST_STRINGS } from "../constants/strings";
import { useNavigation } from "@react-navigation/native";

const languageSelectorHandler = () => {
  console.log("selector pressed");
};

const ChatScreen = ({ route }) => {
  const [messageList, setMessageList] = useState([]);
  const [inputText, setInputText] = useState("");

  const navigation = useNavigation();

  const changeTextHandler = (text) => {
    setInputText(text);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <LanguageSelectorButton onPress={languageSelectorHandler} />
      ),
    });
  }, [navigation]);

  const sendHandler = () => {
    setMessageList((prev) => {
      return [
        ...prev,
        inputText,
        CONST_STRINGS.chatScreen.responseMessage[route.params.globalLanguage],
      ];
    });
    setInputText("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.chatWindow}>
        {messageList.map((message) => {
          // TODO: use a truly unique key
          return <Text key={Math.random()}>{message}</Text>;
        })}
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            value={inputText}
            onChangeText={changeTextHandler}
            onSubmitEditing={sendHandler}
            placeholder={
              CONST_STRINGS.chatScreen.inputText.placeHolder[
                route.params.globalLanguage
              ]
            }
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title={
              CONST_STRINGS.chatScreen.confirmButton.title[
                route.params.globalLanguage
              ]
            }
            onPress={sendHandler}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  chatWindow: {
    flex: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    width: "100%",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    width: "100%",
    borderWidth: 2,
    borderColor: "red",
  },
  buttonContainer: {
    alignSelf: "center",
  },
  textInputContainer: {
    borderWidth: 2,
    padding: 4,
    borderColor: "yellow",
    flex: 4,
  },
});
