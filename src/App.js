import React ,{Component }from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render(){
  return (

    <div className="App">
      <header className="App-header">
      </header>
       <div className='age'>Your Age:<span>{this.props.age}</span></div>
       <button className='ageUp' onClick={this.props.onAgeUp}>Age Up</button>
        <button className='ageDown' onClick={this.props.onAgeDown}>Age Down</button>
        <hr />
        <div className = 'arrayItems'>History 
        <ul>
          {this.props.array.map((item)=>{
             return (  
              <li className = 'arrayList'key={item.id} 
              onClick={()=>{this.props.onDelItem(item.id)}}>
              {item.age}</li>
              )
          })
          }
        </ul>
        </div>
    </div>
  );
}
}

const mapStateToProps = (state)=>{
  return{
    age:state.age,
    array:state.array
   
  };
}

const mapDispatchToProps =(dispatch) =>{
  return{
    onAgeUp:()=>dispatch({type:"AGE_UP",value:1}),
    onAgeDown:()=>dispatch({type:"AGE_DOWN",value:1}),
    onDelItem:(id)=>dispatch({type:"DEL_ITEM",value:id}),

  };
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
