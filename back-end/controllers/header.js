import fs from "fs";

const
	pagina="header",
	imgDir="./img/"+pagina+"/",
	txtDir="./texts/"+pagina+"/",
    erroreFile="Si è verificato un errore interno al server: il file richiesto potrebbe non esistere",
    erroreParam="Non sono stati inseriti correttamente i parametri",
	imgExtension=".png",
	txtExtension=".js";

export const Responder=(req,res)=>
{
	const {fileName}=req.params;
	if(fileName=="img") Img(req,res);
	else if(fileName=="js") Txt(req,res);
	else res.writeHead(400).end(erroreParam);
};
const Txt=(req,res)=>
{
	const path=txtDir+"1"+txtExtension;
	fs.readFile
	(
		path,
		(err,content)=>
		{
			if(err) res.writeHead(404).end(erroreFile);
			else res.writeHead(200,{"Content-type":"application/javascript"}).end(content);
		}
	)
}
const Img=(req,res)=>
{
	const {img}=req.query;
	if(img==="bandiera")
	{
		const {bandiera}=req.query;
		console.log("Immagine "+pagina+" della bandiera: "+bandiera);
		const path=imgDir+bandiera+imgExtension;
		fs.readFile
		(
			path,
			(err,content)=>
			{
				if(err) res.writeHead(404).end(erroreFile);
				else res.writeHead(200,{"Content-type":"image/jpg"}).end(content);
			}
		);
	}
	else if(img==="logo")
	{
		console.log("Immagine "+pagina+" del "+img);
		const path=imgDir+img+imgExtension;
		fs.readFile
		(
			path,
			(err,content)=>
			{
				if(err) res.writeHead(404).end(erroreFile);
				else res.writeHead(200,{"Content-type":"image/jpg"}).end(content);
			}
		);
	}
}