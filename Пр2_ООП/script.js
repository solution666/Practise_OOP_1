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

const levels = {
    A0: 'A0',
    A1: 'A1',
    A2: 'A2',
    B1: 'B1',
    B2: 'B2',
    C1: 'C1',
    C2: 'C2'
};

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

const benefits = {
    1: 'Low',
    3: 'Middle',
    5: 'Hige'
};

class ContactDetails {
    constructor(mobileNumbers, mobileOperator, monthlySubscriptionFee) {

        if(!mobileNumbers || mobileNumbers.length === 0) {
            throw new Error("Для контактних даних потрібно вказати щонайменше один мобільний номер");
        }

        if (new Set(mobileNumbers).size !== mobileNumbers.length) {
            throw new Error("Кожен мобільний номер має бути унікальним");
        }

        this.mobileNumbers = mobileNumbers;
        this.mobileOperator = mobileOperator;
        this.monthlySubscriptionFee = monthlySubscriptionFee;
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
}

class DBForms {
    constructor() {
        this.forms = [];
    }
    
    getForm(id) {
        return this.forms.find(form => form.id === id);
    }

    getAllForms() {
        this.forms.forEach(form => {
            console.log("fullName:", form.fullName);
            console.log("dateFilled:", form.dateFilled);
            console.log("emails:", form.emails);
            console.log("Languages:");
            form.languages.forEach(lang => {
                console.log("  languageName:", lang.languageName);
                console.log("  proficiencyLevel:", lang.proficiencyLevel);
                console.log("  currentStatus:", lang.currentStatus);
            });
            console.log("Interests:");
            form.interests.forEach(interest => {
                console.log("  interestName:", interest.interestName);
                console.log("  duration:", interest.duration);
                console.log("  usefulnessLevel:", interest.usefulnessLevel);
            });
            console.log("ContactDetails:");
            form.ContactDetails.forEach(contactDetails => {
                console.log("  mobileNumbers:", contactDetails.mobileNumbers);
                console.log("  mobileOperator:", contactDetails.mobileOperator);
                console.log("  monthlySubscriptionFee:", contactDetails.monthlySubscriptionFee);
            });
            console.log("FinancialArticle:");
            form.FinancialArticle.forEach(article => {
                console.log("  articleName:", article.articleName);
                console.log("  estimatedAmount:", article.estimatedAmount);
                console.log("  date:", article.date);
            });
            console.log("TotalExpense:")
            let total = 0;
            form.FinancialArticle.forEach(artical => {
                total += artical.estimatedAmount;
            })
            console.log(total);
            console.log("-----------------------------------");
        });
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
    
    // Метод для отримання N абонентів які витрачають на мобільний зв’язок найбільше
    getTopNMobileSpending(N) {
        const formsWithContactDetails = this.forms.filter(form => form.ContactDetails && form.ContactDetails.length > 0);
        const sortedForms = formsWithContactDetails.slice().sort((a, b) => {
            const aMaxSpending = Math.max(...a.ContactDetails.map(contact => contact.monthlySubscriptionFee || 0));
            const bMaxSpending = Math.max(...b.ContactDetails.map(contact => contact.monthlySubscriptionFee || 0));
            return bMaxSpending - aMaxSpending;
        });
        
        const topSpendingForms = [];
        for (let i = 0; i < N && i < sortedForms.length; i++) {
            const maxSpending = Math.max(...sortedForms[i].ContactDetails.map(contact => contact.monthlySubscriptionFee || 0));
            const contactWithMaxSpending = sortedForms[i].ContactDetails.find(contact => contact.monthlySubscriptionFee === maxSpending);
            topSpendingForms.push({ fullName: sortedForms[i].fullName, id: sortedForms[i].id, maxSpending });
        }
    
        return topSpendingForms;
    }
    
    // Метод для отримання N абонентів які витрачають на мобільний зв’язок найменше
    getBottomNMobileSpending(N) {
        const formsWithContactDetails = this.forms.filter(form => form.ContactDetails && form.ContactDetails.length > 0);
        const sortedForms = formsWithContactDetails.slice().sort((a, b) => {
            const aMinSpending = Math.min(...a.ContactDetails.map(contact => contact.monthlySubscriptionFee || 0));
            const bMinSpending = Math.min(...b.ContactDetails.map(contact => contact.monthlySubscriptionFee || 0));
            return aMinSpending - bMinSpending;
        });
    
        const bottomSpendingForms = [];
        for (let i = 0; i < N && i < sortedForms.length; i++) {
            const minSpending = Math.min(...sortedForms[i].ContactDetails.map(contact => contact.monthlySubscriptionFee || 0));
            const contactWithMinSpending = sortedForms[i].ContactDetails.find(contact => contact.monthlySubscriptionFee === minSpending);
            bottomSpendingForms.push({ fullName: sortedForms[i].fullName, id: sortedForms[i].id, minSpending });
        }
    
        return bottomSpendingForms;
    }         
}

const formDatabase = new DBForms();

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
    [new ContactDetails(["9876543210"], "Vodafone", 200),
     new ContactDetails(["1236543210"], "Kyivstar", 500)],
    [new FinancialArticle("Rent", 1000, '20.10.2023'),
     new FinancialArticle("Food", 400, '20.10.2023'),
     new FinancialArticle("Car", 500, '20.10.2023'),
     new FinancialArticle("Entertainment", 2000, '20.10.2023'),
     new FinancialArticle("Girl", 5000, '20.10.2023'),
     new FinancialArticle("Friends", 1600, '20.10.2023'),
     new FinancialArticle("Parents", 6000, '20.10.2023'),
     new FinancialArticle("On me", 9000, '20.10.2023')]
);

const form4 = new PersonalInformationForm(
    "Petya Claud",
    "alex.fluder@example.com",
    [new Language("English", levels.B2, position.process)],
    [new Interest('Learning Programming', '3 year', benefits[5])],
    [new ContactDetails(["9876543210"], "Vodafone", 430),
     new ContactDetails(["9876543210"], "Vodafone", 1000)],
    [new FinancialArticle("Rent", 1000, '20.10.2023'),
     new FinancialArticle("Food", 1000, '20.10.2023')]
);

const form5 = new PersonalInformationForm(
    "Calorkod Safkin",
    "alex.fluder@example.com",
    [new Language("Spanish", levels.B1, position.process)],
    [new Interest('Learning Programming', '3 year', benefits[5])],
    [new ContactDetails(["9876543210"], "Vodafone", 500),
     new ContactDetails(["9876543210"], "Vodafone", 100)],
    [new FinancialArticle("Rent", 1000, '20.10.2023')]
);

const form6 = new PersonalInformationForm(
    "Roland Pendrovski",
    "alex.fluder@example.com",
    [new Language("English", levels.B1, position.process)],
    [new Interest('Learning Programming', '3 year', benefits[5])],
    [new ContactDetails(["9876543210"], "Vodafone", 200),
     new ContactDetails(["9876543210"], "Vodafone", 600)],
    [new FinancialArticle("Rent", 1000, '20.10.2023')]
);

const form7 = new PersonalInformationForm(
    "Valyka Fulka",
    "alex.fluder@example.com",
    [new Language("Spanish", levels.B1, position.process)],
    [new Interest('Learning Programming', '3 year', benefits[5])],
    [new ContactDetails(["9876543210"], "Vodafone", 140),
     new ContactDetails(["9876543210"], "Vodafone", 760)],
    [new FinancialArticle("Rent", 1000, '20.10.2023')]
);

// Додавання третьої форми до бази даних після видалення першої
formDatabase.addForm(form3);
formDatabase.addForm(form4);
formDatabase.addForm(form5);
formDatabase.addForm(form6);
formDatabase.addForm(form7);
console.log("Виводимо всі форми в консоль:", formDatabase.getAllForms())



console.log("Унікальні мови, якими володіють студенти:", formDatabase.getUniqueLanguages());

const languageToCheck = "English";
console.log(`Кількість студентів, які знають мову ${languageToCheck}:`, formDatabase.getStudentsCountByLanguage(languageToCheck));

const languageToCheck2 = "English";
const levelToCheck2 = levels.B2;
console.log(`Кількість студентів, які знають мову ${languageToCheck2} на рівні ${levelToCheck2}:`, formDatabase.getStudentsCountByLanguageAndLevel(languageToCheck2, levelToCheck2));

const topN = 2;
console.log(`${topN} абоненти, які витрачають найбільше на мобільний зв'язок:`, formDatabase.getTopNMobileSpending(topN));

const bottomN = 2;
console.log(`${bottomN} абоненти, які витрачають найменше на мобільний зв'язок:`, formDatabase.getBottomNMobileSpending(bottomN));
