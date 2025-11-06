import { Worker } from "bullmq";
import { connection } from "../middleware/connection.js";

const generatePdf= new Worker('pdfGenerationQueue',async(job)=>{
    if(job.name==='generate-pdf-userId'){
        console.log("PDf generated and emailed");
    }
},{connection});

generatePdf.on('completed',(job)=>{
    console.log("Task Complete",job.name,job.data);
})

generatePdf.on('failed',(job)=>{
    console.log("failed to generate pdf",job.name,job.data);
})