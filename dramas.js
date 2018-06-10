const express = require('express')
const app = express()
const fs = require('fs')
const FILE = './data/drama-list.json'

app.get('/api/dramas', (req, res) => {
  var result = fs.readFileSync(FILE)
  res.set({ 
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
  res.send(result)
})

app.listen(3002, () => console.log('Server is listening Port 3002 '));