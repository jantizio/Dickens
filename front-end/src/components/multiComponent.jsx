import React, {Component} from "react";
import axios from "axios";
import Testo from "./testo";
import {Pannellum} from "pannellum-react";
import {Link} from "react-router-dom";
import "./css/paragrafi.css";
import "./css/stile.css";
import "./css/tour.css";
import "./css/layer1.css";
import "./css/mappa.css";
import "./css/ringraziamenti.css";
import PROXY from "../proxy.js";



class Multi extends Component
{
  constructor(props)
  {
    super(props);
    this.child=[];
    this.state=
    {
      isLoad:false,
      qtaTxt:null,
      qtaImg:null,
      qtaTre:null,
      pagina:this.props.pagina,
      lingua:this.props.lingua
    };
  }
  componentDidMount=()=>
  {
    axios.get(PROXY+"/"+this.state.pagina+"/txt")
    .then(res=>this.setState({qtaTxt:res.data.count}))
    .catch(err=>err);
    axios.get(PROXY+"/"+this.state.pagina+"/img")
    .then(res=>this.setState({qtaImg:res.data.count}))
    .catch(err=>err);
    axios.get(PROXY+"/"+this.state.pagina+"/tre")
    .then(res=>this.setState({qtaTre:res.data.count}))
    .catch(err=>err);
    this.setState({isLoad:true});
  }
  componentDidUpdate=(prevProps, prevState)=>
  {
    if(this.state.lingua!==prevState.lingua) this.change();
  }
  change=()=>this.child.forEach(c=>{if(c) c.setState({lingua:this.state.lingua})});
  layout(txt, img, tre) {
    let struttura = [];
    let temp;

    switch(this.state.pagina)
    {

      case "emiliaRomagna":

      struttura.push((<h2 class="subtitle">{txt[2]}</h2>));


      temp = (<center>
      <img src={PROXY+"/emiliaRomagna/img/1"} alt="Mappa emilia romagna" usemap="#workmap"/>
      <map name="workmap">
	      <area target="" alt="uva" href="/campagna" coords="210,218,26" shape="circle"/>
        <area shape="poly" coords="659,163,656,175,656,187,663,192,669,184,677,178,682,171,689,169,700,170,710,170,718,171,727,171,735,172,743,174,755,177,762,177,769,180,781,184,801,197,810,189,822,189,836,190,836,197,827,206,838,210,840,219,840,227,835,232,848,235,845,241,851,243,846,248,858,251,866,252,861,260,860,267,857,274,851,278,848,284,840,289,834,293,824,289,825,296,821,302,813,314,803,315,798,321,796,329,802,330,793,335,792,348,790,365,783,370,772,367,765,360,758,353,748,353,744,359,736,361,725,366,722,372,714,379,712,388,710,397,700,400,689,401,679,397,668,402,657,406,651,407,637,409,625,404,625,395,620,402,615,408,612,414,606,425,598,419,586,413,573,412,569,404,569,394,566,388,564,379,564,373,570,361,575,356,575,350,581,351,585,356,591,357,601,350,605,339,603,333,597,329,604,324,611,324,617,322,620,315,617,308,614,301,616,295,619,287,612,285,599,284,605,279,611,276,611,268,614,260,609,252,622,253,624,247,625,241,632,236,629,228,622,227,615,218,605,216,606,210,609,205,611,198,611,191,611,184,615,176,627,173,632,172,638,165,647,163" alt="Bologna" href="/bologna"/>
        <area shape="poly" coords="659,163,660,156,666,155,675,143,664,140,657,140,645,140,635,138,635,129,632,119,641,118,653,118,664,116,676,116,693,116,692,123,710,114,717,113,730,112,748,118,755,123,761,118,767,113,775,110,783,110,789,107,788,100,798,99,807,95,815,92,821,90,834,88,848,85,867,82,874,82,881,82,906,78,910,86,917,88,926,84,935,84,948,83,957,79,963,87,965,93,968,99,976,100,982,102,992,109,1001,114,1009,117,1010,139,1006,149,998,146,989,145,980,136,972,136,971,142,971,153,977,162,980,173,973,177,956,199,946,201,926,202,915,202,908,197,905,191,895,195,888,197,882,199,874,201,866,203,858,210,852,209,842,213,834,207,831,200,833,193,829,188,818,189,808,192,802,195,793,194,783,183,776,181,767,176,755,174,737,169,730,169,709,171,694,169,682,172,674,176,667,183,659,179,659,170" alt="Ferrara" href="javascript:void(0)"/>
        <area shape="poly" coords="399,163,405,162,416,163,428,162,434,159,440,151,445,143,450,138,457,140,462,134,469,136,472,141,478,144,491,145,503,145,513,145,520,146,518,154,518,161,510,165,510,172,507,180,515,185,514,195,515,201,519,210,522,218,522,227,517,235,516,246,516,266,509,274,504,278,496,286,489,294,483,303,484,313,481,320,469,322,463,324,460,331,457,340,453,347,458,349,452,355,452,365,452,373,453,380,449,387,450,394,440,395,428,393,418,390,410,384,403,388,392,386,386,387,379,393,370,392,364,384,356,381,347,380,340,377,337,371,334,357,334,341,342,338,349,331,357,319,367,312,375,305,380,300,384,291,390,284,395,278,394,270,393,262,399,252,393,244,395,235,398,229,392,220,387,212,386,203,391,191,395,183,391,178,397,170" alt="Reggio Emilia" href="javascript:void(0)"/>
        <area shape="poly" coords="246,148,255,147,257,154,264,155,269,149,275,147,281,143,289,148,295,145,304,145,310,148,317,152,324,154,331,152,341,155,347,158,355,155,363,154,371,155,375,160,385,163,395,164,401,166,392,173,393,180,392,194,388,202,387,210,391,219,391,226,399,232,396,241,396,247,397,255,393,268,383,281,383,287,380,293,374,305,364,311,355,318,351,323,349,330,343,338,339,344,337,350,337,358,335,368,335,376,328,375,314,376,306,374,297,373,286,369,281,365,279,358,270,352,267,347,260,350,247,351,236,351,228,353,218,357,211,368,209,375,205,380,198,385,191,388,184,391,181,383,174,380,163,380,156,379,148,377,139,377,130,380,121,385,112,384,106,387,103,371,100,359,109,352,112,343,117,339,105,342,108,333,108,323,113,316,119,313,126,305,128,298,137,291,144,288,147,277,157,271,164,266,175,266,182,265,183,259,192,251,197,246,204,240,211,232,220,225,222,217,227,212,234,210,240,207,242,200,240,193,236,181,236,175,240,169,243,163,242,154" alt="Parma" href="javascript:void(0)"/>
        <area shape="poly" coords="77,158,69,150,76,148,91,153,94,145,105,144,105,152,105,158,115,156,122,158,132,160,140,155,140,146,146,142,157,147,166,154,170,147,178,145,184,144,181,137,185,131,195,137,201,136,209,128,225,131,235,146,244,148,246,156,238,171,233,175,234,182,239,191,241,209,224,214,221,220,209,228,208,238,199,238,196,245,191,254,185,259,180,266,163,267,157,268,152,274,145,281,145,288,139,293,130,296,122,302,115,308,111,319,105,343,93,343,80,341,78,335,72,341,64,341,41,339,34,342,25,342,22,337,8,340,6,325,3,318,5,294,15,290,11,283,23,288,22,266,29,261,14,260,8,254,8,241,5,227,10,216,16,214,22,203,23,193,24,181,31,172,34,166,41,166,55,160,66,159" alt="Piacenza" href="javascript:void(0)"/>
      </map>
    </center>)

      struttura.push(temp);

      struttura.push((<h2 class="big">Trailer</h2>))
      temp = (<center><iframe width="560" height="315" src="https://www.youtube.com/embed/xzlx8pHlpko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>)
      struttura.push(temp);


      struttura.push((<h2 class="big">{txt[1]}</h2>))

      temp = (<div class="testo">
        {txt[0]}
      </div>)
      struttura.push(temp);

      struttura.push((<h2 class="big">{txt[3]}</h2>))

      temp = (<div class="wrapperP">
       <div class="evidenza">
         <div>
           <img class="angoloimg" src={PROXY+"/emiliaRomagna/img/2"} alt="Certosa"/>
         </div>
         <div class="imgname">Certosa | Bologna</div>
         <div class="imgdescription">
         {txt[4]}
         </div>
       </div>

       <div class="evidenza">
         <div>
           <img class="angoloimg" src={PROXY+"/emiliaRomagna/img/3"} alt="Teatro Farnese"/>
         </div>
         <div class="imgname">Teatro Farnese | Parma</div>
         <div class="imgdescription">
         {txt[5]}
         </div>
       </div>

       <div class="evidenza">
         <div>
           <img class="angoloimg" src={PROXY+"/emiliaRomagna/img/4"} alt="Cattedrale"/>
         </div>
         <div class="imgname">Cattedrale S. G. | Ferrara</div>
         <div class="imgdescription">
         {txt[6]}
         </div>
       </div>

       <div class="evidenza">
         <div>
           <img class="angoloimg" src={PROXY+"/emiliaRomagna/img/5"} alt="Duomo"/>
         </div>
         <div class="imgname">Duomo Modena | Modena</div>
         <div class="imgdescription">
         {txt[7]}
         </div>
       </div>
     </div>)

     struttura.push(temp);
      break;

      case "bologna":

      struttura.push((<h2 class="subtitle" id="h2">BOLOGNA</h2>))
      temp = (<div class="livello animate__animated animate__bounceInDown">
      <img src={PROXY+"/bologna/img/1"} class="bg" alt="foto bologna"/>
      <Link to="/meridiana"><img class="icona" id="meridiana" src={PROXY+"/bologna/img/2"} alt="meridiana logo"/></Link>
      <Link to="/certosa"><img class="icona" id="certosa" src={PROXY+"/bologna/img/3"} alt="certosa logo"/></Link>
      <Link to="/torri"><img class="icona" id="dueTorri" src={PROXY+"/bologna/img/4"} alt="torri logo"/></Link>
      <Link to="/pinacoteca"><img class="icona" id="pinacoteca" src={PROXY+"/bologna/img/5"} alt="pinacoteca logo"/></Link>
      <Link to="/pellegrino"><img class="icona" id="pellegrino" src={PROXY+"/bologna/img/6"} alt="pellegrino logo"/></Link>
      </div>)
      struttura.push(temp);
      break;

      case "byron":
      struttura.push((<h2 class="subtitle">{txt[8]}</h2>))
      temp = (<div class="paragrafo">
      {txt[0]}
      {img[0]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {img[1]}
      {img[2]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {img[4]}
      {txt[1]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[2]}
      {img[3]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[3]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[4]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[5]}
      </div>)
      struttura.push(temp);
      temp = (<div class="note">
      {txt[6]}
      </div>)
      struttura.push(temp);
      temp = (<div class="bibliografia">
      {txt[7]}
      </div>)
      struttura.push(temp);
      break;

      case "carracci":
      struttura.push((<h2 class="subtitle">{txt[7]}</h2>))

      temp = (<div class="paragrafo">
      {txt[0]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[1]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {img[0]}
      {txt[2]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[3]}
      {img[3]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[4]}
      {img[1]}
      </div>)
      struttura.push(temp);


      temp = (<div class="note">
      {txt[5]}
      </div>)
      struttura.push(temp);

      temp = (<div class="bibliografia">
      {txt[6]}
      </div>)
      struttura.push(temp);
      break;

      case "certosa":
      struttura.push((<h2 class="subtitle">{txt[24]}</h2>))
      temp = (<center><iframe width="560" height="315" src="https://www.youtube.com/embed/ytLhQv3Y7WU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>)
      struttura.push(temp);
      temp = (<div class="paragrafo">
      {txt[0]}
      {img[0]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {img[1]}
      {txt[1]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[2]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[3]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[4]}
      {tre[0]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {tre[1]}
      {txt[5]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[6]}
      {img[2]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[7]}
      {img[3]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {img[4]}
      {img[5]}
      {txt[8]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {img[6]}
      {txt[9]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[10]}
      {img[7]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {img[8]}
      {txt[11]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[12]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {tre[2]}
      {tre[3]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[13]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {tre[4]}
      {tre[5]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {img[9]}
      {txt[14]}
      </div>)
      struttura.push(temp);
      temp = (<div class="paragrafo">
      {txt[15]}
      {img[10]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {img[11]}
      {txt[16]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[17]}
      {img[12]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {img[13]}
      {txt[18]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[19]}
      {img[14]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {img[15]}
      {txt[20]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[21]}
      {img[16]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {img[17]}
      {img[18]}
      </div>)
      struttura.push(temp);


      temp = (<div class="note">
      {txt[22]}
      </div>)
      struttura.push(temp);

      temp = (<div class="bibliografia">
      {txt[23]}
      </div>)
      struttura.push(temp);
      break;


      case "dickens":
      struttura.push((<h2 class="subtitle">{txt[8]}</h2>))
      temp = (<div class="paragrafo">
      {txt[0]}
      {img[0]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[1]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[2]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[3]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[4]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[5]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[6]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[7]}
      </div>)

      struttura.push(temp);
      break;

      case "domenichino":
      struttura.push((<h2 class="subtitle">{txt[10]}</h2>))
      temp = (<div class="paragrafo">
      {txt[0]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[1]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[2]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[3]}
      {img[0]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[4]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[5]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[6]}
      </div>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {img[1]}
      {txt[7]}
      </div>)
      struttura.push(temp);

      temp = (<div class="note">
      {txt[8]}
      </div>)
      struttura.push(temp);

      temp = (<div class="bibliografia">
      {txt[9]}
      </div>)
      struttura.push(temp);
      break;

      case "torri":
      struttura.push((<h2 class="subtitle">{txt[8]} </h2>));

      temp = (<div class="paragrafo">
      {img[0]}
      </div>);

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[0]}
      </div>);

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[1]}
      </div>);

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {img[1]}
      {img[2]}
      </div>);

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {img[3]}
      {img[4]}
      </div>);

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[2]}
      </div>);

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {img[5]}
      {img[6]}
      </div>);

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {img[7]}
      {img[8]}
      </div>);

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[3]}
      </div>);

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[4]}
      </div>);

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[5]}
      </div>);

      struttura.push(temp);

      temp = (<div class="note">
      {txt[6]}
      </div>);

      struttura.push(temp);

      temp = (<div class="bibliografia">
      {txt[7]}
      </div>);

      struttura.push(temp);
      break;

      case "tour":

      struttura.push((<h2 class="subtitle">{txt[25]}</h2>))

      temp = (<center><iframe width="560" height="315" src="https://www.youtube.com/embed/aEbHjUwg8mE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>)
      struttura.push(temp);

      temp = (<div class="paragrafo">
      {img[0]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[0]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[1]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[2]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[3]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[4]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[5]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[6]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[7]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[8]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[9]}
      {img[1]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[10]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[11]}
      {img[2]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {img[3]}
      {txt[12]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[13]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[14]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[15]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[16]}
      {img[4]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[17]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {img[5]}
      {txt[18]}
      </div>)

      struttura.push(temp);

      struttura.push(txt[19]);

      temp = (<div class="paragrafo">
      {img[6]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[20]}
      {img[7]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[21]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {txt[22]}
      </div>)

      struttura.push(temp);

      temp = (<div class="paragrafo">
      {img[8]}
      </div>)

      struttura.push(temp);



      temp = (<div class="note">
      {txt[23]}
      </div>)

      struttura.push(temp);

      temp = (<div class="bibliografia">
      {txt[24]}
      </div>)

      struttura.push(temp);
      break;

      case "meridiana":

      struttura.push((<h2 class="subtitle">{txt[16]}</h2>))

      temp = (<center>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-nsHpi2JGE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  style={{marginRight: 10 + 'em'}} allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/nK1PAQHaFlc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={{marginRight: 10 + 'em'}} allowfullscreen></iframe>
        </center>)
        struttura.push(temp);


        temp = (<div class="paragrafo">
        {txt[0]}
        {img[0]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {img[1]}
        {txt[1]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {img[2]}
        {txt[2]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {img[3]}
        {txt[3]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[4]}
        {img[4]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {img[5]}
        {txt[5]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[6]}
        {img[6]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {img[7]}
        {txt[7]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[8]}
        {img[8]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {img[9]}
        {txt[9]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {img[10]}
        {txt[10]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[11]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[12]}
        {img[11]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[13]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {img[12]}
        {img[13]}
        {img[14]}
        </div>)
        struttura.push(temp);

        temp = (<div class="note">
        {txt[14]}
        </div>)
        struttura.push(temp);

        temp = (<div class="bibliografia">
        {txt[15]}
        </div>)
        struttura.push(temp);
        break;

        case "moda":
        struttura.push((<h2 class="subtitle">{txt[10]}</h2>))

        temp = (<div class="paragrafo">
        {txt[0]}
        {img[0]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[1]}
        {img[1]}
        {img[2]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[2]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {img[3]}
        {img[4]}
        {img[5]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[3]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[4]}
        {img[6]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[5]}
        {img[7]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[6]}
        {img[8]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[7]}
        {img[9]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[8]}
        {img[10]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[9]}
        {img[11]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {img[12]}
        {img[13]}
        </div>)

        struttura.push(temp);
        break;

        case "pellegrino":
        struttura.push((<h2 class="subtitle">{txt[10]}</h2>))

        temp = (<center><iframe width="560" height="315" src="https://www.youtube.com/embed/4TBDizHJ9Cs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[0]}
        {img[0]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[1]}
        {img[1]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[2]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[3]}
        {img[2]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[4]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {img[3]}
        {img[4]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[5]}
        </div>)
        struttura.push(temp);


        temp = (<div class="paragrafo">
        {txt[6]}
        </div>)
        struttura.push(temp);


        temp = (<div class="paragrafo">
        {img[5]}
        {img[6]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {img[7]}
        {txt[7]}
        </div>)
        struttura.push(temp);



        temp = (<div class="note">
        {txt[8]}
        </div>)
        struttura.push(temp);

        temp = (<div class="bibliografia">
        {txt[9]}
        </div>)
        struttura.push(temp);
        break;

        case "campagna":
        struttura.push((<h2 class="subtitle">{txt[9]}</h2>))

        temp = (<div class="paragrafo">
        {txt[0]}
        {img[0]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {img[1]}
        {txt[1]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[2]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[3]}
        {img[2]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[4]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[5]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {img[3]}
        {img[4]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {img[5]}
        {img[6]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[6]}
        </div>)

        struttura.push(temp);

        temp = (<div class="note">
        {txt[7]}
        </div>)

        struttura.push(temp);
        
        temp = (<div class="bibliografia">
        {txt[8]}
        </div>)
        struttura.push(temp);
        break;

        case "pinacoteca":

        struttura.push((<h2 class="subtitle">{txt[17]}</h2>))
        temp = (<div class="paragrafo">
        {txt[0]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[1]}
        {img[0]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[2]}
        {img[1]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[3]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[4]}
        {img[2]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[5]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[6]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[7]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[8]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[9]}
        </div>)
        struttura.push(temp);


        temp = (<div class="paragrafo">
        {txt[10]}
        </div>)
        struttura.push(temp);


        temp = (<div class="paragrafo">
        {txt[11]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[12]}
        </div>)
        struttura.push(temp);


        temp = (<div class="paragrafo">
        {txt[13]}
        </div>)
        struttura.push(temp);


        temp = (<div class="paragrafo">
        {txt[14]}
        </div>)
        struttura.push(temp);


        temp = (<div class="note">
        {txt[15]}
        </div>)
        struttura.push(temp);

        temp = (<div class="bibliografia">
        {txt[16]}
        </div>)
        struttura.push(temp);
        break;


        case "pontificio":
        struttura.push((<h2 class="subtitle">{txt[8]}</h2>))

        temp = (<div class="paragrafo">
        {txt[0]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[1]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[2]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[3]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[4]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[5]}
        </div>)

        struttura.push(temp);

        temp = (<div class="note">
        {txt[6]}
        </div>)

        struttura.push(temp);

        temp = (<div class="bibliografia">
        {txt[7]}
        </div>)

        struttura.push(temp);
        break;

        case "reni":
        struttura.push((<h2 class="subtitle">{txt[9]}</h2>))

        temp = (<div class="paragrafo">
        {txt[0]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[1]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {img[0]}
        {txt[2]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[3]}

        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[4]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[5]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[6]}
        {img[1]}
        </div>)
        struttura.push(temp);


        temp = (<div class="note">
        {txt[7]}
        </div>)
        struttura.push(temp);

        temp = (<div class="bibliografia">
        {txt[8]}
        </div>)
        struttura.push(temp);
        break;

        case "ringraziamenti":

        struttura.push((<h2 class="subtitle">{txt[16]}</h2>))

        temp = (<div class="paragrafo">
        {txt[0]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[1]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[2]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[3]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[4]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[5]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[6]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[7]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[8]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[9]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[10]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[11]}
        </div>)

        struttura.push(temp);

        struttura.push(<h2 class="sezione">Referenti Progetto:</h2>)

        temp = (<div class="paragrafo">
        {txt[12]}
        </div>)

        struttura.push(temp);

        struttura.push(<h2 class="sezione">Altri docenti coinvolti:</h2>);

        temp = (<div class="paragrafo">
        {txt[13]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[14]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[15]}
        </div>)

        struttura.push(temp);
        break;

        case "rossini":
        struttura.push((<h2 class="subtitle">{txt[1]}</h2>))

        temp = (<div class="paragrafo">
        {img[0]}
        {txt[0]}
        </div>)

        struttura.push(temp);
        break;

        case "sibaud":
        struttura.push((<h2 class="subtitle">{txt[12]}</h2>))

        temp = (<div class="paragrafo">
        {img[0]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[0]}
        {img[1]}
        </div>)

        struttura.push(temp);


        temp = (<div class="paragrafo">
        {txt[2]}
        </div>)

        struttura.push(temp);


        temp = (<div class="paragrafo">
        {img[2]}
        {txt[3]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[4]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[5]}
        </div>)

        struttura.push(temp);


        temp = (<div class="paragrafo">
        {txt[6]}
        </div>)

        struttura.push(temp);


        temp = (<div class="paragrafo">
        {txt[7]}
        {tre[0]}
        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {img[3]}
        {txt[8]}

        </div>)

        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[9]}
        {img[4]}
        </div>)

        struttura.push(temp);

        temp = (<div class="note">
        {txt[10]}
        </div>)

        struttura.push(temp);


        temp = (<div class="bibliografia">
        {txt[11]}
        </div>)

        struttura.push(temp);

        break;

        case "storia":
        struttura.push((<h2 class="subtitle">{txt[11]}</h2>))


        temp = (<div class="paragrafo">
        {img[0]}
        {txt[0]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[1]}
        {img[1]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {img[2]}
        {txt[2]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[3]}
        {img[3]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {img[4]}
        {txt[4]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[5]}
        {img[5]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {img[6]}
        {txt[6]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[7]}
        {img[7]}
        </div>)
        struttura.push(temp);

        temp = (<div class="paragrafo">
        {txt[8]}
        </div>)
        struttura.push(temp);

        temp = (<div class="note">
        {txt[9]}
        </div>)
        struttura.push(temp);

        temp = (<div class="bibliografia">
        {txt[10]}
        </div>)
        struttura.push(temp);
        break;

        default:
        for(let i=0;i<=txt.length;i++) struttura.push(<div className="paragrafo">{txt[i]}</div>);
        for(let i=0;i<=img.length;i++) struttura.push(<div className="paragrafo">{img[i]}</div>);
        for(let i=0;i<=tre.length;i++) struttura.push(<div className="paragrafo">{tre[i]}</div>);
        break;
      }
      return struttura;
    }


    render()
    {
      if(this.state.isLoad)
      {
        let txts=[],divs=[],divsTre=[];
        for(let i=1;i<=this.state.qtaTxt;i++) txts.push(<Testo key={"txt"+i} id={i} lingua={this.state.lingua} pagina={this.state.pagina} tipo={"txt"} ref={ref=>this.child.push(ref)} />);
        for(let i=1;i<=this.state.qtaImg;i++) divs.push(<div className="img"><img src={PROXY+"/"+this.state.pagina+"/img/"+i} alt="not found" key={"img"+i} id={"img"+i} /><Testo key={"did"+i} id={i} lingua={this.state.lingua} pagina={this.state.pagina} tipo={"didascalia"} ref={ref=>this.child.push(ref)} /></div>);
        for(let i=1;i<=this.state.qtaTre;i++) divsTre.push(<div className="img"><Pannellum width="90%" height="70vh" image={PROXY+"/"+this.state.pagina+"/tre/"+i} pitch={10} yaw={180} hfov={110} autoLoad /><Testo key={"didTre"+i} id={i} lingua={this.state.lingua} pagina={this.state.pagina} tipo={"didascaliaTre"} ref={ref=>this.child.push(ref)} /></div>);
        return this.layout(txts,divs,divsTre);
      }
      else return <p>Loading...</p>;
    }
  }

  export default Multi;
