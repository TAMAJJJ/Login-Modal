import React, { Component } from "react";
import { Button, Form, Modal } from "semantic-ui-react";

export default class Login extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Modal trigger={<Button>Log In</Button>} style={{ width: "40%" }}>
        <Modal.Header>Log In</Modal.Header>
        <Modal.Content style={{ padding: "5% 5%" }}>
          <Form size="big">
            <Form.Field>
              <label>Email Address</label>
              <input placeholder="Email Address" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type="password" placeholder="Password" />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button primary>Log In</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
