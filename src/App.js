import React from "react"
import Header from "./components/Header";
import Action from "./components/Action";
import Options from "./components/Options";
import AddOptions from "./components/AddOptions";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
             options : ["thing one","thing two","thing three"]
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    }

    handleDeleteOptions = ()=>{
        this.setState (()=>{
            return {
                options : []
            }
        })
    }
    render(){
        const title = "Todo List";
        const subtitle = "Put your life in the hands of a computer";
      
        return (
            <div>
                   <Header title={title}  subtitle={subtitle}/>
                   <Action hasOption={this.state.options.length > 0}/>
                   <Options 
                   options={this.state.options}
                   handleDeleteOptions = {this.handleDeleteOptions}/>
                   <AddOptions />
            </div>
        )
    }
}

export default App