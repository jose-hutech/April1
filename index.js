// const express = require('express')
// const cron = require('node-cron')
// const app = express()
// const moment = require('moment')
//app.use(express.json())

const transactions = []
const customers = {"101": {
    "customerID": 101,
    "balance": 0,
    "totalExpenses": 0,
    "totalEarnings": 0,
    "lastTransactionDate": "2023-03-29T00:00:00+05:30"
},
"102": {
    "customerID": 102,
    "balance": 0,
    "totalExpenses": 0,
    "totalEarnings": 0,
    "lastTransactionDate": "2023-03-29T00:00:00+05:30"
},
"103": {
    "customerID": 103,
    "balance": 0,
    "totalExpenses": 0,
    "totalEarnings": 0,
    "lastTransactionDate": "2023-03-29T00:00:00+05:30"
},
"104": {
    "customerID": 104,
    "balance": 0,
    "totalExpenses": 0,
    "totalEarnings": 0,
    "lastTransactionDate": "2023-03-29T00:00:00+05:30"
},
"105": {
    "customerID": 105,
    "balance": 0,
    "totalExpenses": 0,
    "totalEarnings": 0,
    "lastTransactionDate": "2023-03-29T00:00:00+05:30"
},
"106": {
    "customerID": 106,
    "balance": 0,
    "totalExpenses": 0,
    "totalEarnings": 0,
    "lastTransactionDate": "2023-03-29T00:00:00+05:30"
},
"107": {
    "customerID": 107,
    "balance": 0,
    "totalExpenses": 0,
    "totalEarnings": 0,
    "lastTransactionDate": "2023-03-29T00:00:00+05:30"
},
"108": {
    "customerID": 108,
    "balance": 0,
    "totalExpenses": 0,
    "totalEarnings": 0,
    "lastTransactionDate": "2023-03-29T00:00:00+05:30"
},
"109": {
    "customerID": 109,
    "balance": 0,
    "totalExpenses": 0,
    "totalEarnings": 0,
    "lastTransactionDate": "2023-03-29T00:00:00+05:30"
},
"110": {
    "customerID": 110,
    "balance": 0,
    "totalExpenses": 0,
    "totalEarnings": 0,
    "lastTransactionDate": "2023-03-29T00:00:00+05:30"
},
"111": {
    "customerID": 111,
    "balance": 0,
    "totalExpenses": 0,
    "totalEarnings": 0,
    "lastTransactionDate": "2023-04-03T00:00:00+05:30"
},
"112": {
    "customerID": 112,
    "balance": 0,
    "totalExpenses": 0,
    "totalEarnings": 0,
    "lastTransactionDate": "2023-04-03T00:00:00+05:30"
},
"113": {
    "customerID": 113,
    "balance": 0,
    "totalExpenses": 0,
    "totalEarnings": 0,
    "lastTransactionDate": "2023-04-03T00:00:00+05:30"
},
"114": {
    "customerID": 114,
    "balance": 0,
    "totalExpenses": 0,
    "totalEarnings": 0,
    "lastTransactionDate": "2023-04-03T00:00:00+05:30"
},
"115": {
    "customerID": 115,
    "balance": 0,
    "totalExpenses": 0,
    "totalEarnings": 0,
    "lastTransactionDate": "2023-04-03T00:00:00+05:30"
},
"116": {
    "customerID": 116,
    "balance": 0,
    "totalExpenses": 0,
    "totalEarnings": 0,
    "lastTransactionDate": "2023-04-03T00:00:00+05:30"
},
"117": {
    "customerID": 117,
    "balance": 0,
    "totalExpenses": 0,
    "totalEarnings": 0,
    "lastTransactionDate": "2023-04-03T00:00:00+05:30"
},
"118": {
    "customerID": 118,
    "balance": 0,
    "totalExpenses": 0,
    "totalEarnings": 0,
    "lastTransactionDate": "2023-04-03T00:00:00+05:30"
},
"119": {
    "customerID": 119,
    "balance": 0,
    "totalExpenses": 0,
    "totalEarnings": 0,
    "lastTransactionDate": "2023-04-03T00:00:00+05:30"
},
"120": {
    "customerID": 120,
    "balance": 0,
    "totalExpenses": 0,
    "totalEarnings": 0,
    "lastTransactionDate": "2023-04-03T00:00:00+05:30"
}}


// node-cron functionality

cron.schedule('* * * * *',()=>{
   alert();
})


function alert(){
    console.log("Creating transactions...");
  
    const customerIDs = Object.keys(customers);
    const numCustomers = Math.min(customerIDs.length, 10); // Limit to 10 customers
    const now = moment();
  
    for (let i = 0; i < numCustomers; i++) {
      const customerID = customerIDs[Math.floor(Math.random() * customerIDs.length)];
      const amount = Math.floor(Math.random() * 10000) - 2500; // Generate a random amount between -50 and 50
      const source = `Transaction ${i+1}`;
      const date = now.toISOString();
  
      const transaction = {
        transactionID : transactions.length+1,
        amount,
        source,
        customerID,
        date
      };
  
      transactions.push(transaction);
  
   
      if(amount<0){
        customers[customerID].totalExpenses -= amount;
      }else{
        customers[customerID].totalEarnings += amount;
      }
  
      customers[customerID].balance += amount;
      customers[customerID].lastTransactionDate= moment(date).format();
    }
  
    console.log(`Created transactions for ${numCustomers} customers`);
  }
  

// API to list all the transactions 

app.get('/transactions',(req,res)=>{
  res.json(transactions)
})



// API to list all the customers


app.get('/customers', (req, res) => {
  const customerList = Object.values(customers);

  res.json( customerList );
});

// API to calculate total funds in the bank

app.get('/totalfunds',(req,res)=>{
   
   const totalFunds = transactions.reduce((sum,t)=> sum+t.amount,0)
   res.json({TotalFundsInTheBank: totalFunds})
})

app.listen(3000,(err)=>{
  if(!err){
    console.log("server connected");
  }
})