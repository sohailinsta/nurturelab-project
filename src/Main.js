import React from 'react'
import "./Main.css";
import AnnouncementIcon from '@material-ui/icons/Announcement';
import PersonIcon from '@material-ui/icons/Person';
import LinkIcon from '@material-ui/icons/Link';
function Main() {
  return (
    <div className="border-main">
    <div className="main_component">
      <div className="margin-tier-section">
     <span className="section-main">Section</span>
     <span className="tier">0.2 $XYZ
     <span className="xyzandtier">Tier 1</span>
     </span>
     </div>
     <div className="lorem-main">
       <p className="text-lorem"> This is the assignment given for frontend profile
        to create home page for blockchain. <img className="bitcoin-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"></img>
       </p>
       <p className="tutorial-lorem">
         <p className="text-tutorial">
           tutorial
         </p>
         </p>
     </div>
     <div className="reward-main">
         <p className="reward-text">Your reward</p>
         <div className="custom-dollar-margin">
         <p className="dollar-reward">$ 0.26231428</p>
         <p className="custom">
           <p className="icon-custom"><LinkIcon/>
           <p className="text-custom">Custom link</p>
           </p>
         </p>
         </div>
         <div className="avax-margin">
           <p className="avax-box">
             <p className="text-avax">
               $40 AVAX
             </p>
           </p>
           <p className="avax-box">
             <p className="text-avax">
               $10 BNB
             </p>
           </p>
           <p className="avax-box">
             <p className="text-avax">
               $210 BTC
             </p>
           </p>
         </div>
     </div>
     <div className="margin-fee-box">
     <div className="fee-box">
       <p className="fee-text"> <PersonIcon/> 12.5% of fee</p>
       <p className="referal-link">Your Referral Link for Avalanche</p>
       <p className="youtube-link">
         <p className="text-youtube">https://sohailkhandesign.com <p className="link-margin"><AnnouncementIcon/></p></p>
       </p>
     </div>
     <div className="fee-box-right">
       <p className="fee-text-right"> <PersonIcon/> 12.5% of fee</p>
       <p className="referal-link-right">Your Referral Link for Bitcoin</p>
       <p className="youtube-link-right">
         <p className="text-youtube-right">https://sohailkhandesign.com <p className="link-margin-right"><AnnouncementIcon/></p></p>
       </p>
     </div>
     </div>
     <div className="tab-margin">
       <p className="first-tab">First Tab</p>
       <p className="second-tab">Second Tab</p>
     </div>
     <div className="detail">
       <span className="text-detail">ASSET</span>
       <span className="text-detail">Amount</span>
       <span className="text-detail">USER ACCOUNT</span>
       <span className="text-detail">REFERAL EARNING</span>
     </div>
     <div className="put-bitcoin">
       <div className="bitcoin-text-margin">
       <img className="set-size-img-two" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"></img>
       <p className="text-bit-put">Bitcoin</p>
       <p className="bnb-text">0.0000 BNB
       <p className="expire">Expired</p>
       </p>
       <p className="txt">0xFbE..0f58A7D</p>
       <p className="referal-txt">0.000.BNB
       <p className="referal-earning-txt">View on BSC Scan</p>
       </p>
       </div>
       <p className="put-text">Put</p>
     </div>
    </div>
    </div>
  )
}

export default Main