import fs from "fs";

const
	pagina="footer",
	imgDir="./img/"+pagina+"/",
	erroreFile="Si è verificato un errore interno al server: il file richiesto potrebbe non esistere",
	erroreParam="Non sono stati inseriti correttamente i parametri",
	imgExtension=".png";

export const Responder=(req,res)=>
{
	const {fileName}=req.params;
	if(fileName=="img") Img(req,res);
	else res.writeHead(400).end(erroreParam);
}

const Img=(req,res)=>
{
	const {img}=req.query;
	console.log("Immagine "+pagina+": "+img);
	const path=imgDir+img+imgExtension;
	fs.readFile
	(
		path,
		(err,content)=>
		{
			console.log(err);
			if(err) res.writeHead(404).end(erroreFile);
			else res.writeHead(200,{"Content-type":"image/jpg"}).end(content);
		}
	);
}