'use strict'

class PersonalInformationForm {
    static id = 0;
    
    constructor(fullName, emails, languages, interests, ContactDetails, FinancialArticle) {

        if (!emails || emails.length === 0) {
            throw new Error("Для контактних даних потрібно вказати щонайменше один email");
        }

        this.fullName = fullName;
        this.dateFilled = new Date().toLocaleDateString();
        this.emails = emails;
        this.languages = languages || [];
        this.interests = interests || [];
        this.ContactDetails = ContactDetails;
        this.FinancialArticle = FinancialArticle;
        this.id = PersonalInformationForm.id++;
    }

    addLanguage(languageName, level, position) {
        this.languages.push({
            languageName: languageName,
            proficiencyLevel: level,
            currentStatus: position
        });
    }

    removeInterest(languageName) {
        for (let i = 0; i < this.languages.length; i++) {
            if (this.languages[i].languageName === languageName) {
                this.languages.splice(i, 1);
                break;
            }
        }
    }
    

    addInterest(interestName, duration, benefit) {
        this.interests.push({
            interestName: interestName,
            duration: duration,
            usefulnessLevel: benefit
        });
    }

    removeInterest(interestName) {
        for (let i = 0; i < this.interests.length; i++) {
            if (this.interests[i].interestName === interestName) {
                this.interests.splice(i, 1);
                break;
            }
        }
    }

    addEmail(email) {
        this.emails.push(email);
    }

    removeEmail(email) {
        for (let i = 0; i < this.emails.length; i++) {
            if (this.emails[i].email === email) {
                this.emails.splice(i, 1);
                break;
            }
        }
    }

    setMonthlyExpenses() {

    }

    addFinancialArticle() {

    }

    removeFinancialArticle() {
        
    }

    getMostPopularMobileOperator() {

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
        }
    }
}

/* class LanguageLevel {
    constructor(level) {
        this.level = level;
    }
} */

const levels = {
    A0: 'A0',
    A1: 'A1',
    A2: 'A2',
    B1: 'B1',
    B2: 'B2',
    C1: 'C1',
    C2: 'C2'
};

/* class LanguageStatus {
    constructor(status) {
        this.status = status;
    }
} */

const position = {
    process: 'In process',
    pause: 'In pause'
};

class Interest {
    constructor(interestName, duration, usefulnessLevel) {
        this.interestName = interestName;
        this.duration = duration;
        this.usefulnessLevel = usefulnessLevel;
    }

    getInterest() {
        return {
            interestName: this.interestName,
            duration: this.duration,
            usefulnessLevel: this.usefulnessLevel
        }
    }
}

/* class InterestBenefit {
    constructor(benefit) {
        this.benefit = benefit;
    }
} */

const benefits = {
    1: 'Low',
    3: 'Middle',
    5: 'Hige'
};

class ContactDetails {
    constructor(mobileNumbers) {

        if(!mobileNumbers || mobileNumbers.length === 0) {
            throw new Error("Для контактних даних потрібно вказати щонайменше один мобільний номер");
        }

        if (new Set(mobileNumbers).size !== mobileNumbers.length) {
            throw new Error("Кожен мобільний номер має бути унікальним");
        }

        this.mobileNumbers = mobileNumbers;
        this.mobileOperator = "";
        this.monthlySubscriptionFee = 0;
    }

    addMobileNumber(mobileNumber) {
        this.mobileNumbers.push(mobileNumber);
    }

    setMobileOperator(operator) {
        this.mobileOperator = operator;
    }

    setmonthlySubscription(subscription) {
        this.monthlySubscription = subscription;
    }
}

class FinancialArticle {
    constructor(articleName, estimatedAmount, date) {
        this.articleName = articleName;
        this.estimatedAmount = estimatedAmount;
        this.date = date;
        this.expenses = [];
    }

    addExpense(articleName, estimatedAmount, date) {
        const expense = new FinancialExpense(
            articleName,
            estimatedAmount,
            date
            );
        this.expenses.push(expense);
    }

    getTotalExpense() {
        let total = 0;
        for (const expense of this.expenses) {
            total += expense.estimatedAmount;
        }
        return total;
    }
}

class DBForms {
    constructor() {
        this.forms = [];
    }
    
    getForm(id) {
        return this.forms.find(form => form.id === id);
    }

    getAllForms() {
        return this.forms;
    }

    addForm(form) {
        this.forms.push(form)
    }

    removeForm(id) {
        this.forms = this.forms.filter(form => form.id !== id);
    }

    // Метод для отримання переліку унікальних мов, якими володіють студенти
    getUniqueLanguages() {
        let uniqueLanguages = [];
        this.forms.forEach(form => {
            form.languages.forEach(lang => {
                if (!uniqueLanguages.includes(lang.languageName)) {
                    uniqueLanguages.push(lang.languageName);
                }
            });
        });
        return uniqueLanguages;
    }

    // Метод для отримання кількості студентів, які знають певну мову
    getStudentsCountByLanguage(languageName) {
        let count = 0;
        this.forms.forEach(form => {
            form.languages.forEach(lang => {
                if (lang.languageName === languageName) {
                    count++;
                }
            });
        });
        return count;
    }

    // Метод для отримання кількості студентів, які знають певну мову на певному рівні
    getStudentsCountByLanguageAndLevel(languageName, level) {
        let count = 0;
        this.forms.forEach(form => {
            form.languages.forEach(lang => {
                if (lang.languageName === languageName && lang.proficiencyLevel === level) {
                    count++;
                }
            });
        });
        return count;
    }
}



const formDatabase = new DBForms();

// Створення першої форми
const form1 = new PersonalInformationForm(
    "John Doe",
    "john.doe@example.com",
    new Language("English", levels.B2, position.process),
    new Interest('Playing computer games', '5 year', benefits[3]),
    new ContactDetails(["0123567890"]),
    [new FinancialArticle("Food", 700, '20.10.2023'),
     new FinancialArticle().getTotalExpense()]
);

// Додавання першої форми до бази даних
formDatabase.addForm(form1);
console.log("Додано першу форму до бази даних:", formDatabase.getAllForms());

// Створення другої форми
const form2 = new PersonalInformationForm(
    "Jane Smith",
    "jane.smith@example.com",
    new Language("French", levels.A1, position.pause),
    new Interest('Learning Programming', '3 year', benefits[5]),
    [new ContactDetails(["9876543210"])],
    [new FinancialArticle("Rent", 1000, '20.10.2023'),
     new FinancialArticle("Food", 400, '20.10.2023'),
     new FinancialArticle("Car", 500, '20.10.2023'),
     new FinancialArticle("Entertainment", 2000, '20.10.2023'),
     new FinancialArticle().getTotalExpense()]
);

// Додавання другої форми до бази даних
formDatabase.addForm(form2);
console.log("Додано другу форму до бази даних:", formDatabase.getAllForms());

// Видалення першої форми з бази даних
formDatabase.removeForm(form1.id);
console.log("Видалено першу форму з бази даних:", formDatabase.getAllForms());

// Створення третьої форми після видалення першої
const form3 = new PersonalInformationForm(
    "Alex Fluder",
    "alex.fluder@example.com",
    [new Language("Spanish", levels.B1, position.process),
     new Language("English", levels.B2, position.pause),
     new Language("Ukrainian", levels.C2, position.pause)],
    [new Interest('Learning Programming', '3 year', benefits[5]),
     new Interest('Playing Computer Games', '7 year', benefits[1]),
     new Interest('Reading', '2 year', benefits[3])],
    [new ContactDetails(["9876543210"])],
    [new FinancialArticle("Rent", 1000, '20.10.2023'),
     new FinancialArticle("Food", 400, '20.10.2023'),
     new FinancialArticle("Car", 500, '20.10.2023'),
     new FinancialArticle("Entertainment", 2000, '20.10.2023'),
     new FinancialArticle("Girl", 5000, '20.10.2023'),
     new FinancialArticle("Friends", 1600, '20.10.2023'),
     new FinancialArticle("Parents", 6000, '20.10.2023'),
     new FinancialArticle("On me", 9000, '20.10.2023'),
     new FinancialArticle().getTotalExpense()]
);

// Додавання третьої форми до бази даних після видалення першої
formDatabase.addForm(form3);
console.log("Додано третю форму до бази даних:", formDatabase.getAllForms())
