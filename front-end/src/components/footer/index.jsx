import React from "react";
import "./css/footer.css";
const
  path="/footer/img?img=",
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
            <h3><a href="/bologna" className="name">Bologna</a></h3>
            <ul className="list-unstyled foot-menu-collapsed collapse m-0">
              <li>
                <a href="/pellegrino">Albergo del Pellegrino</a>
              </li>
              <li>
                <a href="/certosa">Certosa</a>
              </li>
              <li>
                <a href="/pinacoteca">Pinacoteca</a>
              </li>
              <li>
                <a href="/torri">Centro: Due Torri, portici</a>
              </li>
              <li>
                <a href="/meridiana">Centro: Chiese, San Petronio e la meridiana </a>
              </li>
            </ul>
          </div>
          <div className="colonne pt">
            <h3><a href="javascript:void(0)" className="name">Modena</a></h3>
            <ul className="list-unstyled foot-menu-collapsed collapse m-0">
              <li>
                <a href="javascript:void(0)">Prossimamente</a>
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
            <h3><a href="javascript:void(0)" className="name">Ferrara</a></h3>
            <ul className="list-unstyled foot-menu-collapsed collapse m-0">
              <li>
                <a href="javascript:void(0)">Prossimamente</a>
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
            <h3><a href="javascript:void(0)" className="name">Parma</a></h3>
            <ul className="list-unstyled foot-menu-collapsed collapse m-0">
              <li>
                <a href="javascript:void(0)">Prossimamente</a>
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
            <h3><a href="javascript:void(0)" className="name">Piacenza</a></h3>
            <ul className="list-unstyled foot-menu-collapsed collapse m-0">
              <li>
                <a href="javascript:void(0)">Prossimamente</a>
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
      <h2><a href="/ringraziamenti" id="ringraziamenti">Autori e Ringraziamenti</a></h2>
      <h3 className="sottoTitolo">Realizzato da</h3>
      <br/>
      <div className="righe loghi">
        <a href="https://www.iisbelluzzifioravanti.gov.it/" title="Belluzzi Fioravanti" target="_blank">
          <img src={logoBF}/>
        </a>
        <a href="https://www.liceorighibologna.it/" title="Liceo Righi" target="_blank">
          <img src={logoRighi} id="imgRighi"/>
        </a>
      </div>

      <br/>
      <br/>

      <h3 className="sottoTitolo">Con il patrocinio di </h3>
      <br/>
      <div className="righe loghi">
        <a href="https://www.regione.emilia-romagna.it/" title="Regione Emilia-Romagna" target="_blank">
          <img src={logoNero} id="imgER"/>
        </a>
        <a href="http://www.comune.bologna.it/" title="Comune di Bologna" target="_blank">
          <img src={logoComune}/>
        </a>
        <a href="https://www.gov.uk/world/organisations/british-embassy-rome.it" title="Ambasciata britannica Roma" target="_blank">
          <img src={logoAmbasciata} id="imgAmbasciata"/>
        </a>
      </div>

      <br/>
      <br/>

      <h3 className="sottoTitolo">In collaborazione con </h3>
      <br/>
      <div className="righe loghi collaborazioni">
        <a href="https://www.museociviltacontadina.bo.it/" title="Museo della Civiltà Contadina" target="_blank">
          <img src={logoContadina} id="civiltaCC"/>
        </a>
        <a href="http://www.comune.bologna.it/museorisorgimento/" title="Museo Civico del Risorgimento" target="_blank">
          <img src={logoRisorgimento}/>
        </a>
        <a href="http://www.archiginnasio.it/" title="Archiginnasio" target="_blank">
          <img src={logoArchiginnasio}/>
        </a>
        <a href="https://www.8cento.org/?lang=it" title="8cento" target="_blank">
          <img src={logoOttocento}/>
        </a>
        <a href="https://www.lookupradio.it" title="Radio Lookup" target="_blank">
          <img src={logoRadio}/>
        </a>
      </div>
    </footer>
	);
}
