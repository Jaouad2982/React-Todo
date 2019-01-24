import React from "react"
import Header from "./components/Header";
import Action from "./components/Action";
import Options from "./components/Options";
import AddOptions from "./components/AddOptions";

class App extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const title = "Todo List";
        const subtitle = "Put your life in the hands of a computer";
        const options = ["thing one","thing two","thing three"]
        return (
            <div>
                   <Header title={title}  subtitle={subtitle}/>
                   <Action />
                   <Options options={options}/>
                   <AddOptions />
            </div>
        )
    }
}

export default App