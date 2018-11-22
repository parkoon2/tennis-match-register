import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableWithoutFeedback, Animated, Dimensions, SafeAreaView } from 'react-native';

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height

let title, date;

class Main extends React.Component {

    constructor() {
        super()
        this.state = {
            activeImage: null,
            images: [
                // { id: 1, src: 'https://cdn1.vectorstock.com/i/1000x1000/59/55/tennis-poster-vector-315955.jpg' },
                // { id: 2, src: require('../assets/2.jpg') },
                // { id: 3, src: require('../assets/3.jpg') },
                // { id: 4, src: require('../assets/4.jpg') },
            ]
        }
    }

    _getTournament = async () => {
        const tournaments = await this._callApi()
        console.log('!!', tournaments)
        tournaments.map(tournament => {
            let newObj = {
                id: tournament._id,
                title: tournament.title,
                src: tournament.poster,
                date: tournament.date
            }
            this.setState({
                images: this.state.images.concat(newObj)
            })
        })

        console.log(this.state)

    }
    _callApi = () => {
        return fetch('http://192.168.2.200:3000/tournament')
        .then(res => res.json())
        // .then(result => {
        //     return result
        // })
        // .then(result => result)
    }
    async componentWillMount() {
        // await this._getTournament()
        // const result = await this._getTournament()
        // console.log('!!!!!!!', result)
        this.allImages = {}
        this.oldPosition = {}
        this.position = new Animated.ValueXY()
        this.dimensions = new Animated.ValueXY()
        this.animation = new Animated.Value(0)
        this.activeImageStyle = null

    }

    componentDidMount() {
        this._getTournament()
    }


    openImage = (index) => {

        this.allImages[index].measure((x, y, width, height, pageX, pageY) => {
            this.oldPosition.x = pageX
            this.oldPosition.y = pageY
            this.oldPosition.width = width
            this.oldPosition.height = height

            this.position.setValue({
                x: pageX,
                y: pageY
            })

            this.dimensions.setValue({
                x: width,
                y: height
            })
            console.log('zzzzzzzzzzzzzzzz', this.state.images[index])

            title = this.state.images[index].title
            date = this.state.images[index].date
            this.setState({
                activeImage: this.state.images[index]
            }, () => {
                this.viewImage.measure((dx, dy, dWidth, dHeight, dPageX, dPageY) => {

                    Animated.parallel([
                        Animated.timing(this.position.x, {
                            toValue: dPageX,
                            duration: 300
                        }),
                        Animated.timing(this.position.y, {
                            toValue: dPageY,
                            duration: 300
                        }),
                        Animated.timing(this.dimensions.x, {
                            toValue: dWidth,
                            duration: 300
                        }),
                        Animated.timing(this.dimensions.y, {
                            toValue: dHeight,
                            duration: 300
                        }),
                        Animated.timing(this.animation, {
                            toValue: 1,
                            duration: 300
                        })
                    ]).start()
                })
            })
        })
    }
    closeImage = () => {
        Animated.parallel([
            Animated.timing(this.position.x, {
                toValue: this.oldPosition.x,
                duration: 300
            }),
            Animated.timing(this.position.y, {
                toValue: this.oldPosition.y,
                duration: 250
            }),
            Animated.timing(this.dimensions.x, {
                toValue: this.oldPosition.width,
                duration: 250
            }),
            Animated.timing(this.dimensions.y, {
                toValue: this.oldPosition.height,
                duration: 250
            }),
            Animated.timing(this.animation, {
                toValue: 0,
                duration: 250
            })
        ]).start(() => {
            this.setState({
                activeImage: null
            })
        })
    }
    render() {
        console.log('!!!! render')
        const activeImageStyle = {
            width: this.dimensions.x,
            height: this.dimensions.y,
            left: this.position.x,
            top: this.position.y
        }

        const animatedContentY = this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [-150, 0]
        })

        const animatedContentOpacity = this.animation.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 1]
        })

        const animatedContentStyle = {
            opacity: animatedContentOpacity,
            transform: [{
                translateY: animatedContentY
            }]
        }

        const animatedCrossOpacity = {
            opacity: this.animation
        }

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    {this.state.images.map((image, index) => {
                        console.log('다시 안들어오냐..')
                        return (
                            <TouchableWithoutFeedback
                                onPress={() => this.openImage(index)}
                                key={image.id}>
                                <Animated.View
                                    style={{ height: SCREEN_HEIGHT - 150, width: SCREEN_WIDTH, padding: 15 }}
                                >
                                    <Image
                                        ref={(image) => (this.allImages[index] = image)}
                                        source={{uri: image.src }}
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
                                    />
                                </Animated.View>
                            </TouchableWithoutFeedback>
                        )
                    })}
                </ScrollView>
                <View style={StyleSheet.absoluteFill}
                    pointerEvents={this.state.activeImage ? "auto" : "none"}
                >
                    <View style={{ flex: 2, zIndex: 1001 }} ref={(view) => (this.viewImage = view)}>
                        <Animated.Image
                            source={{uri: this.state.activeImage ? this.state.activeImage.src : null}}
                            style={[{ resizeMode: 'cover', top: 0, left: 0, height: null, width: null }, activeImageStyle]}
                        >
                        </Animated.Image>
                        <TouchableWithoutFeedback onPress={() => this.closeImage()}>
                            <Animated.View style={[{ position: 'absolute', top: 30, right: 30 }, animatedCrossOpacity]}>
                                <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>X</Text>
                            </Animated.View>
                        </TouchableWithoutFeedback>
                    </View>
                    <Animated.View style={[{ flex: 1, zIndex: 1000, backgroundColor: 'white', padding: 20, paddingTop: 50 }, animatedContentStyle]}>
                        <Text style={{ fontSize: 24, paddingBottom: 10 }}>{title}</Text>
                        <Text>{date}</Text>
                        <Text>기타 모집요강 정보... 참가신청 버튼.. 자세히보기 등등</Text>
                    </Animated.View>
                </View>
            </SafeAreaView>
            // <View style={styles.container}>
            //     <View style={styles.header}>
            //         <Header />
            //     </View>
            //     <View style={styles.section}>
            //         <Section />
            //     </View>
            //     <View style={styles.footer}>
            //         <Footer onPress={this._onPress}/>
            //     </View>
            // </View>

        )
    }

    _onPress(e) {
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Main