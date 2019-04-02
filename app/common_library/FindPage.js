import {StyleSheet, ListView, Text, View, TouchableHighlight, Image, ToastAndroid, TouchableOpacity} from "react-native";
import React, {Component} from "react";

const constant_url = 'http://t_app.zlz99.com/';

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

        let formData = new FormData();
        formData.append('t','1553847335034');
        formData.append('r', 'hjhjb');
        formData.append('e', 'b41e9fe0b3fedb58153c4114b2f219fc');
        formData.append('page', '1');

        fetch('http://t_app.zlz99.com/Api/Goods/get_goods_categroy'
            , {
            method: 'POST',
                /*headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },*/
                body: formData,
            }
        ).then((response) => response.json())
            .then((jsondata) => {
                console.log(jsondata);
                const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

                this.setState({dataSource: ds.cloneWithRows(jsondata.data.data)});
                //this.setState({title: jsondata.message});
                //alert(jsondata.data.data);
            })
            .catch((error) => {
                alert(error);
                console.warning(error);
            });

    };

    render() {
        return (
            <View style={[styles.container]}>
                {/*<Text style={{height: 40, textAlign: 'center', fontSize: 17}}>{this.state.title}</Text>*/}
                <ListView style={{flex: 5}}
                          dataSource={this.state.dataSource}
                          renderRow={(rowData) => <CELL
                              onItemClick={()=>this._onItemClick(rowData)}
                              title={rowData.describe}
                              detailTitle={rowData.name}
                              imgurl={constant_url + rowData.img_url}
                                num={rowData.all_num}
                                money={rowData.all_sum}></CELL>}
                />
            </View>
        );
    }

    _onItemClick(rowData) {
        ToastAndroid.show(rowData.name,ToastAndroid.SHORT);
    }
}

class CELL extends Component {

    constructor(props) {
        super(props);
        this.state = {detailTitle: 'aaaa'};
    }

    render() {
        return (
            <View style={{flexDirection: 'column', backgroundColor: '#fff'}}>
                <TouchableOpacity activeOpacity={0.9} onPress={this.props.onItemClick}>
                <View style={{
                    height: 110,
                    flexDirection: 'row',
                    flex: 1,
                    alignItems: 'center'
                }}>
                    <Image style={{width: 135, height: 90, marginLeft: 20}} source={{uri: this.props.imgurl}}></Image>
                    <View style={{marginLeft: 40}}>
                    <Text style={{fontSize: 15, color: '#323332'}}>{"类别：" + this.props.detailTitle}</Text>
                    <Text style={{fontSize: 14, color: '#323332'}}>{"笔数：" + this.props.num + "笔"}</Text>
                    <Text style={{fontSize: 14, color: '#323332'}}>{"描述：" + this.props.title}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 14, color: '#323332'}}>{"总计："}</Text>
                            <Text style={{
                                color: '#ff625a',
                                fontSize: 15,
                            }}>{this.props.money + '万元'}</Text>
                        </View>

                    </View>
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
