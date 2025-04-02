"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function Results() {
  const [score, setScore] = useState<number | null>(null)
  const [totalQuestions, setTotalQuestions] = useState<number | null>(null)

  useEffect(() => {
    // Try to get results from localStorage (in case user refreshes the page)
    const resultsStr = localStorage.getItem("quizResults")
    if (resultsStr) {
      try {
        const results = JSON.parse(resultsStr)
        setScore(results.score)
        setTotalQuestions(results.totalQuestions)
      } catch (e) {
        console.error("Error parsing results:", e)
      }
    }
  }, [])

  const getPerformanceMessage = () => {
    if (score === null || totalQuestions === null) return ""

    const percentage = (score / totalQuestions) * 100

    if (percentage >= 90) return "Excelente! Você tem um ótimo conhecimento digital!"
    if (percentage >= 70) return "Muito bom! Você está no caminho certo."
    if (percentage >= 50) return "Bom trabalho! Continue praticando para melhorar."
    return "Continue praticando! A tecnologia se aprende com tempo e paciência."
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <Card className="w-full max-w-md text-center">
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
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="text-2xl">Nova Era Digital</CardTitle>
          <CardDescription>Seus resultados foram enviados com sucesso</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {score !== null && totalQuestions !== null && (
            <>
              <div className="text-4xl font-bold">
                {score} / {totalQuestions}
              </div>
              <p>{getPerformanceMessage()}</p>
              <p className="text-sm text-muted-foreground">
                Um relatório detalhado foi enviado para o e-mail fornecido.
              </p>
            </>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/" className="w-full">
            <Button className="w-full">Voltar ao Início</Button>
          </Link>
        </CardFooter>
      </Card>
    </main>
  )
}