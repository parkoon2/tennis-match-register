import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'

export default class Header extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    Headerzz
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'blue',
    }
})