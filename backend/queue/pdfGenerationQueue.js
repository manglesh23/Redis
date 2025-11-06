import { Queue } from "bullmq";
import { connection } from "../middleware/connection.js";

export const pdfGenerationQueue= new Queue('pdfGenerationQueue',{connection});