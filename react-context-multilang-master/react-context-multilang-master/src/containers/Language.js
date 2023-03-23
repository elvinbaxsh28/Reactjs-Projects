import React, { useState, createContext, useContext } from 'react';

import { languageOptions, dictionaryList } from '../languages';

// defaultu en olan LanguageContext create edirik
export const LanguageContext = createContext({
  userLanguage: 'en',
  dictionary: dictionaryList.en
});

export function LanguageProvider({ children }) {
  const defaultLanguage = window.localStorage.getItem('rcml-lang');
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'en');

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    // user-in lang-in burda set edirik
    userLanguageChange: selected => {
      const newLanguage = languageOptions[selected] ? selected : 'en'
      // optiona default olara en veriirik
      setUserLanguage(newLanguage);
      window.localStorage.setItem('rcml-lang', newLanguage);
    }
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};

// id ve hazirda olan dili goturmek
export function Text({ tid }) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[tid] || tid;
  //createcontaxt ile dictionaryList = { en, tr, az } -a esasen dili deyisirik
  // yani dil deyisende   en: 'English', bularda deyisir
                        // tr: 'Türkçe',
                       // az: 'Azerbaijan'
};
