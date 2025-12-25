import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'zh'];

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;
    
    // Validate that the incoming `locale` parameter is valid
    if (!locale || !locales.includes(locale as any)) {
        locale = 'en'; // Default fallback or use notFound()
        // if (!locale) notFound(); 
    }

    return {
        locale,
        messages: (await import(`./messages/${locale}.json`)).default
    };
});
