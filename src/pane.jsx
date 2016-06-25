import React, { Component } from 'react';

class Pane extends Component {
  render() {
    return (
      <div className={this.props.paneClass}>
        {this.props.children}
      </div>
    );
  }
}

Pane.propTypes = {
  label: React.PropTypes.string.isRequired,
  paneClass: React.PropTypes.string,
  children: React.PropTypes.element.isRequired
};

module.exports = Pane;
