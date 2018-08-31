import { Button } from 'antd';
import { myContainer } from "./inversify.config";
import { TYPES } from "./types";
import { Warrior } from "./interfaces";
import * as React from 'react';

import './App.css';

import logo from './logo.svg';

const ninja = myContainer.get<Warrior>(TYPES.Warrior);

export class App extends React.Component {
  public fight() {
    return ninja.fight();
  }
  public sneak() {
    return ninja.sneak();
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
        <Button onClick={() => this.fight()}>Fight</Button>
        <Button onClick={() => this.sneak()}>Throw</Button>
      </div>
    );
  }
}

