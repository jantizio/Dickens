import YoutubeEmbed from "../YoutubeEmbed";
function build(txt, img, tre) {
  let struttura = [];
  let temp;
  struttura.push(<h2 className="subtitle">{txt[25]}</h2>);

  temp = (
    <div className="video-container">
      <YoutubeEmbed embedId="aEbHjUwg8mE" />
    </div>
  );
  struttura.push(temp);

  temp = <div className="paragrafo">{img[0]}</div>;

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[0]}</div>;

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[1]}</div>;

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[2]}</div>;

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[3]}</div>;

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[4]}</div>;

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[5]}</div>;

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[6]}</div>;

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[7]}</div>;

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[8]}</div>;

  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[9]}
      {img[1]}
    </div>
  );

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[10]}</div>;

  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[11]}
      {img[2]}
    </div>
  );

  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[3]}
      {txt[12]}
    </div>
  );

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[13]}</div>;

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[14]}</div>;

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[15]}</div>;

  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[16]}
      {img[4]}
    </div>
  );

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[17]}</div>;

  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[5]}
      {txt[18]}
    </div>
  );

  struttura.push(temp);

  struttura.push(txt[19]);

  temp = <div className="paragrafo">{img[6]}</div>;

  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[20]}
      {img[7]}
    </div>
  );

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[21]}</div>;

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[22]}</div>;

  struttura.push(temp);

  temp = <div className="paragrafo">{img[8]}</div>;

  struttura.push(temp);

  temp = <div className="note">{txt[23]}</div>;

  struttura.push(temp);

  temp = <div className="bibliografia">{txt[24]}</div>;

  struttura.push(temp);
  return struttura;
}

export default build;
