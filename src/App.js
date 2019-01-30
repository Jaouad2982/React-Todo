import React from "react"
import Header from "./components/Header";
import Action from "./components/Action";
import Options from "./components/Options";
import AddOptions from "./components/AddOptions";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
             options : props.options
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    handlePickOption =()=>{
        const randomOption = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomOption]
        alert(option);
    }

    handleDeleteOptions = ()=>{
        this.setState (()=>{
            return {
                options : []
            }
        })
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

    
    render(){
        const subtitle = "Put your life in the hands of a computer";
      
        return (
            <div>
                   <Header subtitle={subtitle}/>
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
            </div>
        )
    }
}

App.defaultProps = {
    options : []
}


export default App