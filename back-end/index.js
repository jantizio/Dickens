import express from "express";
import cors from "cors";

import header from "./routes/header.js";
import footer from "./routes/footer.js";

import bologna from "./routes/bologna.js";
import byron from "./routes/byron.js";
import campagna from "./routes/campagna.js";
import carracci from "./routes/carracci.js";
import certosa from "./routes/certosa.js";
import dickens from "./routes/dickens.js";
import domenichino from "./routes/domenichino.js";
import emiliaRomagna from "./routes/emiliaRomagna.js";
import meridiana from "./routes/meridiana.js";
import moda from "./routes/moda.js";
import pellegrino from "./routes/pellegrino.js";
import pinacoteca from "./routes/pinacoteca.js";
import pontificio from "./routes/pontificio.js";
import reni from "./routes/reni.js";
import ringraziamenti from "./routes/ringraziamenti.js";
import rossini from "./routes/rossini.js";
import sibaud from "./routes/sibaud.js";
import storia from "./routes/storia.js";
import torri from "./routes/torri.js";
import tour from "./routes/tour.js";

const PORT=5000;
const app=express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>res.send("prova"));
app.use("/header",header);
app.use("/footer",footer);

app.use("/bologna",bologna);
app.use("/byron",byron);
app.use("/campagna",campagna);
app.use("/carracci",carracci);
app.use("/certosa",certosa);
app.use("/dickens",dickens);
app.use("/domenichino",domenichino);
app.use("/emiliaRomagna",emiliaRomagna);
app.use("/meridiana",meridiana);
app.use("/moda",moda);
app.use("/pellegrino",pellegrino);
app.use("/pinacoteca",pinacoteca);
app.use("/pontificio",pontificio);
app.use("/reni",reni);
app.use("/ringraziamenti",ringraziamenti);
app.use("/rossini",rossini);
app.use("/sibaud",sibaud);
app.use("/storia",storia);
app.use("/torri",torri);
app.use("/tour",tour);

app.listen(PORT,()=>console.log("Server API is running on port: "+PORT+"\nhttp://localhost:"+PORT));
