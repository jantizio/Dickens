function build(txt, img, tre) {
  let struttura = [];
  let temp;
  struttura.push(<h2 className="subtitle">{txt[8]} </h2>);

  temp = <div className="paragrafo">{img[0]}</div>;

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[0]}</div>;

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[1]}</div>;

  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[1]}
      {img[2]}
    </div>
  );

  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[3]}
      {img[4]}
    </div>
  );

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[2]}</div>;

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
      {img[8]}
    </div>
  );

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[3]}</div>;

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[4]}</div>;

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[5]}</div>;

  struttura.push(temp);

  temp = <div className="note">{txt[6]}</div>;

  struttura.push(temp);

  temp = <div className="bibliografia">{txt[7]}</div>;

  struttura.push(temp);
  return struttura;
}

export default build;
