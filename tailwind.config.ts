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
				'heading': ['Inter', 'system-ui', 'sans-serif'],
				'body': ['Inter', 'system-ui', 'sans-serif'],
				sans: ['Inter', 'system-ui', 'sans-serif']
			},
			colors: {
				// Новые цвета в стиле foxmetod
				'bg': {
					DEFAULT: '#FFFFFF',
					'secondary': '#F9FAFB',
					'tertiary': '#F3F4F6',
					'accent': '#FEF3C7',
					'dark': '#18181B'
				},
				'ink': {
					DEFAULT: '#18181B',
					'secondary': '#3F3F46',
					'tertiary': '#71717A',
					'quaternary': '#A1A1AA'
				},
				'line': {
					DEFAULT: '#E4E4E7',
					'secondary': '#D4D4D8'
				},
				'card': '#FFFFFF',
				'accent': {
					DEFAULT: '#F97316',
					'hover': '#EA580C',
					'light': 'rgba(249, 115, 22, 0.1)',
					'lighter': 'rgba(249, 115, 22, 0.05)'
				},
				// Legacy цвета для совместимости
				'brand': {
					'primary': '#18181B',
					'secondary': '#3F3F46',
					'accent': '#F97316',
					'success': '#10B981',
					'warning': '#F59E0B',
					'light': '#FEF3C7',
					'muted': '#71717A',
					'navy': '#18181B',
					'blue': '#18181B'
				},
				// Градиенты
				'gradient': {
					'primary': 'linear-gradient(135deg, #1e4a8b 0%, #2e5aa6 100%)',
					'accent': 'linear-gradient(135deg, #f58b54 0%, #ff9f6e 100%)',
					'success': 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
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
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
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