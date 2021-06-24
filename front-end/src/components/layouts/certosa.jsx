import YoutubeEmbed from "../YoutubeEmbed";
function build(txt, img, tre) {
  let struttura = [];
  let temp;
  struttura.push(<h2 className="subtitle">{txt[24]}</h2>);

  temp = (
    <div className="video-container">
      <YoutubeEmbed embedId="ytLhQv3Y7WU" />
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

  temp = <div className="paragrafo">{txt[2]}</div>;
  struttura.push(temp);

  temp = <div className="paragrafo">{txt[3]}</div>;
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[4]}
      {tre[0]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {tre[1]}
      {txt[5]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[6]}
      {img[2]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[7]}
      {img[3]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[4]}
      {img[5]}
      {txt[8]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[6]}
      {txt[9]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[10]}
      {img[7]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[8]}
      {txt[11]}
    </div>
  );
  struttura.push(temp);

  temp = <div className="paragrafo">{txt[12]}</div>;
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {tre[2]}
      {tre[3]}
    </div>
  );
  struttura.push(temp);

  temp = <div className="paragrafo">{txt[13]}</div>;
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {tre[4]}
      {tre[5]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[9]}
      {txt[14]}
    </div>
  );
  struttura.push(temp);
  temp = (
    <div className="paragrafo">
      {txt[15]}
      {img[10]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[11]}
      {txt[16]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[17]}
      {img[12]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[13]}
      {txt[18]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[19]}
      {img[14]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[15]}
      {txt[20]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[21]}
      {img[16]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[17]}
      {img[18]}
    </div>
  );
  struttura.push(temp);

  temp = <div className="note">{txt[22]}</div>;
  struttura.push(temp);

  temp = <div className="bibliografia">{txt[23]}</div>;
  struttura.push(temp);

  return struttura;
}

export default build;
