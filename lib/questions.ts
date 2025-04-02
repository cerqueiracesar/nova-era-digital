interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  imageUrl?: string
  explanation?: string
}

// Smartphone questions - Easy level
const smartphoneEasyQuestions: Question[] = [
  {
    id: 1,
    question: "Como ligar um smartphone?",
    options: [
      "Apertar o botão de volume",
      "Apertar e segurar o botão de ligar/desligar",
      "Tocar na tela três vezes",
      "Conectar o carregador",
    ],
    correctAnswer: 1,
    imageUrl: "/images/power-button.png",
    explanation:
      "A maioria dos smartphones é ligada pressionando e segurando o botão de ligar/desligar por alguns segundos até que a tela acenda.",
  },
  {
    id: 2,
    question: "O que é um aplicativo (app)?",
    options: [
      "Um tipo de smartphone",
      "Um programa que executa funções específicas no smartphone",
      "Um tipo de carregador",
      "O nome da tela inicial",
    ],
    correctAnswer: 1,
    imageUrl: "/images/apps-icons.png",
    explanation:
      "Aplicativos (apps) são programas desenvolvidos para realizar tarefas específicas em seu smartphone, como WhatsApp para mensagens, Facebook para redes sociais, ou aplicativos de banco.",
  },
  {
    id: 3,
    question: "Como aumentar o volume do seu smartphone?",
    options: [
      "Usando os botões de volume na lateral do aparelho",
      "Tocando no centro da tela",
      "Agitando o aparelho",
      "Falando 'aumentar volume'",
    ],
    correctAnswer: 0,
    imageUrl: "/images/volume-buttons.png",
    explanation:
      "Os botões de volume ficam geralmente na lateral do smartphone e permitem aumentar ou diminuir o volume de chamadas, músicas e vídeos.",
  },
  {
    id: 4,
    question: "O que é a 'tela inicial' de um smartphone?",
    options: [
      "A primeira tela que aparece quando você liga o aparelho pela primeira vez",
      "A tela principal onde ficam os ícones dos aplicativos",
      "A tela de bloqueio",
      "A tela de configurações",
    ],
    correctAnswer: 1,
    imageUrl: "/images/home-screen.png",
    explanation:
      "A tela inicial é a página principal do seu smartphone, onde você encontra os ícones dos aplicativos e pode personalizar com widgets.",
  },
  {
    id: 5,
    question: "Como atender uma chamada telefônica no smartphone?",
    options: [
      "Agitar o telefone",
      "Apertar o botão de volume",
      "Deslizar o dedo na tela ou tocar no botão de atender",
      "Colocar o telefone no ouvido",
    ],
    correctAnswer: 2,
    imageUrl: "/images/answer-call.png",
    explanation:
      "Quando o telefone toca, você pode atender deslizando o ícone na direção indicada ou tocando no botão verde de atender.",
  },
  {
    id: 6,
    question: "O que é Wi-Fi?",
    options: [
      "Um tipo de smartphone",
      "Uma tecnologia que permite conectar-se à internet sem fio",
      "Um aplicativo de mensagens",
      "O nome da assistente virtual",
    ],
    correctAnswer: 1,
    imageUrl: "/images/wifi-icon.png",
    explanation:
      "Wi-Fi é uma tecnologia que permite conectar seu dispositivo à internet sem usar cabos, através de redes sem fio disponíveis em casas, escritórios e locais públicos.",
  },
  {
    id: 7,
    question: "Como tirar uma foto com o smartphone?",
    options: [
      "Abrir o aplicativo de câmera e tocar no botão de captura",
      "Agitar o telefone",
      "Dizer 'tirar foto'",
      "Apertar os botões de volume simultaneamente",
    ],
    correctAnswer: 0,
    imageUrl: "/images/camera-app.png",
    explanation:
      "Para tirar fotos, abra o aplicativo de câmera (geralmente com ícone de câmera) e toque no botão circular na parte inferior da tela.",
  },
  {
    id: 8,
    question: "O que é um 'toque' na tela do smartphone?",
    options: [
      "Um som que o telefone faz",
      "Uma música",
      "Uma ação de pressionar brevemente a tela com o dedo",
      "Um tipo de mensagem",
    ],
    correctAnswer: 2,
    imageUrl: "/images/touch-screen.png",
    explanation:
      "Um toque é quando você pressiona brevemente a tela com o dedo para selecionar algo, como um aplicativo ou botão.",
  },
  {
    id: 9,
    question: "Como carregar a bateria do smartphone?",
    options: [
      "Deixar o telefone desligado por algumas horas",
      "Conectar o carregador à tomada e ao smartphone",
      "Colocar o telefone no modo avião",
      "Reiniciar o aparelho",
    ],
    correctAnswer: 1,
    imageUrl: "/images/charging-phone.png",
    explanation:
      "Para carregar seu smartphone, conecte o carregador a uma tomada elétrica e depois conecte o cabo ao seu telefone pela entrada na parte inferior.",
  },
  {
    id: 10,
    question: "O que é um ícone na tela do smartphone?",
    options: [
      "Uma pequena imagem que representa um aplicativo ou função",
      "Um tipo de mensagem",
      "Uma notificação",
      "O nome do fabricante do telefone",
    ],
    correctAnswer: 0,
    imageUrl: "/images/app-icons.png",
    explanation:
      "Ícones são pequenas imagens que representam aplicativos ou funções. Ao tocar neles, você abre o aplicativo ou executa a função correspondente.",
  },
]

// Smartphone questions - Medium level
const smartphoneMediumQuestions: Question[] = [
  {
    id: 11,
    question: "O que é um aplicativo de mensagens?",
    options: [
      "Um aplicativo para tirar fotos",
      "Um aplicativo para enviar e receber mensagens de texto",
      "Um aplicativo para fazer ligações",
      "Um aplicativo para navegar na internet",
    ],
    correctAnswer: 1,
    imageUrl: "/images/messaging-apps.png",
    explanation:
      "Aplicativos de mensagens como WhatsApp, Telegram e Messenger permitem enviar e receber mensagens de texto, áudio, fotos e vídeos pela internet.",
  },
  {
    id: 12,
    question: "Como instalar um novo aplicativo no smartphone?",
    options: [
      "Reiniciar o telefone",
      "Acessar a loja de aplicativos, buscar o app desejado e tocar em 'Instalar'",
      "Ligar para o suporte técnico",
      "Não é possível instalar novos aplicativos",
    ],
    correctAnswer: 1,
    imageUrl: "/images/app-store.png",
    explanation:
      "Para instalar novos aplicativos, abra a Play Store (Android) ou App Store (iPhone), busque o aplicativo desejado e toque em 'Instalar' ou 'Obter'.",
  },
  {
    id: 13,
    question: "O que é o 'modo avião' no smartphone?",
    options: [
      "Um modo que permite usar o telefone durante voos",
      "Um modo que desativa todas as conexões sem fio do aparelho",
      "Um aplicativo de viagens",
      "Um modo que economiza bateria",
    ],
    correctAnswer: 1,
    imageUrl: "/images/airplane-mode.png",
    explanation:
      "O modo avião desativa todas as conexões sem fio (celular, Wi-Fi, Bluetooth), sendo útil durante voos ou quando você quer economizar bateria.",
  },
  {
    id: 14,
    question: "Como ajustar o brilho da tela do smartphone?",
    options: [
      "Nas configurações do aparelho",
      "Não é possível ajustar o brilho",
      "Reiniciando o telefone",
      "Ligando para o suporte técnico",
    ],
    correctAnswer: 0,
    imageUrl: "/images/brightness-settings.png",
    explanation:
      "O brilho pode ser ajustado nas configurações ou deslizando para baixo na tela (área de notificações) e usando o controle deslizante de brilho.",
  },
  {
    id: 15,
    question: "O que é um contato na agenda do telefone?",
    options: [
      "Uma pessoa que você conhece pessoalmente",
      "Um registro com informações como nome e número de telefone",
      "Uma mensagem recebida",
      "Um tipo de aplicativo",
    ],
    correctAnswer: 1,
    imageUrl: "/images/contacts-app.png",
    explanation:
      "Um contato é um registro na agenda do telefone com informações como nome, número de telefone, e-mail e outros dados de uma pessoa.",
  },
  {
    id: 16,
    question: "Como fazer uma pesquisa na internet usando o smartphone?",
    options: [
      "Não é possível acessar a internet pelo smartphone",
      "Usando um aplicativo de navegador e digitando o que deseja buscar",
      "Ligando para um serviço de informações",
      "Enviando uma mensagem de texto",
    ],
    correctAnswer: 1,
    imageUrl: "/images/mobile-browser.png",
    explanation:
      "Use um navegador como Chrome ou Safari, digite o que deseja buscar na barra de pesquisa e toque no botão de busca ou 'Enter' no teclado.",
  },
  {
    id: 17,
    question: "O que é uma notificação no smartphone?",
    options: [
      "Um tipo de aplicativo",
      "Um alerta ou aviso sobre alguma atividade ou evento",
      "Uma ligação perdida",
      "O nome do fabricante do telefone",
    ],
    correctAnswer: 1,
    imageUrl: "/images/notifications.png",
    explanation:
      "Notificações são alertas que aparecem na tela para informar sobre novas mensagens, chamadas, atualizações de aplicativos ou outros eventos.",
  },
  {
    id: 18,
    question: "Como silenciar o smartphone?",
    options: [
      "Desligando o aparelho",
      "Usando o botão de silenciar ou ajustando o volume para zero",
      "Removendo o chip",
      "Cobrindo o alto-falante com a mão",
    ],
    correctAnswer: 1,
    imageUrl: "/images/mute-button.png",
    explanation:
      "Para silenciar, use o botão de volume para baixar até zero ou use o interruptor de silenciar (em iPhones) ou as opções de som nas configurações rápidas.",
  },
  {
    id: 19,
    question: "O que é um aplicativo de navegação?",
    options: [
      "Um aplicativo para navegar na internet",
      "Um aplicativo que mostra mapas e fornece direções",
      "Um aplicativo para organizar contatos",
      "Um aplicativo para tirar fotos",
    ],
    correctAnswer: 1,
    imageUrl: "/images/maps-app.png",
    explanation:
      "Aplicativos de navegação como Google Maps ou Waze mostram mapas e fornecem direções para chegar a um destino, seja a pé, de carro ou transporte público.",
  },
  {
    id: 20,
    question: "Como fazer uma chamada de vídeo no smartphone?",
    options: [
      "Não é possível fazer chamadas de vídeo em smartphones",
      "Usando um aplicativo específico como WhatsApp, FaceTime ou Google Meet",
      "Ligando para o número e falando 'vídeo'",
      "Enviando uma mensagem solicitando uma chamada de vídeo",
    ],
    correctAnswer: 1,
    imageUrl: "/images/video-call.png",
    explanation:
      "Use aplicativos como WhatsApp, FaceTime (iPhone) ou Google Meet. Abra o contato desejado e toque no ícone de câmera ou chamada de vídeo.",
  },
]

// Smartphone questions - Advanced level
const smartphoneAdvancedQuestions: Question[] = [
  {
    id: 21,
    question: "O que é armazenamento em nuvem?",
    options: [
      "Um tipo de memória interna do smartphone",
      "Um serviço que permite guardar arquivos na internet",
      "Um aplicativo de previsão do tempo",
      "Um tipo de conexão sem fio",
    ],
    correctAnswer: 1,
    imageUrl: "/images/cloud-storage.png",
    explanation:
      "Armazenamento em nuvem permite guardar fotos, vídeos e documentos na internet (em servidores remotos), acessíveis de qualquer dispositivo com internet.",
  },
  {
    id: 22,
    question: "Como fazer backup dos dados do smartphone?",
    options: [
      "Não é possível fazer backup de dados",
      "Usando serviços de nuvem, conectando ao computador ou usando aplicativos específicos",
      "Tirando fotos da tela",
      "Anotando as informações em um caderno",
    ],
    correctAnswer: 1,
    imageUrl: "/images/backup-settings.png",
    explanation:
      "Faça backup usando serviços como Google Drive, iCloud, ou conectando o telefone ao computador para copiar arquivos importantes.",
  },
  {
    id: 23,
    question: "O que é um QR Code?",
    options: [
      "Um tipo de código de barras bidimensional que pode ser escaneado por smartphones",
      "Um código secreto para desbloquear funções especiais",
      "Um tipo de senha",
      "Um aplicativo de segurança",
    ],
    correctAnswer: 0,
    imageUrl: "/images/qr-code.png",
    explanation:
      "QR Codes são códigos quadrados que, quando escaneados pela câmera do smartphone, podem abrir sites, adicionar contatos ou realizar outras ações.",
  },
  {
    id: 24,
    question: "Como proteger seu smartphone contra vírus?",
    options: [
      "Smartphones não podem pegar vírus",
      "Instalando aplicativos de segurança, mantendo o sistema atualizado e baixando apps apenas de fontes confiáveis",
      "Reiniciando o telefone diariamente",
      "Não conectando à internet",
    ],
    correctAnswer: 1,
    imageUrl: "/images/antivirus-app.png",
    explanation:
      "Proteja seu smartphone mantendo o sistema atualizado, instalando aplicativos apenas de lojas oficiais e usando aplicativos de segurança.",
  },
  {
    id: 25,
    question: "O que é NFC em um smartphone?",
    options: [
      "Um tipo de bateria",
      "Uma tecnologia que permite a comunicação sem fio entre dispositivos próximos",
      "Um aplicativo de navegação",
      "Um tipo de tela",
    ],
    correctAnswer: 1,
    imageUrl: "/images/nfc-icon.png",
    explanation:
      "NFC (Near Field Communication) permite a troca de dados entre dispositivos próximos, como pagamentos por aproximação ou transferência de arquivos.",
  },
  {
    id: 26,
    question: "Como configurar uma conta de e-mail no smartphone?",
    options: [
      "Não é possível acessar e-mails pelo smartphone",
      "Através do aplicativo de e-mail, inserindo seu endereço e senha",
      "Enviando uma mensagem de texto para o provedor de e-mail",
      "Ligando para o suporte técnico",
    ],
    correctAnswer: 1,
    imageUrl: "/images/email-setup.png",
    explanation:
      "Abra o aplicativo de e-mail (Gmail, Outlook, etc.), selecione 'adicionar conta' e siga as instruções inserindo seu endereço de e-mail e senha.",
  },
  {
    id: 27,
    question: "O que é um aplicativo de autenticação?",
    options: [
      "Um aplicativo para tirar fotos",
      "Um aplicativo que gera códigos de segurança para acessar contas online",
      "Um aplicativo para fazer ligações",
      "Um aplicativo para enviar mensagens",
    ],
    correctAnswer: 1,
    imageUrl: "/images/authenticator-app.png",
    explanation:
      "Aplicativos de autenticação como Google Authenticator geram códigos temporários que servem como segunda camada de segurança para suas contas online.",
  },
  {
    id: 28,
    question: "Como transferir arquivos entre smartphones?",
    options: [
      "Não é possível transferir arquivos entre smartphones",
      "Usando Bluetooth, NFC, aplicativos de compartilhamento ou serviços de nuvem",
      "Imprimindo e digitalizando novamente",
      "Apenas levando os aparelhos a uma loja autorizada",
    ],
    correctAnswer: 1,
    imageUrl: "/images/file-transfer.png",
    explanation:
      "Transfira arquivos usando Bluetooth, aplicativos como AirDrop (iPhone) ou Nearby Share (Android), ou serviços de nuvem como Google Drive.",
  },
  {
    id: 29,
    question: "O que é uma VPN no contexto de smartphones?",
    options: [
      "Um tipo de bateria",
      "Uma rede privada virtual que protege sua conexão à internet",
      "Um aplicativo de redes sociais",
      "Um tipo de carregador rápido",
    ],
    correctAnswer: 1,
    imageUrl: "/images/vpn-app.png",
    explanation:
      "VPN (Rede Privada Virtual) criptografa sua conexão com a internet, protegendo seus dados e permitindo acessar conteúdos com restrições geográficas.",
  },
  {
    id: 30,
    question: "Como gerenciar o uso de dados móveis no smartphone?",
    options: [
      "Não é possível controlar o uso de dados",
      "Através das configurações do aparelho, monitorando e limitando o uso por aplicativo",
      "Desligando o telefone quando não estiver em uso",
      "Usando apenas Wi-Fi e nunca dados móveis",
    ],
    correctAnswer: 1,
    imageUrl: "/images/data-usage.png",
    explanation:
      "Nas configurações, encontre 'Uso de dados' ou similar para monitorar quanto cada aplicativo consome e definir limites de uso.",
  },
]

// Desktop questions - Easy level
const desktopEasyQuestions: Question[] = [
  {
    id: 31,
    question: "Como ligar um computador?",
    options: ["Apertando o botão de ligar/desligar", "Conectando o monitor", "Abrindo a tampa", "Conectando o teclado"],
    correctAnswer: 0,
    imageUrl: "/images/power-button-pc.png",
    explanation:
      "Para ligar o computador, pressione o botão de ligar/desligar, geralmente na parte frontal do gabinete ou no laptop.",
  },
  {
    id: 32,
    question: "O que é um mouse?",
    options: [
      "Um pequeno animal",
      "Um dispositivo que controla o cursor na tela",
      "Um tipo de programa",
      "Um tipo de teclado",
    ],
    correctAnswer: 1,
    imageUrl: "/images/mouse.png",
    explanation:
      "O mouse é um dispositivo que você move sobre uma superfície para controlar o cursor (seta) na tela do computador.",
  },
  {
    id: 33,
    question: "O que é a área de trabalho (desktop)?",
    options: [
      "A mesa onde fica o computador",
      "A tela principal do computador onde ficam os ícones",
      "O gabinete do computador",
      "O teclado e o mouse",
    ],
    correctAnswer: 1,
    imageUrl: "/images/desktop.png",
    explanation:
      "A área de trabalho é a tela principal que você vê após ligar o computador, onde ficam os ícones de programas e arquivos.",
  },
  {
    id: 34,
    question: "Como abrir um programa no computador?",
    options: [
      "Clicando duas vezes no ícone do programa",
      "Desligando e ligando o computador",
      "Pressionando qualquer tecla",
      "Movendo o mouse em círculos",
    ],
    correctAnswer: 0,
    imageUrl: "/images/program-icon.png",
    explanation:
      "Para abrir um programa, dê um clique duplo (dois cliques rápidos) no ícone do programa na área de trabalho ou menu iniciar.",
  },
  {
    id: 35,
    question: "O que é um ícone no computador?",
    options: [
      "Uma pequena imagem que representa um programa ou arquivo",
      "Um tipo de vírus",
      "O botão de ligar",
      "A marca do computador",
    ],
    correctAnswer: 0,
    imageUrl: "/images/desktop-icons.png",
    explanation:
      "Ícones são pequenas imagens que representam programas, arquivos ou pastas. Clicando neles, você abre o item correspondente.",
  },
  {
    id: 36,
    question: "Como aumentar o volume do computador?",
    options: [
      "Clicando no ícone de alto-falante e ajustando o controle deslizante",
      "Reiniciando o computador",
      "Desconectando e reconectando os alto-falantes",
      "Não é possível ajustar o volume",
    ],
    correctAnswer: 0,
    imageUrl: "/images/volume-control.png",
    explanation:
      "Clique no ícone de alto-falante na barra de tarefas (geralmente no canto inferior direito) e ajuste o controle deslizante para cima.",
  },
  {
    id: 37,
    question: "O que é um navegador de internet?",
    options: [
      "Um programa para organizar arquivos",
      "Um programa que permite acessar páginas na internet",
      "Um tipo de antivírus",
      "Um dispositivo de hardware",
    ],
    correctAnswer: 1,
    imageUrl: "/images/web-browser.png",
    explanation:
      "Um navegador (como Chrome, Firefox ou Edge) é um programa que permite acessar e visualizar páginas da internet.",
  },
  {
    id: 38,
    question: "Como desligar corretamente o computador?",
    options: [
      "Desconectando o cabo de energia",
      "Pressionando o botão de ligar/desligar rapidamente",
      "Clicando no menu Iniciar e selecionando 'Desligar'",
      "Fechando todos os programas",
    ],
    correctAnswer: 2,
    imageUrl: "/images/shutdown-button.png",
    explanation:
      "Para desligar corretamente, clique no menu Iniciar (canto inferior esquerdo) e selecione a opção 'Desligar'. Isso evita perda de dados.",
  },
  {
    id: 39,
    question: "O que é um arquivo?",
    options: [
      "Um programa de computador",
      "Um documento, imagem ou outro tipo de dado armazenado no computador",
      "Um tipo de vírus",
      "Um componente de hardware",
    ],
    correctAnswer: 1,
    imageUrl: "/images/file-icon.png",
    explanation:
      "Um arquivo é um conjunto de dados armazenados no computador, como documentos, fotos, vídeos ou músicas.",
  },
  {
    id: 40,
    question: "Como criar uma nova pasta no computador?",
    options: [
      "Clicando com o botão direito do mouse e selecionando 'Nova pasta'",
      "Pressionando o botão de ligar",
      "Reiniciando o computador",
      "Não é possível criar novas pastas",
    ],
    correctAnswer: 0,
    imageUrl: "/images/new-folder.png",
    explanation:
      "Clique com o botão direito do mouse em um espaço vazio da área de trabalho ou dentro de uma pasta, e selecione 'Nova pasta' no menu.",
  },
]

// Desktop questions - Medium level
const desktopMediumQuestions: Question[] = [
  {
    id: 41,
    question: "O que é um processador de texto?",
    options: [
      "Um componente de hardware que processa texto",
      "Um programa para escrever e editar documentos",
      "Um tipo de teclado",
      "Um dispositivo de impressão",
    ],
    correctAnswer: 1,
    imageUrl: "/images/word-processor.png",
    explanation:
      "Um processador de texto (como Microsoft Word ou Google Docs) é um programa para criar, editar e formatar documentos de texto.",
  },
  {
    id: 42,
    question: "Como copiar um texto no computador?",
    options: [
      "Selecionando o texto e pressionando Ctrl+C",
      "Imprimindo o texto e digitando novamente",
      "Tirando uma foto da tela",
      "Não é possível copiar textos",
    ],
    correctAnswer: 0,
    imageUrl: "/images/copy-paste.png",
    explanation: "Selecione o texto com o mouse, pressione Ctrl+C para copiar e Ctrl+V para colar em outro local.",
  },
  {
    id: 43,
    question: "O que é um e-mail?",
    options: [
      "Um tipo de vírus",
      "Um correio eletrônico, uma mensagem enviada pela internet",
      "Um programa de computador",
      "Um tipo de arquivo",
    ],
    correctAnswer: 1,
    imageUrl: "/images/email.png",
    explanation:
      "E-mail (correio eletrônico) é um sistema de mensagens enviadas pela internet, como cartas digitais com endereços únicos.",
  },
  {
    id: 44,
    question: "Como fazer uma pesquisa na internet?",
    options: [
      "Ligando para um serviço de informações",
      "Abrindo um navegador, acessando um site de busca e digitando o que deseja encontrar",
      "Perguntando ao computador em voz alta",
      "Não é possível pesquisar na internet",
    ],
    correctAnswer: 1,
    imageUrl: "/images/search-engine.png",
    explanation:
      "Abra um navegador, acesse um site de busca como Google, digite o que deseja pesquisar na barra de pesquisa e pressione Enter.",
  },
  {
    id: 45,
    question: "O que é uma senha forte?",
    options: [
      "Uma senha curta e fácil de lembrar",
      "Uma senha longa com letras, números e caracteres especiais",
      "O nome de um familiar",
      "A data de nascimento",
    ],
    correctAnswer: 1,
    imageUrl: "/images/strong-password.png",
    explanation:
      "Uma senha forte combina letras maiúsculas e minúsculas, números e símbolos, sendo difícil de adivinhar mas fácil para você lembrar.",
  },
  {
    id: 46,
    question: "Como anexar um arquivo a um e-mail?",
    options: [
      "Não é possível enviar arquivos por e-mail",
      "Clicando no botão 'Anexar' e selecionando o arquivo desejado",
      "Imprimindo o arquivo e enviando pelo correio",
      "Mencionando o nome do arquivo na mensagem",
    ],
    correctAnswer: 1,
    imageUrl: "/images/email-attachment.png",
    explanation:
      "Ao escrever um e-mail, clique no ícone de clipe de papel (anexar) e selecione o arquivo que deseja enviar junto com a mensagem.",
  },
  {
    id: 47,
    question: "O que é uma planilha eletrônica?",
    options: [
      "Um tipo de teclado",
      "Um programa para criar e manipular tabelas de dados",
      "Um componente de hardware",
      "Um tipo de monitor",
    ],
    correctAnswer: 1,
    imageUrl: "/images/spreadsheet.png",
    explanation:
      "Planilhas eletrônicas (como Excel) são programas para organizar dados em tabelas, fazer cálculos e criar gráficos.",
  },
  {
    id: 48,
    question: "Como salvar um documento no computador?",
    options: [
      "Pressionando Ctrl+S ou clicando em 'Salvar' no menu",
      "Imprimindo o documento",
      "Fechando o programa sem salvar",
      "Não é possível salvar documentos",
    ],
    correctAnswer: 0,
    imageUrl: "/images/save-document.png",
    explanation:
      "Para salvar um documento, pressione Ctrl+S ou clique no menu 'Arquivo' e depois em 'Salvar'. Escolha um local e nome para o arquivo.",
  },
  {
    id: 49,
    question: "O que é um link?",
    options: [
      "Um tipo de vírus",
      "Um elemento clicável que leva a outra página ou recurso",
      "Um tipo de arquivo",
      "Um componente de hardware",
    ],
    correctAnswer: 1,
    imageUrl: "/images/hyperlink.png",
    explanation:
      "Um link (ou hiperlink) é um texto ou imagem clicável que, quando acionado, leva a outra página da web, arquivo ou seção do documento.",
  },
  {
    id: 50,
    question: "Como imprimir um documento?",
    options: [
      "Salvando o documento em um pendrive",
      "Pressionando Ctrl+P ou selecionando 'Imprimir' no menu",
      "Enviando o documento por e-mail",
      "Não é possível imprimir documentos diretamente do computador",
    ],
    correctAnswer: 1,
    imageUrl: "/images/print-dialog.png",
    explanation:
      "Para imprimir, pressione Ctrl+P ou clique em 'Arquivo' e depois 'Imprimir'. Selecione a impressora e as opções desejadas.",
  },
]

// Desktop questions - Advanced level
const desktopAdvancedQuestions: Question[] = [
  {
    id: 51,
    question: "O que é um sistema operacional?",
    options: [
      "Um programa que gerencia o hardware e software do computador",
      "Um tipo de antivírus",
      "Um navegador de internet",
      "Um processador de texto",
    ],
    correctAnswer: 0,
    imageUrl: "/images/operating-system.png",
    explanation:
      "O sistema operacional (como Windows, macOS ou Linux) é o software principal que controla o hardware e permite a execução de outros programas.",
  },
  {
    id: 52,
    question: "Como fazer backup dos arquivos do computador?",
    options: [
      "Não é possível fazer backup de arquivos",
      "Copiando os arquivos para um dispositivo externo, outro computador ou serviço de nuvem",
      "Imprimindo todos os documentos",
      "Reiniciando o computador regularmente",
    ],
    correctAnswer: 1,
    imageUrl: "/images/backup.png",
    explanation:
      "Faça backup copiando arquivos importantes para um HD externo, pendrive ou serviços de nuvem como Google Drive ou OneDrive.",
  },
  {
    id: 53,
    question: "O que é um firewall?",
    options: [
      "Um tipo de vírus",
      "Um sistema de segurança que monitora e controla o tráfego de rede",
      "Um programa para editar imagens",
      "Um componente físico do computador",
    ],
    correctAnswer: 1,
    imageUrl: "/images/firewall.png",
    explanation:
      "Um firewall é um sistema de segurança que monitora e controla o tráfego de rede, bloqueando acessos não autorizados ao seu computador.",
  },
  {
    id: 54,
    question: "Como atualizar um programa no computador?",
    options: [
      "Desinstalando e reinstalando o programa",
      "Usando a função de atualização do próprio programa ou baixando a versão mais recente",
      "Reiniciando o computador",
      "Não é possível atualizar programas",
    ],
    correctAnswer: 1,
    imageUrl: "/images/software-update.png",
    explanation:
      "A maioria dos programas possui uma opção de 'Verificar atualizações' no menu de ajuda ou configurações, ou você pode baixar a versão mais recente do site oficial.",
  },
  {
    id: 55,
    question: "O que é phishing?",
    options: [
      "Um tipo de programa",
      "Uma técnica fraudulenta para obter informações pessoais",
      "Um componente de hardware",
      "Um método de backup",
    ],
    correctAnswer: 1,
    imageUrl: "/images/phishing.png",
    explanation:
      "Phishing são tentativas de enganar pessoas para que revelem informações sensíveis como senhas e números de cartão, geralmente por e-mails ou sites falsos.",
  },
  {
    id: 56,
    question: "Como limpar o histórico de navegação?",
    options: [
      "Reiniciando o computador",
      "Acessando as configurações do navegador e selecionando a opção de limpar histórico",
      "Formatando o computador",
      "Não é possível limpar o histórico",
    ],
    correctAnswer: 1,
    imageUrl: "/images/clear-history.png",
    explanation:
      "No navegador, acesse o menu (três pontos ou linhas), vá em 'Histórico' e selecione a opção para limpar dados de navegação.",
  },
  {
    id: 57,
    question: "O que é um cookie de internet?",
    options: [
      "Um tipo de vírus",
      "Um pequeno arquivo armazenado pelo navegador para lembrar informações sobre sites",
      "Um programa para bloquear anúncios",
      "Um tipo de conexão com a internet",
    ],
    correctAnswer: 1,
    imageUrl: "/images/cookies.png",
    explanation:
      "Cookies são pequenos arquivos que sites armazenam no seu computador para lembrar suas preferências, itens de carrinho de compras ou informações de login.",
  },
  {
    id: 58,
    question: "Como configurar uma impressora no computador?",
    options: [
      "Não é possível conectar impressoras a computadores",
      "Conectando a impressora e instalando os drivers necessários",
      "Reiniciando o computador com a impressora ligada",
      "Enviando um e-mail para o fabricante",
    ],
    correctAnswer: 1,
    imageUrl: "/images/printer-setup.png",
    explanation:
      "Conecte a impressora ao computador, ligue-a e siga as instruções de instalação. O Windows geralmente detecta automaticamente ou você pode usar o CD/DVD de instalação.",
  },
  {
    id: 59,
    question: "O que é computação em nuvem?",
    options: [
      "Usar o computador em dias nublados",
      "Utilizar serviços e recursos pela internet, sem armazenamento local",
      "Um tipo de sistema operacional",
      "Um método para resfriar o computador",
    ],
    correctAnswer: 1,
    imageUrl: "/images/cloud-computing.png",
    explanation:
      "Computação em nuvem permite acessar arquivos e usar programas pela internet, sem precisar instalá-los no seu computador, como Google Drive ou Microsoft 365.",
  },
  {
    id: 60,
    question: "Como proteger sua privacidade online?",
    options: [
      "Não é possível ter privacidade na internet",
      "Usando senhas fortes, atualizando software, sendo cuidadoso com informações compartilhadas e usando ferramentas de privacidade",
      "Nunca usando a internet",
      "Compartilhando todas as suas informações publicamente",
    ],
    correctAnswer: 1,
    imageUrl: "/images/online-privacy.png",
    explanation:
      "Proteja-se usando senhas fortes e diferentes para cada conta, mantendo software atualizado, sendo cuidadoso com o que compartilha e usando navegação privada quando necessário.",
  },
]

// Function to get questions based on topic and level
export function getQuestions(topic: string, level: string): Question[] {
  if (topic === "smartphone") {
    if (level === "facil") return smartphoneEasyQuestions
    if (level === "medio") return smartphoneMediumQuestions
    if (level === "avancado") return smartphoneAdvancedQuestions
  } else if (topic === "desktop") {
    if (level === "facil") return desktopEasyQuestions
    if (level === "medio") return desktopMediumQuestions
    if (level === "avancado") return desktopAdvancedQuestions
  }

  // Default to smartphone easy questions if invalid parameters
  return smartphoneEasyQuestions
}

// E estamos selecionando 20 perguntas aleatórias no arquivo quiz/page.tsx:
// const selectedQuestions = quizQuestions.sort(() => 0.5 - Math.random()).slice(0, 20);

