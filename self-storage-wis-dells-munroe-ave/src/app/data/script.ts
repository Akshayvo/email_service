export const faqScript = {
    // Put your script here
    '@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Is there a long-term lease?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'No, the rental agreement is month-to-month.'}}, {'@type': 'Question', 'name': 'Can I switch units?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our manager for details – we can prorate you out of your current unit and into a new one for no fees other than the difference in rent.'}}, {'@type': 'Question', 'name': 'When is my rental fee due?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Your rent is due on the first (1st) day of the month. If payment is not received by the end of the day on the 8th, a late fee of $20 is assessed, your gate code deactivated, and your unit will be over locked.'}}, {'@type': 'Question', 'name': 'Will I receive a monthly "bill"?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'We do not send a monthly bill. We offer a paperless automatic payment system from your credit or debit charge card. In the event that the bank rejects our payment request, an alert will be emailed.'}}, {'@type': 'Question', 'name': 'What forms of payment do you accept?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'We accept check, cash, and major credit cards. You may mail your payment, pay via our web site or give us your credit card number via telephone. For units that are delinquent, we require cash or money order payment.'}}, {'@type': 'Question', 'name': 'What may I store?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Flammable, explosive, or illicit materials are not allowed. Occupying the unit as living quarters is prohibited by law and is cause for immediate eviction. Storage of live animals is not allowed. Food is prohibited.'}}, {'@type': 'Question', 'name': 'How tall / wide are your doors?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Door sizes vary by unit size and range from 3’8” to 11’ wide. Our roll-up doors are easy to operate and coil up once opened. If you have specific door requirements, talk to our manager and he or she will find the best solution for your need and be able to provide specific door measurements.'}}, {'@type': 'Question', 'name': 'Do I need to provide my own lock?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'We provide a new disc lock at move in. Only one lock is allowed per door latch, and you must keep your unit locked at all times. We inspect all locks periodically. When you move out you must remove your lock, which is yours to keep.'}}, {'@type': 'Question', 'name': 'Does the facility assume any liability for the goods I store?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'No, we recommend contacting your home or renter’s insurance agent. Adding stored goods to an existing policy is usually inexpensive, or your existing insurance may already cover stored goods.  Information on the MiniCo Tenant One policy is available at our facility – brochures are near the rental kiosk.'}}, {'@type': 'Question', 'name': 'Are surveillance cameras monitored?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'The cameras are recording video any time motion is detected but they are not constantly monitored. Management is not responsible for immediately responding to help if required.'}}, {'@type': 'Question', 'name': 'May I allow friends or relatives to access my unit?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'You may allow anyone you choose to have access by accompanying them on the premises or giving them your key and gate code. You remain responsible for your obligations on the lease regardless. Leases may not be transferred.'}}, {'@type': 'Question', 'name': 'Can I share access to the space with my family and coworkers?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Yes, you decide who may have access to your storage unit.'}}, {'@type': 'Question', 'name': 'What if I or one of my guests damages my unit or another building or fixture on the property?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'The tenant shall be liable for any damage to the unit or any building, fixture, or other structure on the premises caused by tenant or his agents or guests. Tenant shall indemnify and hold Management harmless from any claim or cause of action arising out of Tenant’s use of the premises or any part thereof.'}}, {'@type': 'Question', 'name': 'Can I get a refund?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'It is a policy that our self-storage facility does not prorate rental payments for any partial months. Much like a hotel rents in one night increments and does not refund your payment if you choose to leave at 5am, we rent in one month increments and do not offer refunds for partial months.'}}, {'@type': 'Question', 'name': 'What are the office hours?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'We do not have an on-site office, but the owner lives nearby and is available to meet clients at the site. Most issues can be resolves via phone. '}}, {'@type': 'Question', 'name': 'What happens if I lose the key to my storage unit?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'You hold the only key to your storage unit. However, if you should misplace it, we have procedures in place to help you access your storage unit. '}}]
};

export const script = {
    // Put your script here
    "@context": "https://schema.org",
      "@type": "SelfStorage",
      "image": [
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Self_Storage_Wisconsin_Dells_Munroe_Ave/jpg/self-storage-wisconsin-dells-row-of-units+(1x1).jpgg",
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Self_Storage_Wisconsin_Dells_Munroe_Ave/jpg/self-storage-wisconsin-dells-row-of-units+(4x3).jpgg",
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Self_Storage_Wisconsin_Dells_Munroe_Ave/jpg/self-storage-wisconsin-dells-row-of-units+(16x9).jpgg"
       ],
      "@id": "https://www.selfstorageofwisdells23.com/",
      "name": "Self Storage of Wis Dells",
       "description": "Self Storage of Wis Dells serves Wisconsin Dells and the surrounding communities with a variety of well-maintained and affordable self storage units accessible 24/7.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "301 W Munroe Ave",
        "addressLocality": "Lake Delton",
        "addressRegion": "WI",
        "postalCode": "53965",
        "addressCountry": "United state"
      },
     "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "3.2",
    "reviewCount": "5"
  },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.589987,
        "longitude": -89.800806
      },
      "url": "https://www.selfstorageofwisdells23.com/",
      "telephone": "(608) 566-5948",
      
      "priceRange": "$40 - $85",
     "openingHours":["Mo-Sun 00:00-24:00"],
      "currenciesAccepted": "USD",
    "paymentAccepted":"Cash, Credit card, Online Payment",
       "areaServed": {
    "@type": "State",
    "name": "Wisconsin"
     },
 
      "acceptsReservations": "True"
};

export const contactscript = {
    // Put your script here
    "@context": "http://schema.org",
  "@type": "Selfstorage",
  "name": "Self Storage of Wis Dells",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lake Delton",
    "postalCode": "53965",
    "streetAddress": "301 W Munroe Ave"
  },
   "url": "https://www.selfstorageofwisdells23.com/",
   "image": [
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Self_Storage_Wisconsin_Dells_Munroe_Ave/jpg/self-storage-wisconsin-dells-row-of-units+(1x1).jpgg"
       ],
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "(608) 566-5948",
    "contactType": "reservations"
  },{
    "@type": "ContactPoint",
    "telephone": "(608) 566-5948",
    "contactType": "customer service"
  }],
  "email": "rentals@selfstorageofwisdells.com",
  "sameAs": [
    "",
    "",
    ""
  ]
};