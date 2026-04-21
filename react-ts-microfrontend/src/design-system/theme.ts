import type { ThemeConfig } from 'antd'
import { ecommerceColors } from './colors'

export const ecommerceTheme: ThemeConfig = {
  token: {
    colorPrimary: ecommerceColors.brandGreen[600],
    colorSuccess: ecommerceColors.limeAccent[500],
    colorWarning: ecommerceColors.goldenHighlight[400],
    colorInfo: ecommerceColors.brandGreen[400],
    colorError: '#d84c4c',
    colorBgLayout: ecommerceColors.neutral[50],
    colorBgContainer: '#ffffff',
    colorTextBase: ecommerceColors.neutral[900],
    colorBorder: ecommerceColors.neutral[200],
    borderRadius: 12,
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
  },
  components: {
    Layout: {
      headerBg: '#ffffff',
      bodyBg: ecommerceColors.neutral[50],
      headerPadding: '0 24px',
    },
    Card: {
      headerBg: '#ffffff',
    },
    Button: {
      primaryShadow: `0 8px 20px ${ecommerceColors.brandGreen[100]}`,
    },
  },
}
