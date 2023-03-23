import React, { useContext, useState } from 'react';

import { Text, LanguageContext } from '../containers/Language';

const selectOptions = ['option1', 'option2', 'option3'];

export default function Explore() {
  const [clickText, setClickText] = useState();
  const [selectedOption, setSelectedOption] = useState();
  const { dictionary } = useContext(LanguageContext);//createcontxt ile dictionary yaradiriq

  const handleClick = () => {
    setClickText(<Text tid="buttonClicked"/>);//clickden sonraki yazini yazdirir
  }

  const handleOptionChange = e => {
    setSelectedOption(e.target.value);//option-nun dilin deyisir
  }

  return (
    <div>
      <h1><Text tid="exploreHeader" /></h1>
      <p><Text tid="welcomeDescription" /></p>

      <div>
        <input type="text" placeholder={dictionary.enterText} />
        <button onClick={handleClick}>
          <Text tid="clickMe" />
        </button>
        <p>{clickText}</p> 
        {/* inputun valeu-sun yazdirir */}
      </div>

      <div>
        <select
          onChange={handleOptionChange}
          // onchage olanda inputun deyismeyi ucucn
          value={selectedOption}
          //selected olmus  inputun deyisilmesi ucun
        >
          {selectOptions.map(option => (
            <option key={option} value={option}>
              {dictionary[option]}
              {/* //optionlari map edirik visualda dili deyismek ucun */}
            </option>
          ))}
        </select>
      </div>

      
    </div>
  );
}
