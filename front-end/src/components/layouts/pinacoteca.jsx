function build(txt, img, tre) {
  let struttura = [];
  let temp;
  struttura.push(<h2 className="subtitle">{txt[17]}</h2>);
  temp = <div className="paragrafo">{txt[0]}</div>;

  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[1]}
      {img[0]}
    </div>
  );
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[2]}
      {img[1]}
    </div>
  );
  struttura.push(temp);

  temp = <div className="paragrafo">{txt[3]}</div>;
  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[4]}
      {img[2]}
    </div>
  );
  struttura.push(temp);

  temp = <div className="paragrafo">{txt[5]}</div>;
  struttura.push(temp);

  temp = <div className="paragrafo">{txt[6]}</div>;
  struttura.push(temp);

  temp = <div className="paragrafo">{txt[7]}</div>;
  struttura.push(temp);

  temp = <div className="paragrafo">{txt[8]}</div>;
  struttura.push(temp);

  temp = <div className="paragrafo">{txt[9]}</div>;
  struttura.push(temp);

  temp = <div className="paragrafo">{txt[10]}</div>;
  struttura.push(temp);

  temp = <div className="paragrafo">{txt[11]}</div>;
  struttura.push(temp);

  temp = <div className="paragrafo">{txt[12]}</div>;
  struttura.push(temp);

  temp = <div className="paragrafo">{txt[13]}</div>;
  struttura.push(temp);

  temp = <div className="paragrafo">{txt[14]}</div>;
  struttura.push(temp);

  temp = <div className="note">{txt[15]}</div>;
  struttura.push(temp);

  temp = <div className="bibliografia">{txt[16]}</div>;
  struttura.push(temp);

  return struttura;
}

export default build;
