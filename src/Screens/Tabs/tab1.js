import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import {getArticle} from '../../../service/news';
import {Alert,ActivityIndicator,View } from 'react-native';
import DataItem from '../../../component/dataItem';



export default class ListThumbnailExample extends Component {

  constructor(props){
    super(props);

    this.state ={
      isLoading:true,
      data:null
    }
  }
  componentDidMount(){
    getArticle().then(data=>{
      this.setState({
        isLoading:false,
        data:data
      });
    },error => {
      Alert.alert('Error','went wrong');

    }
    )
  }


  render() {
   var jsondata = this.state.data;
    let view = this.state.isLoading ? (
      <View>
        <ActivityIndicator animating={this.state.isLoading}/>
        <Text style={{marginTop:10}}>Please Wait...</Text>
      </View>

    ):(
      <List
      dataArray ={this.state.data}
      renderRow={(item)=>{
        return(<DataItem data={item}/>);
        
      }}
      
      />
        )

 return (
      <Container>
       
        <Content>
          
           {view}
          
        </Content>
      </Container>
    );
  }
}