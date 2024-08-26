import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Sign() {
  const [openSignIn, setOpenSignIn] = useState(false)
  const [openSignUp, setOpenSignUp] = useState(false)

  const handleSignInSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle sign-in logic here
    console.log('Sign-in submitted')
    setOpenSignIn(false)
  }

  const handleSignUpSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle sign-up logic here
    console.log('Sign-up submitted')
    setOpenSignUp(false)
  }

  return (
    <div className='flex gap-4'>
      <Dialog open={openSignIn} onOpenChange={setOpenSignIn}>
        <DialogTrigger asChild>
          <Button variant='outline' size='sm'>Sign in</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Sign In</DialogTitle>
            <DialogDescription>
              Enter your credentials to access your account.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSignInSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">Sign In</Button>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog open={openSignUp} onOpenChange={setOpenSignUp}>
        <DialogTrigger asChild>
          <Button size='sm'>Sign up</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Sign Up</DialogTitle>
            <DialogDescription>
              Create a new account to join our community.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSignUpSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="newEmail">Email</Label>
              <Input id="newEmail" type="email" placeholder="your@email.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">Password</Label>
              <Input id="newPassword" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" required />
            </div>
            <Button type="submit" className="w-full">Sign Up</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}