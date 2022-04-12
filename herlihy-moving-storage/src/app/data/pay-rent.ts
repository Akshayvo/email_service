
export const tableHeader = [
  {
    data: 'Facility',
  },
  {
    data: 'Address'
  },
  {
    data: ''
  }
];

export const tableData = [
  {
    facility: ' Chillicothe',
    address: '747 Marietta Rd, Chillicothe, OH 45601',
    url: 'chillicothe/rent-sub/login'
  },
  {
    facility: 'Grove City',
    address: '3759 Jackson Pike, Grove City, OH 43123',
    url: 'grove-city/rent-sub/login'
  },
  
  
];

export const tableDataContactPage = [
  {
    facility: ' Chillicothe',
    address: '747 Marietta Rd, Chillicothe, OH 45601',
    url: 'chillicothe'
  },
  {
    facility: 'Grove City',
    address: '3759 Jackson Pike, Grove City, OH 43123',
    url: 'grove-city'
  },
  
];


export const loginDetail1 = [
  {
      userName: `Tenant's First Initial + Last Name`,
      password: `Tenant's Unit Number`,
      example: {
          code: `John Smith's First Unit Number was 0123`,
          userName: 'jsmith',
          password: '0123'
      }
      
  }
];

export const loginDetail2 = [
  {
      userName: `Tenant's Email address`,
      password: `Tenant's gate access code + last 4 of the phone number`,
      example: {
          code: `John Smith's Access Code is 1234 and Phone Number is 555-555-5555`,
          userName: 'jsmith@email.com',
          password: '12345555'
      }
      
  }
];
