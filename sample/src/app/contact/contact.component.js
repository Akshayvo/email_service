"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var contact_1 = require("../data/contact");
var title_1 = require("../data/title");
var heading_1 = require("../data/heading");
var script_1 = require("../data/script");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(router, emailService, titleService, meta, formBuilder, metaService, canonical) {
        var _this = this;
        this.router = router;
        this.emailService = emailService;
        this.titleService = titleService;
        this.meta = meta;
        this.formBuilder = formBuilder;
        this.metaService = metaService;
        this.canonical = canonical;
        this.submitted = false;
        this.mailSent = false;
        this.fetchScript();
        this.loadScript();
        this.fetchOg();
        this.fetchTwitter();
        this.og.forEach(function (element) {
            _this.meta.addTag({
                property: element.property,
                content: element.content
            });
        });
        this.twitter.forEach(function (element) {
            _this.meta.addTag({
                name: element.name,
                content: element.content
            });
        });
        this.fetchMetaData();
        this.meta.addTag({
            name: 'description',
            content: "" + this.contactPageContent
        });
        this.titleService.setTitle("" + this.contactPageTitle);
        this.canonical.create();
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.fetchContactDetails();
        this.fetchHours();
        this.fetchContactHeading();
        this.contactForm = this.formBuilder.group({
            name: ['', forms_1.Validators.required],
            phone: ['', [forms_1.Validators.required,
                    forms_1.Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,5}$')]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            message: ['', forms_1.Validators.required],
            subject: ['']
        });
    };
    Object.defineProperty(ContactComponent.prototype, "f", {
        get: function () { return this.contactForm.controls; },
        enumerable: false,
        configurable: true
    });
    ContactComponent.prototype.fetchOg = function () {
        this.og = script_1.ogContactPage;
    };
    ContactComponent.prototype.fetchScript = function () {
        this.script = script_1.contactPageScript;
    };
    ContactComponent.prototype.loadScript = function () {
        var node = document.createElement('script'); // creates the script tag
        node.type = 'application/ld+json'; // set the script type
        node.async = false; // makes script run asynchronously
        // node.charset = 'utf-8';
        node.innerHTML = JSON.stringify(this.script);
        // append to head of document
        document.getElementsByTagName('head')[0].appendChild(node);
    };
    ContactComponent.prototype.fetchTwitter = function () {
        this.twitter = script_1.twitterContactPage;
    };
    ContactComponent.prototype.navigate = function (location) {
        this.router.navigate([location]);
    };
    ContactComponent.prototype.fetchMetaData = function () {
        this.contactPageTitle = title_1.contactPageTitle;
        this.contactPageContent = title_1.contactPageContent;
    };
    ContactComponent.prototype.fetchContactDetails = function () {
        this.contactDetails = contact_1.contact;
    };
    ContactComponent.prototype.fetchContactHeading = function () {
        this.contactHeading = heading_1.contactHeading;
    };
    ContactComponent.prototype.fetchHours = function () {
        this.hours = contact_1.hours;
    };
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        var today = new Date();
        window['dataLayer'] = window['dataLayer'] || {};
        window['dataLayer'] = window['dataLayer'] || [];
        window['dataLayer'].push({
            'event': 'ContactFormsubmission',
            'date': today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
            'time': today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
        });
        this.submitted = true;
        // stop here if form is invalid
        if (this.contactForm.invalid) {
            return;
        }
        else {
            if (!this.contactForm.value.subject) {
                this.contactForm.value.subject = 'Website Form Submission';
            }
            var index = contact_1.contact.findIndex(function (x) { return x.label === 'Email:'; });
            if (!!index) {
                this.receiveremail = this.contactDetails[index].email;
            }
            this.completeMessage = "phone: " + this.contactForm.value.phone + ", <br/>\n     message: " + this.contactForm.value.message;
            var body = {
                name: this.contactForm.value.name,
                email: this.contactForm.value.email,
                receiveremail: this.receiveremail,
                message: this.completeMessage,
                subject: this.contactForm.value.subject
            };
            this.emailService.sendEmail(body)
                .subscribe(function (response) {
                if (response.result != null) {
                    _this.mailSent = true;
                }
                else {
                }
            }, function (err) {
            });
            this.submitted = false;
            this.mailSent = false;
            this.contactForm.reset();
        }
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.scss']
        })
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
