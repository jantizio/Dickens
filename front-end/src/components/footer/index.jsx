import React from "react";
import "./css/footer.css";
import { Link } from "react-router-dom";
import PROXY from "../../proxy";

const path = PROXY + "/footer/img?img=",
  sfondo = path + "sfondo",
  logoBF = path + "bf_logo",
  logoRighi = path + "righi_logo",
  logoRegione = path + "regione_logo",
  logoComune = path + "comune_logo",
  logoAmbasciata = path + "ambasciata_logo",
  logoContadina = path + "contadina_logo",
  logoRisorgimento = path + "risorgimento_logoBianco",
  logoArchiginnasio = path + "archiginnasio_logo",
  logoOttocento = path + "8cento_logo",
  logoRadio = path + "radio_logo";

export default function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url("${sfondo}")`,
      }}
    >
      <div className="container">
        <div className="righe">
          <div className="colonne">
            <h3>
              <Link to="/bologna">Bologna</Link>
            </h3>
            <ul>
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
                <Link to="/meridiana">
                  Centro: Chiese, San Petronio e la meridiana{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div className="colonne">
            <h3>
              <Link>Modena</Link>
            </h3>
            <ul>
              <li>
                <Link>Prossimamente</Link>
              </li>
              <li>-</li>
              <li>-</li>
              <li>-</li>
              <li>-</li>
            </ul>
          </div>
          <div className="colonne">
            <h3>
              <Link>Ferrara</Link>
            </h3>
            <ul>
              <li>
                <Link>Prossimamente</Link>
              </li>
              <li>-</li>
              <li>-</li>
              <li>-</li>
              <li>-</li>
            </ul>
          </div>
          <div className="colonne">
            <h3>
              <Link>Parma</Link>
            </h3>
            <ul>
              <li>
                <Link>Prossimamente</Link>
              </li>
              <li>-</li>
              <li>-</li>
              <li>-</li>
              <li>-</li>
            </ul>
          </div>
          <div className="colonne">
            <h3>
              <Link>Piacenza</Link>
            </h3>
            <ul>
              <li>
                <Link>Prossimamente</Link>
              </li>
              <li>-</li>
              <li>-</li>
              <li>-</li>
              <li>-</li>
            </ul>
          </div>
        </div>

        <hr />
      </div>
      <h2>
        <Link to="/ringraziamenti" id="ringraziamenti">
          Autori e Ringraziamenti
        </Link>
      </h2>

      <h3 className="sottoTitolo">Realizzato da</h3>
      <div className="righe loghi">
        <a
          href="https://www.iisbelluzzifioravanti.gov.it/"
          title="Belluzzi Fioravanti"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logoBF} alt="logoBF" />
        </a>
        <a
          href="https://www.liceorighibologna.it/"
          title="Liceo Righi"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logoRighi} alt="logoRighi" />
        </a>
      </div>

      <h3 className="sottoTitolo">Con il patrocinio di </h3>
      <div className="righe loghi">
        <a
          href="https://www.regione.emilia-romagna.it/"
          title="Regione Emilia-Romagna"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logoRegione} alt="logo Emilia Romagna" />
        </a>
        <a
          href="http://www.comune.bologna.it/"
          title="Comune di Bologna"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={logoComune}
            alt="logo Comune di Bologna"
            id="comuneBologna"
          />
        </a>
        <a
          href="https://www.gov.uk/world/organisations/british-embassy-rome.it"
          title="Ambasciata britannica Roma"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logoAmbasciata} alt="logo Ambasciata britannica Roma" />
        </a>
      </div>

      <h3 className="sottoTitolo">In collaborazione con </h3>
      <div className="righe loghi">
        <a
          href="https://www.museociviltacontadina.bo.it/"
          title="Museo della Civiltà Contadina"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logoContadina} alt="logo Museo della Civiltà Contadina" />
        </a>
        <a
          href="http://www.comune.bologna.it/museorisorgimento/"
          title="Museo Civico del Risorgimento"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={logoRisorgimento}
            alt="logo Museo Civico del Risorgimento"
          />
        </a>
        <a
          href="http://www.archiginnasio.it/"
          title="Archiginnasio"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logoArchiginnasio} alt="logo Archiginnasio" />
        </a>
        <a
          href="https://www.8cento.org/?lang=it"
          title="8cento"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logoOttocento} alt="logo 8cento" />
        </a>
        <a
          href="https://www.lookupradio.it"
          title="Radio Lookup"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logoRadio} alt="logo Radio Lookup" />
        </a>
      </div>
    </footer>
  );
}
