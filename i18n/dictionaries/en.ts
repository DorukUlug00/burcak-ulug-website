/* ENGLISH DICTIONARY
   ---------------------------------------------------------------
   Typed against tr.ts. If a key is missing or misspelled here,
   the build fails — that is intentional, it stops half-translated
   pages from shipping.
--------------------------------------------------------------- */

import type { Dictionary } from "./tr";

export const en: Dictionary = {
  nav: {
    ariaLabel: "Main menu",
    home: "Home",
    cv: "Curriculum Vitae",
    procedures: "Procedures",
    media: "Media",
    patientInfo: "Patient Information",
    kvkk: "Privacy",
    contact: "Contact",
    generalInfo: "Overview",
    openSubmenu: "open submenu",
    closeSubmenu: "close submenu",
    openMenu: "Open menu",
  },

  common: {
    readMore: "Read more",
    backToTop: "Back to top",
    loading: "Loading",
    breadcrumbLabel: "Breadcrumb",
    languageLabel: "Language",
  },

  home: {
    heroEyebrow: "Plastic and Aesthetic Surgery · Istanbul",
    whatsapp: "Message on WhatsApp",
    contactDetails: "Contact details",
  },

  contact: {
    eyebrow: "Contact",
    title: "Appointments and",
    titleAccent: "contact",
    intro:
      "For consultation, examination and information on any procedure within aesthetic, plastic and reconstructive surgery, you can reach the clinic through the channels below.",
    phone: "Phone",
    phoneNote: "Call for appointments and information",
    whatsapp: "WhatsApp",
    whatsappNote: "For those who prefer to write",
    email: "Email",
    emailNote: "For detailed questions and documents",
    address: "Address",
    directions: "Get directions",
    hours: "Opening hours",
    sunday: "Sunday",
    closedLabel: "Closed",
    openNow: "Open now",
    closedNow: "Closed now",
    mapTitle: "Clinic location — Google Maps",
    privacyNote:
      "Personal data you send is processed solely for appointment and information purposes. For details, see the",
    kvkkLink: "Privacy Notice",
  },

  form: {
    name: "Full name",
    phone: "Phone",
    optional: "(optional)",
    topic: "Subject",
    message: "Your message",
    topicAppointment: "Appointment request",
    topicProcedure: "Information about a procedure",
    topicFollowUp: "Post-operative follow-up",
    topicOther: "Other",
    healthDataNote:
      "Please do not include details of your medical history here; you can share those during the consultation.",
    consent:
      " and consent to my message being processed for the purpose of contacting me.",
    sendWhatsApp: "Send via WhatsApp",
    sendEmail: "Send via email",
    deliveryNote:
      "Your chosen app opens with the message ready. You send it yourself; this page stores nothing.",
    errorName: "Please enter your name.",
    errorMessage: "Please write your message in a little more detail.",
    errorConsent: "You need to give consent to continue.",
  },

  media: {
    eyebrow: "Media",
    title: "Interviews and",
    titleAccent: "images",
    intro:
      "Television and newspaper interviews, scientific congress presentations and images from the clinic.",
    filterAll: "All",
    filterVideo: "Video",
    filterPress: "Press",
    groupVideo: "Television programmes",
    groupPress: "Press",
    play: "play",
    zoom: "enlarge",
    close: "Close",
    previous: "Previous",
    next: "Next",
    empty: "There is no content in this section yet.",
  },

  procedures: {
    eyebrow: "Procedures",
    title: "Procedures",
    titleAccent: "performed",
    intro:
      "The headings below are for general information. Which method suits you is decided together, after an examination.",
    generalInfo: "Overview",
    faqHeading: "Frequently asked questions",
    inCategory: "Procedures in this category",
    pending:
      "The content of this page is being prepared. Please contact the clinic for information.",
    disclaimer:
      "The information on this page is for general guidance only; it does not replace a medical examination, diagnosis or treatment. The method applied and the results vary from person to person.",
  },

  footer: {
    pages: "Pages",
    contact: "Contact",
    legalTitle: "Disclaimer",
    legalOne:
      "The content on this site is for general information only; it does not replace a medical examination, diagnosis or treatment. Surgical results vary from person to person and no outcome is guaranteed.",
    legalTwo:
      "In accordance with Law no. 1219 and the Ministry of Health's advertising regulations, this site contains no advertising or promotional content for curative health services.",
    rights: "All rights reserved.",
    ip: "The text, images and design on this site may not be used, copied or reproduced without permission.",
  },

  notFound: {
    title: "Page not found",
    body: "The page you are looking for may have been moved or removed.",
    back: "Return to the home page",
  },
};