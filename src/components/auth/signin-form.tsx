"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

interface SignInFormProps {
  className?: string
}

export function SignInForm({ className }: SignInFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    staySignedIn: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign in logic here
    router.push("/dashboard")
  }

  return (
    <div className={cn("w-full max-w-md mx-auto p-6", className)}>
      <div className="flex justify-center mb-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20154552-CwTr6PFGmznAgKXIu3k8p3hO6yeN1L.png"
          alt="ComX Logo"
          width={120}
          height={40}
          className="h-10 w-auto"
        />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold mb-2">Sign in to ComX</h1>
        <p className="text-muted-foreground">Enter your login credentials below.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm">Your Email</label>
            <Input
              type="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm">Your Password</label>
            <Input
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="staySignedIn"
              checked={formData.staySignedIn}
              onCheckedChange={(checked) => setFormData({ ...formData, staySignedIn: checked as boolean })}
            />
            <label htmlFor="staySignedIn" className="text-sm text-muted-foreground">
              Stay Signed In
            </label>
          </div>
          <Link href="/reset-password" className="text-sm text-primary hover:underline">
            Forgot Password?
          </Link>
        </div>

        <Button type="submit" className="w-full bg-[#4CAF50] hover:bg-[#45a049]">
          Sign In
        </Button>

        <Button type="button" variant="outline" className="w-full" onClick={() => router.back()}>
          Back
        </Button>
      </form>
    </div>
  )
}

