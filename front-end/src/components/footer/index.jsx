import React from "react";
import "./css/footer.css";
import {Link} from "react-router-dom";
import PROXY from "../../proxy";

const
  path=PROXY+"/footer/img?img=",
	logoBF=path+"Logo-BF",
  logoRighi=path+"logo_righi",
  logoNero=path+"marchio_RER_NERO_2009_page-0001",
  logoComune=path+"logo-comune-bianco-fix",
  logoAmbasciata=path+"FCO_BE_IT_ROM_PS_opac0",
  logoContadina=path+"cittametro_villa_smeraldi_png",
  logoRisorgimento=path+"logo_risorgimento-opac0-bianco",
  logoArchiginnasio=path+"ARCHIGINNASIO",
  logoOttocento=path+"8cento_APS",
  logoRadio=path+"logoRadio";

export default function Footer()
{
	return(
    <footer className="footer">
      <div className="container">
        <div className="righe">
          <div className="colonne pt">
            <h3><Link to="/bologna" className="name">Bologna</Link></h3>
            <ul className="list-unstyled foot-menu-collapsed collapse m-0">
              <li>
                <Link to="/pellegrino">Albergo del Pellegrino</Link>
              </li>
              <li>
                <Link to="/certosa">Certosa</Link>
              </li>
              <li>
                <Link to="/pinacoteca">Pinacoteca</Link>
              </li>
              <li>
                <Link to="/torri">Centro: Due Torri, portici</Link>
              </li>
              <li>
                <Link to="/meridiana">Centro: Chiese, San Petronio e la meridiana </Link>
              </li>
            </ul>
          </div>
          <div className="colonne pt">
            <h3><Link className="name">Modena</Link></h3>
            <ul className="list-unstyled foot-menu-collapsed collapse m-0">
              <li>
                <Link>Prossimamente</Link>
              </li>
              <li>
                -
              </li>
              <li>
                -
              </li>
              <li>
                -
              </li>
              <li>
                -
              </li>
            </ul>
          </div>
          <div className="colonne pt">
            <h3><Link className="name">Ferrara</Link></h3>
            <ul className="list-unstyled foot-menu-collapsed collapse m-0">
              <li>
                <Link>Prossimamente</Link>
              </li>
              <li>
                -
              </li>
              <li>
                -
              </li>
              <li>
                -
              </li>
              <li>
                -
              </li>
            </ul>
          </div>
          <div className="colonne pt">
            <h3><Link className="name">Parma</Link></h3>
            <ul className="list-unstyled foot-menu-collapsed collapse m-0">
              <li>
                <Link>Prossimamente</Link>
              </li>
              <li>
                -
              </li>
              <li>
                -
              </li>
              <li>
                -
              </li>
              <li>
                -
              </li>
            </ul>
          </div>
          <div className="colonne pt">
            <h3><Link className="name">Piacenza</Link></h3>
            <ul className="list-unstyled foot-menu-collapsed collapse m-0">
              <li>
                <Link>Prossimamente</Link>
              </li>
              <li>
                -
              </li>
              <li>
                -
              </li>
              <li>
                -
              </li>
              <li>
                -
              </li>
            </ul>
          </div>
        </div>
        <br/><br/><br/><br/>
        <hr/>
        <br/><br/><br/>
      </div>
      <br/>
      <h2><Link to="/ringraziamenti" id="ringraziamenti">Autori e Ringraziamenti</Link></h2>
      <h3 className="sottoTitolo">Realizzato da</h3>
      <br/>
      <div className="righe loghi">
        <a href="https://www.iisbelluzzifioravanti.gov.it/" title="Belluzzi Fioravanti" target="_blank">
          <img src={logoBF} alt="logoBF"/>
        </a>
        <a href="https://www.liceorighibologna.it/" title="Liceo Righi" target="_blank">
          <img src={logoRighi} alt="logoRighi" id="imgRighi"/>
        </a>
      </div>

      <br/>
      <br/>

      <h3 className="sottoTitolo">Con il patrocinio di </h3>
      <br/>
      <div className="righe loghi">
        <a href="https://www.regione.emilia-romagna.it/" title="Regione Emilia-Romagna" target="_blank">
          <img src={logoNero} alt="logo Emilia Romagna" id="imgER"/>
        </a>
        <a href="http://www.comune.bologna.it/" title="Comune di Bologna" target="_blank">
          <img src={logoComune} alt="logo Comune di Bologna"/>
        </a>
        <a href="https://www.gov.uk/world/organisations/british-embassy-rome.it" title="Ambasciata britannica Roma" target="_blank">
          <img src={logoAmbasciata} alt="logo Ambasciata britannica Roma" id="imgAmbasciata"/>
        </a>
      </div>

      <br/>
      <br/>

      <h3 className="sottoTitolo">In collaborazione con </h3>
      <br/>
      <div className="righe loghi collaborazioni">
        <a href="https://www.museociviltacontadina.bo.it/" title="Museo della Civiltà Contadina" target="_blank">
          <img src={logoContadina} alt="logo Museo della Civiltà Contadina" id="civiltaCC"/>
        </a>
        <a href="http://www.comune.bologna.it/museorisorgimento/" title="Museo Civico del Risorgimento" target="_blank">
          <img src={logoRisorgimento} alt="logo Museo Civico del Risorgimento"/>
        </a>
        <a href="http://www.archiginnasio.it/" title="Archiginnasio" target="_blank">
          <img src={logoArchiginnasio} alt="logo Archiginnasio"/>
        </a>
        <a href="https://www.8cento.org/?lang=it" title="8cento" target="_blank">
          <img src={logoOttocento} alt="logo 8cento"/>
        </a>
        <a href="https://www.lookupradio.it" title="Radio Lookup" target="_blank">
          <img src={logoRadio} alt="logo Radio Lookup"/>
        </a>
      </div>
    </footer>
	);
}
