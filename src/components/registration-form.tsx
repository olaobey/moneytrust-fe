"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface RegisterFormProps {
  className?: string
}

interface FormData {
  accountType: "individual" | "corporate"
  firstName: string
  lastName: string
  email: string
  companyName?: string
  companyEmail?: string
  password: string
  confirmPassword: string
  phoneNumber: string
  verificationCode: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  companyEmail?: string
  password?: string
  confirmPassword?: string
  phoneNumber?: string
  verificationCode?: string
}

export function RegisterForm({ className }: RegisterFormProps) {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    accountType: "individual",
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    companyEmail: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    verificationCode: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [globalError, setGlobalError] = useState<string>("")

  const validateStep = (currentStep: number): boolean => {
    const newErrors: FormErrors = {}

    switch (currentStep) {
      case 1:
        if (!formData.firstName) newErrors.firstName = "This field is required."
        if (!formData.lastName) newErrors.lastName = "This field is required."
        if (/^\d/.test(formData.lastName)) {
          newErrors.lastName = "Last Name cannot start with a number."
        }
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
          newErrors.email = "Email address is incorrect."
        }
        break
      case 2:
        if (formData.accountType === "corporate" && !formData.companyEmail) {
          newErrors.companyEmail = "Company email is required."
        }
        if (!formData.password) newErrors.password = "Password is required."
        if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = "Passwords do not match."
        }
        break
      case 3:
        if (!formData.phoneNumber) {
          newErrors.phoneNumber = "Phone number is required."
        }
        break
      case 4:
        if (!formData.verificationCode) {
          newErrors.verificationCode = "Verification code is required."
        }
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1)
      setGlobalError("")
    }
  }

  const handleBack = () => {
    setStep(step - 1)
    setGlobalError("")
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-center">Select select the category that best describes you</p>
              <div className="flex gap-2 justify-center">
                <Button
                  type="button"
                  variant={formData.accountType === "individual" ? "default" : "outline"}
                  className="w-32"
                  onClick={() => setFormData({ ...formData, accountType: "individual" })}
                >
                  Individual
                </Button>
                <Button
                  type="button"
                  variant={formData.accountType === "corporate" ? "default" : "outline"}
                  className="w-32"
                  onClick={() => setFormData({ ...formData, accountType: "corporate" })}
                >
                  Corporate
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm">Your First Name</label>
                <Input
                  placeholder="Enter your First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className={cn(errors.firstName && "border-red-500 focus-visible:ring-red-500")}
                />
                {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm">Your Last Name</label>
                <Input
                  placeholder="Enter your Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className={cn(errors.lastName && "border-red-500 focus-visible:ring-red-500")}
                />
                {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm">Your Email</label>
              <Input
                type="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={cn(errors.email && "border-red-500 focus-visible:ring-red-500")}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            <Button className="w-full" onClick={handleNext}>
              NEXT STEP
            </Button>

            <div className="text-center text-sm text-muted-foreground">1 / 4</div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            {formData.accountType === "corporate" && (
              <div className="space-y-2">
                <label className="text-sm">Company Email</label>
                <Input
                  type="email"
                  placeholder="Enter company email"
                  value={formData.companyEmail}
                  onChange={(e) => setFormData({ ...formData, companyEmail: e.target.value })}
                  className={cn(errors.companyEmail && "border-red-500 focus-visible:ring-red-500")}
                />
                {errors.companyEmail && <p className="text-sm text-red-500">{errors.companyEmail}</p>}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm">Password</label>
              <Input
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className={cn(errors.password && "border-red-500 focus-visible:ring-red-500")}
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm">Confirm Password</label>
              <Input
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className={cn(errors.confirmPassword && "border-red-500 focus-visible:ring-red-500")}
              />
              {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
            </div>

            <Button className="w-full" onClick={handleNext}>
              NEXT STEP
            </Button>

            <div className="text-center text-sm text-muted-foreground">2 / 4</div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm">Phone Number</label>
              <div className="flex gap-2">
                <Select defaultValue="+234">
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="+234" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+234">+234</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className={cn(errors.phoneNumber && "border-red-500 focus-visible:ring-red-500")}
                />
              </div>
              {errors.phoneNumber && <p className="text-sm text-red-500">{errors.phoneNumber}</p>}
            </div>

            <Button className="w-full" onClick={handleNext}>
              VERIFY ACCOUNT
            </Button>

            <div className="text-center text-sm text-muted-foreground">3 / 4</div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <p className="text-sm">Enter the 4-digit code that was sent to {formData.phoneNumber}</p>

            <div className="space-y-2">
              <Input
                placeholder="Enter code"
                value={formData.verificationCode}
                onChange={(e) => setFormData({ ...formData, verificationCode: e.target.value })}
                className={cn(errors.verificationCode && "border-red-500 focus-visible:ring-red-500")}
                maxLength={4}
              />
              {errors.verificationCode && <p className="text-sm text-red-500">{errors.verificationCode}</p>}
            </div>

            <div className="flex items-center justify-between text-sm">
              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={() => {
                  // Handle resend code
                }}
              >
                Resend Code
              </button>
              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={() => {
                  // Handle verify via phone call
                }}
              >
                Verify via Phone Call
              </button>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                BACK
              </Button>
              <Button onClick={() => router.push("/dashboard")}>FINISH</Button>
            </div>

            <div className="text-center text-sm text-muted-foreground">4 / 4</div>
          </div>
        )
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
        <h1 className="text-2xl font-semibold mb-2">Register new account</h1>
        <p className="text-muted-foreground">Sign up for an account and start trading today</p>
      </div>

      {globalError && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription className="flex items-center justify-between">
            {globalError}
            <button onClick={() => setGlobalError("")}>
              <X className="h-4 w-4" />
            </button>
          </AlertDescription>
        </Alert>
      )}

      {renderStep()}
    </div>
  )
}

