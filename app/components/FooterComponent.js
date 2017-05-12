import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import colors from '../themes/Colors';

const styles = {
  footer: {
    backgroundColor: colors.bottomNavigationBar,
    borderTopColor: colors.barShadow,
  },
  icon: {
    color: 'white',
  },
};

export default class FooterComponent extends Component {
  render() {
    return (
      <Footer style={styles.footer}>
        <FooterTab>
          <Button>
            <Icon name="home" style={styles.icon} />
          </Button>
          <Button>
            <Icon name="camera" style={styles.icon} />
          </Button>
          <Button>
            <Icon name="person" style={styles.icon} />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
