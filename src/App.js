import React from "react"
import Header from "./components/Header";
import Action from "./components/Action";
import Options from "./components/Options";
import AddOptions from "./components/AddOptions";
import "./style.css"

const style = {
    border:"1px solid black",
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
        this.setState((prevState)=>{
            return {
                options : prevState.options.concat(option),
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
                   {this.state.check}
                
            </div>
        )

}

}

export default App ;