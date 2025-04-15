const express = require('express');
const app = express();
const bookRoutes = require('./Routes/bookRoutes');

app.use(express.json());
app.use('/books', bookRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
