export const getJob = async (req, res) => {
  // const {jobId}=req.params;
  // const {jobQueue}=req;
  // console.log(req.query);
  const { profile } = req.query;
  console.log("Profile:", profile);
  let job = [
    {
      profile: "Data Entry Operator",
      company: "Merqui",
      Location: "Delhi",
      salary: "15k-25k",
      job_description:
        "Experience 3 to 6 years, Good communication skills, Basic knowledge of computer",
    },
    {
      profile: "Warehouse Manager",
      company: "Asahi India Glass limited",
      Location: "Noida",
      salary: "25k-35k",
    },
    {
      profile: "Delivery Partner",
      company: "Flipkart",
      Location: "Pune",
      salary: "20k-30k",
    },
    {
      profile: "Delivery Partner",
      company: "Dhelivery",
      Location: "Rewari",
      salary: "20k-30k",
    },
    {
      profile: "Machine Operator",
      company: "Voco Binary",
      Location: "Jaipur",
      salary: "18k-28k",
      job_description:
        "Experience 2 to 5 years, working time is 10am to 6pm,medical facility available",
    },
    {
      profile: "Sales Executive",
      company: "ITC",
      Location: "Jaipur",
      salary: "22k-32k",
    },
    {
      profile: "Sales Executive",
      company: "Tescom",
      Location: "Noida",
      salary: "20k-30k",
    },
    {
      profile: "HR Executive",
      company: "HCL",
      Location: "Delhi",
      salary: "30k-40k",
    },
    {
      profile: "Software Developer",
      company: "Google",
      Location: "Pune",
      salary: "1L-2L",
    },
    {
      profile: "Tele Sales Executive",
      company: "Bando Private limited",
      Location: "Banglore",
      salary: "15k-25k",
    },

  ];
  if (profile) {
    job = job.filter((j) =>
      profile.toLowerCase().includes(j.profile.toLowerCase())
    );
  }
  res.status(200).json({ job });
};

export const getContactDetails = async (req, res) => {
  let contactDetails = [
    {
      name: "Manglesh Yadav",
      email: "mangleshyadav2@gmail.com",
      mobileNumber: "8084377799",
    },
    { name: "Devid", email: "devid@gmail.com", mobileNumber: "8084377788" },
    {
      name: "Minakshi",
      email: "minakshi@gmail.com",
      mobileNumber: "8084377777",
    },
  ];
  res.status(200).json({data:contactDetails});
};
