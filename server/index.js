import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import MONGO_CONNECTION_URL from './secert.js'

const app = express();

const PORT = process.env.PORT || 5000;

const CONNECTION_URL = MONGO_CONNECTION_URL()

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port  ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);