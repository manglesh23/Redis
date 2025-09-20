import { Worker } from "bullmq";
import { connection } from "../middleware/connection.js";

const sendNotificationWorker = new Worker(
  "notificationQueue",
  async (job) => {  
    if (job.name === "sendNotification") {       //Job name is sendNotification
      const { username, email } = job.data;
      console.log(`Sending notification to ${username} at ${email}`);
    }
  },{connection})

  sendNotificationWorker.on("completed", (job) => {
    console.log("Job--------------------->",job.name,job.data)
    console.log(`Job with ID ${job.id} has been completed`);
  });

  sendNotificationWorker.on("failed", (job, err) => {
    console.log(`Job with ID ${job.id} has failed with error ${err.message}`);
  });