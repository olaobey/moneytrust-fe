"use client"

import type React from "react"

import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

interface RegistrationFormProps {
  onSubmit: (data: RegistrationData) => void
  className?: string
}

export interface RegistrationData {
  accountType: "individual" | "corporate"
  companyName: string
  typeOfBusiness: string
  dateOfIncorporation: Date | undefined
}

const businessTypes = ["Limited Company", "Partnership", "Sole Proprietorship", "Public Company", "LLC"]

export function RegistrationForm({ onSubmit, className }: RegistrationFormProps) {
  const [formData, setFormData] = useState<RegistrationData>({
    accountType: "individual",
    companyName: "",
    typeOfBusiness: "",
    dateOfIncorporation: undefined,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className={cn("w-full max-w-2xl mx-auto p-6", className)}>
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

      <form onSubmit={handleSubmit} className="space-y-6">
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

        <div className="space-y-4">
          <div>
            <Input
              placeholder="Company Name"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Select
                value={formData.typeOfBusiness}
                onValueChange={(value) => setFormData({ ...formData, typeOfBusiness: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Type of Business" />
                </SelectTrigger>
                <SelectContent>
                  {businessTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !formData.dateOfIncorporation && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.dateOfIncorporation ? (
                      format(formData.dateOfIncorporation, "PPP")
                    ) : (
                      <span>Date of Incorporation</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={formData.dateOfIncorporation}
                    onSelect={(date) => setFormData({ ...formData, dateOfIncorporation: date })}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full">
          NEXT STEP
        </Button>
      </form>
    </div>
  )
}

