import React, { Component } from 'react';
import './CheckBox.css';


class CheckBox extends Component {
  state = {
    checked: this.props.checked
  }

  componentWillReceiveProps(nextProps) {
    if('checked' in nextProps && nextProps.checked !== this.state.checked) {
      this.setState({ checked: nextProps.checked });
    }
  }

  handleChange(e) {
    // TODO: dispatch update action instead of changing local state?
    this.setState({ checked: e.target.checked });
    this.props.onChange(e.target.checked);
  }

  render() {
    const className = this.state.checked ? 'CheckBox checked' : 'CheckBox';

    return (
      <label className={className}>
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={(e) => { this.handleChange(e) }}
        />
        {this.props.label}
      </label>
    );
  }
};

export default CheckBox;
