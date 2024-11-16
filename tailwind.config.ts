import type {Config} from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                'slider': '0px 18px 35px 10px hsl(174, 77%, 80%)',
                'dark-slider': '0px 18px 35px 10px hsl(175,74%,30%)'
            },
            colors: {
                primary: {
                    'soft-cyan': 'hsl(174, 77%, 80%)',
                    'strong-cyan': 'hsl(174, 86%, 45%)',
                    'light-grayish-red': 'hsl(14, 92%, 95%)',
                    'light-red': 'hsl(15, 100%, 70%)',
                    'pale-blue': 'hsl(226, 100%, 87%)',
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                neutral: {
                    'very-pale-blue': 'hsl(230, 100%, 99%)',
                    'lighter-grayish-blue': 'hsl(224, 65%, 95%)',
                    'light-grayish-blue': 'hsl(223, 50%, 87%)',
                    'grayish-blue': 'hsl(225, 20%, 60%)',
                    'dark-desaturated-blue': 'hsl(227, 35%, 25%)'
                },
                dark: {
                    primary: {
                        'soft-cyan-dark': 'hsl(175,74%,30%)',
                        'strong-cyan-dark': 'hsl(174,84%,43%)',
                        'light-grayish-red-dark': 'hsl(13,83%,44%)',
                        'light-red-dark': 'hsl(15, 100%, 30%)',
                        'pale-blue-dark': 'hsl(226, 100%, 20%)'
                    },
                    neutral: {
                        'very-dark-blue': 'hsl(230, 30%, 10%)',
                        'darker-grayish-blue': 'hsl(224, 30%, 20%)',
                        'dark-grayish-blue': 'hsl(223, 30%, 30%)',
                        'medium-grayish-blue': 'hsl(225, 20%, 60%)',
                        'light-desaturated-blue': 'hsl(227, 35%, 75%)'
                    }
                },
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            screens: {
                sm: '300px',
                lg: '600px'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
