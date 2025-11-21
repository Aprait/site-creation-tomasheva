import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'heading': ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
				'body': ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
				sans: ['Inter', '-apple-system', 'system-ui', 'sans-serif']
			},
			colors: {
				'bg': {
					DEFAULT: '#FFFFFF',
					'secondary': '#F7F8F9',
					'tertiary': '#F0F2F5',
					'accent': '#E8EBF0',
					'dark': '#0D0D0D'
				},
				'ink': {
					DEFAULT: '#0D0D0D',
					'secondary': '#4A4A4A',
					'tertiary': '#6B6B6B',
					'quaternary': '#9E9E9E'
				},
				'line': {
					DEFAULT: '#E0E0E0',
					'secondary': '#D1D1D1'
				},
				'card': '#FFFFFF',
				'accent': {
					DEFAULT: '#10B981',
					'hover': '#059669',
					'light': 'rgba(16, 185, 129, 0.08)',
					'lighter': 'rgba(16, 185, 129, 0.04)',
					'pastel': '#6EE7B7',
					'mint': '#A7F3D0'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
			},
			borderRadius: {
				lg: '24px',
				md: '16px',
				sm: '12px',
				xl: '32px',
				'2xl': '40px',
				'3xl': '48px'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;