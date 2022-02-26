import React from 'react'
import "./Rightside.css";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CancelIcon from '@material-ui/icons/Cancel';
function Rightside() {
  return (
    <div className="right-side-border">
        <div className="menu-right">
            <div className="right-menu-flex">
        <div className="avalance-box">
        <div className="logo-text-margin"> <img className="set-size-img" src="https://cryptologos.cc/logos/avalanche-avax-logo.png"></img>
        <p className="text-avalanche"> Avalanche
        <p className="arrow-logo"><KeyboardArrowDownIcon/></p>
        </p>
        </div> 
        </div>
        <div className="ethereum-box">
        <div className="logo-text-margin"> <img className="set-size-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"></img>
        <p className="text-ethereum"> Bitcoin
        <p className="arrow-logo"><KeyboardArrowDownIcon/></p>
        </p>
        </div> 
        </div>
        </div>
        <div className="arrow-link-flex">
            <p className="arrow-margin"><ArrowBackIcon/>
            </p>
            <p className="text-custom-two">Custom link</p>
        </div>
        <p className="youtube-text">https://sohailkhandesign.com</p>
        <p className="enter-box">
            <p className="text-enter">Enter</p>
        </p>
        <div className="margin-custom">
            <p className="custom3">
                <p className="text-custom-three">Custom link</p>
                </p>
        <div className="cancel-box">
            <div className="flex-cancel">
            <p className="logo-cancel"><CancelIcon/></p>
            <p className="text-cancel">Cancel</p>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Rightside