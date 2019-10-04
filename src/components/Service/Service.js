import React from 'react';
import './Service.css';
import Services from './Services';
import './Services.css';
import image from './Images';
import Landing from  '../../assets/Landing.png';
import ai from '../../assets/ai.png';
import crm from '../../assets/crm.png';
import devops from '../../assets/devops.png';
import logo from '../../assets/logo.png';
import net from '../../assets/Network-and-security.png';
import ui from '../../assets/ui-ux.png';
import qa from '../../assets/Application-qa.png';
import analytics from '../../assets/analytics.png';
import industries from '../../assets/Industries.png';
import me from '../../assets/Mobile-Enterprise.png';
import Tech from '../Techstack/Techstack';
const service = (props) => {
    
    return (
        <div>
         
            <div className="container">
            <div className={props.name=='Our Services' ? "service-container " :'service-container-reverse' }>
                <div className="service-heading">
                    <div> <span className="service-underline"> {props.name} </span></div>
                    <div className="service-content">{props.content} </div>
                </div>
                
                
                
                    <img src={props.image} className="service-image" alt="logo" />
                

            </div>
            </div>
            
            { props.name=='Our Services' ?  
            <div className="grid-container">
                {
                    props.grid.map((single) => {
                        return (
                           <div>
                               <div className="grid-image"><img src={single.url} width='70px' alt="no img" /><p className="font">{single.name}</p> </div>

                           </div>
                        )
                    })
                }
            {/* <div className="grid-image"><img src={ai} width='70px' alt="no img" /><p className="font"> AI</p> </div>
            <div className="grid-image"><img src={me} alt="no img" /><p className="font"> Web / Mobile Enterprise</p> </div>
            <div className="grid-image"><img src={analytics} alt="no img" /> <p className="font"> Business Analytics</p></div>
            <div className="grid-image"><img src={qa} alt="no img" /><p className="font"> Application QA</p> </div>
            <div className="grid-image"><img src={ui} alt="no img" /><p className="font"> UI/UX</p> </div>
            <div className="grid-image"><img src={net} alt="no img" /><p className="font"> Network / Cyber Security</p> </div>
            <div className="grid-image"><img src={crm} alt="no img" /> <p className="font"> CRM</p></div>
            <div className="grid-image"><img src={devops} alt="no img" /> <p className="font">  DevOps</p></div> */}
            
        
            </div> :null }
        </div>

    );
}
export default service;