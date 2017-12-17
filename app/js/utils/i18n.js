import {
    MASS_MAIL_FORM,
    MASS_MAIL_SUBJECT_FIELD,
    MASS_MAIL_BODY_FIELD
} from 'constants/form'

const englishTranslation = {
    'header-home-link-text': 'plam',
    [`modal-form-${MASS_MAIL_FORM}-title`]: 'Email to participants',
    [`modal-form-${MASS_MAIL_FORM}-save`]: 'Send',
    [`modal-form-${MASS_MAIL_FORM}-cancel`]: 'Close',
    [`modal-form-${MASS_MAIL_FORM}-${MASS_MAIL_SUBJECT_FIELD}-label`]: 'Subject',
    [`modal-form-${MASS_MAIL_FORM}-${MASS_MAIL_SUBJECT_FIELD}-placeholder`]: 'your subject...',
    [`modal-form-${MASS_MAIL_FORM}-${MASS_MAIL_BODY_FIELD}-label`]: 'Message',
    [`modal-form-${MASS_MAIL_FORM}-${MASS_MAIL_BODY_FIELD}-placeholder`]: 'your message...',
    'invalid-or-missing-fields': 'There are invalid or empty fields',
    'validation-empty-string': 'The value cannot be an empty string.',
    'breadcrumbs-search': 'Search',
    'see-less': '- See less',
    'see-more': '+ See more',
    'print': 'Print',
    'yes': 'Yes',
    'no': 'No'
}

const frenchTranslation = {
    'header-home-link-text': 'plam',
    [`modal-form-${MASS_MAIL_FORM}-title`]: 'Email aux participants',
    [`modal-form-${MASS_MAIL_FORM}-save`]: 'Envoyer',
    [`modal-form-${MASS_MAIL_FORM}-cancel`]: 'Fermer',
    [`modal-form-${MASS_MAIL_FORM}-${MASS_MAIL_SUBJECT_FIELD}-label`]: 'Sujet',
    [`modal-form-${MASS_MAIL_FORM}-${MASS_MAIL_SUBJECT_FIELD}-placeholder`]: 'votre sujet...',
    [`modal-form-${MASS_MAIL_FORM}-${MASS_MAIL_BODY_FIELD}-label`]: 'Message',
    [`modal-form-${MASS_MAIL_FORM}-${MASS_MAIL_BODY_FIELD}-placeholder`]: 'votre message...',
    'invalid-or-missing-fields': 'Il existe des champs obligatoires non-remplis ou des valeurs incorrectes',
    'validation-empty-string': 'La valeur est vide.',
    'breadcrumbs-search': 'Recherche',
    'see-less': '- Voir moins',
    'see-more': '+ Voir plus',
    'print': 'Imprimer',
    'yes': 'Oui',
    'no': 'Non'
}

const bulgarianTranslation = {
    'header-home-link-text': 'plam',
    [`modal-form-${MASS_MAIL_FORM}-title`]: 'Имейл до участниците',
    [`modal-form-${MASS_MAIL_FORM}-save`]: 'Изпрати',
    [`modal-form-${MASS_MAIL_FORM}-cancel`]: 'Затвори',
    [`modal-form-${MASS_MAIL_FORM}-${MASS_MAIL_SUBJECT_FIELD}-label`]: 'Тема',
    [`modal-form-${MASS_MAIL_FORM}-${MASS_MAIL_SUBJECT_FIELD}-placeholder`]: 'вашата тема...',
    [`modal-form-${MASS_MAIL_FORM}-${MASS_MAIL_BODY_FIELD}-label`]: 'Съобщение',
    [`modal-form-${MASS_MAIL_FORM}-${MASS_MAIL_BODY_FIELD}-placeholder`]: 'вашето съобщение...',
    'invalid-or-missing-fields': 'Има невалидни или непопълнени полета',
    'validation-empty-string': 'Стойността не може да бъде празна.',
    'breadcrumbs-search': 'Търсене',
    'see-less': '- Виж по-малко',
    'see-more': '+ Виж повече',
    'print': 'Принтиране',
    'yes': 'Да',
    'no': 'Не'
}

export const i18n = ({ key, lang }) => {
    switch (lang) {
        case 'en':
            return englishTranslation[key]
        case 'fr':
            return frenchTranslation[key]
        case 'bg':
            return bulgarianTranslation[key]
        default:
            return englishTranslation[key]
    }
}
