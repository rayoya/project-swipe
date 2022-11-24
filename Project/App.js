<script src="http://localhost:8097"></script>
import { StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import RewardsContainer from './src/components/RewardsContainer';
import ShopBar from './src/components/ShopBar'
import { useFonts } from 'expo-font';
import { useCallback, useEffect } from 'react';
import ProgressContainer from './src/components/ProgressContainer';

// TODO: Replace with real data from api
const fakeRewardData = { 
  nextRewardIn: 1,
  totalRewardLength: 5,
  nextReward: '$5 off next meal'
}

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
      <View style={styles.Container} onLayout={onLayout}>
        <ShopBar />
        <ProgressContainer 
          nextRewardIn={fakeRewardData.nextRewardIn}  
          totalRewardLength={fakeRewardData.totalRewardLength} 
          nextReward={fakeRewardData.nextReward} 
        />
        <RewardsContainer />

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    display: 'flex',
  },

  Title: {
    fontSize: 36,
    padding: 16,
    fontFamily: 'Asap',
    color: 'black',
    backgroundColor: 'black',
    flex: 1,
    width: 155,
    display: 'flex',
    position: 'absolute'
  }
});
