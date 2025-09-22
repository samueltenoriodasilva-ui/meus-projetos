// Dicionário de respostas com arrays e sinônimos
const respostas = {
  "eroção do solo": {
    palavras: [
        //palavras chaves
        "erosão do solo",
        "erosao do solo",
        "desgaste do solo",
        "perda de solo",
        "solo degradado",
        "nutrientes do solo",
        //perguntas que podem ser feitas
        "O que é erosão do solo?",
        "Como acontece a erosão do solo?",
        "Quais são os efeitos da erosão do solo?",
        "Por que o solo perde nutrientes?",
        "Como prevenir a erosão do solo?",
        "Quais técnicas evitam a erosão do solo?",
        "Erosão do solo é perigosa?",
        "Como o desmatamento causa erosão do solo?",
        ],
    resposta: [
       "A erosão do solo é o processo de desgaste e remoção da camada superficial da terra, causada principalmente pela ação da água, vento ou atividades humanas, como desmatamento e cultivo inadequado.",
       
       "Quando o solo é erodido, perde nutrientes importantes, fica menos fértil e pode causar assoreamento de rios, deslizamentos e desertificação.",

       "Práticas para prevenir a erosão incluem:",

       "- Plantio direto e cobertura do solo com vegetação.",

       "- Reflorestamento e manutenção de matas ciliares.",

       "- Rotação de culturas e terraceamento em áreas inclinadas.",

       "- Uso de barreiras naturais ou artificiais para reduzir o impacto da água ou do vento."

    ]
    
  },
  "solucao_erosao": {
  palavras: [
    //palavras chaves
    "solucao erosao",
    "solução erosao",
    "solucao erosao do solo",
    "como prevenir erosao",
    "como evitar erosao",
    "prevenir perda de solo",
    "como recuperar solo",
    "proteger solo",
    //perguntas que podem ser feitas 
    "Como evitar a erosão do solo?",    
    "Quais são as soluções para a erosão do solo?",
    "Como recuperar um solo erodido?",
    "Como proteger o solo da erosão?",
    "Quais técnicas previnem erosão do solo?",
    "Como reduzir a perda de solo na fazenda?",
    "O que fazer para solo degradado?",
    "Como melhorar a fertilidade e evitar erosão?",
  ],
  resposta: [
    "1. Cobertura do solo\n- Plantar culturas de cobertura ou manter restos de plantas no solo para proteger a terra da chuva e do vento.",
    "2. Plantio direto\n- Evita revolver o solo continuamente, mantendo a estrutura natural e prevenindo perda de nutrientes.",
    "3. Rotação de culturas\n- Alternar tipos de plantas para melhorar a fertilidade e reduzir áreas expostas à erosão.",
    "4. Reflorestamento e manutenção de matas ciliares\n- Árvores e vegetação protegem o solo, seguram a água e evitam deslizamentos.",
    "5. Terraceamento em áreas inclinadas\n- Criar degraus ou pequenas contenções para reduzir a velocidade da água e impedir que leve o solo embora.",
    "6. Barreiras naturais ou artificiais\n- Cercas vivas, sebes ou muros de contenção ajudam a reduzir o impacto da água e do vento.",
    "7. Controle de atividades humanas\n- Evitar desmatamento, pastagem excessiva e cultivo em declives sem técnicas de proteção."
  ]
},

  " solo 1": {
    palavras: ["solo solucçãoes,"],
    resposta:[
        " solução: 🌳 Técnicas como rotação de culturas e reflorestamento ajudam a recuperar nutrientes.",
    ]
  },

  " solucãoes do solo_ agrotóxicos": {
    palavras: [
        //palavras chaves
          "saúde do solo",
          "saúde dos alimentos",
          "solo contaminado",
          "produtos químicos na fazenda",
          "problemas do agrotóxico",
          "reduzir agrotóxicos",
          "uso de agrotóxicos",
          //perguntas que podem ser feitas
          "Como reduzir o uso de agrotóxicos?",
          "Quais os problemas do agrotóxico?",
          "Como proteger o solo e os alimentos?",
          "O que fazer para ter menos agrotóxicos na fazenda?",
          "Existe alternativa aos agrotóxicos?" 
        ],
    resposta:[
        "❌ Reduzir o uso de agrotóxicos protege a saúde do solo e dos alimentos.",
        "agrotoxicos",

        "1. Uso racional e controlado\n- Aplicar agrotóxicos somente quando necessário, seguindo a dosagem correta.\n- Evitar pulverizações excessivas que contaminam solo, água e alimentos.",

        "2. Agricultura orgânica e integrativa\n- Alternar culturas e usar adubos orgânicos para fortalecer o solo naturalmente.\n- Investir em controle biológico de pragas (insetos benéficos, fungos ou bactérias que combatem pragas).",

        "3. Barreiras e proteção ambiental\n- Criar matas ciliares e barreiras vegetais para evitar que o agrotóxico chegue a rios e áreas vizinhas.\n- Usar equipamentos de proteção individual (EPIs) para os trabalhadores.",

        "4. Tecnologia e monitoramento\n- Sensores e drones podem identificar áreas com infestação e aplicar produtos de forma localizada, reduzindo o uso geral.\n- Monitorar a qualidade do solo e da água periodicamente.",

        "5. Educação e capacitação\n- Treinar os trabalhadores sobre o uso correto de agrotóxicos.\n- Incentivar práticas sustentáveis e alternativas menos agressivas ao meio ambiente."


    ]
  },


  "animais": {
    palavras: ["animais", "exploração de animais", "fauna"],
    resposta: [
      "🐾 A exploração de animais envolve maus-tratos, caça ilegal e uso em testes.",

      "✅ Apoiar produtos livres de crueldade e projetos de conservação ajuda a reduzir a exploração.",

      "⚠️ Respeitar os animais protege o equilíbrio dos ecossistemas."
    ]
  },
  "comida": {
    palavras: ["comida", "alimentos", "alimento"],
    resposta: [
      "🍽️ Alguns alimentos industrializados podem causar problemas à saúde quando mal produzidos.",

      "⚠️ Alimentos ultraprocessados podem ter excesso de conservantes e corantes.",

      "✅ Prefira alimentos frescos, armazenados corretamente e de procedência confiável."
    ]
  }
};

function sendMessage() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat");
  const userText = input.value.toLowerCase().trim();

  if (userText !== "") {
    // Mensagem do usuário
    const userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.textContent = input.value;
    chat.appendChild(userMsg);

    // Procura palavra-chave com sinônimos
    let respostaEncontrada = null;
    for (let key in respostas) {
      const tema = respostas[key];
      for (let palavra of tema.palavras) {
        if (userText.includes(palavra)) {
          respostaEncontrada = tema.resposta;
          break;
        }
      }
      if (respostaEncontrada) break;
    }

    // Linha separadora
    const linha = document.createElement("hr");
    chat.appendChild(linha);

    // Mensagem do bot
    const botMsg = document.createElement("div");
    botMsg.className = "message bot";

    if (respostaEncontrada) {
      if (Array.isArray(respostaEncontrada)) {
        botMsg.innerHTML = respostaEncontrada.join("<br>");
      } else {
        botMsg.textContent = respostaEncontrada;
      }
    } else {
      botMsg.textContent = "❓ Não tenho uma resposta para isso. Pergunte sobre: degradação do solo, exploração de animais ou problemas com alimentos.";
    }

    chat.appendChild(botMsg);

    // Scroll automático
    chat.scrollTop = chat.scrollHeight;

    input.value = "";
  }
}

// Enviar mensagem com ENTER
document.getElementById("userInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
