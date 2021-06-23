import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PROXY from "../../proxy.js";

class Bologna extends Component {
    state = { 
        txt: this.props.txt,
        img: this.props.img,
        tre: this.props.tre
    }
    render() { 
        return (
        <React.Fragment>
        <h2 className="subtitle" id="h2">Bologna</h2>
        <div className="livello animate__animated animate__bounceInDown">
        <img src={PROXY+"/bologna/img/1"} className="bg" alt="foto bologna"/>
        <Link to="/meridiana"><img onMouseEnter={ () => window['changeH2']("Centro: Chiese, San Petronio e la meridiana") } onMouseLeave={ () => window['changeH2']("Bologna") } className="icona animate__animated" id="meridiana" src={PROXY+"/bologna/img/2"} alt="meridiana logo"/></Link>
        <Link to="/certosa"><img onMouseEnter={ () => window['changeH2']("Certosa") } onMouseLeave={ () => window['changeH2']("Bologna") } className="icona animate__animated" id="certosa" src={PROXY+"/bologna/img/3"} alt="certosa logo"/></Link>
        <Link to="/torri"><img onMouseEnter={ () => window['changeH2']("Centro: due torri, portici") } onMouseLeave={ () => window['changeH2']("Bologna") } className="icona animate__animated" id="dueTorri" src={PROXY+"/bologna/img/4"} alt="torri logo"/></Link>
        <Link to="/pinacoteca"><img onMouseEnter={ () => window['changeH2']("Pinacoteca") } onMouseLeave={ () => window['changeH2']("Bologna") } className="icona animate__animated" id="pinacoteca" src={PROXY+"/bologna/img/5"} alt="pinacoteca logo"/></Link>
        <Link to="/pellegrino"><img onMouseEnter={ () => window['changeH2']("Albergo del pellegrino") } onMouseLeave={ () => window['changeH2']("Bologna") } className="icona animate__animated" id="pellegrino" src={PROXY+"/bologna/img/6"} alt="pellegrino logo"/></Link>
        </div>
        </React.Fragment>
        );
    }
}
 
export default Bologna;