import { pdfGenerationQueue } from "../queue/pdfGenerationQueue.js";

export const generatePdf = async (req, res) => {
  try {
    const { userId } = req.body;
    if(!userId){
        res.status(400).json({msg:"Provide userId"});
        return;
    }

    await pdfGenerationQueue.add("generate-pdf-userId", { userId });
    res.status(200).json({ msg: "Pdf would be emailed" });
  } catch (e) {
    return {
      error: true,
      details: e,
    };
  }
};
