function build(txt, img, tre) {
  let struttura = [];
  let temp;
  struttura.push(<h2 className="subtitle">{txt[1]}</h2>);

  temp = (
    <div className="paragrafo">
      {img[0]}
      {txt[0]}
    </div>
  );

  struttura.push(temp);
  return struttura;
}

export default build;
