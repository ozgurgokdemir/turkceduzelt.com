import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundColor: {
      primary: 'hsl(var(--color-bg))',
      surface: {
        DEFAULT: 'hsl(var(--color-bg-surface))',
        hover: 'hsl(var(--color-bg-surface-hover))',
        active: 'hsl(var(--color-bg-surface-active))',
        brand: 'hsl(var(--color-bg-surface-brand))',
        success: 'hsl(var(--color-bg-surface-success))',
        critical: 'hsl(var(--color-bg-surface-critical))',
      },
      fill: {
        DEFAULT: 'hsl(var(--color-bg-fill))',
        hover: 'hsl(var(--color-bg-fill-hover))',
        active: {
          DEFAULT: 'hsl(var(--color-bg-fill-active))',
          hover: 'hsl(var(--color-bg-fill-active-hover))',
        },
        brand: {
          DEFAULT: 'hsl(var(--color-bg-fill-brand))',
          hover: 'hsl(var(--color-bg-fill-brand-hover))',
        },
        success: {
          DEFAULT: 'hsl(var(--color-bg-fill-success))',
          hover: 'hsl(var(--color-bg-fill-success-hover))',
        },
        critical: {
          DEFAULT: 'hsl(var(--color-bg-fill-critical))',
          hover: 'hsl(var(--color-bg-fill-critical-hover))',
        },
      },
      border: {
        primary: 'hsl(var(--color-border))',
        hover: 'hsl(var(--color-border-hover))',
        secondary: 'hsl(var(--color-border-secondary))',
        focus: 'hsl(var(--color-border-focus))',
        brand: 'hsl(var(--color-border-brand))',
        success: 'hsl(var(--color-border-success))',
        critical: 'hsl(var(--color-border-critical))',
      },
    },
    textColor: {
      primary: 'hsl(var(--color-text))',
      secondary: 'hsl(var(--color-text-secondary))',
      muted: 'hsl(var(--color-text-muted))',
      link: {
        DEFAULT: 'hsl(var(--color-text-link))',
        hover: 'hsl(var(--color-text-link-hover))',
      },
      brand: {
        DEFAULT: 'hsl(var(--color-text-brand))',
        hover: 'hsl(var(--color-text-brand-hover))',
        'on-bg-fill': 'hsl(var(--color-text-brand-on-bg-fill))',
      },
      success: {
        DEFAULT: 'hsl(var(--color-text-success))',
        hover: 'hsl(var(--color-text-success-hover))',
        'on-bg-fill': 'hsl(var(--color-text-success-on-bg-fill))',
      },
      critical: {
        DEFAULT: 'hsl(var(--color-text-critical))',
        hover: 'hsl(var(--color-text-critical-hover))',
        'on-bg-fill': 'hsl(var(--color-text-critical-on-bg-fill))',
      },
    },
    borderColor: {
      primary: 'hsl(var(--color-border))',
      hover: 'hsl(var(--color-border-hover))',
      secondary: 'hsl(var(--color-border-secondary))',
      focus: 'hsl(var(--color-border-focus))',
      brand: 'hsl(var(--color-border-brand))',
      success: 'hsl(var(--color-border-success))',
      critical: 'hsl(var(--color-border-critical))',
    },
    ringColor: {
      focus: 'hsl(var(--color-border-focus))',
    },
    ringOffsetColor: {
      bg: {
        primary: 'hsl(var(--color-bg))',
        surface: 'hsl(var(--color-bg-surface))',
      },
    },
    fontFamily: {
      sans: ['var(--font-family-sans)', ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      extralight: 'var(--font-weight-extralight)',
      regular: 'var(--font-weight-regular)',
      medium: 'var(--font-weight-medium)',
      semibold: 'var(--font-weight-semibold)',
    },
    fontSize: {
      xs: 'var(--font-size-xs)',
      sm: 'var(--font-size-sm)',
      base: 'var(--font-size-base)',
      lg: 'var(--font-size-lg)',
      xl: 'var(--font-size-xl)',
      '2xl': 'var(--font-size-2xl)',
      '3xl': 'var(--font-size-3xl)',
      '4xl': 'var(--font-size-4xl)',
      '5xl': 'var(--font-size-5xl)',
    },
    lineHeight: {
      4: 'var(--font-line-height-4)',
      5: 'var(--font-line-height-5)',
      6: 'var(--font-line-height-6)',
      7: 'var(--font-line-height-7)',
      8: 'var(--font-line-height-8)',
      9: 'var(--font-line-height-9)',
      10: 'var(--font-line-height-10)',
      none: 'var(--font-line-height-none)',
    },
    letterSpacing: {
      dense: 'var(--font-letter-spacing-dense)',
      normal: 'var(--font-letter-spacing-normal)',
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      height: {
        header: 'var(--height-header)',
        'screen-without-header': 'calc(100vh - var(--height-header))',
      },
      screens: {
        '2xl': '1440px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.icon-primary': {
          color: 'hsl(var(--color-icon))',
        },
        '.icon-secondary': {
          color: 'hsl(var(--color-icon-secondary))',
        },
        '.icon-muted': {
          color: 'hsl(var(--color-icon-muted))',
        },
        '.icon-brand': {
          color: 'hsl(var(--color-icon-brand))',
        },
        '.icon-success': {
          color: 'hsl(var(--color-icon-success))',
        },
        '.icon-critical': {
          color: 'hsl(var(--color-icon-critical))',
        },
      });
    },
    'tailwindcss-animate',
    require('@tailwindcss/container-queries'),
  ],
};
