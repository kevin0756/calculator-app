const mongoose = require('mongoose');

const Schema = mongoose.Schema,
  model = mongoose.model.bind(mongoose);

const calculatorSchema = new Schema({
	  term: Number,
	  loanAmount: Number,
	  interestRate: Number,
	  residualValue: Number,
	});


const Calculator = model('Calculator', calculatorSchema);

module.exports = {
		Calculator
};