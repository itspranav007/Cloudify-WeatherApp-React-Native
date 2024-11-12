import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

//import Practicescreen from './SRC/practice';
import Splashscreen from './SRC/splash';
import Homescreen from './SRC/home1';
import Cardscreen from './SRC/cards';
import Details from './SRC/details';
import Profilescreen from './SRC/profile';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splashscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Homescreen} options={{ headerShown: false }} />
        <Stack.Screen name="Card" component={Cardscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profilescreen} options={{ headerShown: false }} />
       {/*} <Stack.Screen name="Practice" component={Practicescreen} options={{ headerShown: false }} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;