'use strict';

class PersonalInformationForm {
    constructor(fullName, email, languages) {
        this.fullName = fullName;
        this.email = email;
        this.dataFilled = new Date().toLocaleDateString();
        this.languages = languages;
    }

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
