import { uuid } from 'uuidv4';

export default class SellTransaction {
	id: string;

	nameProduct: string;

	nameCustomer: string;

	date: Date;

	PaymentMethod: string;

	buyValue: number;

	sellValue: number;

	profit: number;

	constructor(
		nameProduct: string,
		nameCustomer: string,
		date: Date,
		paymentMethod: 'débito' | 'crédito' | 'dinheiro',
		buyValue: number,
		sellValue: number,
	) {
		this.id = uuid();
		this.nameProduct = nameProduct;
		this.nameCustomer = nameCustomer;
		this.date = date;
		this.PaymentMethod = paymentMethod;
		this.buyValue = buyValue;
		this.sellValue = sellValue;
		this.profit = sellValue - buyValue;
	}
}
