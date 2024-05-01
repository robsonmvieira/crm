'use client'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, MoveRight } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LoginSchema, type LoginType } from './loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'

function Login() {
  const { register, handleSubmit } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const handleUserSubmit = (data: LoginType) => {
    console.log(data)
  }
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center min-h-screen">
      <div>
        <h4 className="text-2xl font-bold text-slate-900">
          Sign In to Woorkroom
        </h4>
      </div>

      <form
        onSubmit={handleSubmit(handleUserSubmit)}
        className="w-[370px] mt-8"
      >
        <div className="flex flex-col gap-10">
          <div className="w-full flex flex-col gap-3">
            <Label htmlFor="email" className="text-muted-foreground">
              Email Address
            </Label>
            <Input
              {...register('email')}
              id="email"
              className="focus-visible:ring-0
                focus-visible:ring-offset-0
                h-12
                text-muted-foreground
                "
              placeholder="your@email.com"
              type="email"
            />
          </div>

          <div className="w-full flex flex-col gap-3">
            <Label htmlFor="email" className="text-muted-foreground">
              Password
            </Label>
            <div
              className="flex 
              flex-row justify-between items-center h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Input
                {...register('password')}
                className="
                border-l-0
                border-r-0
                focus-visible:ring-0
                focus-visible:ring-offset-0
                text-muted-foreground
                h-12
                pl-0
                "
                id="password"
                placeholder="your password"
                type={showPassword ? 'text' : 'password'}
              />
              <Eye
                className="w-5 h-5 cursor-pointer"
                onClick={() => {
                  setShowPassword(!showPassword)
                }}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <Checkbox
                id="remember"
                className="data-[state=checked]:bg-blue-450 data-[state=checked]:border-none"
              />
              <label
                htmlFor="remember"
                className="text-sm cursor-pointer font-normal text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <div>
              <Button
                className="font-normal
                text-muted-foreground mr-0 pr-0 cursor-pointer"
                variant={'link'}
              >
                Forgot Password?
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <Button
              size={'lg'}
              className="h-12 bg-blue-450
              rounded-2xl
              font-bold 
              w-40 hover:bg-blue-500"
              type="submit"
            >
              Sign In
              <MoveRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              className="
                text-sm 
                font-normal 
                text-muted-foreground 
                mr-0 px-0 cursor-pointer
                text-blue-450
                "
              variant={'link'}
            >
              Don’t have an account?
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
