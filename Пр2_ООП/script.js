'use strict';

class PersonalInformationForm {
    constructor(fullName, email, languages) {
        this.fullName = fullName;
        this.email = email;
        this.dataFilled = new Date().toLocaleDateString();
        this.languages = languages;
    }'use strict';

class PersonalInformationForm {
    constructor(fullName, email, languages, interest) {
        this.fullName = fullName;
        this.email = email;
        this.dataFilled = new Date().toLocaleDateString();
        this.languages = languages;
        this.interest = interest;
    }

    addInterest(interest) {
        this.interest = interest;
    }

    addLanguage(language) {
        this.languages = language;
    }
}

class Language {
    constructor(languageName, proficiencyLevel, currentStatus) {
        this.languageName = languageName;
        this.proficiencyLevel = proficiencyLevel;
        this.currentStatus = currentStatus;
    }

    getLanguage() {
        return  {
            languageName: this.languageName,
            proficiencyLevel: this.proficiencyLevel,
            currentStatus: this.currentStatus
        };
    }
}

class Interest {
    constructor (interestName, duration, usefulnessLevel) {
        this.interestName = interestName;
        this.duration = duration;
        this.usefulnessLevel = usefulnessLevel;
    }
    
    getInterest() {
        
    }
}

class DBForms {
    constructor() {
        this.forms = [];
    }

    getForms() {
        return this.forms;
    }
    
    addForm(form) {
        this.forms.push(form);
    }
}

let myForm1 = new PersonalInformationForm('Nazar Talaievych', 'nazartalaievych@gmail.com', '', []);
let myForm2 = new PersonalInformationForm('Doctor X', 'example@gmail.com', [], '');


let myLanguage1 = new Language('English', 'B1+', 'In process');
let myLanguage2 = new Language('Spanish', 'B2', 'Native speaker');
let myLanguage3 = new Language('French', 'A2', 'Beginner');


let myInterest1 = new Interest('Football', '2 years', '6 of 10');
let myInterest2 = new Interest('Computer Games', '7 years', '5 of 10');
let myInterest3 = new Interest('Reading books', '11 years', '9 of 10');
let myInterest4 = new Interest('Puzzels', '6 years', '8 of 10');


myForm1.addLanguage(myLanguage1.getLanguage());
myForm2.addLanguage(myLanguage2.getLanguage());
myForm2.addLanguage(myLanguage3.getLanguage());

myForm2.addInterest(myInterest3.getInterest());
myForm2.addInterest(myInterest2.getInterest());
myForm2.addInterest(myInterest1.getInterest());

myForm1.addInterest(myInterest4.getInterest());
myForm1.addInterest(myInterest2.getInterest());


let dataBase = new DBForms();

dataBase.addForm(myForm1);
dataBase.addForm(myForm2);

console.log(dataBase.getForms());



















/* class FinancialArticle {
    constructor(articleName, estimatedAmount, data) {
        this.articleName
        this.estimatedAmount
        this.data
    }
    
    getArticleName() {
        
    }
    
    setArticleName() {
        
    }
    
    getEstimatedAmount() {
        
    }
    
    setEstimatedAmount() {
    
    }
}

class ContactDetail {
    constructor(mobileOperator, monthlySubscriptionFee) {
        this.mobileOperator
        this.monthlySubscriptionFee
    }
    
    getType() {
        
    }
    
    setType() {
        
    }
    
    getValue() {
        
    }
        
    setValue() {
        
    }
    
    getMobileOperator() {
        
    }
    
    setMobileOperator() {
        
    }
    
    getMonthlyFee() {
        
    }
    
    setMonthlyFee() {
        
    }
}

class Interest {
    constructor(interestName, duration, usefulnessLevel) {
        this.interestName
        this.duration
        this.usefulnessLevel
    }
    
    getInterestName() {
        
    }
    
    setInterestName() {
        
    }
    
    getDuration() {
        
    }
        
    setDuration() {
        
    }
    
    getUsefulnessLevel() {
        
    }
    
    setUsefulnessLevel() {
        
    }
} */

    addLanguage(language) {
        this.languages.push(language);
    }
}

class Language {
    constructor(languageName, proficiencyLevel, currentStatus) {
        this.languageName = languageName;
        this.proficiencyLevel = proficiencyLevel;
        this.currentStatus = currentStatus;
    }

    getLanguage() {
        return {
            languageName: this.languageName,
            proficiencyLevel: this.proficiencyLevel,
            currentStatus: this.currentStatus
        };
    }
}

class DBForms {
    constructor() {
        this.forms = [];
    }

    getForms() {
        return this.forms;
    }

    addForm(form) {
        this.forms.push(form);
    }
}

let myForm1 = new PersonalInformationForm('Nazar Talaievych', 'nazartalaievych@gmail.com', []);
let myForm2 = new PersonalInformationForm('Doctor X', 'example@gmail.com', []);

let myLanguage1 = new Language('English', 'B1+', 'In process');
let myLanguage2 = new Language('Spanish', 'B2', 'Native speaker');
let myLanguage3 = new Language('French', 'A2', 'Beginner');

myForm1.addLanguage(myLanguage1.getLanguage());
myForm2.addLanguage(myLanguage2.getLanguage());
myForm2.addLanguage(myLanguage3.getLanguage());

let dataBase = new DBForms();

dataBase.addForm(myForm1);
dataBase.addForm(myForm2);

console.log(dataBase.getForms());



















/* class FinancialArticle {
    constructor(articleName, estimatedAmount, data) {
        this.articleName
        this.estimatedAmount
        this.data
    }
    
    getArticleName() {
        
    }
    
    setArticleName() {
        
    }
    
    getEstimatedAmount() {
        
    }
    
    setEstimatedAmount() {
    
    }
}

class ContactDetail {
    constructor(mobileOperator, monthlySubscriptionFee) {
        this.mobileOperator
        this.monthlySubscriptionFee
    }
    
    getType() {
        
    }
    
    setType() {
        
    }
    
    getValue() {
        
    }
        
    setValue() {
        
    }
    
    getMobileOperator() {
        
    }
    
    setMobileOperator() {
        
    }
    
    getMonthlyFee() {
        
    }
    
    setMonthlyFee() {
        
    }
}

class Interest {
    constructor(interestName, duration, usefulnessLevel) {
        this.interestName
        this.duration
        this.usefulnessLevel
    }
    
    getInterestName() {
        
    }
    
    setInterestName() {
        
    }
    
    getDuration() {
        
    }
        
    setDuration() {
        
    }
    
    getUsefulnessLevel() {
        
    }
    
    setUsefulnessLevel() {
        
    }
} */
