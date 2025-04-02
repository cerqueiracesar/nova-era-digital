"use server"

import { Resend } from 'resend';

interface ResultData {
  introData: {
    age: string
    experience: string
    device: string
    goal: string
  }
  quizSettings: {
    topic: string
    level: string
  }
  quizResults: {
    score: number
    totalQuestions: number
    answers: number[]
  }
  finalQuestionnaire: {
    satisfaction: string
    difficulty: string
    feedback: string
    email: string
  }
}

export async function sendResults(data: ResultData) {
  // Inicializar o cliente de email com a chave da variável de ambiente
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  // Formatar os dados para o email
  const topic = data.quizSettings.topic === 'smartphone' ? 'Smartphone' : 'Computador';
  const level = {
    'facil': 'Fácil',
    'medio': 'Médio',
    'avancado': 'Avançado'
  }[data.quizSettings.level] || data.quizSettings.level;
  
  const score = data.quizResults.score;
  const totalQuestions = data.quizResults.totalQuestions;
  const percentage = Math.round((score / totalQuestions) * 100);
  
  // Criar o conteúdo do email
  const emailContent = `
    <h1>Resultados do Quiz Nova Era Digital</h1>
    <p>Olá,</p>
    <p>Obrigado por participar do nosso quiz de inclusão digital. Aqui estão seus resultados:</p>
    
    <h2>Informações Pessoais</h2>
    <ul>
      <li>Faixa etária: ${data.introData.age}</li>
      <li>Experiência com tecnologia: ${data.introData.experience}</li>
      <li>Dispositivo mais utilizado: ${data.introData.device}</li>
    </ul>
    
    <h2>Quiz Realizado</h2>
    <ul>
      <li>Tema: ${topic}</li>
      <li>Nível: ${level}</li>
    </ul>
    
    <h2>Resultados</h2>
    <p>Pontuação: ${score} de ${totalQuestions} (${percentage}%)</p>
    
    <h2>Sua Avaliação do Quiz</h2>
    <ul>
      <li>Satisfação: ${data.finalQuestionnaire.satisfaction}</li>
      <li>Dificuldade: ${data.finalQuestionnaire.difficulty}</li>
      <li>Feedback: ${data.finalQuestionnaire.feedback}</li>
    </ul>
    
    <p>Agradecemos sua participação!</p>
    <p>Equipe Nova Era Digital - UniAteneu</p>
  `;
  
  try {
    // Enviar o email
    const { data: emailResponse, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Use este email para testes
      // Quando verificar seu domínio, você pode usar: 'Nova Era Digital <noreply@seudominio.com>'
      to: [data.finalQuestionnaire.email],
      subject: 'Seus Resultados do Quiz Nova Era Digital',
      html: emailContent,
    });
    
    if (error) {
      console.error('Erro ao enviar email:', error);
      throw new Error('Falha ao enviar email');
    }
    
    return { success: true };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    throw new Error('Falha ao enviar email');
  }
}