import React from 'react';
import Fieldinput from './formComponents/Fieldinput';

const HeroForm = () => {
  return (
    <React.Fragment>
      <div id="mc_embed_signup">
      <form 
        action="https://gmail.us20.list-manage.com/subscribe/post?u=db24a1644fed585d42738a06a&amp;id=c9bcbf0148"
        method="post" 
        id="mc-embedded-subscribe-form" 
        name="mc-embedded-subscribe-form" 
        class="validate" 
        target="_blank"
        novalidate
      >
        <div className="columns">
          <div className="column">
            <Fieldinput
              Type='text'
              Name='FNAME'
              _Id='mce-FNAME'
              Placeholder='Please enter your first name'
              inputIcon='far fa-user'
              Value=''
              formHandler=''
            >
              First Name
            </Fieldinput>
            <Fieldinput
              Type='text'
              Name='PHONE'
              _Id='mce-PHONE'
              Placeholder='123 456 7890'
              inputIcon='fas fa-mobile'
              Value=''
              formHandler=''
            >
              Phone number
            </Fieldinput>
          </div>
          <div className="column">
            <Fieldinput
              Type='text'
              Name='LNAME'
              _Id='mce-LNAME'
              Placeholder='Please enter your last name'
              inputIcon='far fa-user'
              Value=''
              formHandler=''
            >
              Last Name
            </Fieldinput>
            <Fieldinput
              Type='text'
              Name='EMAIL'
              _Id='mce-EMAIL'
              Placeholder='Please enter your last name'
              inputIcon='fas fa-envelope-open'
              Value=''
              formHandler=''
            >
              e-mail
            </Fieldinput>
          </div>
        </div>
      </form>
      </div>
    </React.Fragment>
  )
}

export default HeroForm;