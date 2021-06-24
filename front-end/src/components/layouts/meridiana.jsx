import YoutubeEmbed from "../YoutubeEmbed";
function build(txt, img, tre) {
  let struttura = [];
  let temp;
  struttura.push(<h2 className="subtitle">{txt[16]}</h2>);

  temp = (
    <div className="video-container">
      <YoutubeEmbed embedId="-nsHpi2JGE4" />
      <YoutubeEmbed embedId="nK1PAQHaFlc" />
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[0]}
      {img[0]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[1]}
      {txt[1]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[2]}
      {txt[2]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[3]}
      {txt[3]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[4]}
      {img[4]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[5]}
      {txt[5]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[6]}
      {img[6]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[7]}
      {txt[7]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[8]}
      {img[8]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[9]}
      {txt[9]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[10]}
      {txt[10]}
    </div>
  );
  struttura.push(temp);

  temp = <div className="paragrafo">{txt[11]}</div>;
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[12]}
      {img[11]}
    </div>
  );
  struttura.push(temp);

  temp = <div className="paragrafo">{txt[13]}</div>;
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[12]}
      {img[13]}
      {img[14]}
    </div>
  );
  struttura.push(temp);

  temp = <div className="note">{txt[14]}</div>;
  struttura.push(temp);

  temp = <div className="bibliografia">{txt[15]}</div>;
  struttura.push(temp);
  return struttura;
}

export default build;
