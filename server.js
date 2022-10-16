const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static(__dirname + `/dist/barbershop`));

app.get('/*', (req, res) => {
res.sendFile(__dirname +`/dist/barbershop/index.html`);
});

app.listen(PORT,()=>{
console.log('Servidor Iniciado na porta ' + PORT);
})
