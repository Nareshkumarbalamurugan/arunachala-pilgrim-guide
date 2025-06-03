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
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="bg-purple-600 text-white hover:bg-purple-700 hover:text-white flex items-center gap-2"
                >
                    <Globe className="h-4 w-4" />
                    <span className="hidden sm:inline">
                        {languages.find(lng => lng.code === i18n.language)?.nativeName || 'English'}
                    </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
                {languages.map((lng) => (
                    <DropdownMenuItem
                        key={lng.code}
                        onClick={() => i18n.changeLanguage(lng.code)}
                        className={`cursor-pointer flex items-center justify-between ${i18n.language === lng.code ? 'bg-purple-100' : ''
                            }`}
                    >
                        <span className="font-medium">{lng.nativeName}</span>
                        <span className="text-sm text-gray-500">({lng.name})</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageSwitcher; 