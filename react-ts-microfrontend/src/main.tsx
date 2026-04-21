import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import './index.css'
import App from './App.tsx'
import { ecommerceTheme } from './design-system/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={ecommerceTheme}>
      <App />
    </ConfigProvider>
  </StrictMode>,
)
