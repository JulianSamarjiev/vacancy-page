import React, { Component } from 'react';
import './VacancyPage.css';
import { FormGroup, ControlLabel, FormControl, Grid, Row, Col, Button, Alert } from 'react-bootstrap';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

class VacancyPage extends Component {
  constructor(props, context) {
    super(props, context)

    // Initializing state
    this.state = {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      email: '',
      sex: '',
      address: '',
      zip: '',
      cv: '',
      coverLetter: ''
    }
  }

  // Setting state for all form inputs using a dynamic key
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  }

  handleSubmit(e) {
    // Prevent page refresh (simulating a dynamic submit)
    e.preventDefault()
    // Hide form
    document.getElementById('js-form').style.display = 'none'
    // Show successful submission notification
    document.getElementById('js-success-notification').style.display = 'block'
    // Scroll to top (to see notification) for better UX
    window.scroll(0,0)
  }

  render() {
    return (
      <div className="VacancyPage">
        <div className="VacancyPage-header">
          <h1>Join Us</h1>
        </div>
        <div className="VacancyPage-form">
          <Grid>
            <Row className="show-grid">
              <Col sm={6} smOffset={3}>
                {/* Success notification (hidden initially, shown on successful submit) */}
                <Alert id="js-success-notification" bsStyle="success" style={{display:'none'}}>
                  <h3>We've successfully received your application!</h3>
                  <p>A member of our team will get back to you as soon as possible.</p>
                </Alert>
                {/* Application form */}
                <form onSubmit={this.handleSubmit} id="js-form">
                  <FormGroup controlId="firstName">
                    <ControlLabel>First Name*</ControlLabel>
                    <FormControl type="text" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange('firstName')} required />
                  </FormGroup>
                  <FormGroup controlId="lastName">
                    <ControlLabel>Last Name*</ControlLabel>
                    <FormControl type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange('lastName')} required />
                  </FormGroup>
                  <FormGroup controlId="dateOfBirth">
                    <ControlLabel>Date of Birth</ControlLabel>
                    <FormControl type="text" placeholder="Date of Birth" onChange={this.handleChange('dateOfBirth')} />
                  </FormGroup>
                  <FormGroup controlId="email">
                    <ControlLabel>Email*</ControlLabel>
                    <FormControl type="email" placeholder="jane.doe@example.com" onChange={this.handleChange('email')} required />
                  </FormGroup>
                  <FormGroup controlId="sex">
                    <ControlLabel>Sex</ControlLabel>
                    <FormControl componentClass="select" onChange={this.handleChange('sex')}>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="preferNotToSay">Prefer not to say</option>
                    </FormControl>
                  </FormGroup>
                  <FormGroup controlId="address">
                    <ControlLabel>Address</ControlLabel>
                    <FormControl type="text" placeholder="Address, including house number" value={this.state.address} onChange={this.handleChange('address')} />
                  </FormGroup>
                  <FormGroup controlId="zip">
                    <ControlLabel>Zip code</ControlLabel>
                    <FormControl type="text" placeholder="Zip code" value={this.state.zip} onChange={this.handleChange('zip')} />
                  </FormGroup>
                  <FormGroup controlId="cv">
                    <ControlLabel>CV*</ControlLabel>
                    <FormControl type="file" placeholder="CV" value={this.state.cv} onChange={this.handleChange('cv')} required />
                  </FormGroup>
                  <FormGroup controlId="coverLetter">
                    <ControlLabel>Cover Letter</ControlLabel>
                    <FormControl type="file" placeholder="Cover Letter" value={this.state.coverLetter} onChange={this.handleChange('coverLetter')} />
                  </FormGroup>
                  <Button type="submit">Apply</Button>
                </form>
              </Col>
              {/* FAQ section */}
              <Col sm={6} smOffset={3}>
                <div className="VacancyPage-faq">
                  <h3>FAQ</h3>
                  <Accordion accordion={false}>
                    <AccordionItem>
                      <AccordionItemTitle>
                        <h4>1. Can you do X?</h4>
                      </AccordionItemTitle>
                      <AccordionItemBody>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemTitle>
                        <h4>2. What about Y?</h4>
                      </AccordionItemTitle>
                      <AccordionItemBody>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemTitle>
                        <h4>3. What are your working hours?</h4>
                      </AccordionItemTitle>
                      <AccordionItemBody>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemTitle>
                        <h4>4. Where is the company based?</h4>
                      </AccordionItemTitle>
                      <AccordionItemBody>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemTitle>
                        <h4>5. What is the best way to contact you? And a little bit more copy to make this question the longest to test a bit.</h4>
                      </AccordionItemTitle>
                      <AccordionItemBody>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </AccordionItemBody>
                    </AccordionItem>
                  </Accordion>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default VacancyPage;
