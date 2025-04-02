"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Smartphone, Monitor } from "lucide-react"

export default function TopicSelection() {
  const router = useRouter()

  useEffect(() => {
    // Verificar se o usuário preencheu o questionário inicial
    const introDataStr = localStorage.getItem("introData")
    if (!introDataStr) {
      router.push("/intro-questionnaire")
    }
  }, [router])

  const handleSelection = (topic: string, level: string) => {
    // Store the selected topic and level
    localStorage.setItem(
      "quizSettings",
      JSON.stringify({
        topic,
        level,
      }),
    )

    router.push("/quiz")
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
          <CardDescription>Selecione o tema e o nível de dificuldade para o quiz</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="smartphone" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="smartphone" className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                Smartphone
              </TabsTrigger>
              <TabsTrigger value="desktop" className="flex items-center gap-2">
                <Monitor className="h-4 w-4" />
                Computador
              </TabsTrigger>
            </TabsList>
            <TabsContent value="smartphone" className="mt-4 space-y-4">
              <p className="text-sm text-muted-foreground">
                Aprenda a usar smartphones e aplicativos móveis com confiança.
              </p>
              <div className="grid grid-cols-1 gap-2">
                <Button
                  variant="outline"
                  className="justify-start text-left h-auto py-3"
                  onClick={() => handleSelection("smartphone", "facil")}
                >
                  <div>
                    <div className="font-medium">Nível Fácil</div>
                    <div className="text-xs text-muted-foreground">Funções básicas e primeiros passos</div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="justify-start text-left h-auto py-3"
                  onClick={() => handleSelection("smartphone", "medio")}
                >
                  <div>
                    <div className="font-medium">Nível Médio</div>
                    <div className="text-xs text-muted-foreground">Aplicativos úteis e configurações</div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="justify-start text-left h-auto py-3"
                  onClick={() => handleSelection("smartphone", "avancado")}
                >
                  <div>
                    <div className="font-medium">Nível Avançado</div>
                    <div className="text-xs text-muted-foreground">Recursos avançados e solução de problemas</div>
                  </div>
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="desktop" className="mt-4 space-y-4">
              <p className="text-sm text-muted-foreground">
                Aprenda a usar computadores e navegar na internet com segurança.
              </p>
              <div className="grid grid-cols-1 gap-2">
                <Button
                  variant="outline"
                  className="justify-start text-left h-auto py-3"
                  onClick={() => handleSelection("desktop", "facil")}
                >
                  <div>
                    <div className="font-medium">Nível Fácil</div>
                    <div className="text-xs text-muted-foreground">Conceitos básicos e navegação</div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="justify-start text-left h-auto py-3"
                  onClick={() => handleSelection("desktop", "medio")}
                >
                  <div>
                    <div className="font-medium">Nível Médio</div>
                    <div className="text-xs text-muted-foreground">Email, pesquisas e documentos</div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="justify-start text-left h-auto py-3"
                  onClick={() => handleSelection("desktop", "avancado")}
                >
                  <div>
                    <div className="font-medium">Nível Avançado</div>
                    <div className="text-xs text-muted-foreground">Segurança online e ferramentas avançadas</div>
                  </div>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </main>
  )
}