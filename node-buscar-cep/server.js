const express = require ('express');
const cors = require('cors');
const Correios = require('node-correios');
const correios = new Correios();
const app = express();
const PORT = 3010;

app.use(cors());
app.listen(PORT, () => console.log(`Porta:${PORT}`));

app.get('/', (req, res) =>{
  const {tracking} = req.query;
  correios.consultaCEP({cep: tracking})
    .then(result => {
      res.send(result);
      console.log(result);
    })
    .catch(error =>{
      console.log(error);
    })
});

