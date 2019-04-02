/**
 * Created by zhudong on 2017/6/14.
 */
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
    ToastAndroid,
    TouchableHighlight
} from 'react-native';
import Swiper from 'react-native-swiper';
import React, {Component} from "react";

let imgData = [
    "https://m.360buyimg.com/mobilecms/s772x376_jfs/t23224/12/1547449730/265644/6da76a53/5b627790N1beab594.jpg!cr_1125x549_0_72!q70.jpg.dpg.webp",
    "https://m.360buyimg.com/mobilecms/s772x376_jfs/t23389/341/1459755771/98229/bdf1b674/5b619766Nb8e94478.jpg!cr_1125x549_0_72!q70.jpg.dpg.webp",
    "https://m.360buyimg.com/mobilecms/s772x376_jfs/t23560/365/1407572473/129109/377153ef/5b6010acN1b265667.jpg!cr_1125x549_0_72!q70.jpg.dpg.webp",
    "https://m.360buyimg.com/mobilecms/s772x376_jfs/t25549/223/5998595/106769/8dfb1308/5b62a8a3Nae1a28e1.jpg!cr_1125x549_0_72!q70.jpg.dpg.webp",
    "https://m.360buyimg.com/mobilecms/s772x376_jfs/t24148/59/1544888845/169957/6b3a521d/5b62a6edNd0172ab9.jpg!cr_1125x549_0_72!q70.jpg.dpg.webp",
]

const {width} = Dimensions.get('window');  //解构赋值 获取屏幕宽度

export default class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView
                ref="scrollView"
                horizontal={false}//设置是否是横向滚动
                onScroll={this._onScroll}
                removeClippedSubviews={true}//实验特性，可以优化滚动性能
                showsVerticalScrollIndicator={false}//是否显示垂直滚动条
            >
                <View style={styles.title_view}>
                    <Text style={styles.title_text}>
                        首页
                    </Text>
                </View>
                <View style={styles.container}>
                    <Swiper style={styles.wrapper} height={width * 40 / 75} autoplay
                            onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                            dot={<View style={{
                                backgroundColor: 'rgba(0,0,0,.5)',
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                marginLeft: 3,
                                marginRight: 3,
                                marginTop: 3,
                                marginBottom: 3,
                            }}/>}
                            activeDot={<View style={{
                                backgroundColor: 'yellow',
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                marginLeft: 3,
                                marginRight: 3,
                                marginTop: 3,
                                marginBottom: 3
                            }}/>}
                            paginationStyle={{
                                bottom: 23, left: null, right: 10
                            }} loop>
                        {imgData.map((item, index) => {
                            return (
                                <View style={styles.slide}>
                                    <Image resizeMode='stretch' style={styles.image} source={{uri: item}}/>
                                </View>
                                /*<Image
                                    source={{uri:item}}
                                    style={{width:Dimensions.get('window').width,height:Dimensions.get('window').width / 2}}
                                    key={index}
                                />*/
                            )
                        })}

                        {/*<View style={styles.slide}>
                    <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
                    <Image resizeMode='stretch' style={styles.image} source={require('../imgs/ic_image_selected.png')}/>
                </View>
                <View style={styles.slide}>
                    <Text numberOfLines={1}>Big lie behind Nine’s new show</Text>
                    <Image resizeMode='stretch' style={styles.image} source={require('../imgs/ic_me_selected.png')}/>
                </View>
                <View style={styles.slide}>
                    <Text numberOfLines={1}>Why Stone split from Garfield</Text>
                    <Image resizeMode='stretch' style={styles.image} source={require('../imgs/ic_news_selected.png')}/>
                </View>
                <View style={styles.slide}>
                    <Text numberOfLines={1}>Learn from Kim K to land that job</Text>
                    <Image resizeMode='stretch' style={styles.image} source={require('../imgs/ic_video_selected.png')}/>
                </View>*/}
                    </Swiper>
                </View>
                <View style={styles.space_item1}>
                </View>
                <View style={styles.grid_content}>
                    <TouchableHighlight onPress={this._onPressButton1} style={{flex: 1}} underlayColor='#fff'>
                    <View style={styles.scroll_item1}>
                        <Image source={require('../imgs/a_strategy.png')}
                               style={{alignSelf: 'center', width: 45, height: 45, marginLeft: 10}}/>
                        <View style={styles.row_content}>
                            <Text style={styles.row_content1}>来租攻略</Text>
                            <Text style={styles.row_content2}>新手指引</Text>
                        </View>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this._onPressButton2} style={{flex: 1}} underlayColor='#fff'>
                    <View style={styles.scroll_item1}>
                        <Image source={require('../imgs/a_threesecurity.png')}
                               style={{alignSelf: 'center', width: 45, height: 45, marginLeft: 10}}/>
                        <View style={styles.row_content}>
                            <Text style={styles.row_content1}>安全保障</Text>
                            <Text style={styles.row_content2}>三大保障</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                </View>
                <Text style={styles.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={styles.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={styles.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={styles.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={styles.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={styles.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={styles.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={styles.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={styles.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={styles.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={styles.scroll_item}>我是可以滚动的ScrollView</Text>
            </ScrollView>
        );
    }

    _onPressButton1() {
        alert('button1');
    }

    _onPressButton2() {
        ToastAndroid.show('button2',ToastAndroid.SHORT);
    }

}

const styles = StyleSheet.create({
    container: {
        height: width * 40 / 75,
    },

    wrapper: {
        width: width,
        height: width * 40 / 75,
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width: width,
        flex: 1,
    },
    title_view: {
        width: width,
        height: 45,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title_text: {
        fontSize: 20,
        color: '#323232',
    },
    space_item1: {
        height: 20,
        backgroundColor: '#f3f3f3',
    },
    grid_content: {
        flexDirection: 'row',
    },
    scroll_item1: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 0,
        borderRadius: 5,
        borderColor: 'rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        margin: 5,
        height: 100,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2,},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 3,
        overflow: 'hidden',
    },
    row_content: {
        marginLeft: 30,
        justifyContent: 'center',
    },
    row_content1: {
        fontSize: 15,
        color: '#333',
    },
    row_content2: {
        fontSize: 12,
        color: '#333',
    },
    scroll_item: {
        borderWidth: 0,
        borderRadius: 5,
        borderColor: 'rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        margin: 5,
        height: 100,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2,},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        elevation: 3,
        overflow: 'hidden',

    },
});