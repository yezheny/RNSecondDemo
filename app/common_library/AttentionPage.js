import {StyleSheet, ListView, Text, View, TouchableHighlight, Image, ToastAndroid, TouchableOpacity} from "react-native";
import React, {Component} from "react";

export default class App extends Component<Props> {
    // 初始化模拟数据
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds,
            /*data: ['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'Jims', 'Jam', 'Jams', 'super', 'man', 'market']*/
        };
        this.buttonTap();//初始化
    }

    buttonTap = () => {

        fetch('http://bbs.reactnative.cn/api/category/3'
            // , {
            // method: 'GET',
            // headers: {
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json',
            // },
            // body: JSON.stringify({
            // } )
            // }
        ).then((response) => response.json())
            .then((jsondata) => {
                console.log(jsondata);
                const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

                this.setState({dataSource: ds.cloneWithRows(jsondata.topics)});
                this.setState({title: jsondata.description});
                //alert(jsondata.topics);
            })
            .catch((error) => {
                alert(error);
                console.warning(error);
            });

    };

    render() {
        return (
            <View style={[styles.container, {paddingTop: 22}]}>
                <TouchableHighlight style={{alignSelf: 'flex-start'}} onPress={this.buttonTap}>
                    <Image
                        style={styles.button}
                        source={require('../imgs/avatar.png')}
                    />
                </TouchableHighlight>
                <Text style={{textAlign: 'center', alignSelf: 'center'}}>{this.state.title}</Text>
                <ListView style={{flex: 5}}
                          dataSource={this.state.dataSource}
                          renderRow={(rowData) => <CELL
                              onItemClick={()=>this._onItemClick(rowData)}
                              title={rowData.title}
                              detailTitle={rowData.timestampISO}></CELL>}
                />
            </View>
        );
    }

    _onItemClick(rowData) {
        ToastAndroid.show(rowData.title,ToastAndroid.SHORT);
    }
}

class CELL extends Component {

    constructor(props) {
        super(props);
        this.state = {detailTitle: 'aaaa'};
    }

    render() {
        return (
            <View style={{flexDirection: 'column', backgroundColor: '#f3f3f3'}}>
                <TouchableOpacity activeOpacity={0.9} onPress={this.props.onItemClick}>
                    <View style={{
                        flexDirection: 'row',
                        padding: 15,
                        justifyContent: 'center',
                        flex: 1,
                        alignItems: 'center'
                    }}>
                        <Text style={{flex: 2, marginLeft: 10, marginRight: 10, fontSize: 15, justifyContent: 'center'}}>{this.props.title}</Text>
                        <Text style={{
                            flex: 1,
                            marginRight: 10,
                            color: 'gray',
                            fontSize: 12,
                            textAlign: 'right'
                        }}>{this.props.detailTitle}</Text>
                    </View>
                </TouchableOpacity>
                <View style={{height: 0.5, alignSelf: 'stretch', backgroundColor: '#e8e8e8'}}></View>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FC00',
    },
    button: {
        width: 30,
        height: 30,
    }
});
