function build(txt, img, tre) {
  let struttura = [];
  let temp;
  struttura.push(<h2 className="subtitle">{txt[11]}</h2>);

  temp = (
    <div className="paragrafo">
      {img[0]}
      {txt[0]}
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

  temp = (
    <div className="paragrafo">
      {img[2]}
      {txt[2]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[3]}
      {img[3]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[4]}
      {txt[4]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[5]}
      {img[5]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[6]}
      {txt[6]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[7]}
      {img[7]}
    </div>
  );
  struttura.push(temp);

  temp = <div className="paragrafo">{txt[8]}</div>;
  struttura.push(temp);

  temp = <div className="note">{txt[9]}</div>;
  struttura.push(temp);

  temp = <div className="bibliografia">{txt[10]}</div>;
  struttura.push(temp);
  return struttura;
}

export default build;
