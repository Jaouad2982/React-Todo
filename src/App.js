import React from "react"
import Header from "./components/Header";
import Action from "./components/Action";
import Options from "./components/Options";
import AddOptions from "./components/AddOptions";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
             options : props.options,
             message : " "
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    
    componentDidMount(){
        const json = localStorage.getItem("options");
        const options = JSON.parse(json);
        this.setState((prevState)=>{
            return {
                options : options
            }
        })
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options",json);
        }
    }

    componentWillUnmount(){
        console.log("component will unmount")
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

        e.target.elements.option.value = " ";

    }

    
    render(){
        return (
            <div>
                   <Header/>
                   <Action 
                   hasOption={this.state.options.length > 0}
                   handlePickOption = {this.handlePickOption}
                   />
                   <Options 
                   options={this.state.options}
                   handleDeleteOptions = {this.handleDeleteOptions}
                   handleDeleteOption = {this.handleDeleteOption}
                   />
                {this.state.message}
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