import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

interface Activity {
    title: string;
    wallet: string;
    money: string;
}

interface ActivityComponentProps {
    activities: Activity[];
    onPress: (activity: Activity) => void;
}

export const ActivityComponent: React.FC<ActivityComponentProps> = ({ activities, onPress }) => {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {activities.map((activity, index) => (
                <TouchableOpacity key={index} style={styles.activityRectangle} onPress={() => onPress(activity)}>
                    <Text style={styles.rTitle}>{activity.title}</Text>
                    <Text style={styles.rWallet}>{activity.wallet}</Text>
                    <View style={styles.rMoneyView}>
                        <Text style={styles.rMoney}>{activity.money}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    activityRectangle: {
        marginBottom: -144,
        marginTop: 16,
        marginLeft: 30,
        marginRight: -16,
        width: 140,
        height: 188,
        backgroundColor: '#3D1273',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
    },
    rTitle: {
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
});
