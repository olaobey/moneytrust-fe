"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface PasswordResetFormProps {
  className?: string
}

export function PasswordResetForm({ className }: PasswordResetFormProps) {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      // Handle email submission
      setStep(2)
    } else {
      // Handle code verification
      if (code.length !== 4) {
        setError("OTP Code is invalid")
        return
      }
      router.push("/dashboard")
    }
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
        <h1 className="text-2xl font-semibold mb-2">Password Reset</h1>
        <p className="text-muted-foreground">Reset your password to continue trading on ComX</p>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription className="flex items-center justify-between">
            {error}
            <button onClick={() => setError("")}>
              <X className="h-4 w-4" />
            </button>
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm">Enter the Email Address you registered with</label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={() => router.back()}>
                BACK
              </Button>
              <Button type="submit" className="bg-red-500 hover:bg-red-600">
                PROCEED
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm">Enter the 4-digit code that was sent to {email}</p>
              <Input
                placeholder="Enter code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                maxLength={4}
                required
              />
            </div>

            <button
              type="button"
              className="text-sm text-primary hover:underline"
              onClick={() => {
                // Handle resend code
              }}
            >
              Resend Code
            </button>

            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={() => setStep(1)}>
                BACK
              </Button>
              <Button type="submit">FINISH</Button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

