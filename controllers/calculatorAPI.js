var Model = require('../models/calculator');
const {Calculator} = Model;

const calculateController = {
		
		calculateApproximateLoanAmount (req, res) {
			console.log('calculateApproximateLoanAmount()')
			try{
				term = Number(req.body.term);
				loanAmount = Number(req.body.loanAmount);
				interestRate = Number(req.body.interestRate)/100;
				residualStatus = Number(req.body.residualStatus);
				
				approximatePaymentAmount = ((loanAmount + residualStatus)/2 * interestRate/12 * term + (loanAmount - residualStatus))/term;
				console.log("approximatePaymentAmount " + approximatePaymentAmount);
				res.json({"approximatePaymentAmount": approximatePaymentAmount});
				
			}catch(err){
				console.log('Error occurred in calculateApproximateLoanAmount() ' + err);
				res.status(500).send("Error occured while calculating approximate loan amount");
			}
		},
		
		calculateAccurateLoanAmount (req, res) {
			console.log('calculateAccurateLoanAmount()')
			try{
				term = Number(req.body.term);
				loanAmount = Number(req.body.loanAmount);
				interestRate = Number(req.body.interestRate)/100;
				interestRate = interestRate/12;
				residualStatus = Number(req.body.residualStatus);
				
				accuratePaymentAmount = (loanAmount - residualStatus/Math.pow((1+interestRate),term))/((1-1/(Math.pow((1+interestRate),term)))/interestRate);
				res.json({"accuratePaymentAmount": accuratePaymentAmount});
				
			}catch(err){
				console.log('Error occurred in calculateAccurateLoanAmount() ' + err);
				res.status(500).send("Error occured while calculating accurate loan amount");
			}
		}
		
}

module.exports = calculateController;