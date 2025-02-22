"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

interface AuthLayoutProps {
  children?: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-12 relative">
      <div className="w-full max-w-md mx-auto space-y-6">
        <div className="flex justify-center mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20154552-CwTr6PFGmznAgKXIu3k8p3hO6yeN1L.png"
            alt="ComX Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-2xl font-semibold">Sign in to ComX</h2>
              <p className="text-muted-foreground">Welcome to ComX</p>
            </div>
            <Button className="w-full bg-[#4CAF50] hover:bg-[#45a049]" asChild>
              <Link href="/signin">Sign in</Link>
            </Button>
          </div>

          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-2xl font-semibold">Create an Account</h2>
              <p className="text-muted-foreground">Join the Family</p>
            </div>
            <Button className="w-full bg-[#1a1a1a] hover:bg-black" asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <button className="fixed bottom-4 right-4 bg-red-500 text-white rounded-full p-3 shadow-lg hover:bg-red-600">
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  )
}

