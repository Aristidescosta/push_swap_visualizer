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
        className={`w-full px-4 py-2 text-left hover:bg-opacity-10 transition-colors hover:bg-slate-900 text-slate-700 ${currentLang === lang.code ? 'bg-blue-500 bg-opacity-20' : ''
            }`}
    >
        {lang.flag} {lang.label}
    </button>
);