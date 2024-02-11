// Write a JavaScript program to validate a credit card number. You can indicate the credit card type you are validating ex. Visa, Mastercard etc.

// PS: Kindly drop a brief description that explains the regex pattern you came up with. 


// Visa:
// Begins with a 4.
// 16 digits in total.

// Mastercard:
// Begins with 5.
// 16 digits in total.

// Verve:
// Begins with 650 or 506, 507.
// 16 or 18 digits in total.

const validateCard = (cardNumber) => {
    const regExVISA = /^4\d{15}$/;
    const regExMasterCard = /^5\d{15}$/;
    const regExVerve = /^(650|506|507)\d{13}(?:\d{2})?$/;

    let checkCard = false;
    if (regExVerve.test(cardNumber)) {
        checkCard = "Verve Card is Valid";
    } else if (regExMasterCard.test(cardNumber)) {
        checkCard = "MasterCard is Valid";
    } else if (regExVISA.test(cardNumber)) {
        checkCard = "VISA Card is Valid";
    } else {
        checkCard = 'Invalid Card Type';
    }
    console.log(checkCard)
}


validateCard('650912345678123456'); // Output: Verve Card is Valid
validateCard('5069123412341234'); // Output: Verve Card is Valid
validateCard('5079123412341234'); // Output: Verve Card is Valid
validateCard('5129123412341234'); // Output: MasterCard is Valid
validateCard('4069123412341234'); // Output: VISA Card is Valid
validateCard('5069123412341234242424'); // Output: Invalid Card
validateCard('50691234123'); // Output: Invalid Card
validateCard('2069123412341234'); // Output: Invalid Card
validateCard('40612412341234'); // Output: Invalid Card

