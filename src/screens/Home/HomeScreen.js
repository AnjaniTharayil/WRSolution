//Import React
import React, { Component } from 'react';
//Import all required component
import {
    View, Text, ScrollView, StyleSheet,
    TouchableOpacity,
    Image,
    Alert,
    FlatList, Dimensions
} from 'react-native';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';
import { Card, Icon } from 'react-native-elements';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        global.currentScreenIndex = 'HomeScreen';

        this.state = {
            data: [
                { id: 1, title: "Add", image: require('../../assets/add.png') },
                { id: 2, title: "Sell", image: require('../../assets/sell.png') },
                { id: 3, title: "Refer", image: '' },
            ]
        };
    }


    render() {
        return (
            <ScrollView style={{ flex: 1,backgroundColor:'#0091FF' }}
                contentContainerStyle={{ alignItems: 'center',backgroundColor:'#FBFBFB',borderTopRightRadius:30,
                borderTopLeftRadius:30 }}>
                <View style={{
                    flexDirection: 'row',
                    marginBottom: 20,
                    marginTop: 20,
                    width: Dimensions.get('window').width - 20,
                    height: Dimensions.get('window').height / 6
                }}>
                    <Card containerStyle={styles.card}>
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                        }}>5,129</Text>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '400',
                            color: '#696565'
                        }}>Sales Today</Text>
                    </Card>
                    <Card containerStyle={styles.card}>
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                        }}>23</Text>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '400',
                            color: '#696565'
                        }}>Unit Sold</Text>
                    </Card>

                </View>

                <View style={styles.barcontainer}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>Product Sales</Text>
                        <View style={{
                            backgroundColor: "#fff", shadowColor: '#000',
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                            elevation: 15
                        }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: '400',
                                textAlign: 'right',
                                padding: 10
                            }}>Last Week</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1, flexDirection: 'column', marginTop: 15, }}>
                            <Text style={{
                                fontSize: 26,
                                fontWeight: 'bold',
                            }}>32.2K</Text>
                            <Text style={{
                                fontSize: 14,
                                fontWeight: '400',
                                color: '#696565'
                            }}>Last Week</Text>
                        </View>

                        <View style={{
                            flex: 1, flexDirection: 'column', borderRadius: 10, marginRight: 15,
                            marginTop: 15, backgroundColor: '#ba918f', alignItems: 'center'
                        }}>
                            <View style={{ flex: 1, flexDirection: 'row', }}>
                                <Icon name="arrow-down" type="font-awesome" color="#82120e"
                                    style={{ padding: 10 }} />
                                <View>
                                    <Text style={{
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                        color: '#82120e'
                                    }}>31%</Text>
                                    <Text style={{
                                        fontSize: 13,
                                        fontWeight: 'bold',
                                        color: '#82120e'
                                    }}>Preweek</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            flex: 1, flexDirection: 'column', borderRadius: 10,
                            marginTop: 15, backgroundColor: '#a7c9ad', alignItems: 'center',
                        }}>
                            <View style={{ flex: 1, flexDirection: 'row', }}>
                                <Icon name="arrow-up" type="font-awesome" color="#0d661d"
                                    style={{ padding: 10 }} />
                                <View>
                                    <Text style={{
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                        color: '#0d661d'
                                    }}>31%</Text>
                                    <Text style={{
                                        fontSize: 13,
                                        fontWeight: 'bold',
                                        color: '#0d661d'
                                    }}>overall</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <VerticalBarGraph
                        data={[20, 45, 28, 80, 99, 43, 50]}
                        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                        width={Dimensions.get('window').width - 90}
                        height={180}
                        barRadius={5}
                        barWidthPercentage={0.45}
                        barColor='#0165B1'
                        baseConfig={{
                            hasXAxisBackgroundLines: false,
                            xAxisLabelStyle: {
                                position: 'right',
                                prefix: '$'
                            }
                        }}
                        style={{
                            marginBottom: 30,
                            marginTop: 30,
                            padding: 10,
                            borderRadius: 20,
                            backgroundColor: `#8FCFFF`,
                        }}
                    />
                </View>
                <Card containerStyle={styles.bottomcards}>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: '400',
                        textAlign: 'left',
                        padding: 10
                    }}>Lorem ipsum demo</Text>
                    <FlatList style={styles.list}
                        contentContainerStyle={styles.listContainer}
                        data={this.state.data}
                        horizontal={true}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.listcard}>
                                    <View style={{}}>
                                        <Text style={[styles.title, { color: '#fff' }]}>{item.title}</Text>
                                        <Image style={styles.cardImage} source={item.image } />
                                    </View>
                                </View>
                            )
                        }} />
                </Card>
            </ScrollView >
        );
    };
}

const styles = StyleSheet.create({

    barcontainer: {
        width: Dimensions.get('window').width - 20,
        marginTop: 20,
        backgroundColor: "#8FCFFF",
        padding: 20,
        flexDirection: 'column',
        borderRadius: 30,
        marginBottom: 20,
        marginTop: 20,
    },
    card: {
        backgroundColor: "#FFF",
        borderRadius: 15,
        width: Dimensions.get('window').width / 2 - 15,
        margin: 3
    },
    bottomcards: {
        marginBottom: 20,
        marginTop: 20,
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height / 4,
        backgroundColor: "#FFFF",
        flexDirection: 'row',
        borderRadius: 30,
        elevation: 5,
    },

    /******** card **************/
    listcard: {
        marginHorizontal: 5,
        backgroundColor: "#0091FF",
        //flexBasis: '42%',
        width: Dimensions.get('window').width / 3 - 30,
        borderRadius: 20,
        padding: 10
    },

    cardImage: {
        alignSelf:'center'
    },
    title: {
        fontSize: 14,
    },


});  