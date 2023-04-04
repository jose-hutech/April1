const express = require('express')
const moment = require ('moment')
const cron = require ('node-cron')
const app = express()


const transactions = []
const customer = {
    "customerID": 101,
    "name" : "Jose Christopher",
    "balance": 0,
    "totalExpenses": 0,
    "totalEarnings": 0,
    "lastTransactionDate": null
}

cron.schedule()