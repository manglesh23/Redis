import axios from 'axios';
export const payrollData = async (req, res) => {    

// let data = JSON.stringify({
//   "userName": "ajay.k@meraqui.com",
//   "password": "Ajay@123",
//   "customerKey": "NTAwMTM5NTAwMDA0",
//   "MonthYear": "DEC-2023",
//   "ToMonthYear": "DEC-2023"
// });

// let config = {
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: 'https://api.meraqui.com/Integration/api/Integration/IntegGetPayRegister',
//   headers: { 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// let response= await axios(config);
// console.log(JSON.stringify(response));
res.status(200).json({ response: "Payroll data API called successfully" });


}