import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title  } from 'native-base';
import Tab1 from './Tabs/tab1';
import Tab2 from './Tabs/tab2';
import Tab3  from './Tabs/tab3';
import Tab4 from './Tabs/tab4';
import { white } from 'ansi-colors';


export default class TabScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#03257B'}} hasTabss>
       
        <Left/>
          <Body>
            <Title>News App</Title>
          </Body>
          <Right />
          </Header>
            <Tabs >
          <Tab  
           textStyle={{color:'black'}} 
            tabstyle={{backgroundColor:'#F40D0D'}}
             activeTextStyle={{color:'white'}}
            heading="General">
           <Tab1 />
          </Tab>
          <Tab tabstyle={{backgroundColor:'#F40D0D'}}
            textStyle={{Color:'black'}} 
           activeTextStyle={{color:'white'}}
            heading="Technology">
            <Tab2 />
          </Tab>
          <Tab tabstyle={{backgroundColor:'#F40D0D'}}
            textStyle={{Color:'white'}} 
           activeTextStyle={{color:'white'}}
           heading="Business">
            <Tab3 />
          </Tab>
          <Tab tabstyle={{backgroundColor:'#F40D0D'}}
          textStyle={{Color:'white'}} 
          activeTextStyle={{color:'white'}}
          heading="Sports">
         <Tab4 />
       </Tab>
        
        </Tabs>
      </Container>
    );
  }
}
