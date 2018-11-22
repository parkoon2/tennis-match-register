import React from 'react'
import { StyleSheet, View, Text, StatusBar, TextInput, Dimensions, TouchableOpacity, ImageBackground} from 'react-native'
import { LinearGradient } from 'expo'

// Component
import CustomButton from './CustomButton'
import LoginBackground from './LoginBackground'

const { width, height } = Dimensions.get('window')
console.log('height,!!!!!!!!! ', height)

let email, password
class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: null,
            password: null,
        }
    }

    _toggleSocial() {
        console.log('_toggleSocial')
    }
    _handleChange(e) {
        console.log(e)
    }
    _submit = () => {
        // const { email, id } = this.state
        console.log(email, password)
        this._login()
    }

    _login = () => {
        let data = {
            email,
            password
        }
        console.log('data', data)

        // fetch('	http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20120101')
        // .then(res => res.json())
        // .then(result => console.log(result))
        fetch('http://192.168.2.200:3000/user/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data) 
        })
        .then(res => res.json())
        .then(result => {
            if (result.status * 1 === 200) {
                this.props._loginSuccess()
            } else {
                this.props._loginFail()
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.circle} onPress={this._toggleSocial}>
                    <View>
                        <Text style={{fontSize: 30}}>
                            #
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.upper}>
           
                <ImageBackground
                    style={styles.background}
                    source={{ uri: 'https://images7.alphacoders.com/368/368873.jpg' }}
                >
                    <View style={styles.upperTop}>
                        <TouchableOpacity style={styles.upperTopButton}>
                            <Text>
                                {/* 안녕 */}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.upperTopButton}>
                            <Text>
                                {/* 안녕 */}
                        </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.upperMiddle}>
                        <Text style={styles.upperMiddleTitle}>
                            TENNIS MATCHING
                        </Text>
                        <TextInput onChangeText={(text) => email = text} style={styles.input} placeholder="@email"/>
                        <TextInput onChangeText={(text) => password = text} secureTextEntry={true} style={styles.input} placeholder="password"/>
                    </View>
                    <View style={styles.upperBottom}>
                        <TouchableOpacity onPress={this._submit} style={styles.upperBottomButton}> 
                            <Text style={styles.upperBottomButtonTitle}>
                                LOGIN
                            </Text>
                        </TouchableOpacity>
                    </View>
    
                </ImageBackground>
                </View>
                <View style={styles.lower}>
                    <View style={styles.row}>
                        <CustomButton title={'Login with Facebook'} color={'#5386C2'}/>
                        <CustomButton title={'Login with Twitter'} color={'#3CCCFC'}/>
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
    },
    upper: {
        flex: 1,
        height: height / 2,
        backgroundColor: '#EC407A',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    upperTop: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent:'space-between', 
    },
    upperTopButton: {
        padding: 10
    },
    upperMiddle: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50
    },
    upperMiddleTitle: {
        color: 'white',
        fontSize: 25,
        marginBottom: 20,
    },
    upperBottom: {
        flex: 3,
        alignItems: 'center',
    },
    upperBottomButton: {
        width: width / 3,
        backgroundColor: 'transparent',
        padding: 20,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: StyleSheet.hairlineWidth,
        
    },
    upperBottomButtonTitle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },  
    lower: {
        flex: 1,
        height: height / 2,
        backgroundColor: '#EEEEEE',
        
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
        elevation: 3,
        backgroundColor: 'white',
    },
    account:  {
        paddingBottom: 30,
        width: width / 1.5,
        borderBottomColor: '#9E9E9E',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: 30,

    },
    accountTitle: {
        textAlign: 'center',
        fontSize: 16,
        color: '#757575',
    },
    about: {
        flex: 1,
        marginVertical: 20,
        flexDirection: 'row',
    },
    aboutTitle: {
        marginHorizontal: 7,
        color: '#757575',
    },
    input: {
        width: width / 2,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        textAlign: 'center',
        backgroundColor: 'rgba(204, 204, 204, 0.8)',
    },
    background: {
        flex: 1,
    }
    // title: {
    //     fontSize: 38,
    //     color: '#fff',
    //     marginBottom: 30,
    // }
})

export default Login