import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Background} from '../../components';
import {HeaderComponent} from '../../components/home/HeaderComponent';
import {ActivityComponent} from '../../components/home/ActivityComponent';
import {RecentComponent} from '../../components/home/RecentComponent';
import { NavigationProp ,useNavigation } from '@react-navigation/native'; 

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const handleScriptIconPress = () => {
    console.log('Script Icon Clicked');
  };

  const handleBellIconPress = () => {
    console.log('Notification Icon Clicked');
  };

  const activities = [
    {title: 'Bitcoin', wallet: '$2,000.9', money: '+$300.05'},
    {title: 'Dash', wallet: '$3,000.9', money: '+$400.05'},
    {title: 'Total 3', wallet: '$4,000.9', money: '+$500.05'},
  ];
  const recents = [
    {title: 'Lapak', text: 'Total 1', money: '+$200.9'},
    {title: 'Total 1', text: 'Total 1', money: '+$200.9'},
  ];

  const handleActivityPress = (activity: { title: string; wallet: string; money: string }) => {
    navigation.navigate('Activity', { activity });
  };
  

  return (
    <Background>
      <View style={styles.container}>
        <HeaderComponent
          onScriptIconPress={handleScriptIconPress}
          onBellIconPress={handleBellIconPress}
        />
        <Text style={styles.text1}>Good Morning</Text>
        <Text style={styles.text2}>Name</Text>
        <View style={styles.rectangle}>
          <Text style={styles.brand}>Total Portfolio Value</Text>
          <Text style={styles.rWallet}>$2,000.942</Text>
          <View style={styles.rMoneyView}>
            <Text style={styles.rMoney}>+$300.05</Text>
            <Text style={styles.rText}>last month</Text>
          </View>
        </View>
        <View>
          <Text style={styles.aText}>Activity</Text>
        </View>
        <ActivityComponent activities={activities} onPress={handleActivityPress} />
        <View>
          <Text style={styles.recentText}>Recent Transaction</Text>
        </View>
        <RecentComponent recents={recents} />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text1: {
    marginTop: 27,
    marginLeft: 30,
    color: 'white',
    fontSize: 14.67,
    fontWeight: 'bold',
  },
  text2: {
    marginLeft: 30,
    marginTop: 6.67,
    color: '#3D1273',
    fontSize: 24,
    fontWeight: 'bold',
  },
  rectangle: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    height: 140,
    backgroundColor: '#3D1273',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  aText: {
    color: '#B4D4CC',
    marginTop: 38,
    marginLeft: 30,
    fontSize: 16,
    fontWeight: 'bold',
  },
  brand: {
    margin: 16,
    fontSize: 14.67,
    color: 'white',
    fontWeight: 'bold',
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
  recentText: {
    margin: 16,
    marginLeft: 30,
    fontSize: 14.67,
    color: 'white',
    fontWeight: 'bold',
  },
});
