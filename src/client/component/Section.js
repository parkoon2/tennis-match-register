import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Platform,
} from 'react-native'
import { white } from 'ansi-colors';

export default class Section extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.contents}>
                        2월21일 갈산배
                    </Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonTitle}>참가신청</Text>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'green'
        paddingRight: 7,
        paddingLeft: 7,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    buttonTitle: {
        backgroundColor: 'blue',
        // width: 100,
        // height: 50,
        color: 'white',
        textAlign: 'center',
        padding: 20,
        fontWeight: '600',

    },
    contents: {
        flex: 4
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 150,
        // marginLeft: 10,
        // marginRight: 10,
        marginBottom: 5,
        borderRadius: 7,
        borderBottomWidth: StyleSheet.hairlineWidth
        // ...Platform.select({
        //     ios: {
        //         shadowColor: "rgb(50, 50, 50)",
        //         shadowOpacity: 0.5,
        //         shadowRadius: 5,
        //         shadowOffset: {
        //             height: -1,
        //             width: 0
        //         }
        //     },
        //     android: {
        //         elevation: 3
        //     }
        // })

    }
})