import { useTranslation } from 'react-i18next'
import { LanguageSelector } from './components/LanguageSelector'

export const Header = () => {
    const { t } = useTranslation()

    return (
        <div className="mb-8 flex items-center justify-between">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                    {t("title")}
                </h1>
                <p className="text-slate-600">
                    {t("subtitle")}
                </p>
            </div>
            <LanguageSelector />
        </div>
    )
}
