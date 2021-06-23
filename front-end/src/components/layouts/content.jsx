import React, { Component } from "react";
import {
  Bologna,
  Byron,
  Campagna,
  Carracci,
  Certosa,
  Dickens,
  Domenichino,
  EmiliaRomagna,
  Meridiana,
  Moda,
  Pellegrino,
  Pinacoteca,
  Pontificio,
  Reni,
  Ringraziamenti,
  Rossini,
  Sibaud,
  Storia,
  Torri,
  Tour,
} from "./path";

class Content extends Component {
  state = {
    pagina: this.props.pagina,
  };

  factory = () => {
    switch (this.state.pagina) {
      case "emiliaRomagna":
        return (
          <EmiliaRomagna
            txt={this.props.txt}
            img={this.props.img}
            tre={this.props.tre}
          />
        );

      case "bologna":
        return (
          <Bologna
            txt={this.props.txt}
            img={this.props.img}
            tre={this.props.tre}
          />
        );

      case "byron":
        return (
          <Byron
            txt={this.props.txt}
            img={this.props.img}
            tre={this.props.tre}
          />
        );

      default:
        return (
          <React.Fragment>
            {this.props.txt.map((txt) => (
              <div className="paragrafo">{txt}</div>
            ))}
            {this.props.img.map((img) => (
              <div className="paragrafo">{img}</div>
            ))}
            {this.props.tre.map((tre) => (
              <div className="paragrafo">{tre}</div>
            ))}
          </React.Fragment>
        );
    }
  };

  render() {
    return <React.Fragment>{this.factory()}</React.Fragment>;
  }
}

export default Content;
