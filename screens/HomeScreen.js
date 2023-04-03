import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import LanguageSelectorButton from '../components/ui/LanguageSelectorButton';
import { fetchUsers } from '../utils/http';
import ChatUserListItem from '../components/ChatUserListItem';

const languageSelectorHandler = () => {
  console.log("selector pressed");
};

const HomeScreen = ({navigation, route}) => {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <LanguageSelectorButton onPress={languageSelectorHandler} />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    (async () => {
      try {
        const userList = await fetchUsers();
        setUsers(userList);
      } catch {
        setErrorMessage('Could not retreive users at this time, try again later.');
      }
    })()
  }, []);
  

  if (errorMessage) {
    return (
      <View style={styles.container}>
        <Text>{errorMessage}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {users.map((user) => {
          return <ChatUserListItem key={user.id} userName={user.name} globalLanguage={route.params.globalLanguage}/>
        })}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});