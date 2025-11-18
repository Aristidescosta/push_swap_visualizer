import { useTranslation } from 'react-i18next'
import { LanguageSelector } from './components/LanguageSelector'
import { DarkModeToggle } from './components/DarkModeToggle'

export const Header = () => {
    const { t } = useTranslation()

    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 text-slate-900 dark:text-slate-50">
                        {t("title")}
                    </h1>
                    <p className="text-slate-600 dark:text-slate-300">
                        {t("subtitle")}
                    </p>
                </div>
                <div className='flex items-center gap-3'>
                    <LanguageSelector />
                    <DarkModeToggle />
                </div>
            </div>
        </div>
    )
}
