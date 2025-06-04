import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' }
];

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    return (
        <div className="relative z-50">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        className="bg-purple-600 text-white hover:bg-purple-700 hover:text-white flex items-center gap-2 w-auto"
                    >
                        <Globe className="h-4 w-4" />
                        <span className="hidden sm:inline">
                            {languages.find(lang => lang.code === i18n.language)?.nativeName || 'Language'}
                        </span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[150px]">
                    {languages.map((language) => (
                        <DropdownMenuItem
                            key={language.code}
                            onClick={() => i18n.changeLanguage(language.code)}
                            className="cursor-pointer"
                        >
                            <span className="flex items-center gap-2">
                                {language.nativeName}
                            </span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default LanguageSwitcher; 