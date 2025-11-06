import axios from "axios";
console.log("controller");
export const getApiData = async (req, res) => {
  console.log("Session id:-", req.sessionID);
  let data = JSON.stringify({
    userName: "ajay.k@meraqui.com",
    password: "Ajay@123",
    customerKey: "NTAwMTM5NTAwMDA0",
    MonthYear: "June-2025",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.meraqui.com/Integration/api/Integration/GetGrossEarningMonthOnMonthReport",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  let response = await axios(config);
  //   console.log(response);
  res.status(200).json(response.data.dataObject);
};

export const getdashboardData = async (req, res) => {
  let data = JSON.stringify({
    userName: "ajay.k@meraqui.com",
    password: "Ajay@123",
    customerKey: "NTAwMTM5NTAwMDA0",
    FromDate: "2025-08-01",
    ToDate: "2025-08-31",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.meraqui.com/Integration/api/Integration/GetDashBoartSummeryList",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  let response = await axios(config);
  res.status(200).json(response.data.dataObject);
};
// module.exports = { getApiData };
