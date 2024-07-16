import React from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface HeaderComponentProps {
    onScriptIconPress: () => void;
    onBellIconPress: () => void;
}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({ onScriptIconPress, onBellIconPress }) => {
    return (
        <View style={styles.imageView}>
            <Image
                style={styles.image}
                source={require('../../assets/images/Group.png')}
            />
            <Text style={styles.title}>Home</Text>
            <Pressable onPress={onScriptIconPress}>
                <Icon name="document-text-outline" style={styles.scriptIcon} />
            </Pressable>
            <Pressable onPress={onBellIconPress}>
                <Icon name="notifications-outline" style={styles.bellIcon} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    imageView: {
        marginTop: 71,
        marginLeft: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 16.57,
        height: 26,
    },
    title: {
        marginLeft: 28,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    scriptIcon: {
        marginLeft: 123,
        fontSize: 24,
        color: '#FFFFFF',
    },
    bellIcon: {
        marginLeft: 28,
        fontSize: 24,
        color: '#FFFFFF',
    },
});
