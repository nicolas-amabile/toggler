import React, { Component } from 'react';

class Tabs extends Component{
  getDefaultProps() {
    return {
      selected: 0
    };
  };

  getInitialState() {
    return {
      selected: this.props.selected
    };
  };

  handleClick(index, event) {
    event.preventDefault()
    this.setState({
      selected: index
    });
  };

  renderTitles() {
    function labels (child, index) {
      var activeClass = (this.state.selected === index ? 'tabs-label-active' : '')
      return (
        <li key={index} className='tabs-content'>
          <a href='#'
            className={activeClass + ' tabs-label'}
            onClick={this.handleClick.bind(this, index)}>
            {child.props.label}
          </a>
        </li>
      )
    }
    return (
      <ul className='tab'>
        {this.props.children.map(labels.bind(this))}
      </ul>
    );
  };

  renderContent() {
    return (
      <div>
        {this.props.children[this.state.selected]}
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.renderTitles()}
        {this.renderContent()}
      </div>
    );
  };
};

Tabs.propTypes = {
  selected: React.PropTypes.number,
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.element
  ]).isRequired
};

export default Tabs;
