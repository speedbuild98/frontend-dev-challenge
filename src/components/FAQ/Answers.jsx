import React, {useState} from 'react';

//Unicons
import * as Unicons from '@iconscout/react-unicons';

const Answers = (props) => {

const [faq, setFaq] = useState(false);
const handleClick = () => setFaq(!faq);

  return (
    <div className="answers" onClick= {handleClick} >
      <p className="answers__title">
        {props.title}
        <Unicons.UilArrowDown className={!faq ? 'answers__arrow answers__arrow-hidden' : 'answers__arrow answers__arrow--visible' }/>
      </p>
      <p className={!faq ? 'answers__p answers__p--hidden' : 'answers__p answers__p--visible' }>
        {props.text}
      </p>
    </div>
  );
}

export default Answers