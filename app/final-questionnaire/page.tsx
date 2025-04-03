"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Label } from "../../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group"
import { Textarea } from "../../components/ui/textarea"
import { Input } from "../../components/ui/input"
import { sendResults } from "@/lib/email"

export default function FinalQuestionnaire() {
  const router = useRouter()
  const [satisfaction, setSatisfaction] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [feedback, setFeedback] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Get all data from localStorage
    const introData = JSON.parse(localStorage.getItem("introData") || "{}")
    const quizSettings = JSON.parse(localStorage.getItem("quizSettings") || "{}")
    const quizResults = JSON.parse(localStorage.getItem("quizResults") || "{}")

    // Combine all data
    const allData = {
      introData,
      quizSettings,
      quizResults,
      finalQuestionnaire: {
        satisfaction,
        difficulty,
        feedback,
        email,
      },
    }

    try {
      // Send results to email
      await sendResults(allData)

      // Clear localStorage
      localStorage.removeItem("introData")
      localStorage.removeItem("quizSettings")
      localStorage.removeItem("quizResults")

      // Navigate to results page
      router.push("/results")
    } catch (error) {
      console.error("Error sending results:", error)
      setIsSubmitting(false)
      // You could add error handling UI here
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <Image
              src="/images/uniateneu-logo.png"
              alt="Logo UniAteneu"
              width={180}
              height={60}
              className="h-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = "/placeholder.svg?height=60&width=180"
              }}
            />
          </div>
          <CardTitle>Nova Era Digital</CardTitle>
          <CardDescription>Por favor, compartilhe sua experiência com o quiz</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="satisfaction">Quão satisfeito você está com o conteúdo do quiz?</Label>
              <RadioGroup id="satisfaction" value={satisfaction} onValueChange={setSatisfaction} required>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="muito-satisfeito" id="sat-muito" />
                  <Label htmlFor="sat-muito">Muito satisfeito</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="satisfeito" id="sat-satisfeito" />
                  <Label htmlFor="sat-satisfeito">Satisfeito</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="neutro" id="sat-neutro" />
                  <Label htmlFor="sat-neutro">Neutro</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="insatisfeito" id="sat-insatisfeito" />
                  <Label htmlFor="sat-insatisfeito">Insatisfeito</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="muito-insatisfeito" id="sat-muito-insatisfeito" />
                  <Label htmlFor="sat-muito-insatisfeito">Muito insatisfeito</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="difficulty">Como você avalia o nível de dificuldade do quiz?</Label>
              <RadioGroup id="difficulty" value={difficulty} onValueChange={setDifficulty} required>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="muito-facil" id="dif-muito-facil" />
                  <Label htmlFor="dif-muito-facil">Muito fácil</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="facil" id="dif-facil" />
                  <Label htmlFor="dif-facil">Fácil</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="adequado" id="dif-adequado" />
                  <Label htmlFor="dif-adequado">Adequado</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dificil" id="dif-dificil" />
                  <Label htmlFor="dif-dificil">Difícil</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="muito-dificil" id="dif-muito-dificil" />
                  <Label htmlFor="dif-muito-dificil">Muito difícil</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="feedback">Você tem algum comentário ou sugestão para melhorarmos?</Label>
              <Textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Digite seus comentários aqui..."
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail para receber os resultados</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu-email@exemplo.com"
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar Resultados"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </main>
  )
}

