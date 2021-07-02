import React, { Component } from "react";
import axios from "axios";
import Testo from "./testo";
import { Pannellum } from "pannellum-react";
import "animate.css";
import "./css/paragrafi.css";
import "./css/stile.css";
import "./css/tour.css";
import "./css/layer1.css";
import "./css/mappa.css";
import "./css/ringraziamenti.css";
import PROXY from "../proxy.js";
import Content from "./layouts/content";

class Multi extends Component {
  constructor(props) {
    super(props);
    this.child = [];
    this.state = {
      isLoad: false,
      qtaTxt: null,
      qtaImg: null,
      qtaTre: null,
      pagina: this.props.pagina,
      lingua: this.props.lingua,
    };
  }
  componentDidMount = () => {
    axios
      .get(PROXY + "/" + this.state.pagina + "/txt")
      .then((res) => this.setState({ qtaTxt: res.data.count }))
      .catch((err) => err);
    axios
      .get(PROXY + "/" + this.state.pagina + "/img")
      .then((res) => this.setState({ qtaImg: res.data.count }))
      .catch((err) => err);
    axios
      .get(PROXY + "/" + this.state.pagina + "/tre")
      .then((res) => this.setState({ qtaTre: res.data.count }))
      .catch((err) => err);
    this.setState({ isLoad: true });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.lingua !== prevState.lingua) this.change();
  };
  change = () =>
    this.child.forEach((c) => {
      if (c) c.setState({ lingua: this.state.lingua });
    });

  render() {
    if (this.state.isLoad) {
      let txts = [],
        divs = [],
        divsTre = [];
      for (let i = 1; i <= this.state.qtaTxt; i++)
        txts.push(
          <Testo
            key={"txt" + i}
            id={i}
            lingua={this.state.lingua}
            pagina={this.state.pagina}
            tipo={"txt"}
            ref={(ref) => this.child.push(ref)}
          />
        );
      for (let i = 1; i <= this.state.qtaImg; i++)
        divs.push(
          <div className="img">
            <img
              src={PROXY + "/" + this.state.pagina + "/img/" + i}
              alt="not found"
              key={"img" + i}
              id={"img" + i}
            />
            <Testo
              key={"did" + i}
              id={i}
              lingua={this.state.lingua}
              pagina={this.state.pagina}
              tipo={"didascalia"}
              ref={(ref) => this.child.push(ref)}
            />
          </div>
        );
      for (let i = 1; i <= this.state.qtaTre; i++)
        divsTre.push(
          <div className="img">
            <Pannellum
              width="100%"
              height="656px"
              image={PROXY + "/" + this.state.pagina + "/tre/" + i}
              yaw={180}
              hfov={110}
              mouseZoom={"fullscreenonly"}
              compass
              autoLoad
            />
            {/* max(100%,500px) */}
            <Testo
              key={"didTre" + i}
              id={i}
              lingua={this.state.lingua}
              pagina={this.state.pagina}
              tipo={"didascaliaTre"}
              ref={(ref) => this.child.push(ref)}
            />
          </div>
        );
      return (
        <Content
          pagina={this.state.pagina}
          txt={txts}
          img={divs}
          tre={divsTre}
        />
      );
    } else return <p>Loading...</p>;
  }
}

export default Multi;
