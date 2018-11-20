import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native'

import { Ionicons, MaterialIcons } from '@expo/vector-icons'

export default class Footer extends Component {

    static propTypes = {
        onPress: PropTypes.func
    }

    render() {
        const { onPress } = this.props
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={onPress} style={styles.footerButton}>
                    <MaterialIcons style={styles.icon} name="account-circle" />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress} style={styles.footerButton}>
                    <MaterialIcons style={styles.icon} name="timer" />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress} style={styles.footerButton}>
                    <MaterialIcons style={styles.icon} name="favorite" />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress} style={styles.footerButton}>
                    <MaterialIcons style={styles.icon} name="more-horiz" />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'red'
    },
    footerButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        fontSize: 50,
        color: '#9E9E9E'
    }
})
