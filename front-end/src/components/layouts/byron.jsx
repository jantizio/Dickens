import React, { Component } from "react";
import { Link } from "react-router-dom";
import PROXY from "../../proxy.js";

class Byron extends Component {
  state = {
    txt: this.props.txt,
    img: this.props.img,
    tre: this.props.tre,
  };
  render() {
    return (
      <React.Fragment>
        <h2 className="subtitle">{this.state.txt[8]}</h2>
        <div className="paragrafo">
          {this.state.txt[0]}
          {this.state.img[0]}
        </div>
        <div className="paragrafo">
          {this.state.img[1]}
          {this.state.img[2]}
        </div>
        <div className="paragrafo">
          {this.state.img[4]}
          {this.state.txt[1]}
        </div>
        <div className="paragrafo">
          {this.state.txt[2]}
          {this.state.img[3]}
        </div>
        <div className="paragrafo">{this.state.txt[3]}</div>
        <div className="paragrafo">{this.state.txt[4]}</div>
        <div className="paragrafo">{this.state.txt[5]}</div>
        <div className="note">{this.state.txt[6]}</div>
        <div className="bibliografia">{this.state.txt[7]}</div>
      </React.Fragment>
    );
  }
}

export default Byron;
