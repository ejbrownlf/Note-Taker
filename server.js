const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, () => console.log(`App is listening on PORT: ${PORT}`));