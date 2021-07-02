import fs from "fs";

const pagina = "footer",
  imgDir = "./img/" + pagina + "/",
  erroreFile =
    "Si è verificato un errore interno al server: il file richiesto potrebbe non esistere",
  erroreParam = "Non sono stati inseriti correttamente i parametri",
  imgExtensions = [".png", ".jpg"];

export const Responder = (req, res) => {
  const { fileName } = req.params;
  if (fileName == "img") Img(req, res);
  else res.writeHead(400).end(erroreParam);
};

const Img = (req, res) => {
  const { img } = req.query;
  console.log("Immagine " + pagina + ": " + img);
  //const path = imgDir + img + imgExtension;

  let path = imgDir + img;
  let contentType = "image/";
  imgExtensions.every((imgExtension) => {
    let tempPath = imgDir + img + imgExtension;
    if (fs.existsSync(tempPath)) {
      path += imgExtension;
      contentType += imgExtension.substring(1);
      return false;
    }
    return true;
  });

  fs.readFile(path, (err, content) => {
    if (err) res.writeHead(404).end(erroreFile);
    else res.writeHead(200, { "Content-type": contentType }).end(content);
  });
};
