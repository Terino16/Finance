
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs'
import HeaderLogo from './HeaderLogo'
import Navigation from './Navigation'
import { Loader2 } from 'lucide-react'
import WelcomePage from './welcomePage'

const Header = () => {
  return (
    <div className='bg-blue-300 px-4 py-8 lg:px-14  pb-36'>
        <div className='max-w-screen-2xl mx-auto'>
            <div className='flex items-center justify-between mb-14'>
                <div className='flex items-center lg:gap-x-16'>
                <HeaderLogo/>
                <Navigation/>
                </div>
               <ClerkLoaded>
                <UserButton/>
                </ClerkLoaded> 
                <ClerkLoading>
                  <Loader2 className='animate-spin'/>
                </ClerkLoading>
            </div>
            <WelcomePage/>
        </div>

    </div>
  )
}

export default Header