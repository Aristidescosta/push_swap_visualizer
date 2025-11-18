import React from 'react'
import { LanguageSelector } from './components/LanguageSelector'

export const Header = () => {
    return (
        <div className="mb-8 flex items-center justify-between">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                    Visualizador Push Swap
                </h1>
                <p className="text-slate-600">
                    Interactive sorting algorithm visualization
                </p>
            </div>
            <LanguageSelector />
        </div>
    )
}
