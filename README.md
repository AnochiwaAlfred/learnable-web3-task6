# Learnable '23 Task 6 - Credit Card Validation in JavaScript using Regular Expressions

Write a `JavaScript` program to validate a credit card number. You can indicate the credit card type you are validating ex. Visa, Mastercard etc.


- This code can be run with NodeJS

## How to Use

- Call the function `validateCard` with an argument of the `cardNumber`. The function will print if the card is a valid Verve, Master or VISA card.

### Visa:
- Begins with a 4.
- 16 digits in total.

### Mastercard:
- Begins with 5.
- 16 digits in total.

### Verve:
- Begins with 650 or 506, 507.
- 16 or 18 digits in total.




## Example

```javascript

validateCard('650912345678123456'); // Output: Verve Card is Valid
validateCard('5069123412341234'); // Output: Verve Card is Valid
validateCard('5079123412341234'); // Output: Verve Card is Valid
validateCard('5129123412341234'); // Output: MasterCard is Valid
validateCard('4069123412341234'); // Output: VISA Card is Valid
validateCard('5069123412341234242424'); // Output: Invalid Card
validateCard('50691234123'); // Output: Invalid Card
validateCard('2069123412341234'); // Output: Invalid Card
validateCard('40612412341234'); // Output: Invalid Card


