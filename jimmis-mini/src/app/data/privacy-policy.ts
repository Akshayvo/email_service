import { contact } from './contact';
import { environment } from '../../environments/environment';

const indexEmail = contact.findIndex(x => x.label === 'Email: ');

const email = contact[indexEmail].data;

const redirectEmail = contact[indexEmail].redirect;

const indexPhone = contact.findIndex(x => x.label === 'Phone: ');

const phone = contact[indexPhone].data;

const redirectPhone = contact[indexPhone].redirect;

export const privacyPolicy = [
    {
      content: `This privacy notice discloses the privacy practices for "${environment.websiteUrl}".
      This privacy notice applies solely to information collected by this website. It will notify you of the following:`,
      list: [
          {
            li: `What personally identifiable information is collected from you through the
            website, how it is used and with whom it may be shared.`
          },
          {
            li: `What choices are available to you regarding the use of your data.`,
          },
          {
            li: `The security procedures in place to protect the misuse of your information.`,
          },
          {
            li: `How you can correct any inaccuracies in the information.`,
          }
        ],
      information: [
        {
          heading: `Information Collection, Use, and Sharing `,
        },
        {
          list: [
            {
              p: `We are the sole owners of the information collected on this site. We only have access
              to/collect information that you voluntarily give us via email or other direct contact from you.
              We will not sell or rent this information to anyone.`,
            },
            {
              p: `We will use your information to respond to you, regarding the reason you contacted us.
              We will not share your information with any third party outside of our organization, other
              than as necessary to fulfill your request, e.g. to ship an order.`,
            },
            {
              p: `Unless you ask us not to, we may contact you via email in the future to tell you
              about specials, new products or services, or changes to this privacy policy.`
            }
          ],
        },
      ],
      access: [
        {
          heading: `Your Access to and Control Over Information`,
        },
        {
          content: `You may opt out of any future contacts from us at any time. You can do the following at any time
          by contacting us via the email address or phone number given on our website:`,
        },
        {
          list: [
            {
              li: `See what data we have about you, if any.`,
            },
            {
              li: `Change/correct any data we have about you.`,
            },
            {
              li: `Have us delete any data we have about you.`,
            },
            {
              li: `Express any concern you have about our use of your data.`,
            },
          ]
        }
      ],
      security: [
        {
          heading: `Security`,
        },
        {
          content: [
            {
              p: `We take precautions to protect your information. When you
              submit sensitive information via the website, your information is protected both online and offline.`,
            },
            {
              p: `Wherever we collect sensitive information (such as credit card data), that information is encrypted
              and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar
              and looking for "https" at the beginning of the address of the Web page.`,
            },
            {
              p: `While we use encryption to protect sensitive information transmitted online, we also protect your
              information offline. Only employees who need the information to perform a specific job (for example,
                billing or customer service) are granted access to personally identifiable information. The
                computers/servers in which we store personally identifiable information are kept in a secure
                environment.`,
            },
          ]
        }
      ],
      // registration: [
      //   {
      //     heading: `Registration`
      //   },
      //   {
      //     content: `In order to use this website, a user must first complete the registration form. During
      //     registration a user is required to give certain information (such as name and email address). This information
      //     is used to contact you about the products/services on our site in which you have expressed interest.
      //     At your option, you may also provide demographic information (such as gender or age)
      //     about yourself, but it is not required.`,
      //   }
      // ],
      cookies: [
        {
          heading: `Cookies`
        },
        {
          content: [
            {
              p: `We use "cookies" on this site. A cookie is a piece of data stored on a site visitor's hard drive
              to help us improve your access to our site and identify repeat visitors to our site. For instance, when
              we use a cookie to identify you, you would not have to log in a password more than once, thereby saving
              time while on our site. Cookies can also enable us to track and target the interests of our users to
              enhance the experience on our site. Usage of a cookie is in no way linked to any personally
              identifiable information on our site.`,
            },
            // {
            //   p: `Some of our business partners may use cookies on our site (for example, advertisers). However,
            //   we have no access to or control over these cookies.`,
            // },
          ]
        }
      ],
      note: `If you feel that we are not abiding by this privacy policy, you should contact us immediately via telephone
      at  <a href="${redirectPhone}" style="color: #000;">${phone}</a> or via email at <a href="${redirectEmail}" style="color:#000;">${email}</a>.`,
      // sharing: [
      //   {
      //     heading: `Sharing`
      //   },
      //   {
      //     content: [
      //       {
      //         p: `We share aggregated demographic information with our partners and advertisers. This is not linked to any
      //         personal information that can identify any individual person.`
      //       },
      //       {
      //         p: `We use an outside credit card processing company to bill users for goods and services. These companies
      //         do not retain, share, store or use personally identifiable information for any secondary
      //         purposes beyond filling your order.`
      //       },
      //       {
      //         p: `We partner with another party to provide specific services. When the user signs up for these services,
      //         we will share names, or other contact information that is necessary for the third party to provide
      //         these services. These parties are not allowed to use personally identifiable information except for the
      //         purpose of providing these services.`
      //       }
      //     ]
      //   }
      // ]
    }
  ];