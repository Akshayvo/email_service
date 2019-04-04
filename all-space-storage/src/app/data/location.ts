export const tabs = [
    {
        id: '1',
        name: 'Storage Units',
        path: './',
        active: true,
    },
    {
        id: '2',
        name: 'Unit Sizer',
        path: './unitSizer',
        active: false,
    },
    {
        id: '3',
        name: 'Reserve Unit',
        path: './reserveUnit',
        active: false,
    },
    {
        id: '4',
        name: 'About Us',
        path: './about',
        active: false,
    },
    {
        id: '5',
        name: 'Directions',
        path: './directions',
        active: false,
    },
    {
        id: '6',
        name: 'Reviews',
        path: './reviews',
        active: false,
    },
];

// export const tabs = [
//     {
//         id: '1',
//         name: 'Storage Units',
//         path: './',
//         active: true,
//     },
//     {
//         id: '2',
//         name: 'Unit Sizer',
//         path: './unitSizer',
//         active: false,
//     },
//     {
//         id: '3',
//         name: 'Reserve Unit',
//         path: './reserveUnit',
//         active: false,
//     },
//     {
//         id: '4',
//         name: 'Gallery',
//         path: './photos',
//         active: false,
//     },
//     {
//         id: '5',
//         name: 'About Us',
//         path: './about',
//         active: false,
//     },
//     {
//         id: '6',
//         name: 'Directions',
//         path: './directions',
//         active: false,
//     },
// ];

export const unitSizerLocation1 = [
    {
        size: '5\' x 5\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/5x5.png',
        data: `Basically the size of a closet (with a very high ceiling). Store boxes, holiday items, clothes, etc.`,
        amenities: [
            { content: `Size of closet with very high ceiling`, },
            { content: `Boxes, holiday items, clothing`, },
            { content: `Ski gear and garden tools`, },
          ],
    },

    {
        size: '5\' x 10\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/5x10.png',
        data: `Store the contents of one room. Also the right size for a motorcycle.`,
        amenities: [
            { content: `Store contents of <b>one room</b>`, },
            { content: `Off season clothing`, },
            { content: `Ideal for motorcycles`, },
            { content: `Good for patio furniture` }
          ],
    },
    {
        size: '5\' x 15\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/5x15.png',
        data: `Comfortably holds the contents of a one bedroom apartment as well as some sports equipment.`,
        amenities: [
            { content: `Holds <b>1 to 2 rooms</b> of furniture`, },
            { content: `Ideal for sports equipment`, },
            { content: `Extra space for apartment dwellers`, },
        ],
    },
    {
        size: '10\' x 10\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x15.png',
        data: `Perfectly holds the contents of a one or two bedroom apartment. This
                unit size is also well suited for file storage or for your four-wheeler.`,
        amenities: [
            { content: `Stores <b>2 to 3 rooms</b> of furniture`, },
            { content: `Ideal for 4 wheeler; file storage`, },
            { content: `Easier to place bulk items; aisle`, },
            { content: `1/2 size of a single car garage` }
        ],
    },
    {
        size: '10\' x 15\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x15.png',
        data: `Need to store a compact car, a jet ski or snowmobile? This is the space you need.`,
        amenities: [
            { content: `Size for <b>an apartment or small house</b>`, },
            { content: `Jet skies or snowmobiles`, },
        ],
    },

    {
        size: `10' x 20'`,
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x20.png',
        data: `This size can accommodate a larger car or the contents of a large apartment or small house.`,
        amenities: [
            { content: `Large car, size of 1 car garage`, },
            { content: `<b>3 to 4 rooms</b> of furniture`, },
            { content: `Good for business storage`, },
        ],
    },
    {
        size: '10\' x 25\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x25.png',
        data: `A great space for a three bedroom apartment or a small house.`,
        amenities: [
            { content: `<b>Three bedroom apartment</b>`, },
            { content: `Furniture and totes or boxes`, },
            { content: `<b>Regular home</b> sized storage`, },
        ],
    },
    {
        size: '10\' x 30\' or 12\' x 30\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x30.png',
        data: `Great for commercial use or for storing the contents of <b>a large house</b>, boats, RV's, etc.`,
        amenities: [
            { content: `Commercial use`, },
            { content: `Contents of <b>a large house</b>`, },
            { content: `Some have double doors, easy access`, },
            { content: `Some are end units with easy truck access` }
        ],
    }
];

export const unitSizerLocation2 = [
    {
        size: '5\' x 5\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/5x5.png',
        data: `Basically the size of a closet (with a very high ceiling). Store boxes, holiday items, clothes, etc.`,
        amenities: [
            { content: `Size of closet with very high ceiling`, },
            { content: `Boxes, holiday items, clothing`, },
            { content: `Ski gear and garden tools`, },
          ],
    },

    {
        size: '5\' x 10\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/5x10.png',
        data: `Store the contents of one room. Also the right size for a motorcycle.`,
        amenities: [
            { content: 'Store contents of <b>one room</b>', },
            { content: `Off season clothing`, },
            { content: `Ideal for motorcycles`, },
            { content: `Good for patio furniture` }
          ],
    },
    {
        size: '5\' x 15\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/5x15.png',
        data: `Comfortably holds the contents of a one bedroom apartment as well as some sports equipment.`,
        amenities: [
            { content: `Holds <b>1 to 2 rooms</b> of furniture`, },
            { content: `Ideal for sports equipment`, },
            { content: `Extra space for apartment dwellers`, },
        ],
    },
    {
        size: '10\' x 10\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x15.png',
        data: `Perfectly holds the contents of a one or two bedroom apartment. This
                unit size is also well suited for file storage or for your four-wheeler.`,
        amenities: [
            { content: `Stores <b>2 to 3 rooms</b> of furniture`, },
            { content: `Ideal for 4 wheeler; file storage`, },
            { content: `Easier to place bulk items; aisle`, },
            { content: `1/2 size of a single car garage` }
        ],
    },
    {
        size: '10\' x 15\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x15.png',
        data: `Need to store a compact car, a jet ski or snowmobile? This is the space you need.`,
        amenities: [
            { content: `Size for <b>an apartment or small house</b>`, },
            { content: `Jet skies or snowmobiles`, },
        ],
    },

    {
        size: `10' x 20'`,
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x20.png',
        data: `This size can accommodate a larger car or the contents of a large apartment or small house.`,
        amenities: [
            { content: `Large car, size of 1 car garage`, },
            { content: `<b>3 to 4 rooms</b> of furniture`, },
            { content: `Good for business storage`, },
        ],
    },
    {
        size: '10\' x 25\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x25.png',
        data: `A great space for a three bedroom apartment or a small house.`,
        amenities: [
            { content: `<b>Three bedroom apartment</b>`, },
            { content: `Furniture and totes or boxes`, },
            { content: `<b>Regular home</b> sized storage`, },
        ],
    },
    {
        size: '10\' x 30\' or 12\' x 30\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x30.png',
        data: `Great for commercial use or for storing the contents of a large house, boats, RV's, etc.`,
        amenities: [
            { content: `Commercial use`, },
            { content: `Contents of <b>a large house</b>`, },
            { content: `Some have double doors, easy access`, },
            { content: `Some are end units with easy truck access` }
        ],
    }
];

export const unitSizerLocation3 = [
    {
        size: '5\' x 5\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/5x5.png',
        data: `Basically the size of a closet (with a very high ceiling). Store boxes, holiday items, clothes, etc.`,
        amenities: [
            { content: `Size of closet with very high ceiling`, },
            { content: `Boxes, holiday items, clothing`, },
            { content: `Ski gear and garden tools`, },
          ],
    },

    {
        size: '5\' x 10\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/5x10.png',
        data: `Store the contents of one room. Also the right size for a motorcycle.`,
        amenities: [
            { content: `Store contents of <b>one room</b>`, },
            { content: `Off season clothing`, },
            { content: `Ideal for motorcycles`, },
            { content: `Good for patio furniture` }
          ],
    },
    {
        size: '5\' x 15\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/5x15.png',
        data: `Comfortably holds the contents of a one bedroom apartment as well as some sports equipment.`,
        amenities: [
            { content: `Holds <b>1 to 2 rooms</b> of furniture`, },
            { content: `Ideal for sports equipment`, },
            { content: `Extra space for apartment dwellers`, },
        ],
    },
    {
        size: '10\' x 10\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x15.png',
        data: `Perfectly holds the contents of a one or two bedroom apartment. This
                unit size is also well suited for file storage or for your four-wheeler.`,
        amenities: [
            { content: `Stores <b>2 to 3 rooms</b> of furniture`, },
            { content: `Ideal for 4 wheeler; file storage`, },
            { content: `Easier to place bulk items; aisle`, },
            { content: `1/2 size of a single car garage` }
        ],
    },
    {
        size: '10\' x 15\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x15.png',
        data: `Need to store a compact car, a jet ski or snowmobile? This is the space you need.`,
        amenities: [
            { content: `Size for <b>an apartment or small house</b>`, },
            { content: `Jet skies or snowmobiles`, },
        ],
    },

    {
        size: `10' x 20'`,
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x20.png',
        data: `This size can accommodate a larger car or the contents of a large apartment or small house.`,
        amenities: [
            { content: `Large car, size of 1 car garage`, },
            { content: `<b>3 to 4 rooms</b> of furniture`, },
            { content: `Good for business storage`, },
        ],
    },
    {
        size: '10\' x 25\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x25.png',
        data: `A great space for a three bedroom apartment or a small house.`,
        amenities: [
            { content: `<b>Three bedroom apartment</b>`, },
            { content: `Furniture and totes or boxes`, },
            { content: `<b>Regular home</b> sized storage`, },
        ],
    },
    {
        size: '10\' x 30\' or 12\' x 30\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x30.png',
        data: `Great for commercial use or for storing the contents of a large house, boats, RV's, etc.`,
        amenities: [
            { content: `Commercial use`, },
            { content: `Contents of <b>a large house</b>`, },
            { content: `Some have double doors, easy access`, },
            { content: `Some are end units with easy truck access` }
        ],
    }
];

export const unitSizerLocation4 = [
    {
        size: '5\' x 5\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/5x5.png',
        data: `Basically the size of a closet (with a very high ceiling). Store boxes, holiday items, clothes, etc.`,
        amenities: [
            { content: `Size of closet with very high ceiling`, },
            { content: `Boxes, holiday items, clothing`, },
            { content: `Ski gear and garden tools`, },
          ],
    },

    {
        size: '5\' x 10\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/5x10.png',
        data: `Store the contents of one room. Also the right size for a motorcycle.`,
        amenities: [
            { content: `Store contents of <b>one room</b>`, },
            { content: `Off season clothing`, },
            { content: `Ideal for motorcycles`, },
            { content: `Good for patio furniture` }
          ],
    },
    {
        size: '5\' x 15\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/5x15.png',
        data: `Comfortably holds the contents of a one bedroom apartment as well as some sports equipment.`,
        amenities: [
            { content: `Holds <b>1 to 2 rooms</b> of furniture`, },
            { content: `Ideal for sports equipment`, },
            { content: `Extra space for apartment dwellers`, },
        ],
    },
    {
        size: '10\' x 10\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x15.png',
        data: `Perfectly holds the contents of a one or two bedroom apartment. This
                unit size is also well suited for file storage or for your four-wheeler.`,
        amenities: [
            { content: `Stores <b>2 to 3 rooms</b> of furniture`, },
            { content: `Ideal for 4 wheeler; file storage`, },
            { content: `Easier to place bulk items; aisle`, },
            { content: `1/2 size of a single car garage` }
        ],
    },
    {
        size: '10\' x 15\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x15.png',
        data: `Need to store a compact car, a jet ski or snowmobile? This is the space you need.`,
        amenities: [
            { content: `Size for <b>an apartment or small house</b>`, },
            { content: `Jet skies or snowmobiles`, },
        ],
    },

    {
        size: `10' x 20'`,
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x20.png',
        data: `This size can accommodate a larger car or the contents of a large apartment or small house.`,
        amenities: [
            { content: `Large car, size of 1 car garage`, },
            { content: `<b>3 to 4 rooms</b> of furniture`, },
            { content: `Good for business storage`, },
        ],
    },
    {
        size: '10\' x 25\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x25.png',
        data: `A great space for a three bedroom apartment or a small house.`,
        amenities: [
            { content: `<b>Three bedroom apartment</b>`, },
            { content: `Furniture and totes or boxes`, },
            { content: `<b>Regular home</b> sized storage`, },
        ],
    },
    {
        size: '10\' x 30\' or 12\' x 30\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x30.png',
        data: `Great for commercial use or for storing the contents of a large house, boats, RV's, etc.`,
        amenities: [
            { content: `Commercial use`, },
            { content: `Contents of <b>a large house</b>`, },
            { content: `Some have double doors, easy access`, },
            { content: `Some are end units with easy truck access` }
        ],
    }
];

export const unitSizerLocation5 = [
    {
        size: '5\' x 5\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/5x5.png',
        data: `Basically the size of a closet (with a very high ceiling). Store boxes, holiday items, clothes, etc.`,
        amenities: [
            { content: `Size of closet with very high ceiling`, },
            { content: `Boxes, holiday items, clothing`, },
            { content: `Ski gear and garden tools`, },
          ],
    },

    {
        size: '5\' x 10\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/5x10.png',
        data: `Store the contents of one room. Also the right size for a motorcycle.`,
        amenities: [
            { content: `Store contents of <b>one room</b>`, },
            { content: `Off season clothing`, },
            { content: `Ideal for motorcycles`, },
            { content: `Good for patio furniture` }
          ],
    },
    {
        size: '5\' x 15\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/5x15.png',
        data: `Comfortably holds the contents of a one bedroom apartment as well as some sports equipment.`,
        amenities: [
            { content: `Holds <b>1 to 2 rooms</b> of furniture`, },
            { content: `Ideal for sports equipment`, },
            { content: `Extra space for apartment dwellers`, },
        ],
    },
    {
        size: '10\' x 10\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x15.png',
        data: `Perfectly holds the contents of a one or two bedroom apartment. This
                unit size is also well suited for file storage or for your four-wheeler.`,
        amenities: [
            { content: `Stores <b>2 to 3 rooms</b> of furniture`, },
            { content: `Ideal for 4 wheeler; file storage`, },
            { content: `Easier to place bulk items; aisle`, },
            { content: `1/2 size of a single car garage` }
        ],
    },
    {
        size: '10\' x 15\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x15.png',
        data: `Need to store a compact car, a jet ski or snowmobile? This is the space you need.`,
        amenities: [
            { content: `Size for <b>an apartment or small house</b>`, },
            { content: `Jet skies or snowmobiles`, },
        ],
    },

    {
        size: `10' x 20'`,
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x20.png',
        data: `This size can accommodate a larger car or the contents of a large apartment or small house.`,
        amenities: [
            { content: `Large car, size of 1 car garage`, },
            { content: `<b>3 to 4 rooms</b> of furniture`, },
            { content: `Good for business storage`, },
        ],
    },
    {
        size: '10\' x 25\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x25.png',
        data: `A great space for a three bedroom apartment or a small house.`,
        amenities: [
            { content: `<b>Three bedroom apartment</b>`, },
            { content: `Furniture and totes or boxes`, },
            { content: `<b>Regular home</b> sized storage`, },
        ],
    },
    {
        size: '10\' x 30\' or 12\' x 30\'',
        img: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/unit-sizer/10x30.png',
        data: `Great for commercial use or for storing the contents of a large house, boats, RV's, etc.`,
        amenities: [
            { content: `Commercial use`, },
            { content: `Contents of <b>a large house</b>`, },
            { content: `Some have double doors, easy access`, },
            { content: `Some are end units with easy truck access` }
        ],
    }
];


export const headingLocation1 = `AllSpace Storage - Poughkeepsie/Arlington`;

export const headingLocation2 = `AllSpace Storage - Highland`;

export const headingLocation3 = `AllSpace Storage - Lake Katrine`;

export const headingLocation4 = `AllSpace Storage - Pawling`;

export const headingLocation5 = `AllSpace Storage - Poughkeepsie/Hyde Park`;

// tslint:disable-next-line:max-line-length
export const aboutUsImageLocation1 = `https://s3.amazonaws.com/syrasoft-tenant-facing-websites/AllSpace_Images/Photos/Poughkeepsie-Arlington/poughkeepsie-arlington.jpg`;

// tslint:disable-next-line:max-line-length
export const aboutUsImageLocation2 = `https://s3.amazonaws.com/syrasoft-tenant-facing-websites/AllSpace_Images/Photos/NewPaltz-Highland/new-paltz-highland.jpg`;

// tslint:disable-next-line:max-line-length
export const aboutUsImageLocation3 = `https://s3.amazonaws.com/syrasoft-tenant-facing-websites/AllSpace_Images/Photos/Kingston-LakeKatrine/kingston-lake-katrine.jpg`;

// tslint:disable-next-line:max-line-length
export const aboutUsImageLocation4 = `https://s3.amazonaws.com/syrasoft-tenant-facing-websites/AllSpace_Images/Photos/Pawling-Brewster/pawling-brewster.jpg`;

// tslint:disable-next-line:max-line-length
export const aboutUsImageLocation5 = `https://s3.amazonaws.com/syrasoft-tenant-facing-websites/AllSpace_Images/Photos/Poughkeepsie-HydePark/poughkeepsie-hydepark.jpg`;

export const alt1 = ``;
export const alt2 = ``;
export const alt3 = ``;
export const alt4 = ``;
export const alt5 = `Photograph of the exterior of the main office at AllSpace Storage - Poughkeepsie/Hyde Park`;

export const aboutUsLocation1 = [
    {
        p: `Since 1998 our Poughkeepsie/Arlington location has been assisting your friends and family with their
        storage choices. Our storage associates will gladly work with you on which size unit will best meet your needs;
        from the small closet to the very large garage size, we can provide storage solutions for apartment dwellers,
        homeowners, and commercial businesses.`,
    },
    {
        p: `This location is fully fenced in with gate access using keypad entry. You will have access to your
        storage unit from 6am to 11pm seven days per week. If you require 24-hour access ask our associate for details.
        We are conveniently located on Rt 55 in Poughkeepsie. We are only a few miles from La Grange, Hyde Park,
        Pleasant Valley, and Vassar College.`
    },
];

export const aboutUsLocation2 = [
    {
        p: `Since 2001 our Highland/New Paltz location has been assisting your friends and family in Highland,
        New Paltz and Lloyd communities with their storage choices. Our storage associates will gladly work
        with you on which size unit will best meet your needs; from the small closet to the very large garage
        size, some being climate controlled, we can provide storage solutions for apartment dwellers, homeowners,
        and commercial businesses.`,
    },
    {
        p: `This location is fully fenced in with gate access using keypad entry. You will have access to your
        storage unit from 6am to 11pm seven days per week. If you require 24-hour access ask our associate for
        details. We are conveniently located on Rt 299 in Highland. We are only a few miles from New Paltz, Port
        Ewen, Clintondale, and SUNY New Paltz College.`,
    },
];

export const aboutUsLocation3 = [
    {
        p: `Since 2003 our Lake Katrine/Kingston location has been assisting your friends and family in Kingston,
        Saugerties, and Woodstock with their storage choices. Our storage associates will gladly work with you on
        which size unit will best meet your needs; from the small closet to the very large garage size, some being
        climate controlled, we can provide storage solutions for apartment dwellers, homeowners, and commercial
        businesses.`,
    },
    {
        p: `This location is fully fenced in with gate access using keypad entry and security cameras on the property.
        You will have access to your storage unit from 6am to 11pm seven days per week. If you require 24-hour access
        ask our associate for details. We are conveniently located on Rt 9W in Lake Katrine, with easy access from NYS
        Thruway and Kingston/Rhinecliff Bridge. We are only a few miles from Kingston, Woodstock, Saugerties, Rhinebeck,
        Red Hook, and BARD College.`,
    },
];

export const aboutUsLocation4 = [
    {
        p: `Since 2003 our Pawling/Brewster location has been assisting your friends and family in Patterson and
        Brewster area with their storage choices. Our storage associates will gladly work with you on which size unit
        will best meet your needs; from the small closet to the very large garage size, many being climate controlled,
        we can provide storage solutions for apartment dwellers, homeowners, and commercial businesses.`,
    },
    {
        p: `This location is fully fenced in with gate access using keypad entry. You will have 24-hour access seven
        days per week. We are conveniently located on Rt 22 in Pawling. We are only a few miles from Beckman,
        LaGrangeville, Poughquag, Wingdale, Patterson, Brewster and Trinity Pawling.`,
    },
];

export const aboutUsLocation5 = [
    {
        p: `Since 1996 our Poughkeepsie/Hyde Park location has been assisting your friends and
        family with their storage choices. Our storage associates will gladly work with you on
        which size unit will best meet your needs; from the small closet to the very large garage size,
        we can provide storage solutions for apartment dwellers, homeowners, and commercial businesses.`,
    },
    {
        p: `This location is fully fenced in with gate access using keypad entry. You will have access to your
        storage unit from 6am to 11pm seven days per week. If you require 24-hour access ask our associate for
        details. We are conveniently located on Salt Point Turnpike in Poughkeepsie. We are only a few miles from
        Hyde Park, Pleasant Valley, Vassar College, Marist College, Dutchess Community College and the Culinary
        Institute of America.`,
    },
];

export const directionLocation1 = [
    {
        label: 'Directions to AllSpace Storage from downtown Poughkeepsie',
        datas: [
        { content: 'Head east on Church St toward Jefferson St - 1.1 mi'},
        { content: 'Continue onto US-44 E/Baker St/East-West Arterial' },
        { content: `Continue to follow US-44 E/East-West Arterial` },
        { content: `Pass by CENTURY 21 Hudson Valley Realty (on the left in 0.9 mi) - 1.0 mi` },
        { content: `Use the right 2 lanes to take the NY-55 ramp - 0.2 mi` },
        { content: `Continue onto NY-55 E/Haight Ave` },
        { content: `Continue to follow NY-55 E - 0.8 mi` },
        { content: `Make a U-turn at Spy Hill 0.1 mi` },
        ],
    },
] ;

export const directionLocation2 = [
    {
        label: 'Directions From New Paltz',
        datas: [
        { content: 'Head east on Main St toward Plattekill Ave - 0.4 mi'},
        { content: 'Continue straight onto NY-299 E/Main St - 2.8 mi' },
        ],
    },
    {
        label: 'Directions From Clintondale',
        datas: [
        { content: 'Head northeast on Clintondale Rd/South St toward Mill St'},
        { content: 'Continue to follow South St - 3.2 mi' },
        { content: 'Turn right onto NY-299 E - 0.6 mi' },
        ],
    },
] ;

export const directionLocation3 = [
    {
        label: 'Directions to AllSpace Storage from Kingston',
        datas: [
        { content: 'Head east on Broadway toward Andrew St - 0.4 mi'},
        { content: 'Turn left onto Delaware Ave - 0.6 mi' },
        { content: 'Turn right onto NY-32 N/Flatbush Rd - 2.6 mi' },
        { content: 'Turn left onto Tuyten Bridge Rd - 1.3 mi' },
        { content: 'Turn left onto Ulster Ave - 0.3 mi' },
        ],
    },
] ;

export const directionLocation4 = [
    {
        label: 'Directions from Pawling',
        datas: [
        { content: 'Head toward E Main St on Memorial Ave. Go for 249 ft.'},
        { content: 'Turn left onto E Main St. Go for 0.8 mi.' },
        { content: 'Turn right onto RT-22/RT-55. Go for 1.3 mi.' },
        { content: `Arrive at Route 22 (RT-22). AllSpace will be on the right.` },
        ],
    },
  ];

  export const directionLocation5 = [
    {
        label: 'From Poughkeepsie',
        datas: [
        { content: 'Head northwest on Reservoir Square toward S Clinton St 26 ft'},
        { content: 'Exit the traffic circle onto S Clinton St 0.1 mi' },
        { content: `Turn right onto Smith St 1.0 mi` },
        { content: `At the traffic circle, take the 1st exit onto Salt Point Turnpike 0.3 mi` },
        { content: `Turn left onto NY-115 N` },
        { content: `AllSpace Storage - Poughkeepsie/Hyde Park will be on the left hand side` },
        ],
    },
] ;

export const review1 = [
    {
        p : `"I have been a customer at AllSpace Route 55 for many years, the staff
        has always been extremely friendly and goes above and beyond." `,
        by: '- Annette',
    },
    {
        p : `"Good location and reasonable prices."`,
        by: '- William',
    },
    {
        p: `"Really nice people and units are clean."`,
        by: `- Brenda`
    },
    {
        p : `"Love it! Great Staff! Easy billing."`,
        by: '- Satisfied Tenant',
    }
];

export const review2 = [
    {
        p : `"Nice people a pleasure to go there."`,
        by: '- Maureen',
    },
    {
        p : `"My experience with AllSpace has been trouble free and great staff."`,
        by: '- Lenny',
    },
    {
        p : `"I searched all around, and they offered the best deal.
        The woman I spoke with answered all my questions and was very friendly."`,
        by: '- Brittany',
    }
];

export const review3 = [
    {
        p : `"I have been a customer at AllSpace for over 10 years. The management and staff
        are friendly and helpful. The facility is secure and the units are clean."`,
        by: '- Bill',
    },
    {
        p : `"I’ve used several different storage places over the years, each with their own set of issues.
        I can honestly say that the 3 to 4 years I’ve used AllSpace I have NEVER had even the slightest problem.
        The staff is exceptionally friendly and helpful."`,
        by: '- Jesse',
    },
    {
        p : `"Clean, affordable & very friendly customer service!"`,
        by: ' - Renata',
    }
];

export const review4 = [
    {
        p : `"I have been a customer for many years at AllSpace & can say with confidence that you will
        not be disappointed. The staff are top notch, responsive, polite, and friendly." `,
        by: '- Cris',
    },
    {
        p : `"Great place and staff very friendly and very helpful."`,
        by: '- Kenneth',
    },
    {
        p : `"Excellent price people and place!"`,
        by: '- Richard',
    }
];

export const review5 = [
    {
        p : `"I have been a customer for over 10 years and AllSpace has always exemplified great customer
        service and professionalism."`,
        by: '- Tyrone',
    },
    {
        p : `"They’re more like caring friends than someone I’m doing business with….always pleasant and helpful!"`,
        by: '- Janice',
    },
    {
        p : `"I recently moved from Manhatten to Poughkeepsie and a few hiccups took place on the day of the move,
        none the less the staff at AllSpace was willing to wait for our late arrival and process our reservation,
        made sure keycode worked, and not once did she complain about the late hour we got there. It was refreshing
        to do business with someone who cares and offers exceptional customer service!"`,
        by: '- Cleo',
    }
];
