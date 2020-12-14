import React from 'react';
import CalculatorTitle from './calculatorTitle.js';
import OutputScreen from './outputScreen.js';
import Button from './button.js';

class Calculator extends React.Component {

  constructor() {
  super();

  this.state = {
    question: '',
    answer: ''
  }

  this.handleClick = this.handleClick.bind(this);
}
    render()
    {
    return (
    <div className="frame">
    <CalculatorTitle value="🎄 Holiday Calculator 🎄"/>
    <div class="mainCalc">
    <OutputScreen answer = {this.state.answer} question = {this.state.question}/>
    <div className="button-row">
      <Button label={'Clear'} handleClick = {this.handleClick}/>
      <Button label={'Delete'} handleClick = {this.handleClick}/>
      <Button label={'.'}  handleClick = {this.handleClick}/>
      <Button label={'/'} handleClick = {this.handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'7'} handleClick = {this.handleClick}/>
      <Button label={'8'} handleClick = {this.handleClick}/>
      <Button label={'9'} handleClick = {this.handleClick}/>
      <Button label={'*'} handleClick = {this.handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'4'} handleClick = {this.handleClick}/>
      <Button label={'5'} handleClick = {this.handleClick}/>
      <Button label={'6'} handleClick = {this.handleClick}/>
      <Button label={'-'} handleClick = {this.handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'1'} handleClick = {this.handleClick}/>
      <Button label={'2'} handleClick = {this.handleClick}/>
      <Button label={'3'} handleClick = {this.handleClick}/>
      <Button label={'+'} handleClick = {this.handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'0'} handleClick = {this.handleClick} />
      <Button label={'='} handleClick = {this.handleClick}/>
    </div>
    </div>
    </div>
    );
  }

  // our method to handle all click events from our buttons
  handleClick(event){
    const value = event.target.value;

    switch (value) {
      case '=': {
        // if else statements to fix calculator bugs
    		if(this.state.question!=='')
        {
    			var ans='';
    		  try
    			{
    				ans = eval(this.state.question);
    			}
    			catch(err)
    			{
    				this.setState({answer: "Santa doesn't understand that math 🎅 "});
    			}
    			if(ans===undefined)
    				this.setState({answer: "Santa doesn't understand that math 🎅"});
    			else
    				this.setState({ answer: ans , question: ''});
    			break;
    		}
      }

      // Clear funtion to erase
      case 'Clear': {
        this.setState({ question: '', answer: '' });
        break;
      }

      // Delete function to erase
	  case 'Delete': {
	    var str = this.state.question;
  		str = str.substr(0,str.length-1);
  		this.setState({question: str});
  		break;
	  }

    default: {
        this.setState({ question: this.state.question += value})
        break;
      }
    }
  }

}

export default Calculator;