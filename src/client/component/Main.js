import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Footer from './Footer'
import Header from './Header'
import Section from './Section'

class Main extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header />
                </View>
                <View style={styles.section}>
                    <Section />
                </View>
                <View style={styles.footer}>
                    <Footer onPress={this._onPress}/>
                </View>
            </View>

        )
    }

    _onPress(e) {
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex:1,
        backgroundColor: 'white',
    },
    section: {
        flex:10,
        backgroundColor: 'white',
    },
    footer: {
        flex:1,
        backgroundColor: '#F5F5F5',
    }
})

export default Main