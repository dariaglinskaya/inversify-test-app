import { myContainer } from "./inversify.config";
import { TYPES } from "./types";
import { Warrior } from "./interfaces";
import * as React from 'react';
import { Modal, Button } from 'antd';
import './App.css';

import logo from './logo.svg';

const ninja = myContainer.get<Warrior>(TYPES.Warrior);

export interface IState {
  visible: boolean;
  msg: string;
}

export class App extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      msg: ''
    }
  }
  public fight() {
    const msg = ninja.fight();
    return msg;
  }
  public sneak() {
    const msg = ninja.sneak();
    return msg;
  }
  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }
  public modal(msg) {
    this.setState({ visible: true, msg: msg });
    console.log(msg);
    console.log(this.state)
    return
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button onClick={() => this.modal(this.fight())} className="fight-btn">Fight</Button>
        <Button onClick={() => this.modal(this.sneak())} className="sneak-btn">Throw</Button>
        <Modal
          title="Logger"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          className="modal"
        >
          <p>{this.state.msg}</p>
        </Modal>
      </div>
    );
  }
}

