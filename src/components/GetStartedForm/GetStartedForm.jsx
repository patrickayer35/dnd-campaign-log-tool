import React from 'react';
import './GetStartedForm.module.scss';
import Tooltip from '../Tooltip/Tooltip.jsx';

export default function GetStartedForm(props) {

    const validateImageUrl = (backgroundImage) => {
        
        if ((backgroundImage.startsWith('https://') || backgroundImage.startsWith('http://')) && 
            (backgroundImage.endsWith('.jpg') || backgroundImage.endsWith('.png'))) {
                return true;
            }
        else {
            return false;
        }
    }

    const validateCampaignData = () => {

        let campaignName = document.getElementById('campaignName__input').value;
        if (campaignName == '') {
            alert('Your campaign needs a name!');
            return;
        }

        let backgroundImage = document.getElementById('backgroundImage__input').value;
        if (backgroundImage != '') {
            if (!validateImageUrl(backgroundImage)) {
                alert('Your image url is invalid!');
                return;
            }
        }

        let newCampaign = {
            name: campaignName,
            imageUrl: backgroundImage,
            homebrewCarryCapacity: document.getElementById('homebrewCarryCapacity--no').checked ? false : true,
            mainQuests: [],
            questLeads: [],
            npcs: [],
            locations: [],
            magicItems: [],
            pcInventory: []
        }
        props.addCampaign(newCampaign);

    }

    return(
        <div className='getStartedForm'>
            <h1 className='getStartedForm__header'>Start a new campaign!</h1>
            <span className='getStartedForm__row'>
                <label htmlFor='campaignName__input' className='getStartedForm__label'>Campaign name: </label>
                <input type='text' id='campaignName__input' className='getStartedForm__input' placeholder='required' autoComplete='off'></input>
            </span>
            <span className='getStartedForm__row getStartedForm__hasTooltip'>
                <label htmlFor='backgroundImage__input' className='getStartedForm__label'>Background image: </label>
                <Tooltip text={'Set the background image you want for your campaign log. If none specified, it\'ll be the defualt background you see now! You\'ll be able to change this later'}/>
                <input type='text' id='backgroundImage__input' className='getStartedForm__input' autoComplete='off'></input>
            </span>
            <div className='getStartedForm__row--carryWeight'>
                <span className='getStartedForm__label'>Set homebrew carry weight? </span>
                <div className='getStartedForm__carryWeightOptions'>
                    <label htmlFor='carryCapacity--yes'>Yes</label>
                    <input type='radio' id='homebrewCarryCapacity--yes' name='homebrewCarryCapacity'></input>
                    <label htmlFor='carryCapacity--no'>No</label>
                    <input type='radio' id='homebrewCarryCapacity--no' name='homebrewCarryCapacity' defaultChecked={true}></input>
                </div>
            </div>
            <button className='getStartedForm__goButton' onClick={validateCampaignData}>START!</button>
        </div>
    );

}

//export default GetStartedForm;