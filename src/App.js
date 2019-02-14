import React from "react"
import Header from "./components/Header";
import Action from "./components/Action";
import Options from "./components/Options";
import AddOptions from "./components/AddOptions";
import "./style.css"

const style = {
   maxWidth : "400px",
   margin : "0 auto",
   display:"block",
   backgroundColor:"#545102",
   height:"auto"
}

class App extends React.Component {

    constructor(props){
        super(props);
        this.state={
             options : ["Finish my project","React is React","Make sure you finish","Do not get lost"],
             check: "",
             emptyString : ""
         
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }


        componentDidMount (){
        const json = localStorage.getItem("options");
        const options = JSON.parse(json);
        if(options){
        this.setState({
            options : options
        })
    }

    }
        componentWillUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length ){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options",json);
        }
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
        if(this.state.options.indexOf(option) > -1 || !option){
            this.setState({
                check : "You Todo already exisits, Or you Entered an empty String,please Correct",
                
            })
        }
        this.setState((prevState)=>{
            return {
                options : prevState.options.concat(option),
            }
        })
        e.target.elements.option.value = ""

     
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