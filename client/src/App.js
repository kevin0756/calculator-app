import React, { Component } from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';

class CalculateLoan extends Component {
	constructor() {
	    super();
	    this.state = {
	      term: 0,
	      loanAmount: 0,
	      interestRate: 0,
	      residualStatus: 0,
	      approximatePaymentAmount: 0,
	      accuratePaymentAmount: 0
	    };
	  }

	  handleChange = evt => {
		  this.setState({[evt.target.name]: evt.target.value},  () => {
			  this.calculateApproximateAmount();
			});
		  }
	  
	  calculateApproximateAmount = e => {
	  fetch('/api/calculate/calculate-approximate-loan-amount/', {
	      method: 'POST',
	      headers: {
		        'Content-Type': 'application/json',
		      },
	      body: JSON.stringify({ term: this.state.term, loanAmount: this.state.loanAmount, interestRate: this.state.interestRate, residualStatus: this.state.residualStatus})
	    }).then(response => response.json()).then(
    		(jsonData) => this.setState({approximatePaymentAmount: jsonData.approximatePaymentAmount})
          ,(error) => console.log(error));
	  }

	  render() {
		  return (
	     <div className = "container">
	            <div className="form-group">
	            <label>Term:</label>
	            <input type="number" className="form-control" onChange={this.handleChange}  name = "term"/>
	          </div>
	          
	          <div className="form-group">
	            <label>Loan Amount:</label>
	            <input type="number" className="form-control" onChange={this.handleChange}  name = "loanAmount"/>
	          </div>
	          
	          <div className="form-group">
	            <label>Interest Rate:</label>
	            <input type="number" className="form-control" onChange={this.handleChange}  name = "interestRate"/>
	          </div>
	          
	          <div className="form-group">
	            <label>Residual Value:</label>
	            <input type="number" className="form-control" onChange={this.handleChange}  name = "residualStatus"/>
	          </div>
	          
	          <div className="form-group">
	            <label>Approximate Amount:</label>
	            <input type="number" className="form-control" value = {this.state.approximatePaymentAmount} disabled/>
	          </div>
	        
	      
	      <BrowserRouter>
          <div>
           <Link to={this.state.loanAmount<1000000 ? '/recordsPage/' : '/reachedLimit/'}>Submit</Link>
	        <Route exact path="/recordsPage/" render={(props) => <Records {...props} term = {this.state.term} loanAmount = {this.state.loanAmount}   interestRate = {this.state.interestRate}   residualStatus = {this.state.residualStatus} accuratePaymentAmount = {this.state.accuratePaymentAmount}/>} />
	        <Route exact path="/reachedLimit/" component = {Reachedlimit}/>
	        </div>
	        </BrowserRouter>
	        </div>
	    )
	  }
	}


  const Reachedlimit = () => <h2>Thanks for your time</h2>;

	  
  class Records extends Component{
	  
	  constructor() {
		    super();
		    this.state = {
	    		accuratePaymentAmount: 0
		    };
		  }
	  
	  componentDidMount = () => {
		   fetch('/api/calculate/calculate-accurate-loan-amount/', {
		      method: 'POST',
		      headers: {
			        'Content-Type': 'application/json',
			      },
		      body: JSON.stringify({ term: this.props.term, loanAmount: this.props.loanAmount, interestRate: this.props.interestRate, residualStatus: this.props.residualStatus})
		    }).then(response => response.json()).then(
	    		(jsonData) => this.setState({accuratePaymentAmount: jsonData.accuratePaymentAmount})
              ,(error) => console.log(error));
	  
	  }
	  
	  render() {
		  const {accuratePaymentAmount} = this.state;
		  return (
		  <div className="container">
          <div className="table-responsive">
              <table className="table table-bordered table-hover">
                  <thead className="thead-light">
                      <tr>
                          <th>Term</th>
                          <th>Loan Amount</th>
                          <th>Interest Rate</th>
                          <th>Residual Value</th>
                          <th>Accurate Payment Amount</th>
                      </tr>
                  </thead>
                  <tbody>
                      <Content term = {this.props.term} loanAmount = {this.props.loanAmount}   interestRate = {this.props.interestRate}   residualStatus = {this.props.residualStatus} accuratePaymentAmount = {accuratePaymentAmount}/>
                  </tbody>
              </table>
          <br/>
          </div>
	      </div>
)}}

const Content = (prop) => {
	return (
    		  <tr key="1">
    		   <td>{prop.term}</td>
    		   <td>{prop.loanAmount}</td>
    		   <td>{prop.interestRate}</td>
    		   <td>{prop.residualStatus}</td>
    		   <td>{prop.accuratePaymentAmount}</td>
    		</tr>
      )}

	
export default CalculateLoan;