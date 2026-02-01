'use client'
import { useUser, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Navbar from '@/components/seller/Navbar'
import Sidebar from '@/components/seller/Sidebar'

const ProtectedSellerLayout = ({ children }) => {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (!isLoaded) return;

    if (!user) {
      toast.error("Please log in");
      router.push('/');
      return;
    }

    const role = user?.publicMetadata?.role;

    if (role === 'seller') {
      setIsAuthorized(true);
    } else {
      toast.error("You don't have seller access");
      router.push('/');
    }

    setIsChecking(false);
  }, [user, isLoaded, router]);

  if (isChecking) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAuthorized) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <div className='flex w-full'>
        <Sidebar />
        {children}
      </div>
    </div>
  )
}

export default ProtectedSellerLayout
