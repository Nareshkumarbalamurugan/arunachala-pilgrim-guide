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
                        className="bg-purple-600 text-white hover:bg-purple-700 hover:text-white flex items-center gap-1 h-7 px-2 text-xs"
                    >
                        <Globe className="h-3.5 w-3.5 flex-shrink-0" />
                        <span className="hidden sm:inline truncate max-w-[40px] lg:max-w-[50px]">
                            {languages.find(lang => lang.code === i18n.language)?.nativeName || 'Lang'}
                        </span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="end"
                    className="w-[100px] min-w-[100px]"
                    sideOffset={5}
                >
                    {languages.map((language) => (
                        <DropdownMenuItem
                            key={language.code}
                            onClick={() => i18n.changeLanguage(language.code)}
                            className="cursor-pointer text-xs py-1"
                        >
                            <span className="truncate">{language.nativeName}</span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default LanguageSwitcher; 