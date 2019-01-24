const express = require('express')
const path = require('path')
const app = express()
const PORT = 5000

app.use(express.static(path.join(__dirname, 'dist')))
app.listen(PORT, () => {
    console.log('app listening on port 5000.')
})