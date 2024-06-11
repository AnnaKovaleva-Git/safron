import type { Config } from 'tailwindcss'

const colors = {
  primary: {
    enable: '#473BF0',
    hover: '#2E23CF',
    active: '#1B10BC',
  },
  secondary: {
    enable: '#68D585',
    hover: '#50CE72',
    active: '#39C05C',
  },
  background: '#161C2D',
  stroke: '#D5D7DD',
  white: '#FFFFFF',
  gray: '#9a9ea4',
  error: '#AC0707',
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors,
  },
  plugins: [],
}
export default config
