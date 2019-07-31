export const payList = [
  {
     td1: 'Fohl Street Storage',
     td2: '3700 Fohl St, SW Canton, OH 44706',
     td3: '<a class="btn btn-primary" [routerLink]="[`/payment/fohl-street-storage/storageUnits`]" role="button">pay-rent</a>'
  },
  {
    td1: 'Location 2',
    td2: 'Address 3',
    td3: '<a class="btn btn-primary" [routerLink]="[`/payment/louisville-self-storage/storageUnits`]" [queryParams]="{ currentTab: `Storage Units` }" role="button">pay-rent</a>',
  },
  {
     td1: 'Location 3',
     td2: 'Address 3',
     td3: '<a class="btn btn-primary" [routerLink]="[`/payment/lincoln-street-storage/storageUnits`]" role="button">pay-rent</a>'
  },
];
