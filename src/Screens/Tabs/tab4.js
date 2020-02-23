import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class ListThumbnailExample extends Component {
  render() {
    return (
      <Container>
       
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.google.com/search?q=image&rlz=1C1CHBF_enIN840IN840&sxsrf=ACYBGNRTxYqMxNBP4ARdTbjVPiVGQgfP2A:1567921788672&tbm=isch&source=iu&ictx=1&fir=nH5liarSz56duM%253A%252C0JWe7yDOKrVFAM%252C_&vet=1&usg=AI4_-kRf85Hi1009Qz30CByHTO8p9tp5Hw&sa=X&ved=2ahUKEwjQ-f7pw8DkAhX563MBHQr6BykQ9QEwCnoECAQQGA#imgrc=nH5liarSz56duM:' }} />
              </Left>
              <Body>
                <Text>Title</Text>
                <Text note numberOfLines={2}>Its time to build a difference . . Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.google.com/search?q=image&rlz=1C1CHBF_enIN840IN840&sxsrf=ACYBGNRTxYqMxNBP4ARdTbjVPiVGQgfP2A:1567921788672&tbm=isch&source=iu&ictx=1&fir=nH5liarSz56duM%253A%252C0JWe7yDOKrVFAM%252C_&vet=1&usg=AI4_-kRf85Hi1009Qz30CByHTO8p9tp5Hw&sa=X&ved=2ahUKEwjQ-f7pw8DkAhX563MBHQr6BykQ9QEwCnoECAQQGA#imgrc=nH5liarSz56duM:' }} />
              </Left>
              <Body>
                <Text>Title</Text>
                <Text note numberOfLines={2}>Its time to build a difference . . Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.google.com/search?q=image&rlz=1C1CHBF_enIN840IN840&sxsrf=ACYBGNRTxYqMxNBP4ARdTbjVPiVGQgfP2A:1567921788672&tbm=isch&source=iu&ictx=1&fir=nH5liarSz56duM%253A%252C0JWe7yDOKrVFAM%252C_&vet=1&usg=AI4_-kRf85Hi1009Qz30CByHTO8p9tp5Hw&sa=X&ved=2ahUKEwjQ-f7pw8DkAhX563MBHQr6BykQ9QEwCnoECAQQGA#imgrc=nH5liarSz56duM:' }} />
              </Left>
              <Body>
                <Text>Title</Text>
                <Text note numberOfLines={2}>Its time to build a difference . . Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

          </List>
        </Content>
      </Container>
    );
  }
}