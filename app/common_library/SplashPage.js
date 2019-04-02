/**
 * Created by zhudong on 2017/6/14.
 */
import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import {View, Text, Button, StyleSheet } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation'

export default class SplashPage extends Component {

    static navigationOptions = {
        title: 'SplashPage'
    }

    constructor(props){
        super(props);
    }

    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={false}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    {/*<Text style={styles.text} onPress={this._onPressButton.bind(this)}>And simple</Text>*/}
                    {/*<Button style={styles.text} onPress={() => navigate('Chat')} title="Chat with Lucy"></Button>*/}
                    <Button title="进入首页" onPress={() => this.props.navigation.navigate('Profile',{ user: '首页' })} />
                </View>
            </Swiper>
        );
    }

    _onPressButton() {
        alert('点击事件亦被促发');
    }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})