import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Background, GoBackButton, PressableButton} from '../../components';
import {NavigationProp, RouteProp, useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LineChart from '../../components/charts/LineChart';

interface DetailScreenProps {
  route: RouteProp<
    {params: {activity: {title: string; wallet: string; money: string}}},
    'params'
  >;
}

export const Activity: React.FC<DetailScreenProps> = ({route}) => {
  const {activity} = route.params;
  const navigation = useNavigation<NavigationProp<any>>();

  const lineChartData = [10, 20, 3, 4, 5, 0, -10, -20, -3, -4];

  const handlePastButtonPress = () => {
    console.log('Past button pressed!');
  };

  return (
    <Background>
      <SafeAreaView>
        <GoBackButton />
        <View style={styles.rectangle}>
          <View style={styles.rectangleInput}>
            <Text style={styles.rWallet}>$2,000.942</Text>
            <View style={styles.rMoneyView}>
              <Text style={styles.rMoney}>+$300.05</Text>
              <Text style={styles.rText}>last month</Text>
            </View>
          </View>
          <View style={styles.bottomTextContainer}>
            <View style={styles.viewH}>
              <Text style={styles.dText}>{activity.wallet}</Text>
              <Text style={styles.dText}>{activity.wallet}</Text>
              <Text style={styles.dText}>{activity.wallet}</Text>
            </View>
            <View style={styles.viewH}>
              <Text style={styles.vText}>Global Avg.</Text>
              <Text style={styles.vText}>Market Cap</Text>
              <Text style={styles.vText}>Volume</Text>
            </View>
          </View>
          <View style={styles.chartContainer}>
            <LineChart data={lineChartData} />
          </View>
          <View style={styles.viewLast}>
            <View style={styles.inlineTextContainer}>
              <Text style={styles.vText}>High</Text>
              <Text style={styles.lastText}>{activity.wallet}</Text>
            </View>
            <View style={styles.inlineTextContainer}>
              <Text style={styles.vText}>Vol</Text>
              <Text style={styles.lastText}>{activity.wallet}</Text>
            </View>
          </View>
          <View style={styles.viewLast}>
            <View style={styles.inlineTextContainer}>
              <Text style={styles.vText}>Low</Text>
              <Text style={styles.lastText}>{activity.wallet}</Text>
            </View>
            <Pressable onPress={handlePastButtonPress}>
              <Text style={styles.buttonText}>Past day</Text>
            </Pressable>
          </View>
          <View style={styles.pressable}>
            <PressableButton
              onPress={() => navigation.navigate('Activity')}
              label="Sell"
              backgroundColor="#FF5A75"
              width={148}
              height={56}
            />
            <PressableButton
              onPress={() => navigation.navigate('Activity')}
              label="Sell"
              backgroundColor="#009FD4"
              width={148}
              height={56}
            />
          </View>
          <Pressable onPress={handlePastButtonPress}>
              <Text style={styles.exchangeButton}>Watch Exchange Candleticks</Text>
            </Pressable>
        </View>
      </SafeAreaView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  rectangle: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    height: 140,
    backgroundColor: '#3D1273',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  rectangleInput: {
    marginLeft: 16,
  },
  bottomTextContainer: {
    marginTop: 100,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rWallet: {
    margin: 4.33,
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  rMoneyView: {
    flexDirection: 'row',
  },
  rMoney: {
    margin: 8,
    fontSize: 14.67,
    color: '#00F0FF',
    fontWeight: 'bold',
  },
  rText: {
    margin: 8,
    fontSize: 14.67,
    color: 'white',
    fontWeight: 'semibold',
  },
  chartContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  viewH: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  dText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  vText: {
    fontSize: 13.33,
    color: '#F7F7F7',
    fontWeight: '400',
    marginRight: 8,
  },
  viewLast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  lastText: {
    fontSize: 20,
    color: '#F7F7F7',
    fontWeight: 'bold',
    marginRight: 8,
  },
  buttonText: {
    color: '#00F0FF',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 50,
    marginLeft: 40,
  },
  inlineTextContainer: {
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pressable: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
},
exchangeButton: {
    marginTop: 32,
    width: '100%',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
},
});
