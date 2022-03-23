import  React,{Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, FlatList, Alert,SafeAreaView } from 'react-native';
import {ListItem,Card,Item} from 'react-native-elements';
import axios from 'axios';

export default class Details extends Component {
     constructor(props){
            super(props);
            this.state = {
                details: {},
                url: `http://eaba-103-242-197-132.ngrok.io/planet?name=${this.props.navigation.getParam("planet_name")}`,
                image: '',
            }
        }
        componentDidMount(){
            this.getDetails();
        }
        getDetails = () => {
            axios.get(this.state.url)
            .then(res => {
                const details = res.data.data;
                this.setState({details});
                console.log(details);
              //  this.setState({image: details.image});
            })
            .catch(err => {
                console.log(err);
                Alert.alert('Error', 'Something went wrong');
            })
        }
        setDetails=(planetDetails)=>{
            console.log(this.state.details);
            const planetType=planetDetails.planet_type;
        
          
                   let imagePath = require("../assets/planet_type/gas_giant.png");
      
        this.setState({
            details: planetDetails,
            imagePath: imagePath
          });
    }
    render() {
        const { details, imagePath } = this.state;
        if (details.specifications) {
          return (
            <View style={styles.container}>
              <Card
                title={details.name}
                image={imagePath}
                imageProps={{ resizeMode: "contain", width: "100%" }}
              >
                <View>
                  <Text
                    style={styles.cardItem}
                  >{`Distance from Our solar System: ${details.distance}`}</Text>
                  <Text
                    style={styles.cardItem}
                  >{`Mass : ${details.mass}`}</Text>
                  <Text
                    style={styles.cardItem}
                  >{`Gravity : ${details.gravity}`}</Text>
                 <Text
                    style={styles.cardItem}
                  >{`Stars Radius : ${details.radius}`}</Text>

                </View>
                <View style={[styles.cardItem, { flexDirection: "column" }]}>
                  <Text>{details.specifications ? `Specifications : ` : ""}</Text>
                  {details.specifications.map((item, index) => (
                    <Text key={index.toString()} style={{ marginLeft: 50 }}>
                      {item}
                    </Text>
                  ))}
                </View>
              </Card>
            </View>
          );
        }
        return null;
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1
      },
      cardItem: {
        marginBottom: 10
      }
    });