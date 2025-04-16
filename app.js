const express = require('express');
const app = express();
const bookRoutes = require('./Routes/bookRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./Docs/swagger');

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/books', bookRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
