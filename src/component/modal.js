import React, { Component } from 'react';
import { Dimensions, Modal, Share } from 'react-native';
import { WebView } from 'react-native-webview';
import { Container, Header, Content, Body, Left, Icon, Right, Title, Button } from 'native-base';


export default class modal extends Component {

    constructor(props) {
        super(props);

    }

    handleClose = () => {
        return this.props.onClose();
    }

    handleShare = () => {
        const {url, title} = this.props.articleData;
        const message = `${title}\n\nRead More @${url}\n\nShared via CryptoNews by incomtech`;
        return Share.share(
            {title, message, url: message},
            {dialogTitle: `Share ${title}`}
        );
    }

    render() {
        const { showModal, articleData } = this.props;
        const { url } = articleData;
        if( url != undefined ){
        return (
            <Modal
                animationType="slide"
                transparent
                visible={showModal}
                onRequestClose={this.handleClose}
            >
                <Container style={{ margin: 15, marginBottom: 0, backgroundColor: '#fff' }}>
                    <Header style={{ backgroundColor: '#009387' }}>
                        <Left>
                            <Button onPress={this.handleClose} transparent>
                                <Icon name="close" style={{ color: 'white', fontSize: 12 }} />
                            </Button>
                        </Left>
                        <Body>
                            <Title children={articleData.title} style={{ color: 'white' }}></Title>
                        </Body>
                        <Right>
                            <Button onPress={this.handleShare} transparent>
                                <Icon name="share" style={{ color: 'white', fontSize: 12 }} />
                            </Button>
                        </Right>
                    </Header>
                    <Content contentContainerStyle={{height: '100%'}}>
                        <WebView source={{uri:url}} style={{flex: 1}}
                        onError={this.handleClose} startInLoadingState
                        scalesPageToFit
                        />
                    </Content>
                </Container>
            </Modal>
        );
        } else{
            return null;
        }
    }
}
