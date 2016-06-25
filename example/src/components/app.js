import React from 'react';
import { Component } from 'react';
import { Tabs, Pane } from 'toggler';

export default class App extends Component {
  render() {
    return (
      <div id='tabs-container'>
        <Tabs selected={0}>
          <Pane label='First'>
            <div>
              <p> Content for the first tab </p>
            </div>
          </Pane>
          <Pane label='Second'>
            <div>
              <p> Content for the second tab </p>
            </div>
          </Pane>
          <Pane label='Third'>
            <div>
              <p> Content for the third tab </p>
            </div>
          </Pane>
        </Tabs>
      </div>
    );
  }
}
