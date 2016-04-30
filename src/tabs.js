import React, { Component } from 'react';

class Tabs extends Component{
  constructor(props){
    super(props);
    this.renderTitles = this.renderTitles.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.state = {
      selected: this.props.selected
    };
  }
  handleClick(index, event) {
    event.preventDefault();
    if (index == this.state.selected && this.props.hideChilden){
      index = -1;
    }

    this.setState({
      selected: index
    });
  }

  renderTitles() {
    function labels (child, index) {
      var activeClass = (this.state.selected === index ? 'tabs-label-active' : '');
      return (
        <div key={index} className='tabs-content'>
          <a href='#'
            className={activeClass + ' tabs-label'}
            onClick={this.handleClick.bind(this, index)}>
            {child.props.label}
          </a>
        </div>
      );
    }
    return (
      <div className='tab'>
        {this.props.children.map(labels.bind(this))}
      </div>
    );
  }

  renderContent() {
    if (this.state.selected != -1) {
      return (
        <div>
          {this.props.children[this.state.selected]}
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderTitles()}
        {this.renderContent()}
      </div>
    );
  }
}

Tabs.propTypes = {
  selected: React.PropTypes.number,
  hideChilden: React.PropTypes.bool,
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.element
  ]).isRequired
};

export default Tabs;
