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
        return (
            <div>
                   <Header />
                   <Action />
                   <Options/>
                   <AddOptions />
            </div>
        )
    }
}

export default App