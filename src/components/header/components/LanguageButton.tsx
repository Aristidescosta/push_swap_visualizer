import type { Language } from '../../../types/language';

export const LanguageButton = ({
    lang,
    currentLang,
    onSelect,
}: {
    lang: { code: Language; label: string; flag: string };
    currentLang: Language;
    onSelect: (code: Language) => void;
}) => (
    <button
        onClick={() => onSelect(lang.code)}
        className={`w-full px-4 py-2 text-left transition-colors hover:bg-slate-900 hover:bg-opacity-10 dark:hover:bg-slate-200 dark:hover:bg-opacity-10 text-slate-700 dark:text-slate-200 ${currentLang === lang.code ? 'bg-blue-500 bg-opacity-20' : ''
            }`}
    >
        {lang.flag} {lang.label}
    </button>
);
