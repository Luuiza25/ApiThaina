const express = require('express')
const app = express()
const port = 3000
const atividadesRoutes = require('./routes/atividades');
app.use(express.json())

atividadesRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})