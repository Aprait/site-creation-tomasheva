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
				// Официальная цветовая палитра FOXMetoD
				'brand': {
					'primary': '#E8551B', // Оранжевый (основной акцент)
					'secondary': '#19374A', // Темно-синий (вторичный)
					'accent': '#E8551B', // Оранжевый акцент
					'success': '#4CAF50', // Зеленый
					'warning': '#FFC107', // Предупреждение
					'light': '#F8F9FA', // Светлый фон
					'dark': '#19374A', // Темно-синий
					'muted': '#6C757D', // Приглушенный серый
					'navy': '#19374A', // Темно-синий
					'blue': '#19374A', // Темно-синий
					'orange': '#E8551B', // Оранжевый
					'gray': {
						'50': '#F8F9FA',
						'100': '#E9ECEF',
						'200': '#DEE2E6',
						'300': '#CED4DA',
						'400': '#ADB5BD',
						'500': '#6C757D',
						'600': '#495057',
						'700': '#343A40',
						'800': '#212529',
						'900': '#19374A'
					}
				},
				// Новые цвета для дизайн-системы
				'bg': {
					DEFAULT: '#FFFFFF',
					'secondary': '#F9FAFB',
					'tertiary': '#F3F4F6'
				},
				'ink': {
					DEFAULT: '#111827',
					'secondary': '#374151',
					'tertiary': '#6B7280',
					'quaternary': '#9CA3AF'
				},
				'line': {
					DEFAULT: '#E5E7EB',
					'secondary': '#D1D5DB'
				},
				'card': '#FFFFFF',
				'accent': {
					DEFAULT: '#E8551B',
					'hover': '#DC4A14',
					'light': 'rgba(232, 85, 27, 0.1)',
					'lighter': 'rgba(232, 85, 27, 0.05)',
					'ink': 'rgba(232, 85, 27, 0.88)',
					'10': 'rgba(232, 85, 27, 0.10)',
					'06': 'rgba(232, 85, 27, 0.06)'
				},
				// Градиенты
				'gradient': {
					'primary': 'linear-gradient(135deg, #E8551B 0%, #F57739 100%)',
					'secondary': 'linear-gradient(135deg, #19374A 0%, #2C4F68 100%)',
					'accent': 'linear-gradient(135deg, #E8551B 0%, #FF7043 100%)',
					'success': 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)',
					'warm': 'linear-gradient(135deg, #E8551B 0%, #FFC107 100%)'
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