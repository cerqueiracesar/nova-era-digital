"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { getQuestions } from "@/lib/questions"
import Image from "next/image"
import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  imageUrl?: string
  explanation?: string
}

export default function Quiz() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answers, setAnswers] = useState<number[]>([])
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [showExplanation, setShowExplanation] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    // Garantir que o usuário não possa acessar o quiz sem passar pelo questionário inicial
    // Get quiz settings from localStorage
    const settingsStr = localStorage.getItem("quizSettings")
    const introDataStr = localStorage.getItem("introData")

    if (!settingsStr) {
      router.push("/topic-selection")
      return
    }

    if (!introDataStr) {
      router.push("/intro-questionnaire")
      return
    }

    const settings = JSON.parse(settingsStr)
    const quizQuestions = getQuestions(settings.topic, settings.level)

    // Select 20 random questions
    const selectedQuestions = quizQuestions.sort(() => 0.5 - Math.random()).slice(0, 20)

    setQuestions(selectedQuestions)
    setLoading(false)
  }, [router])

  const handleSelectAnswer = (index: number) => {
    setSelectedAnswer(index)
    setIsCorrect(index === questions[currentQuestion].correctAnswer)
    setShowExplanation(true)
  }

  const handleNext = () => {
    if (selectedAnswer === null) return

    // Save the answer
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = selectedAnswer
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      // Move to next question
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
      setImageError(false)
    } else {
      // Quiz completed
      const score = newAnswers.reduce((total, answer, index) => {
        return total + (answer === questions[index].correctAnswer ? 1 : 0)
      }, 0)

      // Store results
      localStorage.setItem(
        "quizResults",
        JSON.stringify({
          score,
          totalQuestions: questions.length,
          answers: newAnswers,
        }),
      )

      // Navigate to final questionnaire
      router.push("/final-questionnaire")
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center">
            <p>Carregando perguntas...</p>
          </CardContent>
        </Card>
      </main>
    )
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const currentQ = questions[currentQuestion]

  // Fallback image for demonstration
  const fallbackImage = "/placeholder.svg?height=200&width=280"

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-between items-center mb-2">
            <CardTitle className="text-lg">
              Pergunta {currentQuestion + 1} de {questions.length}
            </CardTitle>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <CardDescription className="text-base font-medium text-foreground">{currentQ.question}</CardDescription>

            <div className="flex justify-center my-4">
              {imageError ? (
                <div className="flex flex-col items-center justify-center border rounded-lg p-4 w-[280px] h-[200px] bg-gray-50">
                  <AlertTriangle className="h-8 w-8 text-amber-500 mb-2" />
                  <p className="text-sm text-center text-muted-foreground">Imagem ilustrativa não disponível</p>
                </div>
              ) : (
                <Image
                  src={currentQ.imageUrl || fallbackImage}
                  alt="Imagem ilustrativa"
                  width={280}
                  height={200}
                  className="rounded-lg border object-contain bg-gray-50"
                  onError={() => setImageError(true)}
                />
              )}
            </div>

            <RadioGroup
              value={selectedAnswer?.toString()}
              onValueChange={(value) => handleSelectAnswer(Number.parseInt(value))}
            >
              {currentQ.options.map((option, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedAnswer === index
                      ? index === currentQ.correctAnswer
                        ? "bg-green-50 border-green-200"
                        : "bg-red-50 border-red-200"
                      : ""
                  } ${showExplanation && index === currentQ.correctAnswer ? "bg-green-50 border-green-200" : ""}`}
                  onClick={() => !showExplanation && handleSelectAnswer(index)}
                >
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} disabled={showExplanation} />
                  <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">
                    {option}
                  </Label>
                  {showExplanation && index === currentQ.correctAnswer && (
                    <CheckCircle2 className="h-5 w-5 text-green-600 ml-2" />
                  )}
                  {showExplanation && selectedAnswer === index && index !== currentQ.correctAnswer && (
                    <XCircle className="h-5 w-5 text-red-600 ml-2" />
                  )}
                </div>
              ))}
            </RadioGroup>

            {showExplanation && (
              <div
                className={`p-4 rounded-lg ${isCorrect ? "bg-green-50 border border-green-200" : "bg-amber-50 border border-amber-200"}`}
              >
                <p className="font-medium mb-2">{isCorrect ? "Correto!" : "Resposta incorreta"}</p>
                <p className="text-sm">
                  {isCorrect
                    ? "Muito bem! Você acertou a resposta."
                    : `A resposta correta é: ${currentQ.options[currentQ.correctAnswer]}`}
                </p>
                {currentQ.explanation && <p className="text-sm mt-2">{currentQ.explanation}</p>}
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleNext} disabled={selectedAnswer === null} className="w-full">
            {currentQuestion < questions.length - 1 ? "Próxima Pergunta" : "Finalizar Quiz"}
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}