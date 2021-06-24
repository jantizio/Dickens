function build(txt, img, tre) {
  let struttura = [];
  let temp;
  struttura.push(<h2 className="subtitle">{txt[10]}</h2>);

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
      {img[2]}
    </div>
  );

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[2]}</div>;

  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[3]}
      {img[4]}
      {img[5]}
    </div>
  );

  struttura.push(temp);

  temp = <div className="paragrafo">{txt[3]}</div>;

  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[4]}
      {img[6]}
    </div>
  );

  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[5]}
      {img[7]}
    </div>
  );

  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[6]}
      {img[8]}
    </div>
  );

  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[7]}
      {img[9]}
    </div>
  );

  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[8]}
      {img[10]}
    </div>
  );

  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {txt[9]}
      {img[11]}
    </div>
  );

  struttura.push(temp);

  temp = (
    <div className="paragrafo">
      {img[12]}
      {img[13]}
    </div>
  );

  struttura.push(temp);
  return struttura;
}

export default build;
