import * as React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../components/Themed';

export default function Onboarding() {
    const pagerRef = React.useRef(null);
    const navigation = useNavigation();

    const handlePageChange = (pageNumber: number) => {
        pagerRef.current.setPage(pageNumber);
    };

    return (
        <View style={{ flex: 1 }}>
            <ViewPager style={{ flex: 1 }} initialPage={0} ref={pagerRef}>

            </ViewPager>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#F4F4FC',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontAlign: 'center'
    },
})

const stepOne = ({onPress}) => {
    return (
        <View key={1}>
            <View style={styles.container}>
                <View>
                    <Image source={require('../../assets/images/logo.png')} />
                </View>
                <Image source={require('../../assets/images/OnboardingStepOne.png')} />
                <Text style={styles.title}>Реши проблему прокрастинации</Text>
                <Text>Достигай поставленных целей</Text>
                <Next onPress={onPress} />
            </View>
        </View>

    )
}


const stepTwo = () => {
    return (
        <View key={2}>
            <View style={styles.container}>
                <View>
                    <Image source={require('../../assets/images/logo.png')} />
                </View>
                <Image source={require('../../assets/images/OnboardingStepOne.png')} />
                <Text style={styles.title}>Реши проблему прокрастинации</Text>
                <Text>Второй слайд</Text>
            </View>
        </View>

    )
}


const Next = ({onPress}) => {
    return (
        <TouchableOpacity
            style={{ alignItems: 'center', justifyContent: 'center' }}
            onPress={onPress}
        >
            <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
                next
            </Text>
        </TouchableOpacity>
    );
}
