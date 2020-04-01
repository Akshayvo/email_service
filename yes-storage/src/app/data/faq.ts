export const faqContent=[
    {
        question:'Q: Are there any additional move in costs?',
        answer: `A: Yes. There is a $15.00 set up fee as well as a $30.00 deposit. The one time $30.00 security
                and cleaning deposit will be refunded without interest, by mail, within 30 days of the occupant
                vacating the unit if all conditions are met.`
    },
    {
        question: 'Q: When is my rent due?',
        answer: 'A: Rent is due on the 1st day of the month.'
    },
    {
        question: 'Q: If I am not able to make it in by the due date to pay my rent, are there fees?',
        answer: `A: You have a 5 day grace period. After 5 days, there is a $10.00 late fee. Access to your unit
                will be suspended on the 7th day and your unit will be over locked on the 10th day.`,
        tables:[
            { 
                heading:'',
                table:[       
                    {
                        td1:'5th day after rent is due',
                        td2:'Late Fee',
                        td3:'$10.00'
                    },
                    {
                        td1:'7th day after rent is due',
                        td2:'Gate is Automatically Locked',
                        td3:''
                    },
                    {
                        td1:'10th day after rent is due',
                        td2:'Overlock of Unit',
                        td3:''
                    },
                    {
                        td1:'20th day after rent is due',
                        td2:'Additional Late Fee',
                        td3:'$10.00'
                    }
                ]
            },
            {
                heading:'Miscellaneous fees are as follows:',
                table:[
                    {
                        td1:'Damage to Building',
                        td2:'Estimated on occurence'
                    },
                    {
                        td1:'Cut Lock Fee',
                        td2:'$10.00'
                    },
                    {
                        td1:'Returned Check Fee',
                        td2:'$25.00'
                    }
                ]
            }
        ]
    },
    {
        question: 'Q: Do I have to come in to pay my rent?',
        answer:`A: No. You can also mail in a payment, call in a payment with a credit card, or pay online on our
                website. For your convenience we have an onsite kiosk where a unit can be rented or payments
                can be made.`
    },
    {
        question: 'Q: What are your hours?',
        answer:`A: Self Storage access hours are 6:00 a.m. to 10:00 p.m. daily.`
    },
    {
        question: 'Q: Do you supply a lock for me?',
        answer:`A: No. It is your responsibility to supply your own lock. This way, you know that you are in total
        control of your unit and who has access to your unit.
        If you do not bring a lock with you, Rifle Self Storage sells them for your convenience. Locks
        can be purchased at the onsite kiosk for $10.00.`
    },
    {
        question: 'Q: Is there a contract? ',
        answer: `A: Yes. There is a contract, but there is no long-term commitment. Each time you pay your rent,
                you automatically extend your contract for 30 days.`
    },
    {
        question: 'Q: What if I vacate the unit prior to the end of my rental month?',
        answer: `A: We have a one (1) month minimum stay. We require a 15 day move out notice. We do not
                prorate upon move out.`
    },
    {
        question:'Q: How do I receive my refund?',
        answer: `A: The $30.00 security and cleaning deposit will be refunded without interest, by mail, within 30
                days of the occupant vacating the unit if all conditions are met.`,
        list: [
            {
              li: `15 days prior to vacating the unit, notice of intent to vacate was given to Rifle Self
                    Storage.`,
            },
            {
              li: `Unit is empty, clean, and swept out`,
            },
            {
              li: `Occupant is in good standing with regard to all payments and/or fees that may have
                    occurred during the rental period`,
            },
            {
              li: `An address is provided of where the refund can be sent.`,
            },
          ]
    }


]