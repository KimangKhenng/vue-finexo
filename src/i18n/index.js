import { createI18n } from 'vue-i18n'
import translation_en from './en'
import translation_km from './km'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: translation_en,
        km: translation_km
    }
})

export default i18n