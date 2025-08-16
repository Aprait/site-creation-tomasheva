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
			padding: {
				DEFAULT: '1rem',
				sm: '1rem',
				md: '1.25rem',
				lg: '1.5rem',
			},
			screens: {
				'2xl': '1200px'
			}
		},
		extend: {
			screens: {
				xs: '420px',
			},
			fontFamily: {
				'heading': ['Inter', 'system-ui', 'sans-serif'],
				'body': ['Inter', 'system-ui', 'sans-serif'],
				sans: ['Inter', 'system-ui', 'sans-serif']
			},
			colors: {
				// Основные цвета дизайн-системы
				'bg': 'var(--bg)',
				'ink': 'var(--ink)',
				'muted-ink': 'var(--muted-ink)',
				'line': 'var(--line)',
				'card': 'var(--card)',
				
				// Акцентные цвета (дозированно!)
				'accent': 'var(--accent)',
				'accent-ink': 'var(--accent-ink)',
				'accent-10': 'var(--accent-10)',
				'accent-06': 'var(--accent-06)',
				
				// Legacy brand colors
				'brand': {
					'primary': '#E8551B',
					'secondary': '#19374A',
					'accent': '#E8551B',
					'success': '#4CAF50',
					'warning': '#FFC107',
					'light': '#F8F9FA',
					'dark': '#19374A',
					'muted': '#6C757D',
					'navy': '#19374A',
					'blue': '#19374A',
					'orange': '#E8551B',
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
				xl: 'var(--radius)',
				'2xl': 'calc(var(--radius) + 8px)',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'card': 'var(--shadow-card)',
				'card-hover': '0 10px 28px rgba(2,6,23,0.08)',
			},
			transitionDuration: {
				'fast': '150ms',
				'base': '200ms',
			},
			transitionTimingFunction: {
				'gentle': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},
			fontSize: {
				'4.5xl': ['2.75rem', { lineHeight: '1.1' }],
				'5.5xl': ['3.5rem', { lineHeight: '1' }],
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