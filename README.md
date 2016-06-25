# Toggler


## Quick start: SimpleMap

```js
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
```

### Working example

The code is located under [example](example/) folder.

First, clone the project.
```shell
git clone git@github.com:nicolas-amabile/toggler.git
```
Install `node`. Then,

```shell
cd toggler/example/
npm install
npm start
```

Then open [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/).


## Usage

```sh
npm install --save toggler
```

All components are available on the top-level export.

```js
import { Tabs, Pane } from 'toggler';
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
