import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title, Subtitle } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#fafafa'}} hasTabs>
        <Left />
          <Body>
            <Title style={{color:'black', textAlign:'left'}}>Crypto News</Title>
            <Subtitle style={{color:'black', textAlign:'left'}}>Powered by incomtech</Subtitle>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab textStyle={{color:'black'}} tabStyle={{backgroundColor: '#fafafa'}} activeTabStyle={{backgroundColor:'#f3f3f3'}} activeTextStyle={{color:'black'}} heading="Bitcoin">
            <Tab1 />
          </Tab>
          <Tab textStyle={{color:'black'}} tabStyle={{backgroundColor: '#fafafa'}} activeTabStyle={{backgroundColor:'#f3f3f3'}} activeTextStyle={{color:'black'}} heading="Ethereum">
            <Tab2 />
          </Tab>
          <Tab textStyle={{color:'black'}} tabStyle={{backgroundColor: '#fafafa'}} activeTabStyle={{backgroundColor:'#f3f3f3'}} activeTextStyle={{color:'black'}} heading="Litecoin">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}