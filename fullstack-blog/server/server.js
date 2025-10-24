const express = require('express');
const cors = require('cors');

const postRoutes = require('./routes/postRoutes');
const welcomeRoutes = require('./routes/welcomeRoutes');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/posts', postRoutes);
app.use('/api/welcome', welcomeRoutes);

app.listen(port, () => {
    console.log(`Server up and running at http://localhost:${port}`); 
})