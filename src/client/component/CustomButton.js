import React from 'react'
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native'

const { width, height } = Dimensions.get('window')

class CustomButton extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <TouchableOpacity style={styles.button}>
                {/* <View> */}
                <Text style={styles.title}>Test Button</Text>
                {/* </View> */}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: width / 1.2,
        paddingVertical: 25,
        backgroundColor: 'red',
        marginBottom: 15,
    },

    title: {
        textAlign: 'center'
    }
})

export default CustomButton