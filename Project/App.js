<script src="http://localhost:8097"></script>
import { StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import RewardsContainer from './src/components/RewardsContainer';
import { useFonts } from 'expo-font';
import { useCallback, useEffect } from 'react';


export default function App() {
  const [fontsLoaded] = useFonts({
    'Asap': require('./assets/fonts/Asap-Medium.ttf'),
    'Asap-Bold': require('./assets/fonts/Asap-Bold.ttf'),
  });

  useEffect(()=>{
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, [])

  const onLayout = useCallback(async () => {
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;


  return (
    <>
    <View style={styles.container} onLayout={onLayout}>
        <RewardsContainer />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    display: 'flex',
  },
});
