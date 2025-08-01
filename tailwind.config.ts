import { type Config } from 'tailwindcss'

export default {
  content: [
    // Note the addition of the `app` directory.
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',

        primary: '#2376EB',
        secondary: '#7EB4ff',

        body: '#BFBECB',
        heading: '#FAFAFA',
        placeholder: '#707070',

        border: '#282828',

        grey: {
          darken: '#0B1223',
          DEFAULT: '#0F172A',
          lighten: '#162033'
        }
      },
      fontFamily: {
        body: ["'Radio Canada', sans-serif"],
        display: ["'Radio Canada', sans-serif"],
        segoe: ["'Segoe UI', sans-serif"]
      },
      screens: {
        xxs: '380px',
        xs: '480px',
        '3xl': '1792px',
        '4xl': '2048px',
        '5xl': '2304px',
        '6xl': '2560px',
        standalone: { raw: '(display-mode: standalone)' }
      },
      fontSize: {
        sm: ['14px', '1.8'],
        base: ['16px', '1.6'],
        lg: ['18px', '1.5'],
        xl: ['20px', '1.5'],
        '2xl': ['22px', '1.4'],
        '3xl': ['26px', '1.3'],
        '4xl': ['36px', '1.2'],
        '5xl': ['46px', '1.2'],
        '6xl': ['68px', '1.2']
      },
      borderWidth: {
        3: '3px',
        6: '6px',
        10: '10px'
      },
      animation: {
        lefttoright: 'titleDeviderAnimation 3s ease-in-out infinite',
        ledgerleftright: 'ledgerLeftRight 3s ease-in-out infinite',
        ledgerrightleft: 'ledgerRightLeft 3s ease-in-out infinite',
        ledgertopbottom: 'ledgerTopBottom 3s ease-in-out infinite',
        ledgerbottomtop: 'ledgerBottomTop 3s ease-in-out infinite',
        slidedown: 'slideDown 1s ease-in-out 1'
      }
    }
  },
  plugins: []
} satisfies Config
