import React from 'react'
import "./Leftside.css";
import HomeIcon from '@material-ui/icons/Home';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import BackupIcon from '@material-ui/icons/Backup';
import CachedIcon from '@material-ui/icons/Cached';
import FeedbackIcon from '@material-ui/icons/Feedback';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import SpeakerPhoneIcon from '@material-ui/icons/SpeakerPhone';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import LanguageIcon from '@material-ui/icons/Language';
function Leftside() {
  return (
    <div className="left-side-menu">
    <div className="text-without-n">
    <span className="text-n">
      S 
    </span>
    <span className="text-name">
      Sohail 
      </span>
     <div className="start-home">
       <div className="homeicon"><HomeIcon/>
       <p className="home-text">Home</p>
       </div>
       <div className="Accessibilityicon"><AccessibilityIcon/>
       <p className="Accessibility-text">Accessibility</p>
       </div>
       <div className="AccountBalanceIcon"><AccountBalanceIcon/>
       <p className="AccountBalance-text">AccountBalance</p>
       </div>
       <div className="BackupIcon"><BackupIcon/>
       <p className="Backup-text">Backup</p>
       </div>
       <div className="FeedbackIcon"><FeedbackIcon/>
       <p className="Feedback-text">Feedback</p>
       </div>
       <div className="CachedIcon"><CachedIcon/>
       <p className="Cached-text">Cached</p>
       </div>
       <div className="LiveHelpIcon"><LiveHelpIcon/>
       <p className="LiveHelp-text">LiveHelp</p>
       </div>
       <div className="Markunread-Icon"><MarkunreadIcon/>
       <p className="Markunread-text">Markunread</p>
       </div>
       <div className="SmartScreenIcon"><SpeakerPhoneIcon/>
       <p className="SmartScreen-text">SpeakerPhone</p>
       </div>
       <div className="ClearAllIcon"><ClearAllIcon/>
       <p className="ClearAllIcon-text">ClearAll</p>
       </div>
       <div className="buyplusdollar">
       <div className="dollar">
       <p className="text-with-dollar">N</p>
       <p className="dollar-margin">$0.90</p>
       </div>
       <div className="buy-dollar">
       <p className="buy-with-dollar">Buy</p>
       <p className="buy-dollar-margin">$XYZ</p>
       </div>
       </div>
       <div className="world-display">
       <LanguageIcon/>
       <div className="world-collaboration">hello</div>
     </div>
     </div>
     </div>
     </div>
  )
}

export default Leftside