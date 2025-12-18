
import { Lesson } from './types';

export const lessons: Lesson[] = [
  {
    id: 31,
    title: "Lição 31",
    topic: "Tag Questions (Present & Past Simple)",
    vocabulary: [
      { english: "to meet / met", portuguese: "encontrar / encontrou" },
      { english: "to teach / taught", portuguese: "ensinar / ensinou" },
      { english: "to believe", portuguese: "acreditar" },
      { english: "to bother", portuguese: "incomodar" },
      { english: "to get angry", portuguese: "ficar com raiva" },
      { english: "to apply for", portuguese: "candidatar-se a" },
      { english: "to go on strike", portuguese: "fazer greve" },
      { english: "by chance", portuguese: "por acaso" },
      { english: "appointment", portuguese: "compromisso / consulta" },
      { english: "anymore", portuguese: "não mais" },
      { english: "beats me", portuguese: "sei lá / não faço ideia" }
    ],
    phrases: [
      { english: "She teaches English, doesn’t she? / Yes, she does.", portuguese: "Ela ensina inglês, não ensina? / Sim, ela ensina." },
      { english: "You don’t believe that, do you? / No, I don’t.", portuguese: "Você não acredita nisso, acredita? / Não, eu não acredito." },
      { english: "They have an appointment, don’t they? / Beats me.", portuguese: "Eles têm um compromisso, não têm? / Não faço ideia." },
      { english: "We met by chance, didn’t we? / Yes, we did.", portuguese: "Nós nos encontramos por acaso, não foi? / Sim, foi." },
      { english: "He went on strike, didn’t he? / I think so.", portuguese: "Ele entrou em greve, não entrou? / Acho que sim." },
      { english: "I’m going to apply for a job.", portuguese: "Eu vou me candidatar a um emprego." },
      { english: "They won’t bother you anymore.", portuguese: "Eles não vão mais te incomodar." },
      { english: "Don’t get angry at the decision.", portuguese: "Não fique com raiva da decisão." }
    ],
    exercises: [
      { portuguese: "Ela ensina inglês, não ensina?", correctAnswer: "She teaches English, doesn't she?" },
      { portuguese: "Você não acredita nisso, acredita?", correctAnswer: "You don't believe that, do you?" },
      { portuguese: "Eles têm um compromisso, não têm?", correctAnswer: "They have an appointment, don't they?" },
      { portuguese: "Nós nos encontramos por acaso, não foi?", correctAnswer: "We met by chance, didn't we?" },
      { portuguese: "Ele entrou em greve, não entrou?", correctAnswer: "He went on strike, didn't he?" },
      { portuguese: "Eu vou me candidatar a um emprego.", correctAnswer: "I'm going to apply for a job." },
      { portuguese: "Eles não vão mais te incomodar.", correctAnswer: "They won't bother you anymore." },
      { portuguese: "Não fique com raiva da decisão.", correctAnswer: "Don't get angry at the decision." }
    ],
    dialogue: [
      { speaker: "John", text: "You met Sarah by chance, didn't you?", translation: "Você encontrou a Sarah por acaso, não foi?" },
      { speaker: "Mary", text: "Yes, I did. She was at the mall.", translation: "Sim, encontrei. Ela estava no shopping." },
      { speaker: "John", text: "She teaches English at that school, doesn't she?", translation: "Ela ensina inglês naquela escola, não ensina?" },
      { speaker: "Mary", text: "I think so, but she's going on strike tomorrow.", translation: "Acho que sim, mas ela vai entrar em greve amanhã." }
    ]
  },
  {
    id: 32,
    title: "Lição 32",
    topic: "Tag Questions com To Be",
    vocabulary: [
      { english: "to lose / lost", portuguese: "perder / perdeu" },
      { english: "to miss / missed", portuguese: "perder (ônibus/vôo/sentir falta) / perdeu" },
      { english: "to think / thought", portuguese: "pensar / pensou" },
      { english: "upset", portuguese: "chateado" },
      { english: "wild", portuguese: "selvagem / doido" },
      { english: "interesting", portuguese: "interessante" },
      { english: "funny", portuguese: "engraçado" },
      { english: "glad", portuguese: "contente" },
      { english: "to be in love", portuguese: "estar apaixonado" }
    ],
    phrases: [
      { english: "Did you lose your passport?", portuguese: "Você perdeu seu passaporte?" },
      { english: "I missed the flight.", portuguese: "Eu perdi o vôo." },
      { english: "You’re not thinking about leaving, are you? / Yes, I am.", portuguese: "Você não está pensando em ir embora, está? / Sim, eu estou." },
      { english: "It’s a little wild, isn’t it?", portuguese: "É um pouco doido, não é?" },
      { english: "They’re glad to be here, aren’t they?", portuguese: "Eles estão contentes de estar aqui, não estão?" },
      { english: "She wasn’t upset, was she? / I don’t think so.", portuguese: "Ela não estava chateada, estava? / Acho que não." },
      { english: "It wasn’t very interesting, was it?", portuguese: "Não foi muito interessante, foi?" },
      { english: "He wasn’t so funny, was he?", portuguese: "Ele não foi tão engraçado, foi?" },
      { english: "They were in love, weren’t they?", portuguese: "Eles estavam apaixonados, não estavam?" }
    ],
    exercises: [
      { portuguese: "Você perdeu seu passaporte?", correctAnswer: "Did you lose your passport?" },
      { portuguese: "Eu perdi o vôo.", correctAnswer: "I missed the flight." },
      { portuguese: "É um pouco doido, não é?", correctAnswer: "It's a little wild, isn't it?" },
      { portuguese: "Ela não estava chateada, estava?", correctAnswer: "She wasn't upset, was she?" },
      { portuguese: "Eles estão contentes de estar aqui, não estão?", correctAnswer: "They're glad to be here, aren't they?" },
      { portuguese: "Não foi muito interessante, foi?", correctAnswer: "It wasn't very interesting, was it?" },
      { portuguese: "Ele não foi tão engraçado, foi?", correctAnswer: "He wasn't so funny, was he?" },
      { portuguese: "Eles estavam apaixonados, não estavam?", correctAnswer: "They were in love, weren't they?" }
    ],
    dialogue: [
      { speaker: "Alice", text: "The movie wasn't very interesting, was it?", translation: "O filme não foi muito interessante, foi?" },
      { speaker: "Bob", text: "No, it was a little wild for me.", translation: "Não, foi um pouco doido para mim." },
      { speaker: "Alice", text: "You're not upset, are you?", translation: "Você não está chateado, está?" },
      { speaker: "Bob", text: "I'm just glad to be home.", translation: "Eu só estou contente de estar em casa." }
    ]
  },
  {
    id: 33,
    title: "Lição 33",
    topic: "Say / Tell & Pronomes -ever",
    vocabulary: [
      { english: "to say / said", portuguese: "dizer / disse" },
      { english: "to tell / told", portuguese: "contar / contou" },
      { english: "wherever", portuguese: "onde quer que" },
      { english: "whenever", portuguese: "sempre que / quando quer que" },
      { english: "whatever", portuguese: "o que quer que / qualquer coisa" },
      { english: "whoever", portuguese: "quem quer que" },
      { english: "instead of", portuguese: "ao invés de" },
      { english: "overseas", portuguese: "no exterior (além mar)" },
      { english: "in time", portuguese: "a tempo" },
      { english: "arrive", portuguese: "chegar" },
      { english: "excited", portuguese: "empolgado" }
    ],
    phrases: [
      { english: "He said he would help us.", portuguese: "Ele disse que nos ajudaria." },
      { english: "She told me she would talk to you.", portuguese: "Ela me contou que falaria com você." },
      { english: "They said they were excited about the party.", portuguese: "Eles disseram que estavam empolgados com a festa." },
      { english: "We said we would go overseas instead of staying home.", portuguese: "Nós dissemos que iríamos para o exterior ao invés de ficar em casa." },
      { english: "I told you I would arrive in time.", portuguese: "Eu te contei que chegaria a tempo." },
      { english: "Whatever you decide, I will support you.", portuguese: "O que quer que você decida, eu vou te apoiar." },
      { english: "Call me whenever you need help.", portuguese: "Me ligue sempre que precisar de ajuda." },
      { english: "You can sit wherever you like.", portuguese: "Você pode sentar onde quer que goste." },
      { english: "Whoever wins, we will celebrate.", portuguese: "Quem quer que vença, nós vamos comemorar." }
    ],
    exercises: [
      { portuguese: "Ele disse que nos ajudaria.", correctAnswer: "He said he would help us." },
      { portuguese: "Ela me contou que falaria com você.", correctAnswer: "She told me she would talk to you." },
      { portuguese: "O que quer que você decida, eu vou te apoiar.", correctAnswer: "Whatever you decide, I will support you." },
      { portuguese: "Me ligue sempre que precisar de ajuda.", correctAnswer: "Call me whenever you need help." },
      { portuguese: "Você pode sentar onde quer que goste.", correctAnswer: "You can sit wherever you like." },
      { portuguese: "Quem quer que vença, nós vamos comemorar.", correctAnswer: "Whoever wins, we will celebrate." },
      { portuguese: "Eles disseram que estavam empolgados com a festa.", correctAnswer: "They said they were excited about the party." },
      { portuguese: "Eu te contei que chegaria a tempo.", correctAnswer: "I told you I would arrive in time." }
    ],
    dialogue: [
      { speaker: "Leo", text: "She said she would arrive in time.", translation: "Ela disse que chegaria a tempo." },
      { speaker: "Sam", text: "I told her to call me whenever she lands.", translation: "Eu contei a ela para me ligar sempre que ela aterrissar." },
      { speaker: "Leo", text: "Whatever happens, we need to be ready.", translation: "O que quer que aconteça, precisamos estar prontos." },
      { speaker: "Sam", text: "True. Whoever is late will miss the bus.", translation: "Verdade. Quem quer que esteja atrasado vai perder o ônibus." }
    ]
  },
  {
    id: 34,
    title: "Lição 34",
    topic: "Comparative Adjectives",
    vocabulary: [
      { english: "tall / taller", portuguese: "alto / mais alto" },
      { english: "short / shorter", portuguese: "baixo / mais baixo" },
      { english: "smart / smarter", portuguese: "esperto / mais esperto" },
      { english: "fast / faster", portuguese: "rápido / mais rápido" },
      { english: "slow / slower", portuguese: "lento / mais lento" },
      { english: "expensive / more expensive", portuguese: "caro / mais caro" },
      { english: "cheap / cheaper", portuguese: "barato / mais barato" },
      { english: "big / bigger", portuguese: "grande / maior" },
      { english: "small / smaller", portuguese: "pequeno / menor" },
      { english: "intelligent / more intelligent", portuguese: "inteligente / mais inteligente" }
    ],
    phrases: [
      { english: "She is taller than me.", portuguese: "Ela é mais alta do que eu." },
      { english: "He is as smart as me.", portuguese: "Ele é tão esperto quanto eu." },
      { english: "This car is faster than mine.", portuguese: "Este carro é mais rápido que o meu." },
      { english: "Traveling is more expensive than staying home.", portuguese: "Viajar é mais caro do que ficar em casa." },
      { english: "My new phone is smaller than the old one.", portuguese: "Meu celular novo é menor que o antigo." },
      { english: "He is shorter than his brother.", portuguese: "Ele é mais baixo que o irmão dele." },
      { english: "English is easier than Chinese.", portuguese: "Inglês é mais fácil que chinês." },
      { english: "She is as intelligent as her sister.", portuguese: "Ela é tão inteligente quanto a irmã dela." }
    ],
    exercises: [
      { portuguese: "Ela é mais alta do que eu.", correctAnswer: "She is taller than me." },
      { portuguese: "Ele é tão esperto quanto eu.", correctAnswer: "He is as smart as me." },
      { portuguese: "Este carro é mais rápido que o meu.", correctAnswer: "This car is faster than mine." },
      { portuguese: "Meu celular novo é menor que o antigo.", correctAnswer: "My new phone is smaller than the old one." },
      { portuguese: "Viajar é mais caro do que ficar em casa.", correctAnswer: "Traveling is more expensive than staying home." },
      { portuguese: "Ele é mais baixo que o irmão dele.", correctAnswer: "He is shorter than his brother." },
      { portuguese: "Inglês é mais fácil que chinês.", correctAnswer: "English is easier than Chinese." },
      { portuguese: "Ela é tão inteligente quanto a irmã dela.", correctAnswer: "She is as intelligent as her sister." }
    ],
    dialogue: [
      { speaker: "Lucas", text: "Is your city bigger than mine?", translation: "Sua cidade é maior que a minha?" },
      { speaker: "Sara", text: "Yes, but it is also noisier.", translation: "Sim, mas também é mais barulhenta." },
      { speaker: "Lucas", text: "Is it more expensive to live there?", translation: "É mais caro morar lá?" },
      { speaker: "Sara", text: "Definitely. Everything is more expensive.", translation: "Com certeza. Tudo é mais caro." }
    ]
  },
  {
    id: 35,
    title: "Lição 35",
    topic: "Superlative Adjectives",
    vocabulary: [
      { english: "tall / the tallest", portuguese: "alto / o mais alto" },
      { english: "short / the shortest", portuguese: "baixo / o mais baixo" },
      { english: "smart / the smartest", portuguese: "esperto / o mais esperto" },
      { english: "fast / the fastest", portuguese: "rápido / o mais rápido" },
      { english: "slow / the slowest", portuguese: "lento / o mais lento" },
      { english: "expensive / the most expensive", portuguese: "caro / o mais caro" },
      { english: "cheap / the cheapest", portuguese: "barato / o mais barato" },
      { english: "big / the biggest", portuguese: "grande / o maior" },
      { english: "small / the smallest", portuguese: "pequeno / o menor" },
      { english: "intelligent / the most intelligent", portuguese: "inteligente / o mais inteligente" }
    ],
    phrases: [
      { english: "She is the most intelligent girl I know.", portuguese: "Ela é a garota mais inteligente que eu conheço." },
      { english: "Alaska is the coldest state in the USA.", portuguese: "O Alasca é o estado mais frio dos EUA." },
      { english: "This is the most expensive car in the world.", portuguese: "Este é o carro mais caro do mundo." },
      { english: "He is the tallest student in class.", portuguese: "Ele é o aluno mais alto da sala." },
      { english: "That was the funniest movie I've ever seen.", portuguese: "Aquele foi o filme mais engraçado que já vi." },
      { english: "Mount Everest is the highest mountain.", portuguese: "O Monte Everest é a montanha mais alta." },
      { english: "It was the happiest day of my life.", portuguese: "Foi o dia mais feliz da minha vida." },
      { english: "This is the easiest exercise in the book.", portuguese: "Este é o exercício mais fácil do livro." }
    ],
    exercises: [
      { portuguese: "Ela é a garota mais inteligente que eu conheço.", correctAnswer: "She is the most intelligent girl I know." },
      { portuguese: "O Alasca é o estado mais frio dos EUA.", correctAnswer: "Alaska is the coldest state in the USA." },
      { portuguese: "Este é o carro mais caro do mundo.", correctAnswer: "This is the most expensive car in the world." },
      { portuguese: "Ele é o aluno mais alto da sala.", correctAnswer: "He is the tallest student in class." },
      { portuguese: "O Monte Everest é a montanha mais alta.", correctAnswer: "Mount Everest is the highest mountain." },
      { portuguese: "Foi o dia mais feliz da minha vida.", correctAnswer: "It was the happiest day of my life." },
      { portuguese: "Este é o exercício mais fácil do livro.", correctAnswer: "This is the easiest exercise in the book." },
      { portuguese: "Aquele foi o filme mais engraçado que já vi.", correctAnswer: "That was the funniest movie I've ever seen." }
    ],
    dialogue: [
      { speaker: "Katy", text: "Who is the smartest person you know?", translation: "Quem é a pessoa mais esperta que você conhece?" },
      { speaker: "Ben", text: "My grandfather. He is also the kindest.", translation: "Meu avô. Ele também é o mais gentil." },
      { speaker: "Katy", text: "What is the most beautiful place in Brazil?", translation: "Qual é o lugar mais bonito do Brasil?" },
      { speaker: "Ben", text: "For me, Rio is the most beautiful.", translation: "Para mim, o Rio é o mais bonito." }
    ]
  }
];
