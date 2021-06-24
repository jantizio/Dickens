function build(txt, img, tre) {
  let struttura = [];
  let temp;
  struttura.push(<h2 className="subtitle">{txt[0]}</h2>);

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

  temp = <div className="paragrafo">{txt[9]}</div>;

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[10]}</div>;

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[11]}</div>;

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[12]}</div>;

  struttura.push(temp);

  struttura.push(<h2 className="sezione">{txt[13]}</h2>);

  temp = <div className="paragrafo">{txt[14]}</div>;

  struttura.push(temp);

  struttura.push(<h2 className="sezione">{txt[15]}</h2>);

  temp = <div className="paragrafo">{txt[16]}</div>;

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[17]}</div>;

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[18]}</div>;

  struttura.push(temp);
  return struttura;
}

export default build;
