import { Router } from 'express';
import SellTransaction from '../models/SellTransaction';

const sellTransaction = Router();

sellTransaction.get('', (request, response) => {});

// criar uma venda no banco
sellTransaction.post('', (request, response) => {
	const {
		nameProduct,
		nameCustomer,
		date,
		paymentMethod,
		buyValue,
		sellValue,
	} = request.body;

	const sell = new SellTransaction(
		nameProduct,
		nameCustomer,
		date,
		paymentMethod,
		buyValue,
		sellValue,
	);

	return response.json(sell);
});

export default sellTransaction;
