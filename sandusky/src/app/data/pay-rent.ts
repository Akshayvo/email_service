export const loginDetail = [
    {
        userName: `First initial + Last Name`,
        password: `4 Digit Unit Number`,
        instruction: `All unit numbers are stored in our system using 4 digits. If your unit number has 3 digits, you will need to use a preceding zero. If your unit number has a letter in the beginning it needs to be capitalized.`,
        example: {
            code: '450',
            userName: 'jsmith',
            password: '0450'
        },
        otherExample: {
            code: 'A123',
            userName: 'jsmith',
            password: 'A123'
        }
    }
];
