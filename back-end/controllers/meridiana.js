import fs from "fs";

const
    pagina="meridiana",
    TxtDir="./texts/"+pagina+"/",
    ImgDir="./img/"+pagina+"/",
    TreDir="./360/"+pagina+"/",
    DidascalieDir="./didascalie/"+pagina+"/",
    DidascalieTreDir="./didascalie360/"+pagina+"/",
    erroreFile="Si è verificato un errore interno al server: il file richiesto potrebbe non esistere",
    erroreParam="Non sono stati inseriti correttamente i parametri",
    imgExtension=".png",
    treExtension=".jpg",
    txtExtension=".txt";

export const Counter=(req,res)=>
{
    const {fileType}=req.params;
    if(fileType=="txt") CountTxt(req,res);
    else if(fileType=="img") CountImg(req,res);
    else if(fileType=="tre") CountTre(req,res);
    else if(fileType=="didascalia") CountDidascalia(req,res);
    else if(fileType=="didascaliaTre") CountDidascaliaTre(req,res);
    else res.writeHead(400).end(erroreParam);
};
export const Responder=(req,res)=>
{
    const {fileType,id}=req.params;
    if(fileType=="txt") Txt(req,res);
    else if(fileType=="img") Img(req,res);
    else if(fileType=="tre") Tre(req,res);
    else if(fileType=="didascalia") Didascalia(req,res);
    else if(fileType=="didascaliaTre") DidascaliaTre(req,res);
    else res.writeHead(400).end(erroreParam);
};

const CountTxt=(req,res)=>
{
    fs.readdir
    (
        TxtDir+"ita",
        (err,files)=>
        {
            if(err) res.status(400).send(err);
            else
            {
                if(files.length) res.status(200).send({count:files.length});
                else res.status(200).send({count:0});
            }
        }
    );
};
const CountImg=(req,res)=>
{
    fs.readdir
    (
        ImgDir,
        (err,files)=>
        {
            if(err) res.status(400).send(err);
            else
            {
                if(files.length) res.status(200).send({count:files.length});
                else res.status(200).send({count:0});
            }
        }
    );
};
const CountTre=(req,res)=>
{
    fs.readdir
    (
        TreDir,
        (err,files)=>
        {
            if(err) res.status(400).send(err);
            else
            {
                if(files.length) res.status(200).send({count:files.length});
                else res.status(200).send({count:0});
            }
        }
    );
};
const CountDidascalia=(req,res)=>
{
    fs.readdir
    (
        DidascalieDir+"ita",
        (err,files)=>
        {
            if(err) res.status(400).send(err);
            else
            {
                if(files.length) res.status(200).send({count:files.length});
                else res.status(200).send({count:0});
            }
        }
    );
};
const CountDidascaliaTre=(req,res)=>
{
    fs.readdir
    (
        DidascalieTreDir+"ita",
        (err,files)=>
        {
            if(err) res.status(400).send(err);
            else
            {
                if(files.length) res.status(200).send({count:files.length});
                else res.status(200).send({count:0});
            }
        }
    );
};
const Txt=(req,res)=>
{
    const {lingua}=req.query,{id}=req.params;
    if(lingua&&id)
    {
        console.log("Testo "+pagina+" con id="+id+" e con lingua="+lingua);
        const path=TxtDir+lingua+"/"+id+txtExtension;
        fs.readFile
        (
            path,
            "utf8",
            (err,data)=>
            {
                if(err) res.writeHead(404).end(erroreFile);
                else res.writeHead(200,{"Content-type":"text/plain"}).end(data);
            }
        );
    }
    else res.writeHead(400).end(erroreParam);
};
const Didascalia=(req,res)=>
{
    const {lingua}=req.query,{id}=req.params;
    if(lingua&&id)
    {
        console.log("Didascalia "+pagina+" con id="+id+" e con lingua="+lingua);
        const path=DidascalieDir+lingua+"/"+id+txtExtension;
        fs.readFile
        (
            path,
            "utf8",
            (err,data)=>
            {
                if(err) res.writeHead(404).end(erroreFile);
                else res.writeHead(200,{"Content-type":"text/plain"}).end(data);
            }
        );
    }
    else res.writeHead(400).end(erroreParam);
};
const DidascaliaTre=(req,res)=>
{
    const {lingua}=req.query,{id}=req.params;
    if(lingua&&id)
    {
        console.log("Didascalia immagine 360 "+pagina+" con id="+id+" e con lingua="+lingua);
        const path=DidascalieTreDir+lingua+"/"+id+txtExtension;
        fs.readFile
        (
            path,
            "utf8",
            (err,data)=>
            {
                if(err) res.writeHead(404).end(erroreFile);
                else res.writeHead(200,{"Content-type":"text/plain"}).end(data);
            }
        );
    }
    else res.writeHead(400).end(erroreParam);
};
const Img=(req,res)=>
{
    const {id}=req.params;
    if(id)
    {
        console.log("Immagine "+pagina+" con id: "+id);
        const path=ImgDir+id+imgExtension;
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
    else res.writeHead(400).end(erroreParam);
};
const Tre=(req,res)=>
{
    const {id}=req.params;
    if(id)
    {
        console.log("Immagine 360 "+pagina+" con id: "+id);
        const path=TreDir+id+treExtension;
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
    else res.writeHead(400).end(erroreParam);
};