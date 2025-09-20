import { Queue } from "bullmq"; 
import { connection } from "../middleware/connection.js";

export const notificationQueue = new Queue("notificationQueue", { connection });    // Create a queue named notificationQueue
