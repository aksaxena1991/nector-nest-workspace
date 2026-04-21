export type ColorScale = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export const ecommerceColors = {
  brandGreen: {
    50: '#edf8ee',
    100: '#d3edd6',
    200: '#a8dcb0',
    300: '#79c889',
    400: '#4cb564',
    500: '#2f9f49',
    600: '#22843a',
    700: '#1c6a31',
    800: '#175629',
    900: '#0f3a1b',
  } as ColorScale,
  limeAccent: {
    50: '#f7fee8',
    100: '#ecfbc8',
    200: '#dbf696',
    300: '#c5ed60',
    400: '#addb39',
    500: '#8fc71f',
    600: '#6c9d12',
    700: '#547914',
    800: '#476016',
    900: '#3d5216',
  } as ColorScale,
  goldenHighlight: {
    50: '#fef8e7',
    100: '#fdeec4',
    200: '#f9dd8b',
    300: '#f3c751',
    400: '#ecaf2e',
    500: '#de9119',
    600: '#c06e12',
    700: '#9a4e12',
    800: '#7f3f15',
    900: '#6b3517',
  } as ColorScale,
  neutral: {
    50: '#f7f9f8',
    100: '#eff2f0',
    200: '#dde3df',
    300: '#c2ccc6',
    400: '#9aa99f',
    500: '#73847a',
    600: '#55645c',
    700: '#3f4b45',
    800: '#2c3531',
    900: '#1b211e',
  } as ColorScale,
}

export type ColorCombination = {
  name: string
  usage: string
  primary: string
  secondary: string
  background: string
  text: string
  border: string
}

export const ecommerceColorCombinations: ColorCombination[] = [
  {
    name: 'Fresh Marketplace',
    usage: 'Home page hero and global CTAs',
    primary: ecommerceColors.brandGreen[600],
    secondary: ecommerceColors.limeAccent[400],
    background: '#f3f9f1',
    text: ecommerceColors.neutral[900],
    border: ecommerceColors.brandGreen[100],
  },
  {
    name: 'Premium Checkout',
    usage: 'Checkout summary and payment section',
    primary: ecommerceColors.brandGreen[700],
    secondary: ecommerceColors.goldenHighlight[300],
    background: '#fffaf2',
    text: ecommerceColors.neutral[900],
    border: ecommerceColors.goldenHighlight[100],
  },
  {
    name: 'Trust & Offers',
    usage: 'Deal banners and loyalty cards',
    primary: ecommerceColors.goldenHighlight[500],
    secondary: ecommerceColors.brandGreen[300],
    background: '#fffdf8',
    text: '#2b261d',
    border: ecommerceColors.goldenHighlight[200],
  },
]
