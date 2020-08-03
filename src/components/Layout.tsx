import React from 'react'
import Head from 'next/head'

interface LayoutProps {
  pageTitle?: string
}

const Layout: React.FC<LayoutProps> = ({
  pageTitle = "Next.js + TailwindCSS",
  children
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="layout">
        {children}
      </div>
    </>
  )
}

export default Layout