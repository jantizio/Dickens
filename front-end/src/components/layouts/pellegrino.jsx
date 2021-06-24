function build(txt, img, tre) {
  let struttura = [];
  let temp;
  struttura.push(<h2 className="subtitle">{txt[10]}</h2>);

  temp = (
    <center>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/4TBDizHJ9Cs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </center>
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
      {txt[1]}
      {img[1]}
    </div>
  );
  struttura.push(temp);

  temp = <div className="paragrafo">{txt[2]}</div>;
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[3]}
      {img[2]}
    </div>
  );
  struttura.push(temp);

  temp = <div className="paragrafo">{txt[4]}</div>;
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[3]}
      {img[4]}
    </div>
  );
  struttura.push(temp);

  temp = <div className="paragrafo">{txt[5]}</div>;
  struttura.push(temp);

  temp = <div className="paragrafo">{txt[6]}</div>;
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[5]}
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

  temp = <div className="note">{txt[8]}</div>;
  struttura.push(temp);

  temp = <div className="bibliografia">{txt[9]}</div>;
  struttura.push(temp);
  return struttura;
}

export default build;
