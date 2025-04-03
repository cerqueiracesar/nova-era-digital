import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Bem-vindo à minha aplicação!</h1>
      <p>Esta é a página inicial.</p>
      <ul>
        <li><Link href="/intro-questionnaire">Iniciar &#8594;</Link></li>
        
        {/* <li><Link href="/topic-selection">Selecionar um Tópico</Link></li>
        <li><Link href="/quiz">Começar o Quiz</Link></li>
        <li><Link href="/final-questionnaire">Questionário Final</Link></li>
        <li><Link href="/results">Ver Resultados</Link></li> */}
      </ul>
    </div>
  );
}