const express = require('express');
const app = express();

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.envPORT || 5000;
app.listen(PORT, console.log(`🔥 Server started on port ${PORT}🔥`));
