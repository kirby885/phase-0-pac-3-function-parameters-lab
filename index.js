function introduction(firstName) {
    return `Hi, my name is ${firstName}.`;
  };
  introduction("Aki");
  introduction("Samip");

function introductionWithLanguage(firstName, language) {
    return `Hi, my name is ${firstName} and I am learning to program in ${language}.`;
  };
introductionWithLanguage("Aki") ("Ember.js")
introductionWithLanguage("Samip") ("React")

function introductionWithLanguageOptional(firstName, language = `JavaScript`) {
    return `Hi, my name is ${firstName} and I am learning to program in ${language}.`;
  };
introductionWithLanguage("Gracie") ("")

function introductionWithLanguageOptional(firstName, language = `JavaScript`) {
    return `Hi, my name is ${firstName} and I am learning to program in ${language}.`;
  };
introductionWithLanguage("Gracie") ("Python")
