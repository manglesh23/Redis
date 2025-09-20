import { notificationQueue } from "../queue/sendNotification.js";

export const userRegistration = async(req, res) => {
  // Simulate user registration logic
  const { username, email } = req.body; 
  await notificationQueue.add("sendNotification", { username, email });   //Queue a job, job name is sendNotification
  res.status(201).json({ message: "User registered successfully" });    
}