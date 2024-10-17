import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { Children, ReactNode } from 'react'

export const metadata: Metadata = {
  title: "VROOM",
  description: "Video Calling App",
  icons: "/icons/logo.svg"
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout