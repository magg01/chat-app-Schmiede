import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import { fetchUsers } from '../utils/http';
import ChatUserListItem from '../components/ChatUserListItem';

const HomeScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(); 

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
  
  const onNavigateHandler = () => {
    navigation.navigate("ChatScreen");
  }

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
          return <ChatUserListItem key={user.id} userName={user.name}/>
        })}
      </ScrollView>
      <Button title="navigate" onPress={onNavigateHandler}>Navigate to chat screen</Button>
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