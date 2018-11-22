import React from 'react'
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native'

import { LinearGradient } from 'expo'

const { width, height } = Dimensions.get('window')

class CustomButton extends React.Component {
    constructor() {
        super()
    }

    render() {
        const { title, color } = this.props
        return (
            <TouchableOpacity style={[styles.button, {backgroundColor: color}]}>
                {/* <View> */}
                <Text style={styles.title}>{title}</Text>
                {/* </View> */}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: width / 1.5,
        paddingVertical: 10,
        backgroundColor: '#5386C2',
        marginBottom: 15,
        borderRadius: 10,
    },

    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 17,
    }
})

export default CustomButton