import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Activity {
  title: string;
  text: string;
  money: string;
}

interface RecentComponentProps {
  recents: Activity[];
}

export const RecentComponent: React.FC<RecentComponentProps> = ({
  recents,
}) => {
  return (
    <View style={styles.container}>
    <ScrollView showsHorizontalScrollIndicator={false}>
      {recents.map((recent, index) => (
        <View key={index} style={styles.rectangle}>
          <View style={styles.inputView}>
            <Icon name="document-text-outline" style={styles.icon} />
            <View>
              <Text style={styles.rTitle}>{recent.title}</Text>
              <Text style={styles.rText}>{recent.text}</Text>
            </View>
            <Text style={styles.rMoney}>{recent.money}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  rectangle: {
    marginBottom: 16,
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    height: 64,
    backgroundColor: '#6418C3',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center', 
  },
  rTitle: {
    marginVertical: 7, 
    marginLeft: 18, 
    fontSize: 14.67,
    color: 'white',
    fontWeight: 'bold',
  },
  rText: {
    marginVertical: 7,
    marginLeft: 18,
    fontSize: 14.67,
    color: 'white',
    fontWeight: 'bold',
  },
  rMoney: {
    marginVertical: 8,
    marginLeft: 154,
    marginRight: 12,
    fontSize: 14.67,
    color: '#00F0FF',
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 0,
    fontSize: 18,
    color: '#FFFFFF',
    alignSelf: 'center',
  },
});
