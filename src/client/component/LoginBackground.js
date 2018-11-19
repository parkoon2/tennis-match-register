import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

export default class LoginBackground extends React.Component {
    constructor() {
        super()
    }

    render() {
        const { url } = this.props
        return(
            <ImageBackground
                style={styles.image}
                source={{ uri: url }}
            />

            
        )
    }
}
// https://mbtskoudsalg.com/images/background-png-4.png
const styles = StyleSheet.create({
    image: {
        flex: 1
    }
})

