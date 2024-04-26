import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex flex-row items-center justify-between bg-blue-600 px-20 py-2'>
      {/* Wrap the logo in a Link component to navigate to the home page */}
      <Link href='/'>
        <img src='logo.png' alt='Logo' />
      </Link>
      <SignedIn>
        {/* Render the search input only when the user is signed in */}
        <input type='text' placeholder='Search' />
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Use Next.js Link or anchor tag to navigate to the sign-in page */}
        <Link href='/sign-in'>Sign In</Link>
      </SignedOut>
    </div>
  )
}

export default Header
