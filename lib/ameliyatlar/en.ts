/* ENGLISH CONTENT — procedure and category texts
   ---------------------------------------------------------------
   Page layout and helpers live in index.tsx; this file holds text only.

   Slugs are IDENTICAL across languages: the slug and category fields
   here must match tr.ts exactly. Only title, blurb, lead, heading and
   body are translated.

   NOTE: These are patient-information texts translated from the
   Turkish originals. They should be reviewed and approved by
   Prof. Dr. Tümerdem Uluğ before going live.
--------------------------------------------------------------- */

import type { Category, ContentBundle, Procedure } from "./types";

const categories: Category[] = [
  {
    slug: "yuz-estetigi",
    title: "Facial Aesthetics",
    image: "/operations/background1.png",
    blurb: "Surgical procedures for the face and the eye area.",
    sections: [
      {
        heading: "What is facial aesthetic surgery?",
        body: [
          "Facial aesthetic surgery is the general term for procedures performed on the face for aesthetic purposes. Ageing is inevitable for everyone. One of the aims of aesthetic surgery is to soften its effects so that a person feels vigorous, young and healthy. The face is an area where age-related changes cannot be concealed. A tired, tense and unhappy expression looking back from the mirror makes a person feel poorly about themselves and can lead to difficulties in their social relationships.",
          "With age, the skin over the whole body loses elasticity and begins to sag; on the facial skin this problem becomes even more apparent under the effect of gravity. The face is the structure that draws attention first in communication between people. For this reason, although its deformities are not an illness, they give rise to aesthetic concern. Physicians have defined proportions for facial aesthetics, but what matters most in the decision are the person's own expectations, considered through the physician's assessment.",
        ],
      },
      {
        heading: "Which regions of the face are assessed?",
        body: [
          "The face should be examined in three parts: the upper face, comprising the forehead, eyebrows and upper eyelids; the mid-face, comprising the lower eyelids and cheek region; and the lower face, comprising the chin and neck region. It is possible to address each of these areas surgically on its own. However, where necessary, combined procedures (facelift with eyelid surgery, brow lift with eyelid surgery) give a more effective result for aesthetic deformities of the face.",
        ],
      },
    ],
  },
  {
    slug: "burun-estetigi",
    title: "Nasal Aesthetics",
    image: "/operations/background1.png",
    blurb: "Procedures addressing nasal shape and breathing function.",
    sections: [
      {
        heading: "What is nasal aesthetic surgery?",
        body: [
          "Nasal aesthetic surgery is the general term for procedures performed to correct a deformity of the nose arising from its structure, from previous trauma, or as a result of earlier surgery. The nose sits at the very centre of the human face and is the structure that, without our being aware of it, draws attention at first glance. For this reason, although its deformities are not an illness, they give rise to aesthetic concern. Physicians have defined near-ideal proportions for nasal aesthetics, but what matters most in the decision are the person's own expectations, considered through the physician's assessment.",
        ],
      },
      {
        heading: "What is a nasal deformity?",
        body: [
          "Nasal deformity is the term physicians use to describe irregularities in the external shape of the nose. A deformity of the nose originates from different parts of its bone and cartilage structures. A hump on the nasal dorsum, a long nose, a drooping or low nasal tip, and wide nostrils are the aesthetic problems encountered most often.",
        ],
      },
      {
        heading: "What is septal deviation?",
        body: [
          "A significant proportion of patients with a nasal deformity also have difficulty breathing through the nose. Normal, healthy breathing takes place through the nose. When the nose cannot perform its function properly because of the internal curvature known as deviation and the enlargement of the turbinates known as turbinate hypertrophy, persistent nasal obstruction develops and breathing shifts to the mouth.",
          "Deviation is the curvature of the tissue known as the septum, which runs from the front of the nose back to the nasopharynx and divides the interior of the nose into two halves. The septum consists of cartilage and bone segments, covered by an inner lining called the mucosa. Deviation may be structural or may follow trauma. The location of the curvature, and its number and severity, differ from patient to patient.",
          "Enlargement of the turbinates is the growth of the structures known as conchae; it is called turbinate hypertrophy. The largest of these are the inferior turbinates; by increasing and decreasing in volume they regulate the amount of air passing through the nose and warm the air, and in the presence of deviation they add to nasal obstruction.",
        ],
      },
      {
        heading: "What is rhinoplasty?",
        body: [
          "Rhinoplasty is the surgical procedure performed to correct deformities of the cartilage and bone structure that cause an irregularity in the shape of the nose. Every person's nose is different; likewise, the end result planned for surgery differs in each case. For this reason there is no single technique for nasal aesthetic surgery.",
          "In assessing a nasal deformity, the skin, the bone and the cartilage structure are each considered separately. When the surgical plan is made, the shape and proportions of the person's face are always taken into account alongside their expectations for the nose. Otherwise the result is a nose that does not suit the person's facial shape.",
          "In rhinoplasty, different techniques are applied in various combinations: hump resection, that is removal of the nasal hump; osteotomy, that is controlled fracture of the nasal bone; alar cephalic resection, that is narrowing of the nostrils; and suture techniques together with cartilage grafting, that is narrowing and elevating the nasal tip.",
        ],
      },
      {
        heading: "What is deviation surgery?",
        body: [
          "In cases with a nasal deformity where there is also an internal curvature, a procedure to correct the deviation — septoplasty — is added to the nasal aesthetic procedure, that is to the rhinoplasty. Physicians use the term septorhinoplasty to describe this combined operation.",
          "In cases where turbinate hypertrophy accompanies the deviation and contributes to nasal obstruction, the inferior turbinates are also addressed. Techniques such as conchoplasty, radiofrequency and cauterisation are used to reduce the inferior turbinates. Conchoplasty is the removal of excess tissue from the turbinates using conventional surgical techniques, while preserving in particular the surfaces facing inwards. Radiofrequency is a general surgical method in which radio waves are delivered to the tissue through a needle-shaped probe; the change produced by this energy causes the tissue to contract, shrink and tighten during healing.",
        ],
      },
      {
        heading: "What is recovery like after surgery?",
        body: [
          "At the end of a rhinoplasty or septorhinoplasty, thin tapes and a splint are placed over the nasal dorsum. Cold application around the eyes begins as soon as surgery is completed. Applied in the conventional way, in intervals of 10-15 minutes per hour, it reduces bruising and swelling around the eyes. The patient is discharged the following day. The nasal splint is removed at the end of the first week. If considered necessary, the thin tapes are kept for one more week.",
          "The postoperative course of deviation and turbinate surgery performed together with rhinoplasty is not particularly demanding. When a continuous through-and-through suture technique is applied to the septum, it is possible to place nothing at all inside the nose. If needed, however, nasal packs are placed for one day, either of the plain type or of the type containing small tubes that allow breathing.",
          "After rhinoplasty it is helpful to continue cold application around the eyes for another 1-2 days after discharge, gradually reducing it. From the third day after surgery the mild bruising and swelling around the eyes begins to subside. In the first weeks the nose may be more swollen in the mornings, with the swelling easing during the day. After 6 weeks a significant part of the nasal swelling resolves. However, it takes 1 year for the nose to take its final shape.",
          "Trauma to the nose in the early period after surgery can cause permanent irregularities in its shape. For this reason contact sports are inadvisable within the first 8 weeks. From the third week onwards, exercise such as brisk walking and swimming is possible. If the nasal hump has been addressed, wearing glasses is not appropriate for the first 8 weeks. Likewise, intense sunlight, solariums, saunas and Turkish baths should be avoided for 8 weeks. Particularly while bruising is present, wearing a hat and using a high-factor sunscreen to avoid sun exposure is important in preventing permanent changes in the colour of the skin around the eyes.",
          "Once the early postoperative period has passed, follow-up examinations are carried out at 3, 6 and 12 months. While the great majority of cases reach their final nasal shape in this way, in some cases a second, limited procedure may be needed to achieve the ideal result.",
        ],
      },
    ],
  },
  {
    slug: "kulak-estetigi",
    title: "Ear Aesthetics",
    image: "/operations/background1.png",
    blurb: "Procedures addressing the shape and position of the ear.",
    sections: [
      {
        heading: "What is ear aesthetic surgery?",
        body: [
          "Ear aesthetic surgery covers the surgical procedures used to correct irregularities in the size and shape of the auricle and the earlobe — the external part of the ear — whether structural or following trauma or previous surgery. The ear completes its shaping while the baby is still in the womb, and by around the age of 6 it reaches 90% of its adult size.",
          "Structural deformities include partial or complete absence of the ear, an ear buried beneath the skin, an excessively large ear, the formation of a second prominence in front of the ear, and an auricle that is flat and angled forwards. Acquired deformities are most often seen as a defect of the auricle following tumour resection or tissue loss after trauma.",
          "The ear is formed by cartilage. Its shape is created by shaping that cartilage. Where cartilage is missing, the ear is reconstructed using cartilage from the opposite ear or from a rib.",
        ],
      },
      {
        heading: "What are prominent ears?",
        body: [
          "Prominent ear describes an auricle whose angle with the skull is wider than normal, together with a Y-shaped fold on its inner surface that has developed insufficiently or not at all. When the bowl-shaped cartilage just in front of the ear canal is also large and wide, the ear may sit even further forward. The result is an ear that is angled outwards, flat over its upper third, and gives the impression of being larger than normal. It is the most common structural deformity of the ear.",
          "Being made fun of in social settings from childhood onwards is psychologically wearing. School-age children in particular are exposed to reactions from their peers that are very hard to cope with. In adulthood, both men and women choose hairstyles that cover their ears in order to ease the aesthetic concern this creates. Young girls of school age who have to tie their hair back suffer especially. In summer, being unable to conceal the ears when coming out of the sea or the pool with wet hair is a problem in itself.",
          "The ideal timing for prominent ear surgery is the age of 6, corresponding to the pre-school period when the ear has completed its development. In childhood the cartilage is soft, so shaping it and maintaining the shape given is easier. As age increases the cartilage becomes firmer. Shaping becomes more difficult and, although not often, the likelihood of the cartilage returning to its former shape through memory increases.",
        ],
      },
      {
        heading: "What is otoplasty?",
        body: [
          "Otoplasty is the surgical procedure that brings the ear to a normal size and shape by reshaping the cartilage that forms the auricle. Many different techniques are used for this purpose. The cartilage is reached through an incision made behind the ear. Suture techniques are used to create the fold that should be present in the upper third of the auricle.",
          "If there is excess in the bowl-shaped cartilage known as the concha, which further contributes to the forward angling of the ear, it is excised. The cartilage is reshaped and the angle between the ear and the skull is narrowed. Enlargement and forward angling of the earlobe are also corrected through incision and excision techniques performed from behind. The incision is closed with self-dissolving sutures. A small drain is placed to prevent blood collecting inside, to be removed the following day.",
          "Otoplasty is an aesthetic procedure that is best carried out in a hospital operating theatre. General anaesthesia is preferred in children. In adults it can be performed under local anaesthesia with sedation. Adult patients are discharged 5-6 hours after surgery and paediatric patients preferably the following day, with antibiotics and painkillers prescribed.",
        ],
      },
      {
        heading: "What is recovery like after surgery?",
        body: [
          "At the end of surgery a wrap-style dressing is applied covering both ears, taking in the forehead at the front and the nape at the back. On the fourth day this dressing is opened and replaced with a thinner one that is far easier to conceal, particularly for women. From the first week onwards a tennis headband alone is sufficient. Wearing this band at night while sleeping for 4 weeks helps preserve the shape and the angle achieved.",
          "Swelling and bruising after surgery, particularly on the front surface of the ear, begin to subside from the third day. During healing it is necessary to avoid trauma, contact sports, saunas, Turkish baths and hot environments for the first 8 weeks, and to avoid lying on the ears. Also during this period, direct contact from the arm of a pair of glasses behind the ear may be uncomfortable. Everyday glasses may need to be adjusted temporarily.",
        ],
      },
    ],
  },
  {
    slug: "meme-estetigi",
    title: "Breast Aesthetics",
    image: "/operations/background1.png",
    blurb: "Surgery addressing breast size, shape and reconstruction.",
    sections: [
      {
        heading: "What is breast aesthetic surgery / mammoplasty?",
        body: [
          "Breast aesthetic surgery is the correction, through appropriate surgical techniques, of a deformity of the breast arising from various causes, following detailed analysis and careful planning.",
        ],
      },
      {
        heading: "Who is breast aesthetic surgery suitable for?",
        body: [
          "Breast aesthetic surgery is performed on healthy women who have completed breast development. Just as breast shape differs from person to person, there may also be a noticeable difference between the two breasts of the same person. Congenital deformities include underdevelopment or complete absence of the breast, excessive size (gigantomastia), asymmetry, and herniation of the breast through the nipple (tuberous breast).",
          "Breast shape changes throughout a woman's life. Weight gain and loss, pregnancy, breastfeeding, menopause and gravity are the causes of these changes. In addition, trauma, burns and surgical procedures such as the removal of a mass from the breast may also lead to breast deformities.",
        ],
      },
    ],
  },
  {
    slug: "vucut-estetigi",
    title: "Body Contouring",
    image: "/operations/background1.png",
    blurb: "Contouring surgery for the trunk and the extremities.",
    lead: "Covers surgery for localised excess fat and for skin laxity following weight change. More than one method is often planned together.",
  },
  {
    slug: "ameliyatsiz-yontemler",
    title: "Non-Surgical Treatments",
    image: "/operations/background1.png",
    blurb: "Treatments that do not require surgery.",
  },
];

const procedures: Procedure[] = [
  /* ---------------- Facial aesthetics ---------------- */
  {
    slug: "yuz-germe",
    category: "yuz-estetigi",
    title: "Facelift",
    image: "/operations/background1.png",
    lead: "A facelift is an aesthetic operation that involves repositioning the sagging, lax skin of the face and neck together with the layer enveloping the loosened deep tissues — securing them in their new position at the appropriate direction and tension — and removing the excess skin.",
    sections: [
      {
        heading: "What is a facelift (rhytidectomy)?",
        body: [
          "As the skin ages, depending on the person's genetic make-up, wrinkles are the dominant feature in some, while in others laxity and sagging of the skin alongside wrinkles is more striking. In these people the classic facelift, which allows excess skin on both the face and the neck to be addressed, is preferred.",
        ],
      },
      {
        heading: "How is a facelift performed?",
        body: [
          "A facelift is performed in a hospital operating theatre, preferably under general anaesthesia. The scars begin in the hair-bearing skin of the temple, continue in front of and behind the ear, and extend into the hair-bearing skin at the nape.",
          "Of these scars, only the one in front of the ear is visible. Depending on the person's genetic make-up, it takes a year for the scars to mature. During this period, however, particularly in women, a hairstyle that conceals the area means it causes no problem at all. The scars in front of the ear are hidden within the fold of the ear, so they do not create a troublesome situation for men either. The remaining scars stay concealed.",
          "The aim of this operation is not simply to remove excess skin. It also involves reshaping the loosened, sagging deep tissues at the appropriate direction and tension.",
        ],
      },
      {
        heading: "What is recovery like after a facelift?",
        body: [
          "At the end of a facelift a soft dressing is applied covering the whole face while leaving the eyes, nose and mouth free. Cold is applied to the face in intervals of 10-15 minutes per hour. The patient is discharged the following day with antibiotics and painkillers prescribed.",
          "For one week the patient is asked to sleep with the back elevated and to continue intermittent cold application. The drains are usually removed on the second day. The dressing is taken off and bathing is permitted. Sutures on the face dissolve by themselves and do not need to be removed. Those in the hair-bearing skin are removed in the first week.",
          "The complication encountered most often with this operation is a collection of blood in the surgical area, particularly in men. For this reason a drain is always used and the person's blood pressure is monitored before and after surgery. Temporary numbness and asymmetry related to the surgery may occur in the face. For the first 8 weeks it is necessary to avoid intense sun, solariums, saunas and Turkish baths, and to refrain from strenuous sporting activity. In men, shaving is permitted at the end of the second week.",
          "Undesirable situations may be encountered after any surgical procedure. Anaesthetic risk, a collection of blood in the surgical area, infection and delayed wound healing are possible complications common to all surgical procedures. Smoking adversely affects the blood supply and oxygenation of the tissues and therefore increases the rate of complications. A facelift in particular is not recommended in people who smoke heavily and are unwilling to stop before surgery.",
        ],
      },
    ],
  },
  {
    slug: "alin-germe",
    category: "yuz-estetigi",
    title: "Brow Lift",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "What is a brow lift?",
        body: [
          "This is an aesthetic operation to correct the deformity caused by laxity and sagging in the forehead region and by the downward displacement of the eyebrows as a whole. It is essentially an upper facelift. Signs of ageing begin first in the upper face and around the eyes. Drooping and downward displacement of the eyebrows also leads to a build-up of tissue on the upper eyelid. Eyelid surgery (blepharoplasty), which addresses excess skin, is not sufficient on its own in people whose main problem is brow droop.",
        ],
      },
      {
        heading: "How is a brow lift performed?",
        body: [
          "A brow lift is performed in a hospital operating theatre, preferably under general anaesthesia. Through 2 cm incisions made in the hair-bearing skin of the forehead and temple region, instruments specially designed for endoscopic surgery are introduced to release the forehead and eyebrows, which are then secured in their new position through the incision sites in the scalp using various techniques. In this way, with scars that are easily hidden in the hair-bearing skin, the forehead is tightened and the drooping of the eyebrows is corrected.",
        ],
      },
      {
        heading: "What is recovery like after a brow lift?",
        body: [
          "After a brow lift a dressing consisting of tapes that hold the skin taut is applied to the forehead and above the eyebrows. The drain is removed the following day. If no combined surgical procedure has been performed, the patient is discharged the same day. Numbness and asymmetry in the surgical area are temporary. For the first 8 weeks it is necessary to avoid intense sun, solariums, saunas and Turkish baths, and to refrain from strenuous sporting activity.",
          "Undesirable situations may be encountered after any surgical procedure. Anaesthetic risk, a collection of blood in the surgical area, infection and delayed wound healing are possible complications common to all surgical procedures. Smoking adversely affects the blood supply and oxygenation of the tissues and therefore increases the rate of complications.",
        ],
      },
    ],
  },
  {
    slug: "goz-kapagi-estetigi",
    category: "yuz-estetigi",
    title: "Eyelid Surgery",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "What is eyelid surgery (blepharoplasty)?",
        body: [
          "Eyelid surgery (blepharoplasty) is a surgical procedure that aims to correct the excess skin, laxity and prominence of fatty tissue that develop over time in the upper and/or lower eyelids. The aim is to achieve a more rested, alert and natural appearance around the eyes while preserving the person's facial expression and individual characteristics.",
        ],
      },
      {
        heading: "How is eyelid surgery performed?",
        body: [
          "In upper eyelid surgery the excess skin and, where necessary, the fatty tissue are addressed. In the lower eyelid, under-eye bags, excess skin and contour irregularities are assessed according to the person's anatomy. Incisions are planned, as far as possible, within the natural folds of the eyelid and within anatomical boundaries.",
        ],
      },
      {
        heading: "How is the operation planned?",
        body: [
          "Surgical planning is carried out individually, assessing together the structure of the eyelid, the position of the eyebrow, the fatty tissue around the eye, the quality of the skin and the person's expectations.",
          "The fundamental aim in eyelid surgery is not merely to remove excess tissue, but to create an appearance around the eyes that is natural, balanced and in harmony with the face as a whole.",
        ],
      },
    ],
  },
  {
    slug: "yag-enjeksiyonu",
    category: "yuz-estetigi",
    title: "Fat Injection",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "What is fat injection?",
        body: [
          "Fat injection is the transfer of fatty tissue taken from the person's own body, after it has undergone special processing, to areas of the face or body where it is needed. The aim is to restore lost volume, to shape the contours, and to achieve a natural appearance in harmony with the person's anatomy.",
        ],
      },
      {
        heading: "Which areas can it be applied to?",
        body: [
          "In this method, which can be applied to the face, the breast and various parts of the body, some of the transferred fat becomes permanent while a portion may be absorbed by the body over time.",
        ],
      },
      {
        heading: "What are the results like?",
        body: [
          "Because results may vary from person to person, the procedure should be planned individually, in line with the person's anatomical characteristics and expectations.",
        ],
      },
    ],
  },

  /* Nasal and ear aesthetics have no sub-pages; the content sits
     directly on the category page. */

  /* ---------------- Breast aesthetics ---------------- */
  {
    slug: "meme-buyutme",
    category: "meme-estetigi",
    title: "Breast Augmentation",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "What is breast augmentation surgery?",
        body: [
          "Breast augmentation is a surgical procedure to correct insufficient breast volume arising from developmental causes, pregnancy or weight loss. Breast implants are used for this purpose.",
          "A breast implant is a medical device consisting of a silicone shell containing various fluid materials, used for breast augmentation. According to the fluid they contain, implants fall into two groups: those containing silicone gel and those containing saline (physiological serum). According to their shape, round implants and teardrop-shaped anatomical implants are available. The type and shape of implant to be used is decided according to the patient's body structure, skin quality, skin thickness and expectations.",
        ],
      },
      {
        heading: "How is breast augmentation performed?",
        body: [
          "Breast augmentation is an aesthetic procedure best carried out in a hospital operating theatre under general anaesthesia. The implant is placed either in front of or behind the muscle. Within these two basic techniques there are further variations such as the subfascial and dual plane approaches. The implant is inserted through the armpit, the nipple, or the inframammary fold. Which technique is preferred is planned before surgery in relation to the structure of the breast and the type of implant.",
          "At the end of surgery a light dressing is applied and the patient is fitted with a sports bra appropriate to the desired breast size. A vacuum tube system known as a drain is used to prevent fluid from collecting in the surgical area. It is removed within three days, depending on the volume drained. The patient is discharged from hospital the following day with antibiotics and painkillers prescribed.",
          "The swelling that is marked in the breasts during the first two days begins to subside from the third day. During this period, cold application to the upper part of the breasts and rest bring relief. The sports bra is worn for 6 weeks. Strenuous sporting activity that loads the chest muscles is avoided for 8 weeks.",
        ],
      },
      {
        heading: "What is recovery like after breast augmentation?",
        body: [
          "Undesirable situations may be encountered after any surgical procedure. Anaesthetic risk, a collection of blood in the surgical area, infection and delayed wound healing are possible complications common to all surgical procedures. Smoking adversely affects the blood supply and oxygenation of the tissues and therefore increases the rate of complications.",
          "Capsular contracture is an undesirable condition specific to breast augmentation. It may develop late, in 1-3% of cases, as an excessive reaction of the body to the implant. It shows itself as a thickened membrane around the implant and a distortion of the shape of the breast. Release or removal of the capsule, or replacement or removal of the implant, may be required. The likelihood of the implant shell wearing over time and its contents leaking out is very low. If this is detected during routine breast cancer screening (mammography, breast ultrasound), the implant must be replaced.",
          "The risk of breast cancer in patients with breast implants is no different from that in the general population. There is no objection to women with breast implants becoming pregnant. However, a planned pregnancy within the first 6 months is not advised, so that the healing process of the tissues can be completed. Implants do not create an obstacle to breastfeeding.",
        ],
      },
    ],
  },
  {
    slug: "meme-kucultme",
    category: "meme-estetigi",
    title: "Breast Reduction",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "What is breast reduction surgery?",
        body: [
          "Breast reduction covers the surgical procedures that reduce the volume of large, sagging breasts in proportion to the person's body structure, creating a more elevated and aesthetic breast shape.",
          "Large breasts also bring other health problems with them. Back and lower back pain from the weight of the breasts, postural problems such as stooping, and groove-shaped indentations on the shoulders from the pressure of bra straps all develop. Redness beneath and between the breasts, which worsens in summer, along with unpleasant odour, discharge, itching, sores and fungal growth are very distressing.",
          "Breasts that are structurally large affect a person's social life from puberty onwards. Being unable to find suitable clothing, the stress of attracting attention in every social setting, difficulty exercising, and looking heavier than one is all cause unhappiness.",
          "Breast reduction can be performed on any woman who has completed breast development, has no plans for pregnancy in the near future, shows no suspicion of breast cancer on radiological examination, and is in good general health.",
        ],
      },
      {
        heading: "How is breast reduction performed?",
        body: [
          "Breast reduction is an aesthetic procedure best carried out in a hospital operating theatre under general anaesthesia. In this operation the nipple is raised while excess, sagging breast tissue is removed and the breast is reshaped. The removed breast tissue is usually sent for pathological examination. The result is a smaller, more elevated and aesthetic breast.",
          "In medium-sized breasts the operation ends with a scar around the nipple and a vertical scar running from the lower midpoint of the nipple to the inframammary fold, while in large and wide breasts a horizontal scar, concealed within the inframammary fold, is added. Although the permanence of the scars depends chiefly on the person's genetic make-up, it takes 1 year for them, along with the breast, to take their final form.",
          "At the end of surgery a light dressing is applied and the patient is fitted with a sports bra appropriate to the desired breast size. A vacuum tube system known as a drain is used to prevent fluid from collecting in the surgical area. It is removed within three days, depending on the volume drained. After 1 or 2 days in hospital the patient is discharged with antibiotics and painkillers prescribed.",
          "The swelling that is marked in the breasts during the first two days begins to subside from the third day. During this period, cold application to the upper part of the breasts and rest bring relief. The sports bra is worn for 3 months. Strenuous sporting activity is not recommended before 8 weeks.",
        ],
      },
      {
        heading: "What is recovery like after breast reduction?",
        body: [
          "Undesirable situations may be encountered after any surgical procedure. Anaesthetic risk, a collection of blood in the surgical area, infection and delayed wound healing are possible complications common to all surgical procedures.",
          "The elevated, full breasts achieved at the end of surgery may sag over the years with age and gravity, and following an intervening pregnancy or weight change. They do not, however, return to their preoperative state. Asymmetry of the breasts, numbness and colour change of the nipples that is usually temporary, delayed wound healing, and prominence of the scars particularly in relation to the person's skin type may be seen. Smoking adversely affects the blood supply and oxygenation of the tissues and therefore increases the rate of complications.",
          "Breast reduction is not an absolute barrier to breastfeeding, but whether breastfeeding will be possible cannot be known with certainty.",
        ],
      },
    ],
  },
  {
    slug: "meme-diklestirme",
    category: "meme-estetigi",
    title: "Breast Lift",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "What is a breast lift / mastopexy?",
        body: [
          "A breast lift is a surgical procedure that reshapes breast tissue that has sagged for various reasons, creating a more aesthetic breast shape. If the size and volume of the breast are not sufficient, a breast implant must be used alongside the lift.",
          "With pregnancy, breastfeeding and weight gain the breasts enlarge and the ligaments that suspend the breast from the chest wall stretch. When pregnancy and breastfeeding come to an end and weight is lost, the breast tissue shrinks but the suspensory ligaments cannot return to their former tension. Hormonal changes such as age and menopause, together with the effect of gravity, cause the breast tissue to sag progressively. As a result, first the breast tissue and, in more advanced cases, the nipple descend below the inframammary fold.",
        ],
      },
      {
        heading: "How is a breast lift performed?",
        body: [
          "A breast lift is an aesthetic procedure best carried out in a hospital operating theatre under general anaesthesia. In this operation the nipple is raised while the sagging breast tissue is gathered and made fuller and more elevated. If the volume of the breast is insufficient, a breast implant is used to give the breast a fuller shape.",
          "Depending on the size of the breast, the scars may be confined to the area around the nipple. More often, however, in larger breasts the operation ends with a scar around the nipple and a vertical scar running from the lower midpoint of the nipple to the inframammary fold. In wider breasts a horizontal scar, concealed within the inframammary fold, may be added. Although the permanence of the scars depends chiefly on the person's genetic make-up, it takes 1 year for them, along with the breast, to take their final form.",
          "At the end of surgery a light dressing is applied and the patient is fitted with a sports bra appropriate to the desired breast size. A vacuum tube system known as a drain is used to prevent fluid from collecting in the surgical area. It is removed within three days, depending on the volume drained. The patient is discharged from hospital the following day with antibiotics and painkillers prescribed.",
          "The swelling that is marked in the breasts during the first two days begins to subside from the third day. During this period, cold application to the upper part of the breasts and rest bring relief. The sports bra is worn for 3 months. Strenuous sporting activity is not recommended before 8 weeks.",
        ],
      },
      {
        heading: "What is recovery like after a breast lift?",
        body: [
          "Undesirable situations may be encountered after any surgical procedure. Anaesthetic risk, a collection of blood in the surgical area, infection and delayed wound healing are possible complications common to all surgical procedures. Smoking adversely affects the blood supply and oxygenation of the tissues and therefore increases the rate of complications.",
          "If a breast implant has been used alongside the lift, the undesirable situations specific to implants apply to this operation as well. The elevated, full breasts achieved at the end of surgery may sag over the years with age and gravity, and following an intervening pregnancy or weight change. They do not, however, return to their preoperative state.",
        ],
      },
    ],
  },
  {
    slug: "meme-rekonstruksiyonu",
    category: "meme-estetigi",
    title: "Breast Reconstruction",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "What is breast reconstruction?",
        body: [
          "Breast reconstruction is the general term for the surgical techniques used to rebuild the breast after part or all of it has been removed because of cancer.",
          "With advancing technology and the spread of preventive medicine, breast cancer is now detected at very early ages. The loss of the breast, an organ of great importance to a woman, deeply affects the psychology of women of every age.",
          "Surgery to rebuild the breast does not affect the person's cancer treatment. For this reason, once a diagnosis of cancer has been made, the patient must be told that her breast can be reconstructed. The patient's surgical and oncological treatment is planned taking into account many factors, including the size of the tumour, involvement of the lymph nodes in the armpit, age, a family history of breast cancer, and the presence of oestrogen receptors.",
          "Breast reconstruction — that is, rebuilding the breast — is carried out either at the same time as the cancer surgery or later. Reconstruction performed immediately following the cancer operation allows the patient to wake from the operating table with a breast. Where immediate reconstruction is not appropriate, or where the patient has not chosen it, reconstruction can also be carried out after oncological treatment is complete, whenever the patient has made her decision. Which technique is used is determined by whether the patient will receive radiotherapy after the cancer surgery, by her body structure, her general health and her expectations.",
        ],
      },
      {
        heading: "How is breast reconstruction performed?",
        body: [
          "Breast reconstruction is carried out in a hospital operating theatre under general anaesthesia. Different techniques are available for this purpose.",
          "In reconstruction using a silicone breast implant, once the breast tissue has been removed, a permanent implant is placed beneath the muscle if the skin and subcutaneous tissue are sufficient, or a tissue expander if they are not. Two weeks later the expander is inflated with saline in sessions, bringing the breast to the target volume within 1-2 months. At least six months after the target volume is reached, the expander is removed and a permanent implant is placed.",
          "If an implant of the type that is partly silicone and serves as both tissue expander and permanent implant was chosen at the first operation, then at least 6 months after the breast reaches the target volume the connecting port used to inflate it with saline is withdrawn under local anaesthesia and the implant is left in place.",
          "In reconstruction using the patient's autologous tissue — that is, her own tissue — abdominal and back tissue are most often preferred. Which is used is determined by the person's body structure and the patient's preference.",
          "In the technique known as the TRAM flap, abdominal tissue is used together with part of the abdominal muscle (the rectus abdominis). This technique is suitable for patients with excess tissue in the abdominal region who could in fact also be candidates for a tummy tuck. As with a tummy tuck, the scar is concealed beneath the underwear.",
          "In patients without sufficient tissue in the abdominal region, back tissue is preferred. In this technique the back tissue is used together with part of the back muscle (the latissimus dorsi). Because there is not a great deal of tissue in the back able to create volume, particularly in slim patients, a breast implant may be used alongside this technique. The scar is planned so as to be concealed beneath the bra.",
          "With these autologous tissue techniques, the hospital stay and the time taken to return to active life are longer than with techniques using an implant or tissue expander. The postoperative healing process, the likelihood of revision and the results of each technique should be discussed in detail.",
        ],
      },
      {
        heading: "How is a new nipple created?",
        body: [
          "Where the whole breast must be removed because of breast cancer, the nipple is usually included in the operation. In breast reconstruction performed either at the same time or at a later stage, rebuilding the breast is the first objective. Once the entire surgical process relating to the shape and volume of the breast has been completed, creation of the nipple is planned.",
          "At this stage, however, the match between the opposite breast and the newly created breast in shape and volume is very important. If the healthy breast is sagging and large, reduction and lifting are preferred; if it is small, augmentation. In this way the nipple of the newly created breast can be made symmetrical with that of the healthy breast, achieving a more aesthetic result.",
          "The nipple-areola complex consists of the nipple itself and the surrounding circular brown skin (the areola). The nipple is created using local flaps planned from the surrounding breast tissue. The areola is created with skin taken from the groin region or, more often, with tattooing.",
        ],
      },
    ],
  },
  {
    slug: "jinekomasti",
    category: "meme-estetigi",
    title: "Gynecomastia",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "What is gynecomastia surgery / male breast reduction?",
        body: [
          "Gynecomastia surgery is the surgical procedure that reduces the volume of abnormally enlarged breasts in men in proportion to the person's body structure, creating a male-type chest shape. Gynecomastia may develop from hormonal causes, from tumours, or from the use of various medications.",
          "Breast enlargement due to hormonal causes is often seen in newborns and during puberty, and is temporary. However, in 30% of people the tension and enlargement seen during puberty does not resolve and becomes permanent. This affects the social lives of young people. They try to conceal it with loose clothing and by stooping; going into the sea or a pool in summer becomes something of a nightmare.",
          "Hormonal medications used without supervision by some people who practise bodybuilding are among the causes of abnormal breast enlargement in men. Hormones used to increase muscle development lead in the long term to permanent enlargement of the breast glands and even to discharge of milk from the nipple.",
          "In a patient presenting with unilateral or bilateral abnormal breast enlargement, the type and degree of gynecomastia are determined through detailed examination and imaging. Hormonal analysis may also be required. Investigations establish whether the gynecomastia is glandular — that is, abnormal enlargement of the breast gland — or lipomatous, that is due to localised excess fatty tissue. Staging is carried out according to the size of the breast and the presence and degree of skin laxity.",
        ],
      },
      {
        heading: "How is gynecomastia surgery performed?",
        body: [
          "Gynecomastia surgery is carried out in a hospital operating theatre under sedation or general anaesthesia, depending on the technique to be used and the extent of the gynecomastia. If the cause of the abnormal enlargement in the breast region is an accumulation of localised fatty tissue, the liposuction technique is used.",
          "If this is accompanied by abnormal enlargement, for various reasons, of the breast tissue that is usually felt as a button-like mass behind the nipple, liposuction alone is not sufficient. Once liposuction has reduced the thickness of the subcutaneous tissue and the desired contour of the chest has been achieved, a crescent-shaped incision is made at the junction of the nipple and the skin. The breast tissue is excised. The incision line is closed with self-dissolving sutures. The removed breast tissue is usually sent for pathological examination.",
          "In patients with advanced gynecomastia there is downward sagging of the skin from the inframammary fold. The nipple may also be larger than normal. In particular, with the development and spread of bariatric surgery, the number of people losing a large amount of weight (more than 20 kilos) is increasing. As a result of this weight loss, skin laxity inevitably develops. Significant sagging in the chest region is also seen in men.",
          "In this type of gynecomastia, more detailed techniques are preferred to correct the excess skin. To address the excess skin and the enlarged nipple, a circular incision at the junction of the nipple and the skin is combined with an incision running from the lower midpoint of the nipple to the inframammary fold. In this operation the nipple is raised while excess, sagging breast tissue is removed and the chest is reshaped. Although the permanence of the scars depends chiefly on the person's genetic make-up, it takes 1 year for them, along with the chest, to take their final form.",
          "At the end of surgery a light dressing is applied and the patient is fitted with a compression garment covering the chest region. If breast tissue has been excised, a vacuum tube system known as a drain is used to prevent fluid from collecting in the surgical area. It is removed within three days, depending on the volume drained. The patient is discharged the same day or the following day with antibiotics and painkillers prescribed.",
        ],
      },
      {
        heading: "What is recovery like after gynecomastia surgery?",
        body: [
          "The compression garment fitted immediately after gynecomastia surgery should be worn consistently for 4 weeks. At the end of the second week it may be removed at night if it is very uncomfortable. Swelling in the chest region does not settle and take its final shape before 6 months. Strenuous sporting activity, particularly weight-bearing exercise directed at the chest, is not recommended before 8 weeks. From the second week onwards, walking and swimming are not a problem.",
        ],
      },
    ],
  },

  /* ---------------- Body contouring ---------------- */
  {
    slug: "liposuction",
    category: "vucut-estetigi",
    title: "Liposuction",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "What is liposuction?",
        body: [
          "Liposuction is a surgical procedure that removes localised excess fat causing contour irregularities in the body. Suitable candidates for this operation are younger patients close to their ideal weight with good skin elasticity. Liposuction is not a solution for eliminating cellulite or for losing weight. However, by removing localised excess and reducing the subcutaneous fat layer, the person appears slimmer and the skin irregularities known as cellulite become less marked.",
          "The number of fat cells is fixed in adults. Weight gain does not increase their number, but fat is stored within the fat cells. What determines a person's areas of excess is the concentration of a greater number of fat cells in certain regions. The distribution of these fat cells differs from person to person and between the sexes.",
          "In people with a pear-shaped body, fat collects around the abdomen; in those with an apple-shaped body, around the hips. In these regions above all, and in other regions specific to the person's build, there are stubborn areas of excess that do not respond to diet and exercise. The lasting solution for removing this excess, which causes contour irregularities in the body, is to remove the fat itself. With liposuction it is in fact the fat cells storing the fat that are removed. For this reason, if weight is gained after surgery, fat does not accumulate as before in the regions where the number of fat cells has been reduced.",
          "Liposuction is most often applied to the abdomen, the flanks, the hips, the legs, the arms, beneath the chin, above the knee and on the inner surface of the knee. While correcting the shape and contour of the body, it may be necessary to add fat to some areas as well as remove it. Fat taken during liposuction is processed as required and injected into certain areas of the body in the same session, achieving a more proportionate body shape.",
        ],
      },
      {
        heading: "How is liposuction performed?",
        body: [
          "Liposuction is an aesthetic procedure best carried out in a hospital operating theatre. Depending on the extent of the area to be treated and whether another procedure is being performed alongside it, it is carried out under local anaesthesia with sedation or under general anaesthesia.",
          "The areas of localised excess fat causing contour irregularities are marked before surgery. During the operation a special solution containing medication to prevent bleeding and to relieve postoperative pain is injected into these areas. Fat is removed by vacuum through fine cannulas introduced via 3-4 mm incisions placed so as to be hidden in the body's natural folds. If fat injection is to be performed in the same session, the fat is collected using a special syringe system and prepared for injection.",
          "There is no numerical target for the amount of fat removed. The aim, as for a sculptor, is to remove the amount of fat that will create the desired contour, without causing unwanted irregularities in the skin.",
          "At the end of surgery the patient is fitted with a special compression garment applying pressure to the areas treated. The patient is discharged the same day or the following day with antibiotics and painkillers prescribed.",
        ],
      },
      {
        heading: "What is recovery like after liposuction?",
        body: [
          "The compression garment should be worn consistently for 4-6 weeks, because the pressure it applies allows the skin to adapt healthily to the areas from which fat has been removed, and helps the body take shape more quickly and effectively. After the second week the garment may be removed at night from time to time.",
          "Numbness, bruising of the skin, pain on touch and tenderness diminish rapidly from the third week. In the first weeks an increase on the scales and clothes feeling tighter are expected, because the tissues are swollen as a result of surgery. From the second month the swelling reduces considerably. The body contour takes its final form within 6 months to 1 year.",
        ],
      },
      {
        heading: "What is laser liposuction / laser lipolysis?",
        body: [
          "This is a body contouring procedure based on the principle of using laser energy to break down the membranes of fat cells and liquefy the fat stored within them. Depending on the laser technique used and on the region, the liquefied fatty tissue may either be left to be eliminated from the body through the lymphatics or removed through fine cannulas.",
          "One feature of this procedure is that the thermal effect of the laser stimulates collagen synthesis and thereby tightens the skin. In this way both fat removal and skin tightening take place in a single session.",
        ],
      },
    ],
  },
  {
    slug: "karin-germe",
    category: "vucut-estetigi",
    title: "Tummy Tuck",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "What is a tummy tuck (abdominoplasty)?",
        body: [
          "A tummy tuck is a surgical procedure that removes laxity in the skin and subcutaneous tissue of the abdominal region, creating a flat and firm abdomen. In this operation all the excess skin below the navel is removed, while the abdominal wall lining, loosened particularly by pregnancy, is also tightened. Any stretch marks present in the removed skin disappear entirely. Stretch marks above the navel also become less visible as a result of the tightening.",
          "Laxity of the skin and subcutaneous tissue of the abdominal region — extending in some people to the flanks — often develops after childbirth and after significant weight gain and loss, and the waistline thickens. If this laxity is severe it leads to pain in the lower back and back, and to complaints such as unpleasant odour, itching and redness beneath the skin fold, which worsen particularly in summer. Aesthetically, it is a deformity that makes a person's social and private life considerably more difficult. Clothing that covers the abdominal region is preferred. In summer, concealing this area becomes even harder.",
        ],
      },
      {
        heading: "How is a tummy tuck performed?",
        body: [
          "A tummy tuck is carried out in a hospital operating theatre under general anaesthesia. The operation ends with a scar along the same line as a caesarean scar, running beneath the lax skin along the groin and remaining within the bikini line. Although the permanence of the scar depends chiefly on the person's genetic make-up, it takes 1-2 years for it, along with the abdomen, to take its final form.",
          "After pregnancy the abdominal muscles remain separated from one another and the lining covering the muscles becomes lax. The navel becomes deformed by the tension of pregnancy and significant weight gain.",
          "With a tummy tuck, the lax skin containing stretch marks below the navel and the fatty tissue beneath it are removed. The loosened abdominal wall lining is plicated at the appropriate direction and tension to strengthen it. A new and more aesthetic navel is created. If necessary, liposuction is added to the operation to thin the subcutaneous fat layer. In this way a firm, flat abdomen with an aesthetic navel and a slimmer waist is created.",
          "A vacuum tube system known as a drain is used to prevent fluid from collecting in the surgical area. A compression garment is fitted around the abdomen.",
        ],
      },
      {
        heading: "What is recovery like after a tummy tuck?",
        body: [
          "The drains are removed within 3-4 days, depending on the volume drained. After two or 3 days in hospital the patient is discharged with antibiotics and painkillers prescribed. For the first week the patient is asked to lie at home with the back elevated and the legs slightly bent, and to walk leaning slightly forward when standing. This reduces the tension on the suture line. After the second week the person can gradually return to a normal lying and walking position. The marked swelling in the surgical area begins to subside from the third day. The compression garment should be worn consistently for 4 weeks. After surgery, eating frequent small portions is recommended.",
          "Undesirable situations may be encountered after any surgical procedure. Anaesthetic risk, a collection of blood in the surgical area, infection and delayed wound healing are possible complications common to all surgical procedures. Smoking adversely affects the blood supply and oxygenation of the tissues and therefore increases the rate of complications. A person who smokes should stop at least 2 weeks before surgery and should not smoke for 2-3 weeks afterwards.",
          "The most undesirable complication after a tummy tuck is embolism. To prevent embolism, anti-embolism stockings are fitted before surgery. After surgery the legs are massaged and moved while the patient is in bed. Appropriate medication is also used during the hospital stay. Before surgery, a history of deep vein thrombosis in the legs and the presence of varicose veins are enquired about with regard to embolism risk.",
          "Numbness, tenderness and swelling in the abdominal region are normal. From the first month the abdomen begins to take shape; it takes 1-2 years for it, along with the scars, to take its final form. Saunas, Turkish baths and strenuous sporting activity are not recommended before 8 weeks.",
        ],
      },
      {
        heading: "What is a mini tummy tuck (mini abdominoplasty)?",
        body: [
          "A mini tummy tuck is the surgical procedure performed when the sagging and laxity of the abdomen is confined to the area below the navel. Because the procedure is more limited than a full tummy tuck, it can end with a shorter scar. Postoperative recovery is also faster. If necessary it is combined with liposuction of the area above the navel.",
        ],
      },
    ],
  },
  {
    slug: "bacak-ici-germe",
    category: "vucut-estetigi",
    title: "Inner Thigh Lift",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "What is an inner thigh lift?",
        body: [
          "An inner thigh lift is a surgical procedure that removes laxity in the skin and subcutaneous tissue on the inner part of the thighs — whether structural or resulting from weight gain and loss and from gravity — and makes the area smooth and firm. Localised excess fat on the inner thigh can be corrected with a limited fat removal procedure if there is no skin laxity.",
          "Anatomically, the skin and subcutaneous tissue here are looser than elsewhere on the leg. For this reason, sagging develops in this region in a way that is uncomfortable, in response to gravity and to changes in weight. Wearing a swimsuit or shorts in the summer months is very distressing. In advanced deformities, the chafing, redness and sores that result from the inner thighs rubbing against each other force these people to wear trousers constantly to prevent friction.",
          "Emptying the subcutaneous fat layer with fat removal techniques makes the skin laxity even more apparent. For this reason, the inner thigh lift, which involves removing the tissue causing the sagging, should be combined with fat removal.",
        ],
      },
      {
        heading: "How is an inner thigh lift performed?",
        body: [
          "An inner thigh lift is carried out in a hospital operating theatre under local anaesthesia with sedation or under general anaesthesia. If there is excess fatty tissue alongside the laxity of the skin on the inner surface, the subcutaneous fat is first emptied using fat removal techniques. The excess skin and subcutaneous tissue causing the laxity, which becomes even more apparent after fat removal, is then removed once the inner thigh has been drawn upwards.",
          "The scars are concealed in the groin region so as to remain within the underwear. Although the permanence and width of the scars depend chiefly on the person's genetic make-up, it takes 1-2 years for them to take their final form. A vacuum tube system known as a drain is used to prevent fluid from collecting in the surgical area.",
        ],
      },
      {
        heading: "What is recovery like after an inner thigh lift?",
        body: [
          "The drains are removed within 2-3 days, depending on the volume drained. The patient is discharged the same day or the following day with antibiotics and painkillers prescribed. Bruising and swelling of the inner thigh subside from the first week onwards. During this period, keeping the legs at heart level and resting generally speeds up recovery.",
          "Because the suture line lies in a moist region of the body such as the groin, delays in wound healing may occur. It resolves without problems with dressings. Particularly with advanced laxity following weight loss of more than 20 kilos after bariatric surgery, the scars may continue along the inner surface of the thigh. A detailed examination before surgery is needed to establish the position of the scars.",
          "The patient returns to active life after ten days. Saunas, Turkish baths and strenuous sporting activity are not recommended before 8 weeks.",
        ],
      },
    ],
  },
  {
    slug: "kol-germe",
    category: "vucut-estetigi",
    title: "Arm Lift",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "What is an arm lift (brachioplasty)?",
        body: [
          "An arm lift is a surgical procedure that removes laxity in the skin and subcutaneous tissue on the inner part of the arms — whether structural or resulting from weight gain and loss and from gravity. Localised excess fat on the inner surface of the arm can be corrected with a limited fat removal procedure if there is no skin laxity.",
          "Anatomically, the skin and subcutaneous tissue here are looser than elsewhere on the arm. For this reason, sagging develops in this region in a way that is uncomfortable, in response to gravity and to changes in weight. Wearing short-sleeved clothing in the summer months, and activities involving arm movement, are very distressing.",
          "Emptying the subcutaneous fat layer with fat removal techniques makes the skin laxity even more apparent. For this reason, the arm lift, which involves removing the tissue causing the sagging, should where necessary be combined with fat removal.",
        ],
      },
      {
        heading: "How is an arm lift performed?",
        body: [
          "An arm lift is carried out in a hospital operating theatre under local anaesthesia with sedation or under general anaesthesia. If there is excess fatty tissue alongside the laxity of the skin on the inner surface, the subcutaneous fat is first emptied using fat removal techniques. The excess skin and subcutaneous tissue causing the laxity, which becomes even more apparent after fat removal, is then removed.",
          "The important point to consider with this operation is the position of the scar. With very mild skin laxity the scar can be hidden in the armpit. However, the arm laxity that leads a person to seek surgery is usually more advanced than those cases in which the scar can be concealed in the armpit. The desired firmness of the arm is achieved only when the excess skin is excised in a line parallel to the arm.",
          "An effort is made to position the scar between the inner and posterior surfaces of the arm, so that it is not noticeable when viewed from the front or from behind with the arm hanging normally alongside the body. Although the permanence and width of the scars depend chiefly on the person's genetic make-up, it takes 1-2 years for them to take their final form. A vacuum tube system known as a drain is used to prevent fluid from collecting in the surgical area.",
        ],
      },
      {
        heading: "What is recovery like after an arm lift?",
        body: [
          "The drains are removed within 2-3 days, depending on the volume drained. The patient is discharged the same day or the following day with antibiotics and painkillers prescribed. Bruising and swelling of the inner arm subside from the first week onwards. During this period, not putting strain on the arms speeds up recovery. Saunas, Turkish baths and strenuous sporting activity are not recommended before 8 weeks.",
        ],
      },
    ],
  },

  /* ---------------- Non-surgical treatments ---------------- */
  {
    slug: "botoks",
    category: "ameliyatsiz-yontemler",
    title: "Botox",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "What is Botox?",
        body: [
          "Botox is a toxin produced by a bacterium called Clostridium botulinum. It is a natural substance, produced by natural means in laboratories, placed as a powder into sealed sterile vacuum vials and transported with careful attention to the cold chain.",
          "The Botox toxin blocks the release of a substance called acetylcholine, which conveys stimuli at the nerve endings; the nerve signal cannot reach the muscle and muscle contraction cannot occur. Botox is prepared for external, localised use; the muscles in the injected area become paralysed and remain relaxed for months.",
          "It is used for temporary solutions to a range of conditions in different areas of the body, from the prevention of sweating to the treatment of localised spasticity and for aesthetic purposes.",
        ],
      },
      {
        heading: "What is Botox treatment of the face?",
        body: [
          "The use of the muscles of facial expression creates wrinkles in the skin above them. If these wrinkles have been present for a very long time, and if the skin is also dry, they can become much deeper and persist even without any expression being made. Different muscles of expression are active in each person when smiling or under stress. For this reason the depth and location of wrinkles differ from person to person.",
          "Botox is used on the face particularly for aesthetic purposes; its most common application is to relax overactive muscles of expression temporarily and thereby reduce, for a period, the skin wrinkles they create. It is most often applied to the forehead, between the eyebrows and around the eyes to prevent wrinkles in these regions. As a result the wrinkles diminish according to their depth or disappear entirely. Alongside this, if the person wishes, the eyebrows are lifted by the planned amount.",
        ],
      },
      {
        heading: "How is aesthetic Botox administered?",
        body: [
          "Botox treatment is a procedure carried out in office conditions. Applying a local anaesthetic cream to the injection areas is sufficient. With the patient in a semi-seated position, Botox that has been diluted and prepared in advance is injected into different areas of the face at doses determined according to the patient's needs, using fine, precise syringes.",
        ],
      },
      {
        heading: "What is recovery like after Botox?",
        body: [
          "After Botox treatment, cold is applied to the injection areas. Massage, however, must not be performed. Temporary mild redness and bruising may occur at the injection points. There is no objection to covering these with make-up.",
          "The patient is called for a follow-up examination as required. The duration of the effect of Botox is 4-6 months, varying from patient to patient. After this period the treatment needs to be repeated.",
        ],
      },
    ],
  },
  {
    slug: "dolgu",
    category: "ameliyatsiz-yontemler",
    title: "Fillers",
    image: "/operations/background1.png",
    sections: [
      {
        heading: "What are fillers? What are hyaluronic acid and fat injection?",
        body: [
          "A filler is a substance produced for medical use that is injected for aesthetic purposes into hollowed areas of the body arising from a person's structure, from ageing, from illness or from previous surgery. Various substances have been described, and continue to be described, for use as fillers. The most widely accepted among physicians, however, are fat and hyaluronic acid.",
          "Fat used as a filler is taken from a region of the person's own body with abundant, resilient fat, such as the abdomen. It is put through various processes, varying according to technique, and injected into the areas to be filled.",
          "Hyaluronic acid, on the other hand, is a natural substance already present in the human body. It is also produced by natural means in laboratories and transported in special syringes as a ready-to-use, thick fluid consisting of hyaluronic acid gel together with a local anaesthetic such as lidocaine, stored at a temperature of 2-25 °C. This filler is available from pharmaceutical wholesalers under various brand names, prepared for use by specialists only.",
          "Hyaluronic acid is prepared for external, localised use; it remains effective in the injected area for months. Fat and hyaluronic acid are used for temporary solutions to a range of conditions in different areas of the body.",
        ],
      },
      {
        heading: "What is filler treatment of the face?",
        body: [
          "Fillers are used on the face for aesthetic purposes, to add fullness to areas where the skin is hollowed or lined. The most common applications are filling the nasolabial sulcus — the fold between the nose and the mouth — the marionette line beside the mouth, and the horizontal lines at the border of the lips and the vertical lines above them.",
          "They are also applied to the lip border and beneath the lip mucosa to make the lips more defined and fuller. Beyond this, fillers can be applied in a balanced way to other areas of the face where contouring is needed.",
        ],
      },
      {
        heading: "How are fat and hyaluronic acid injections administered?",
        body: [
          "Hyaluronic acid treatment is a procedure carried out in office conditions. Hyaluronic acid comes packaged ready for use. The harvesting of fat and its preparation on the first occasion should ideally be carried out in a sterile environment in operating theatre conditions, under local anaesthesia with sedation. It is taken through a small opening, most often from the abdominal region; the amount to be used for that injection is processed and the remainder is frozen and stored for use in later sessions.",
          "Fat and hyaluronic acid fillers are administered in a similar way. First the areas to be injected are wiped with disinfectant, a cream containing a local anaesthetic is applied to the surface and sensitivity is reduced. Then, with the patient in a semi-seated position, hyaluronic acid is injected using fine, precise special syringes, and fat using special cannulas, into different areas of the face at doses determined according to the patient's needs.",
          "In patients due to receive hyaluronic acid injections, untreated epilepsy, a tendency to hypertrophic scarring, allergy to hyaluronic acid or lidocaine, pregnancy, childhood, active acne, herpes and inflamed tissue, and concurrent laser treatment, dermabrasion or deep chemical peeling are contraindications.",
          "Conversely, the use of blood-thinning medication, aspirin and vitamin C, autoimmune disease, a generally allergic constitution, liver disease or the use of medication that disrupts liver metabolism, cardiac block, and the presence of streptococcal infection are situations requiring careful judgement.",
        ],
      },
      {
        heading: "What is recovery like after filler treatment?",
        body: [
          "After fat and hyaluronic acid filler treatment, light massage of the injection areas by the specialist is important for even distribution, following which mild cold is applied. Temporary and mild redness, bruising, itching and pain may occur at the injection points for 1 week. There is no objection to covering these with make-up once 12 hours have passed.",
          "Patients who have had filler treatment should take care not to use creams in their daily routine for the first week. Following hyaluronic acid filler, patients should avoid sun, UV, cold below 0 °C, saunas and Turkish baths for 2 weeks. With fat injection these restrictions are less strict.",
          "Patients are called for a follow-up examination as required. The duration of the effect of hyaluronic acid is 4-6 months. With fat, part of it dissolves over the months while part persists. Varying from patient to patient, these treatments need to be repeated after this period.",
        ],
      },
    ],
  },
];

export const CONTENT_EN: ContentBundle = { categories, procedures };