export const payList = [
  {
     td1: 'Fohl Street Storage',
     td2: '3700 Fohl St, SW Canton, OH 44706',
     td3: '<a class="btn btn-primary" [routerLink]="[`/payment/fohl-street-storage/storageUnits`]" role="button">pay-rent</a>'
  },
  {
    td1: 'Louisville Self Storage',
    td2: 'Address 3',
    td3: '<a class="btn btn-primary" [routerLink]="[`/payment/louisville-self-storage/storageUnits`]" [queryParams]="{ currentTab: `Storage Units` }" role="button">pay-rent</a>',
  },
  {
     td1: 'Lincoln Street Storage',
     td2: 'Address 3',
     td3: '<a class="btn btn-primary" [routerLink]="[`/payment/lincoln-street-storage/storageUnits`]" role="button">pay-rent</a>'
  },
];


export const loginFoul = [
  {
    userName: `Tenant's Last Name`,
    password: `Tenant's gate access code`,
    example: {
        code: 'code is 1234',
        userName: 'smith',
        password: '1234'
    }
}
];

export const loginLouisville = [
  {
    userName: `Tenant's Last Name`,
    password: `Tenant's gate access code`,
    example: {
        code: 'code is 1234',
        userName: 'smith',
        password: '1234'
    }
}
];

export const loginLincoln = [
  {
    userName: `Tenant's Last Name`,
    password: `Tenant's Unit Number`,
    example: {
        code: 'Unit Number is 1234',
        userName: 'smith',
        password: '1234'
    }
}
];
