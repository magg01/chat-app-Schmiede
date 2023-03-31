import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({navigation}) => {

  const onNavigateHandler = () => {
    navigation.navigate("ChatScreen");
  }

  return (
    <View style={styles.container}>
      <Text>This is the homescreen</Text>
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