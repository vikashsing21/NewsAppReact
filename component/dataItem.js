import React,{Component} from 'react';
import { ListItem, Left, Right, Thumbnail, Body, View, Text, Button } from 'native-base';
import Time from './time';


export default class DataItem extends Component {

    constructor(props) {
        super(props);
        this.data = props.data;
    }
    render(){
        return(

<ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri:this.data.urlToImage}} />
              </Left>
              <Body>
                <Text numberOfLines={2}>{this.data.title}</Text>
                <Text note numberOfLines={2}>{this.data.description}</Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>{this.data.source.name}</Text>
                    <Time time={this.data.publishedAt}></Time>
                    </View>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem> 
        );
    }


            }