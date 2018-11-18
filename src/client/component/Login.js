import React from 'react'
import { StyleSheet, View, Text, StatusBar, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo'

// Component
import CustomButton from './CustomButton'

const { width, height } = Dimensions.get('window')
console.log('height,!!!!!!!!! ', height)
class Login extends React.Component {
    constructor() {
        super()
    }

    _toggleSocial() {
        console.log('_toggleSocial')
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.circle} onPress={this._toggleSocial}>
                    <View >
                        <Text>
                            안녕
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.upper}>
                    <View style={styles.upperTop}>
                        <TouchableOpacity style={styles.upperTopButton}>
                            <Text>
                                안녕
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.upperTopButton}>
                            <Text>
                                안녕
                        </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.upperMiddle}>
                        <Text>
                            LOGIN
                        </Text>
                        <TextInput style={styles.input}/>
                        <TextInput style={styles.input}/>
                    </View>
                    <View style={styles.upperBottom}>
                        <TextInput style={styles.input}/>
                    </View>
                </View>
                <View style={styles.lower}>
                    <View style={styles.row}>
                        <CustomButton />
                        <CustomButton />
                        <TouchableOpacity style={styles.account}>
                            <Text style={styles.accountTitle}>
                                Create an Account
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.about}>
                            <TouchableOpacity >
                                <Text style={styles.aboutTitle}>
                                    About
                                </Text>
                            </TouchableOpacity>
                            <Text> | </Text>
                            <TouchableOpacity >
                                <Text style={styles.aboutTitle}>
                                    Contact
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>


            // <LinearGradient
            //     colors={["#304352", "#D7D2CC"]}

            // >
            //      <Text style={styles.title}>대회일정관리</Text>
            //     <TextInput
            //         style={styles.input}
            //     >
            //     </TextInput>

            //     <TextInput
            //         style={styles.input}
            //     >
            //     </TextInput> 
            // </LinearGradient> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#FFCDD2',
    },
    upper: {
        flex: 1,
        height: height / 2,
        backgroundColor: '#EC407A',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#FAFAFA',
    },
    upperTop: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent:'space-between', 
        backgroundColor:'red'
    },
    upperTopButton: {
        padding: 10
    },
    upperMiddle: {
        flex: 6, backgroundColor:'green'
    },
    upperBottom: {
        flex: 3, backgroundColor:'tomato'
    },
    lower: {
        flex: 1,
        height: height / 2,
        backgroundColor: '#BA68C8',
        
    },
    row: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 100,
    },
    circle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 40,
        textAlign: 'center',
        backgroundColor: '#F3E5F5',
        position: 'absolute',
        top: height / 2 - 40,
        left: width / 2 - 40,
        zIndex: 1,
    },
    account:  {
        backgroundColor: 'blue',
        paddingBottom: 30,
        width: width / 1.2,
        borderBottomColor: '#FAFAFA',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: 30,

    },
    accountTitle: {
        textAlign: 'center',
    },
    about: {
        flex: 1,
        marginVertical: 20,
        flexDirection: 'row',
    },
    aboutTitle: {
        marginHorizontal: 7,
    },
    input: {
        width: width / 1.5,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 3,
        padding: 10,
        marginVertical: 10,
    },
    // title: {
    //     fontSize: 38,
    //     color: '#fff',
    //     marginBottom: 30,
    // }
})

export default Login