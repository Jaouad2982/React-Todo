import React from "react"
import Header from "./components/Header";
import Action from "./components/Action";
import Options from "./components/Options";
import AddOptions from "./components/AddOptions";
import "./style.css"

const style = {
   maxWidth : "600px",
   margin : "0 auto",
   display:"block"
}

class App extends React.Component {

    constructor(props){
        super(props);
        this.state={
             options : [],
             check: ""
         
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }


    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>{
                return {
                    options : prevState.options.filter(option=>{
                        return optionToRemove !== option
                    })
                }
        })
    }

    handleAddOptions = (e)=>{
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(this.state.options.indexOf(option) > -1){
            this.setState({
                check : "One or more of Your Todos already exists, please Check and remove",
                
            })
        }
        this.setState((prevState)=>{
            return {
                options : prevState.options.concat(option)        
            }
        })
    
     
    }


    handleDeleteOptions = ()=>{
        this.setState(()=>{
            return {
                options : []
            }
        })
    }

  
    render(){
       
        const title = "Todo List";
        return (
            <div style={style}>
            
                   <Header title={title} />
                   <Action 
                   hasOption={this.state.options.length > 0}
                   handlePickOption = {this.handlePickOption}
                   />
                   <Options 
                   options={this.state.options}
                   handleDeleteOptions = {this.handleDeleteOptions}
                   handleDeleteOption = {this.handleDeleteOption}
                   />

                   <AddOptions 
                   handleAddOptions={this.handleAddOptions}
                   />
                  <h3 style={{color:"white"}}> {this.state.check} </h3>
                
            </div>
        )

}

}

export default App ;