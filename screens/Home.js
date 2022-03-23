import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, FlatList, Alert,SafeAreaView } from 'react-native';
import {ListItem} from 'react-native-elements';
import axios from 'axios';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            list_data: [],
            url: 'https://e13e-115-187-32-125.in.ngrok.io',
        }
    }
    componentDidMount(){
    this.getPlanets();
    }
    getPlanets = () => {
        axios.get(this.state.url)
        .then(res => {
            const list_data = res.data.data;
            this.setState({list_data});
        })
        .catch(err => {
            console.log(err);
            Alert.alert('Error', 'Something went wrong');
        })
    }
    renderItem = ({item,index}) => {
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {planet_name:item.name})}>
            <ListItem
            key={index}
            bottomDivider
            >
                <ListItem.Content>
                 <ListItem.Title>{item.name}</ListItem.Title>
                 <ListItem.Subtitle>{item.distance}</ListItem.Subtitle>
                </ListItem.Content>
           <ListItem.Chevron /> 
            </ListItem>
            </TouchableOpacity>
        )
    }
    render(){
        const {list_data} = this.state;
        if (list_data.length === 0) {
            return (
                <View style={styles.container}>
                    <Text>Loading...</Text>
                </View>
            )
        }
        return(
            <View style={styles.container}>
                <SafeAreaView>
                    
                </SafeAreaView>
                <View style={styles.upperContainer}>
                    <Text style={styles.headerText}> Stars</Text>
                </View>
                <View>
                        <FlatList
                         data={list_data}
                         keyExtractor={(item, index) => index.toString()}
                         renderItem={this.renderItem}
                         >                                                

                        </FlatList>
                </View>
                </View>
        )

    }    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#edc988"
        },
        upperContainer: {
          flex: 0.1,
          justifyContent: "center",
          alignItems: "center"
        },
        headerText: {
          fontSize: 30,
          fontWeight: "bold",
          color: "#132743"
        },
        lowerContainer: {
          flex: 0.9
        },
        emptyContainer: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        emptyContainerText: {
          fontSize: 20
        },
        title: {
          fontSize: 18,
          fontWeight: "bold",
          color: "#d7385e"
        },
        listContainer: {
          backgroundColor: "#eeecda"
        }
      });