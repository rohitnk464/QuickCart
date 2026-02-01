'use client'
import ProtectedSellerLayout from '@/components/ProtectedSellerLayout'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <ProtectedSellerLayout>
      {children}
    </ProtectedSellerLayout>
  )
}

export default Layout