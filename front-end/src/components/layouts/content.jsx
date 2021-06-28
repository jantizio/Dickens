import React, { Component } from "react";
import imageMapResize from "image-map-resizer";
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
  constructor(props) {
    super(props);
    this.state = {
      pagina: this.props.pagina,
    };
  }

  componentDidMount = () => {
    console.log("dai cazzo");
    imageMapResize();
  };

  factory = () => {
    switch (this.state.pagina) {
      case "emiliaRomagna":
        return EmiliaRomagna(this.props.txt, this.props.img, this.props.tre);
      case "bologna":
        return Bologna(this.props.txt, this.props.img, this.props.tre);
      case "byron":
        return Byron(this.props.txt, this.props.img, this.props.tre);
      case "certosa":
        return Certosa(this.props.txt, this.props.img, this.props.tre);
      case "campagna":
        return Campagna(this.props.txt, this.props.img, this.props.tre);
      case "carracci":
        return Carracci(this.props.txt, this.props.img, this.props.tre);
      case "dickens":
        return Dickens(this.props.txt, this.props.img, this.props.tre);
      case "domenichino":
        return Domenichino(this.props.txt, this.props.img, this.props.tre);
      case "meridiana":
        return Meridiana(this.props.txt, this.props.img, this.props.tre);
      case "moda":
        return Moda(this.props.txt, this.props.img, this.props.tre);
      case "pellegrino":
        return Pellegrino(this.props.txt, this.props.img, this.props.tre);
      case "pinacoteca":
        return Pinacoteca(this.props.txt, this.props.img, this.props.tre);
      case "pontificio":
        return Pontificio(this.props.txt, this.props.img, this.props.tre);
      case "reni":
        return Reni(this.props.txt, this.props.img, this.props.tre);
      case "ringraziamenti":
        return Ringraziamenti(this.props.txt, this.props.img, this.props.tre);
      case "rossini":
        return Rossini(this.props.txt, this.props.img, this.props.tre);
      case "sibaud":
        return Sibaud(this.props.txt, this.props.img, this.props.tre);
      case "storia":
        return Storia(this.props.txt, this.props.img, this.props.tre);
      case "torri":
        return Torri(this.props.txt, this.props.img, this.props.tre);
      case "tour":
        return Tour(this.props.txt, this.props.img, this.props.tre);

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
