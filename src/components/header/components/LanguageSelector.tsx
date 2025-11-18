import { Globe } from 'lucide-react';
import { useState, useRef } from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import type { Language } from '../../../types/language';
import { LANGUAGES } from '../../../utils/constants';
import { LanguageButton } from './LanguageButton';
import { useClickOutside } from '../../../hooks/useClickOutside';

export const LanguageSelector = () => {
    const [showLangMenu, setShowLangMenu] = useState(false);
    const { language, changeLanguage } = useLanguage();
    const menuRef = useRef<HTMLDivElement>(null);

    const handleSelectLanguage = (language: Language) => {
        changeLanguage(language);
        setShowLangMenu(false);
    };

    useClickOutside(menuRef, () => setShowLangMenu(false));

    return (
        <div className='relative' ref={menuRef}>
                <button
                    onClick={() => setShowLangMenu(!showLangMenu)}
                    className='p-3 rounded-xl transition-all hover:scale-110 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 shadow-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    title='Language'
                    aria-haspopup="true"
                    aria-expanded={showLangMenu}
                >
                    <Globe className="w-6 h-6" />
                </button>

                <div
                    className={`absolute right-0 mt-2 py-2 w-36 rounded-lg shadow-lg z-50 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all transform origin-top ${showLangMenu ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
                        }`}
                >
                    {LANGUAGES.map((lang) => (
                        <LanguageButton
                            key={lang.code}
                            currentLang={language}
                            lang={lang}
                            onSelect={handleSelectLanguage}
                        />
                    ))}
                </div>
            </div>
        
    );
};
