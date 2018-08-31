// const api_key = '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';


// var MailService = function (content) {
 
//     const data = JSON.stringify({
//         'personalizations': [
//             {
//                 'to': [
//                     {
//                         'email': 'ayush.1994.jaiswal@gmail.com',
//                         'name': 'Ayush'
//                     }
//                 ],
//                 'subject': content.subject
//             }
//         ],
//         'from': {
//             'email': 'ayush.j@codeparva.in',
//             'name': 'AJ'
//         },
//         'reply_to': {
//             'email': 'sam.smith@example.com',
//             'name': 'Sam Smith'
//         }
//     });

//     let xhr = new XMLHttpRequest();
//     xhr.withCredentials = true;

//     xhr.addEventListener('readystatechange', function () {
//         if (this.readyState === this.DONE) {
//             console.log(this.responseText);
//         }
//     });

//     xhr.open('POST', 'https://api.sendgrid.com/v3/mail/send');
//         xhr.setRequestHeader('authorization', 'Bearer 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');
//     xhr.setRequestHeader('content-type', 'application/json');

//     xhr.send(this.data);

// }

// module.export = MailService;
