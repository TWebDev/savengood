import React from 'react';
import Fieldinput from './formComponents/Fieldinput';
import Select from './formPseudoElems/Select';
import Label from './formPseudoElems/Label';
import Button from '../../Elements/Button';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

const HeroForm = (props) => {

  let
  {
    formFieldSet,
    nameVal,
    lastVal,
    phoneVal,
    mailVal,

    updateFormName,
    updateFormLast,
    updateFormPhone,
    updateFormEmail
  } = props;

  const validateForm = () => {

    if (nameVal && lastVal && phoneVal && mailVal) {

      return ('is-outlined is-info is-radiusless is-large is-fullwidth has-text-white');

    } else {

      return ('is-static is-outlined is-dark is-radiusless is-large is-fullwidth has-text-dark');

    }
  }

  let optionsFrom = [
    '8:00am',
    '9:00am',
    '10:00am',
    '11:00am',
    '12:00pm',
    '1:00pm',
    '2:00pm',
    '3:00pm',
    '4:00pm',
    '5:00pm',
    '6:00pm',
    '7:00pm',
  ]
  let optionsTo = [
    '9:00am',
    '10:00am',
    '11:00am',
    '12:00pm',
    '1:00pm',
    '2:00pm',
    '3:00pm',
    '4:00pm',
    '5:00pm',
    '6:00pm',
    '7:00pm',
    '8:00pm'
  ]
  return (
    <React.Fragment>
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us20.list-manage.com/subscribe/post?u=db24a1644fed585d42738a06a&amp;id=c9bcbf0148"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div className="columns">
            <div className="column">
              <div className="mc-field-group">
                <Fieldinput
                  Type='text'
                  Name='FNAME'
                  _Id='mce-FNAME'
                  Placeholder='Please enter your first name'
                  inputIcon={nameVal ? ('fas fa-user-check') : ('far fa-user')}
                  Value={formFieldSet.nameValue || ''}
                  formHandler={e => updateFormName(e)}
                >
                  First Name
              </Fieldinput>
              </div>
              <div className="mc-field-group">
                <Fieldinput
                  Type='tel'
                  Name='PHONE'
                  _Id='mce-PHONE'
                  Placeholder='123 456 7890'
                  inputIcon={phoneVal ? ('fas fa-mobile-alt') : ('fas fa-mobile')}
                  Value={formFieldSet.phoneValue || ''}
                  formHandler={e => updateFormPhone(e)}
                >
                  Phone number
              </Fieldinput>
              </div>
            </div>
            <div className="column">
              <div className="mc-field-group">
                <Fieldinput
                  Type='text'
                  Name='LNAME'
                  _Id='mce-LNAME'
                  Placeholder='Please enter your last name'
                  inputIcon={lastVal ? ('fas fa-user-check') : ('far fa-user')}
                  Value={formFieldSet.lastValue || ''}
                  formHandler={e => updateFormLast(e)}
                >
                  Last Name
              </Fieldinput>
              </div>
              <div className="mc-field-group">
                <Fieldinput
                  Type='email'
                  Name='EMAIL'
                  _Id='mce-EMAIL'
                  Placeholder='mail@mailme.com'
                  inputIcon={mailVal ? ('far fa-envelope') : ('far fa-envelope-open')}
                  Value={formFieldSet.emailValue || ''}
                  formHandler={e => updateFormEmail(e)}
                >
                  e-mail
              </Fieldinput>
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response"></div>
                <div className="response" id="mce-success-response"></div>
              </div>
            </div>
          </div>
          <div className="columns" id='dropdown'>
            <div className="column">
              <p className='is-small has-text-shadow'><strong className='has-text-white '>Best time to contact you?</strong></p>
            </div>
            <div className="column is-flex">
              <div className="mc-field-group">
                <Label>From:</Label>
                <Select
                  Options={optionsFrom}
                  Name='FSTHOUR'
                  _Id='mce-FSTHOUR'
                >
                </Select>
              </div>
              <div className="mc-field-group">
                <Label>To:</Label>
                <Select
                  Options={optionsTo}
                  Name='FSTHOUR'
                  _Id='mce-FSTHOUR'
                >
                </Select>
              </div>
            </div>
          </div>
          <Button
            addClass={validateForm()}
            Type='submit'
            Value='Subscribe'
            _Id='mc-embedded-subscribe'
          >
            <p className='has-text-shadow'>Begin your booking</p>
          </Button>
        </form>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = ({ actions }) => {
  const {
    nameVal,
    lastVal,
    phoneVal,
    mailVal,
    formFieldSet }
    = actions
  return {
    nameVal,
    lastVal,
    phoneVal,
    mailVal,
    formFieldSet
  }
}

export default connect(mapStateToProps, actions)(HeroForm)