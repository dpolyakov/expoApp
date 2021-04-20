import * as React from 'react';

import { View, Image, ImageStyle, StyleSheet } from "react-native";

const Icon = (props: any) => {
    return (
        <View>
            <div style={styles.icon}></div>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        backgroundColor: '#c03',
        borderRadius: 50
    }
})