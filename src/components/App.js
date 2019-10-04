import React, { Component } from 'react';
import './App.css';
import './Service/Service.css';
import Navitems from './Navbar/Navbar';
import Service from './Service/Service';
import './Service/Service.css';
import './Industry/Industry.css';
import Industry from './Industry/Industry';

// import Services from './Service/Services';
import './Navbar/Navbar.css';

import mlogo from '../assets/logo.png';
import approach from '../assets/Ourapproach.png';
import service from '../assets/Landing.png';
import Tech from './Techstack/Techstack';
import './Techstack/Techstack.css';
import {
  amazon, angular, aws, c, cplus, css, firebase, google, html, ibm, java, jenkins,
  jquery, kurento, liferay, mysql, neo, nodejs, python, react, solr, spring, network, dev,
  ai, crm, devops, me, net, ui, qa, analytics, industries, testimonial
} from './Service/Images';

class App extends Component {
  service_content = 'We are in a unique position with experience in technology and business. Having delivered solutions and services across different domains, we use an innovative service model which is based on result driven partnerships.';
  approach_content = "A project management methodology characterized by building products that customers really want, using short cycles of work that allow for rapid production and constant revision if necessary.";

  state = {
    menu: [
      { id: 1, item: 'Company' },
      { id: 2, item: 'Services' },
      { id: 3, item: 'Product' },
      { id: 4, item: 'Resources' },
      { id: 5, item: 'Contact Us' }
    ],
    service: [
      {
        id: 1, name: 'Our Services', content: this.service_content, image: service,
        grid: [
          { id: 1, url: ai, name: 'AI' },
          { id: 2, url: crm, name: 'CRM' },
          { id: 3, url: devops, name: 'DevOps' },
          { id: 4, url: me, name: 'Web / Mobile Enterprise' },
          { id: 5, url: net, name: 'Network/Cyber Security' },
          { id: 6, url: ui, name: 'UI/UX' },
          { id: 7, url: qa, name: 'Application QA' },
          { id: 8, url: analytics, name: 'Business Analytics' }
        ]
      },
      { id: 2, name: 'Our Approach', content: this.approach_content, image: approach }
    ],
    // pics: [
    //   { id: 1, url: ai, name: 'AI' },
    //   { id: 2, url: crm, name: 'CRM' },
    //   { id: 3, url: devops, name: 'DevOps' },
    //   { id: 4, url: me, name: 'Web / Mobile Enterprise' },
    //   { id: 5, url: net, name: 'Network/Cyber Security' },
    //   { id: 6, url: ui, name: 'UI/UX' },
    //   { id: 7, url: qa, name: 'Application QA' },
    //   { id: 8, url: analytics, name: 'Business Analytics' }
    // ],
    techstack: [
      { id: 1, url: amazon },
      { id: 2, url: angular },
      { id: 3, url: aws },
      { id: 4, url: c },
      { id: 5, url: cplus },
      { id: 6, url: css },
      { id: 7, url: firebase },
      { id: 8, url: google },
      { id: 9, url: html },
      { id: 10, url: ibm },
      { id: 11, url: java },
      { id: 12, url: jenkins },
      { id: 13, url: jquery },
      { id: 14, url: kurento },
      { id: 15, url: liferay },
      { id: 16, url: mysql },
      { id: 17, url: neo },
      { id: 18, url: nodejs },
      { id: 19, url: python },
      { id: 20, url: react },
      { id: 21, url: solr },
      { id: 22, url: spring },
      { id: 23, url: network },
      { id: 24, url: dev }
    ],
    icon: [
      { id: 1, name: 'Hospitality' },
      { id: 2, name: 'Airlines' },
      { id: 3, name: 'Automotive Banking' },
      { id: 4, name: 'Health Care' },
      { id: 5, name: 'Finance' },
      { id: 6, name: 'Manufacturing' },
      { id: 7, name: 'Telecommunication' },
      { id: 8, name: 'Real Estate' },
      { id: 9, name: 'Retail' },

    ],
    industriesName: 'Horizontal Market ',
   
    Markettypes: [
      {
        'Horizontal Market': [
          { id: 1, name: 'Hospitality' },
          { id: 2, name: 'Airlines' },
          { id: 3, name: 'Automotive Banking' },
          { id: 4, name: 'Health Care' },
          { id: 5, name: 'Finance' },
          { id: 6, name: 'Manufacturing' },
          { id: 7, name: 'Telecommunication' },
          { id: 8, name: 'Real Estate' },
          { id: 9, name: 'Retail' },
        ]
      },
      {
        'Vertical Market': [
          { id: 10, name: 'Engineering' },
          { id: 11, name: 'Application Development' },
          { id: 12, name: ' Business Intelligence' },
          { id: 13, name: 'ERP(Oracle/Peoplesoft)' },
          { id: 14, name: 'Application Quality Assurance' },
          { id: 15, name: 'Networking' },
          { id: 16, name: 'Project Management' },
          { id: 17, name: 'Finance/Accounting' },
          { id: 18, name: 'HR' }
        ]
      }
    ]
  };
  industriesHandler = () => {
    const doesShow = this.state.industries;
    this.setState({ industries: !doesShow })
  }
  horizontalHandler = () => {
    this.setState({
      icon: [
        { id: 1, name: 'Hospitality' },
        { id: 2, name: 'Airlines' },
        { id: 3, name: 'Automotive Banking' },
        { id: 4, name: 'Health Care' },
        { id: 5, name: 'Finance' },
        { id: 6, name: 'Manufacturing' },
        { id: 7, name: 'Telecommunication' },
        { id: 8, name: 'Real Estate' },
        { id: 9, name: 'Retail' }
      ]
    })
    this.setState({ industriesName: 'Horizontal Market' })
  }
  verticalHandler = () => {
    this.setState({
      icon: [
        { id: 1, name: 'Engineering' },
        { id: 2, name: 'Application Development' },
        { id: 3, name: ' Business Intelligence' },
        { id: 4, name: 'ERP(Oracle/Peoplesoft)' },
        { id: 5, name: 'Application Quality Assurance' },
        { id: 6, name: 'Networking' },
        { id: 7, name: 'Project Management' },
        { id: 8, name: 'Finance/Accounting' },
        { id: 9, name: 'HR' }
      ]
    })
    this.setState({ industriesName: 'Vertical Market' })
  }
  render() {
    let horizontal = null;
    let showdata = true;
    // if(this.state.industries){
    horizontal = (

      this.state.icon.map((icon) => {
        return (
          <Industry name={icon.name} />
        )
      }))
    // }  
    return (
      <div className="App ">
        <header className="header">
          <div className="logo">
            <a href='#'><img src={mlogo} alt="image not available" width='144px' height='27px' /> </a>
          </div>
          <nav>
            <ul className="nav-item flex">
              {
                this.state.menu.map((menuitem, index) => {
                  console.log(menuitem);
                  return (
                    <Navitems
                      id={menuitem.id}
                      name={menuitem.item} />)
                })
              }
            </ul>
          </nav>
        </header>
        {this.state.service.map((ser) => {
          return (
            < Service key={ser.id} name={ser.name} content={ser.content} image={ser.image}
              grid={ser.grid} />)
        })
        }
        {/* <div className="grid-container">
          {
            this.state.pics.map((pic) => {
              return (

                <Services url={pic.url} name={pic.name} />
              )
            })
          } </div> */}
        {/* techstack */}
        <div className="container">
          <div className="tech-container">

            <div className="tech-container-heading"> Tech Stack</div>
          </div>
          <div className="grid">
            {
              this.state.techstack.map((tech) => {
                return (

                  <Tech pics={tech.url} />

                )
              })
            }
          </div>
        </div>
        {/* industries */}
        <div className="container">
          <div className="service-heading">
            <div> <span className="service-underline"> Industries </span></div>
          </div>
          <div className='service-container-reverse'>
            <div className="industry-content">
              <div className="industry-heading" ><span className="service-underline">{this.state.industriesName}</span> </div>

              <div className="industry-button" >
                <div className='button' role="button"
                  onClick={this.horizontalHandler}>
                </div><div className="button" role="button"
                  onClick={this.verticalHandler} ></div></div>
              {/* <button onClick={this.industriesHandler} >click </button> */}
              <div className="industry-container">
                {horizontal
                  // this.state.icon.map((icon) => {
                  //   return (
                  //     <Industry name={icon.name} />
                  //   )
                  // })
                }
                {/* <div className="industry-container-icon">content</div> */}
              </div>
            </div>
            <img src={industries} className="service-image" alt="logo" />
          </div>
        </div>
        {/* testimonials */}
        <div className="container">
          <div className='service-container '>
            <div className="service-heading">
              <div> <span className="service-underline "> Testimonials </span></div>
              <div className="service-content">
                <div className="card">
                  <img src={crm} className="card-image" alt="Avatar" />
                  <div className="cont">
                    <h4><b>Name position</b></h4>
                    <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  </div>
                </div>

              </div>
            </div>
            <img src={testimonial} className="service-image" alt="logo" />


          </div>
        </div>

      </div>
    )
  }
}

export default App;
