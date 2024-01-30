import * as React from 'react'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import ConfigProvider from "antd/es/config-provider";
import theme from "@/theme/them-config";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}
