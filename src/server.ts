import express from 'express';
import './database';

import sellTransaction from './routes/sellTransaction.routes';

const app = express();

app.use(express.json());

app.use('/sell', sellTransaction);

app.listen(3350, () => {
	console.log('server started on port 3350');
});
