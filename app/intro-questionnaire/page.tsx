"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export default function IntroQuestionnaire() {
  const router = useRouter()
  const [age, setAge] = useState("")
  const [experience, setExperience] = useState("")
  const [device, setDevice] = useState("")
  const [goal, setGoal] = useState("")

  // Adicionar uma função de validação antes do handleSubmit
  const validateForm = () => {
    return age !== "" && experience !== "" && device !== "" && goal.trim() !== ""
  }

  // Modificar o handleSubmit para verificar a validação
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Verificar se todos os campos estão preenchidos
    if (!validateForm()) {
      alert("Por favor, preencha todos os campos antes de continuar.")
      return
    }

    // Store questionnaire data in localStorage
    localStorage.setItem(
      "introData",
      JSON.stringify({
        age,
        experience,
        device,
        goal,
      }),
    )

    router.push("/topic-selection")
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
          <CardDescription>Por favor, responda algumas perguntas para personalizarmos sua experiência</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="age">Qual é a sua faixa etária?</Label>
              <RadioGroup id="age" value={age} onValueChange={setAge} required>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="50-60" id="age-50-60" />
                  <Label htmlFor="age-50-60">50-60 anos</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="61-70" id="age-61-70" />
                  <Label htmlFor="age-61-70">61-70 anos</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="71-80" id="age-71-80" />
                  <Label htmlFor="age-71-80">71-80 anos</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="80+" id="age-80+" />
                  <Label htmlFor="age-80+">Acima de 80 anos</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Qual é o seu nível de experiência com tecnologia?</Label>
              <RadioGroup id="experience" value={experience} onValueChange={setExperience} required>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="iniciante" id="exp-iniciante" />
                  <Label htmlFor="exp-iniciante">Iniciante - Pouca ou nenhuma experiência</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="intermediario" id="exp-intermediario" />
                  <Label htmlFor="exp-intermediario">Intermediário - Uso básico de dispositivos</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="avancado" id="exp-avancado" />
                  <Label htmlFor="exp-avancado">Avançado - Uso frequente de tecnologia</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="device">Qual dispositivo você mais utiliza?</Label>
              <RadioGroup id="device" value={device} onValueChange={setDevice} required>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="smartphone" id="device-smartphone" />
                  <Label htmlFor="device-smartphone">Smartphone</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="desktop" id="device-desktop" />
                  <Label htmlFor="device-desktop">Computador/Notebook</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="tablet" id="device-tablet" />
                  <Label htmlFor="device-tablet">Tablet</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="goal">O que você espera aprender com este quiz?</Label>
              <Textarea
                id="goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="Digite sua resposta aqui..."
                className="min-h-[100px]"
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={!validateForm()}>
              Continuar
            </Button>
          </CardFooter>
        </form>
      </Card>
    </main>
  )
}

