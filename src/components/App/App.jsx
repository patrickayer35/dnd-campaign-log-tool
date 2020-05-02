import React, { Fragment } from 'react';
import './App.module.scss';
import GetStartedForm from '../GetStartedForm/GetStartedForm.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            campaigns: this.props.data
        }
    }

    addCampaign(c) {
        this.setState({
            campaigns: this.state.campaigns.concat()
        });
    }

    render() {
        
        return(
            <div className='main'>
                {this.state.campaigns.length > 0 ? '' : <GetStartedForm addCampaign={this.addCampaign.bind(this)} />}
            </div>
        );
    }

}

export default App;