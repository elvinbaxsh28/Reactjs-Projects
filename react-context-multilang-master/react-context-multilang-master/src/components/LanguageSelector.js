import React, { useContext } from 'react';

import { languageOptions } from '../languages';
import { LanguageContext } from '../containers/Language';

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  //createContext ile yaratdigimiz LanguageContext-di burda set edirik

  // default dilin deyerini deyismek
  const handleLanguageChange = event => userLanguageChange(event.target.value);

  return (
    <select
      onChange={handleLanguageChange}
      value={userLanguage}
    >
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>{name}</option>
        // optionun icine dilin adin yazmaq ucun
      ))}
    </select>
  );
};
