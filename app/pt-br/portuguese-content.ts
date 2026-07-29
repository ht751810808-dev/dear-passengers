export type PortugueseFaq = { question: string; answer: string };
export type PortugueseSection = { id: string; kicker: string; heading: string; paragraphs: string[]; bullets?: string[] };
export type PortugueseGuide = {
  slug: string;
  englishPath: string;
  germanPath: string;
  arabicPath: string;
  turkishPath: string;
  chinesePath?: string;
  keyword: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  answer: string;
  note: string;
  heroImage: string;
  heroAlt: string;
  confirmed: string[];
  unknown: string[];
  sections: PortugueseSection[];
  localContext: string[];
  faqs: PortugueseFaq[];
  related: string[];
};

export const portugueseGuides: PortugueseGuide[] = [
  {
    slug: 'dear-passengers-como-jogar', englishPath: '/dear-passengers-gameplay/', germanPath: '/de/dear-passengers-gameplay/', arabicPath: '/ar/dear-passengers-gameplay/', turkishPath: '/tr/dear-passengers-oynanis/',
    keyword: 'Dear Passengers como jogar', title: 'Dear Passengers: Como Jogar, Pilotar e Cuidar da Cabine',
    description: 'Dear Passengers como jogar: voo, cabine, passageiros, carga, física, clima, modo solo e coop on-line, com fatos confirmados e dúvidas abertas.',
    eyebrow: 'GUIA DE JOGABILIDADE · BRASIL', h1: 'Dear Passengers: como jogar e dividir o trabalho da tripulação?',
    intro: 'A busca “Dear Passengers como jogar” mistura curiosidade sobre pilotagem, serviço de bordo e cooperação. Este guia usa a descrição oficial da Steam e cenas publicadas pela FLEXUS, sem transformar cortes de trailer em sistemas, classes ou controles que o estúdio ainda não explicou.',
    answer: 'Em Dear Passengers, a tripulação escolhe passageiros e cargas antes do voo; durante a viagem, um integrante pode pilotar enquanto os demais cuidam da cabine, servem passageiros, protegem a carga e reagem ao clima e à física. Um jogador e cooperativo on-line estão confirmados. Missões, progressão, controles e limite de pessoas continuam sem detalhamento.',
    note: 'Texto da loja confirma recursos; trailer comprova apenas o que aparece na cena. Não tratamos animação promocional como promessa de carreira, árvore de melhorias, classe fixa ou simulação aeronáutica completa.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Imagem oficial da cabine para o guia brasileiro de como jogar Dear Passengers',
    confirmed: ['Pilotar e trabalhar dentro da cabine', 'Escolher passageiros e cargas', 'Física aplicada a pessoas e objetos', 'Um jogador e cooperativo on-line'],
    unknown: ['Quantidade e duração das missões', 'Progressão e melhorias permanentes', 'Suporte a controle', 'Limite máximo da tripulação'],
    sections: [
      { id: 'ciclo', kicker: 'CICLO DO VOO', heading: 'Como começa uma partida de Dear Passengers?', paragraphs: [
        'A apresentação oficial de Dear Passengers começa antes da decolagem. A equipe decide quem e o que aceitar no manifesto. Cargas mais valiosas e passageiros mais difíceis podem render mais dinheiro, mas também aumentam a chance de problemas. A Steam confirma essa relação entre risco e pagamento; ainda não mostra contratos, moedas, níveis ou onde uma possível recompensa será usada.',
        'Depois da escolha, Dear Passengers conecta duas áreas do mesmo voo. O piloto lida com a aeronave e as condições do ar, enquanto a equipe de cabine atende passageiros, segura bagagem e impede que incidentes pequenos se acumulem. Uma manobra ou turbulência pode deslocar objetos e pessoas, fazendo a decisão do cockpit alterar diretamente o trabalho no corredor.'
      ]},
      { id: 'cockpit-cabine', kicker: 'COCKPIT E CABINE', heading: 'O que piloto e comissários fazem em Dear Passengers?', paragraphs: [
        'Pilotar a aeronave é uma tarefa confirmada, e os vídeos usam câmera em primeira pessoa no cockpit. Isso não confirma checklist realista, controle de tráfego aéreo, combustível detalhado ou física certificada de simulador. Dear Passengers pode usar o voo como fonte de decisões e caos sem pretender reproduzir todos os procedimentos de uma companhia aérea real.',
        'Na cabine, a equipe serve comida e bebida, mantém passageiros sob controle e protege cargas. A loja menciona passageiros, bagagem e objetos soltos sujeitos à física. Não há informação oficial sobre barra de satisfação, categorias fixas de passageiro, capacidade de inventário ou funções bloqueadas por classe. O [[/pt-br/dear-passengers-funcoes/|guia de funções da tripulação]] separa tarefas observadas de papéis inventados.'
      ]},
      { id: 'solo-online', kicker: 'MODOS DE JOGO', heading: 'Dear Passengers funciona sozinho e com amigos?', paragraphs: [
        'A Steam marca Dear Passengers como Um jogador e Cooperativo on-line. Jogar sozinho é, portanto, um recurso de produto confirmado. Ainda não sabemos se uma pessoa alternará rapidamente entre cockpit e cabine, receberá ajuda de personagens controlados pelo jogo ou encontrará objetivos simplificados. A existência do modo solo não explica sua execução.',
        'No modo on-line, o conceito oficial é dividir responsabilidades com amigos. Convite pela Steam, código de sala, matchmaking público, entrada no meio da sessão, migração de host e chat de voz não foram descritos. Também não há confirmação de tela dividida, coop local ou crossplay. Consulte [[/pt-br/dear-passengers-quantos-jogadores/|quantos jogadores Dear Passengers suporta]] para acompanhar o limite oficial.'
      ]},
    ],
    localContext: [
      'No Brasil, “como jogar”, “como funciona” e “gameplay” convivem na mesma intenção. “Dear Passengers como jogar” responde a uma pergunta prática; “jogabilidade” é melhor para explicar sistemas. O nome do jogo permanece em inglês porque é uma marca, não uma frase a ser traduzida.',
      'A interface brasileira da Steam usa “Um jogador”, “Cooperativo on-line”, “Requisitos de sistema” e “Data de lançamento”. Empregamos esses termos reconhecíveis, mas deixamos claro que a interface do próprio jogo está marcada como indisponível em Português (Brasil).',
      'Resultados locais já afirmam que quatro amigos podem jogar. A Steam não publica esse número. Dear Passengers aparece com vários personagens em vídeo, porém contar modelos de uma cena não mede a capacidade de uma sala on-line.'
    ],
    faqs: [
      { question: 'Como jogar Dear Passengers?', answer: 'Escolha passageiros e carga; durante o voo, divida pilotagem, serviço de cabine e resposta a emergências.' },
      { question: 'Dear Passengers tem modo solo?', answer: 'Sim. A Steam confirma um jogador, mas não explicou como uma pessoa administra todas as funções.' },
      { question: 'Dear Passengers é on-line?', answer: 'Sim, o cooperativo on-line está confirmado. Matchmaking, host e chat ainda não foram detalhados.' },
      { question: 'Dear Passengers é simulador de voo?', answer: 'Há pilotagem e clima, mas o nível de simulação e os controles ainda não foram publicados.' },
      { question: 'Dear Passengers está em português?', answer: 'Não no momento. A Steam marca Português (Brasil) como indisponível para a interface do jogo.' },
      { question: 'Quando será possível jogar Dear Passengers?', answer: 'A janela oficial é 2026; não há data exata nem demo pública disponível agora.' },
    ], related: ['dear-passengers-funcoes', 'dear-passengers-quantos-jogadores', 'dear-passengers-recursos-confirmados', 'dear-passengers-demo'],
  },
  {
    slug: 'dear-passengers-quantos-jogadores', englishPath: '/dear-passengers-player-count/', germanPath: '/de/dear-passengers-spielerzahl/', arabicPath: '/ar/dear-passengers-player-count/', turkishPath: '/tr/dear-passengers-kac-kisilik/', chinesePath: '/zh-cn/dear-passengers-player-count/',
    keyword: 'Dear Passengers quantos jogadores', title: 'Dear Passengers: Quantos Jogadores? Coop e Limite da Sala',
    description: 'Dear Passengers quantos jogadores: o que a Steam confirma sobre solo e coop on-line e o que segue desconhecido sobre limite, crossplay e tela dividida.',
    eyebrow: 'NÚMERO DE JOGADORES · SEM CHUTES', h1: 'Dear Passengers: quantos jogadores podem entrar na mesma partida?',
    intro: '“Dear Passengers quantos jogadores” é uma pergunta ainda sem número oficial. A Steam confirma um jogador e cooperativo on-line, mas não mostra “até quatro”, “até seis” ou qualquer outro limite. Este guia evita repetir o número quatro publicado por páginas brasileiras sem fonte primária.',
    answer: 'O máximo de jogadores de Dear Passengers ainda não foi anunciado. Estão confirmados o modo para um jogador e o cooperativo on-line. Não há confirmação de duas, quatro ou mais pessoas, nem de crossplay, matchmaking público, tela dividida, coop local ou chat de voz integrado.',
    note: 'O limite só será tratado como confirmado quando aparecer em campo oficial da Steam, comunicado da FLEXUS ou documento de uma versão identificada. Personagens vistos no trailer não definem capacidade de lobby.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Tripulação na cabine para o guia de quantos jogadores Dear Passengers suporta',
    confirmed: ['Modo para um jogador', 'Cooperativo on-line', 'Divisão entre cockpit e cabine'], unknown: ['Número máximo de jogadores', 'Crossplay', 'Tela dividida e coop local', 'Matchmaking e chat de voz'],
    sections: [
      { id: 'sem-numero', kicker: 'RESPOSTA OFICIAL', heading: 'Por que o número de jogadores de Dear Passengers é desconhecido?', paragraphs: [
        'A seção de recursos da Steam exibe “Um jogador” e “Cooperativo on-line”. Ela não contém uma faixa numérica. Dear Passengers foi divulgado como experiência com amigos, porém marketing plural não é especificação de rede. Até que a FLEXUS publique o limite, qualquer “quatro jogadores” deve ser apresentado como alegação de terceiro, não como característica confirmada.',
        'Um site brasileiro listou Dear Passengers como jogo para até quatro amigos. A matéria não vinculou uma declaração da FLEXUS com esse número. Outros bancos de dados copiam metadados entre si e podem transformar suposição em aparente consenso. Repetição sem fonte não aumenta a confiabilidade.'
      ]},
      { id: 'online', kicker: 'COOPERATIVO ON-LINE', heading: 'O que já se sabe sobre o coop de Dear Passengers?', paragraphs: [
        'A proposta de Dear Passengers distribui trabalho: alguém pilota, enquanto outras pessoas cuidam de serviço, passageiros, carga e problemas da cabine. Isso confirma cooperação assimétrica entre áreas do avião. Não esclarece se todos podem trocar de função, se existe líder de sala ou se cada missão exige uma composição específica.',
        'Também não foram anunciados servidores dedicados, regiões de servidor, convite por código, navegador de salas ou entrada tardia. Para jogadores brasileiros, latência e localização de servidor podem importar, mas não há dado suficiente para prometer desempenho local. O guia será atualizado apenas com teste identificável ou documentação oficial.'
      ]},
      { id: 'solo-crossplay', kicker: 'SOLO E PLATAFORMAS', heading: 'Modo solo, tela dividida e crossplay estão confirmados?', paragraphs: [
        'O modo solo está confirmado, mas seu funcionamento permanece aberto. Dear Passengers pode permitir alternância de postos, assistência automática ou outra solução; nenhuma delas foi anunciada. Por isso, não descrevemos personagens de IA como fato. A pergunta “dá para jogar sem amigos?” tem resposta sim; “como a cabine funciona sozinho?” ainda não.',
        'Windows pela Steam é a única plataforma confirmada. Sem versões de PlayStation, Xbox ou Switch anunciadas, não existe base para afirmar crossplay. A loja também não marca Remote Play Together nem coop local. O [[/pt-br/dear-passengers-data-de-lancamento/|guia de lançamento e plataformas]] acompanha mudanças sem criar páginas separadas para rumores de console.'
      ]},
    ],
    localContext: [
      'Brasileiros pesquisam “quantos jogadores”, “quantas pessoas”, “dá para jogar solo” e “coop local”. A primeira forma é a mais direta para o título; as demais entram nas respostas e FAQs sem gerar páginas quase duplicadas.',
      '“Multiplayer” é comum no Brasil, mas a própria Steam traduz a característica como “Cooperativo on-line”. Usamos ambos quando necessário e mantemos “coop” como forma curta reconhecida pela comunidade.',
      'O plural de uma campanha não é uma ficha técnica. Essa distinção é especialmente útil porque páginas locais já transformaram cenas promocionais em um limite de quatro pessoas que a fonte oficial não publica.'
    ],
    faqs: [
      { question: 'Quantos jogadores tem Dear Passengers?', answer: 'O máximo ainda não foi informado. Um jogador e coop on-line estão confirmados.' },
      { question: 'Dear Passengers é para quatro jogadores?', answer: 'Quatro não foi confirmado oficialmente, apesar de aparecer em matérias de terceiros.' },
      { question: 'Dá para jogar Dear Passengers sozinho?', answer: 'Sim, a Steam lista modo para um jogador; a adaptação das funções não foi explicada.' },
      { question: 'Dear Passengers tem tela dividida?', answer: 'Não há confirmação de tela dividida ou coop local.' },
      { question: 'Dear Passengers terá crossplay?', answer: 'Não foi anunciado; Windows é a única plataforma atual.' },
      { question: 'Dear Passengers tem matchmaking?', answer: 'O método para encontrar ou convidar jogadores ainda é desconhecido.' },
    ], related: ['dear-passengers-como-jogar', 'dear-passengers-funcoes', 'dear-passengers-data-de-lancamento', 'dear-passengers-demo'],
  },
  {
    slug: 'dear-passengers-data-de-lancamento', englishPath: '/dear-passengers-release-date/', germanPath: '/de/dear-passengers-release/', arabicPath: '/ar/dear-passengers-release/', turkishPath: '/tr/dear-passengers-cikis-tarihi/', chinesePath: '/zh-cn/dear-passengers-release-date/',
    keyword: 'Dear Passengers data de lançamento', title: 'Dear Passengers: Data de Lançamento, Preço e Plataformas',
    description: 'Data de lançamento de Dear Passengers no Brasil: janela de 2026, Steam, preço, consoles, idioma pt-BR e detalhes que ainda não foram anunciados.',
    eyebrow: 'LANÇAMENTO NO BRASIL · ATUALIZADO', h1: 'Qual é a data de lançamento de Dear Passengers?',
    intro: 'A data de lançamento de Dear Passengers é uma das buscas brasileiras mais claras. A informação oficial termina em 2026. Não existe dia 31 de dezembro confirmado, preço em reais ou versão de console anunciada. Esta página registra o que mudou e identifica datas usadas apenas como preenchimento por bancos de dados.',
    answer: 'Dear Passengers tem lançamento planejado para 2026 no Windows PC pela Steam. A FLEXUS não anunciou mês, dia, horário, preço em reais, pré-venda, acesso antecipado ou versões de PlayStation, Xbox, Switch, Mac e Linux. A data 31 de dezembro de 2026 encontrada em alguns sites não é uma data oficial.',
    note: 'A data só muda quando Steam ou FLEXUS publicam uma janela mais precisa. Datas de fim de ano usadas por bancos de dados são tratadas como placeholder, não como anúncio.',
    heroImage: '/images/release-date.webp', heroAlt: 'Aeronave de Dear Passengers para o guia brasileiro de data de lançamento',
    confirmed: ['Janela de lançamento em 2026', 'Windows PC', 'Distribuição pela Steam', 'FLEXUS como desenvolvedora e distribuidora'], unknown: ['Mês e dia exatos', 'Preço em reais', 'Consoles, Mac e Linux', 'Pré-venda ou acesso antecipado'],
    sections: [
      { id: 'janela', kicker: 'JANELA OFICIAL', heading: 'Dear Passengers lança quando em 2026?', paragraphs: [
        'A página oficial da Steam mostra somente 2026 e a frase de lançamento planejado. Não há trimestre, mês ou dia. Dear Passengers pode receber uma data mais precisa por anúncio da FLEXUS, atualização da loja ou vídeo oficial, mas nenhum desses canais publicou essa informação até a verificação de 28 de julho de 2026.',
        'O Tera Time apresenta 31 de dezembro de 2026 e estatísticas de duração para um jogo ainda não lançado. O fim do ano é frequentemente usado como data técnica quando apenas o ano é conhecido. Sem fonte primária, não representa compromisso da FLEXUS e não deve entrar em calendário ou contagem regressiva.'
      ]},
      { id: 'preco-plataformas', kicker: 'PREÇO E PLATAFORMAS', heading: 'Dear Passengers terá preço no Brasil e versão para console?', paragraphs: [
        'O preço de Dear Passengers não foi publicado. Não existe valor em reais, dólar, desconto de lançamento ou confirmação de jogo gratuito. A tag “Gratuito para Jogar” pode aparecer entre marcadores populares enviados ou aplicados na Steam, mas marcador não substitui preço oficial nem botão de compra.',
        'Windows PC é a única plataforma listada. PlayStation 5, Xbox Series, Nintendo Switch, Mac, Linux, Game Pass e Epic Games Store não foram anunciados. Uma futura versão pode existir, mas ela precisa de comunicado próprio. O mesmo vale para crossplay e progressão compartilhada.'
      ]},
      { id: 'brasil-idioma', kicker: 'BRASIL E IDIOMA', heading: 'O lançamento brasileiro terá Português do Brasil?', paragraphs: [
        'A loja pode ser visualizada em português, mas a tabela de idiomas marca Português (Brasil) como indisponível para o produto. Dear Passengers atualmente oferece interface em inglês, árabe, chinês simplificado, turco, ucraniano e japonês; não há áudio ou legenda pt-BR confirmados.',
        'Isso não impede compra no Brasil quando o jogo for lançado, mas afeta acessibilidade e decisão de compra. Também não autoriza prometer preço regional. Este site oferece informação em português brasileiro e informa a ausência do idioma no jogo, sem misturar as duas coisas. A [[/pt-br/dear-passengers-noticias/|página de notícias]] acompanhará alterações oficiais.'
      ]},
    ],
    localContext: [
      '“Data de lançamento” é a forma editorial e a usada pela Steam; “quando lança” e “quando sai” são perguntas naturais no Brasil. A página trabalha as três formas numa só URL para evitar canibalização.',
      'No Brasil, preço precisa ser citado em reais apenas quando a loja realmente o publica. Conversão especulativa em dólar ignora preço regional, impostos e mudanças de câmbio.',
      'Datas brasileiras seguem dia/mês/ano. Uma data futura só aparecerá nesse formato quando existir fonte oficial; por enquanto, “2026” é mais preciso do que inventar 31/12/2026.'
    ],
    faqs: [
      { question: 'Quando lança Dear Passengers?', answer: 'Em 2026 para Windows PC; mês e dia ainda não foram anunciados.' },
      { question: 'Dear Passengers lança em 31 de dezembro?', answer: 'Não há confirmação. Essa data aparece como preenchimento em sites de terceiros.' },
      { question: 'Quanto vai custar Dear Passengers?', answer: 'O preço ainda não foi divulgado, inclusive no Brasil.' },
      { question: 'Dear Passengers vai sair para PS5 ou Xbox?', answer: 'Nenhuma versão de console foi anunciada.' },
      { question: 'Dear Passengers estará em português?', answer: 'A Steam marca Português (Brasil) como indisponível no produto atualmente.' },
      { question: 'Dear Passengers terá acesso antecipado?', answer: 'Acesso antecipado e pré-venda não foram anunciados.' },
    ], related: ['dear-passengers-noticias', 'dear-passengers-demo', 'dear-passengers-requisitos', 'dear-passengers-desenvolvedora-flexus'],
  },
  {
    slug: 'dear-passengers-demo', englishPath: '/dear-passengers-demo/', germanPath: '/de/dear-passengers-demo/', arabicPath: '/ar/dear-passengers-demo/', turkishPath: '/tr/dear-passengers-demo/',
    keyword: 'Dear Passengers demo', title: 'Demo de Dear Passengers: Gamescom, Teste Público e Acesso',
    description: 'Demo de Dear Passengers: o plano informado pela FLEXUS para Gamescom e uma versão pública posterior, sem confundir intenção com download disponível.',
    eyebrow: 'DEMO E TESTES · SITUAÇÃO REAL', h1: 'Existe uma demo de Dear Passengers para baixar?',
    intro: 'A demo de Dear Passengers ainda não está disponível ao público. A FLEXUS falou diretamente sobre uma versão jogável para a Gamescom e a intenção de liberar uma demo pública depois. Não há botão na Steam, data, inscrição de beta ou arquivo oficial para usuários brasileiros.',
    answer: 'Não existe demo pública de Dear Passengers disponível agora. A FLEXUS declarou que prepara uma versão jogável para a Gamescom 2026 e pretende oferecer uma demo pública posteriormente. Data, plataforma de distribuição, regiões, duração e conteúdo dessa futura demo ainda não foram informados.',
    note: '“Planeja lançar” não significa “já lançou”. Só marcaremos a demo como disponível quando um canal oficial publicar acesso funcional e verificável.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Cabine oficial usada no guia brasileiro sobre a demo de Dear Passengers',
    confirmed: ['Versão jogável planejada para a Gamescom', 'Intenção de demo pública posterior', 'Jogo completo previsto para 2026'], unknown: ['Data da demo pública', 'Steam Playtest ou botão de demo', 'Regiões e duração', 'Progresso transferido para o jogo final'],
    sections: [
      { id: 'estado', kicker: 'ESTADO ATUAL', heading: 'A demo de Dear Passengers já foi lançada?', paragraphs: [
        'Não. A página oficial de Dear Passengers na Steam oferece lista de desejos, mas não mostra botão de “Baixar demonstração” nem inscrição de Steam Playtest. Uma busca pode encontrar páginas que usam “demo”, “beta” ou “download” no título; sem ligação recíproca com FLEXUS ou Steam, isso não cria acesso legítimo.',
        'A comunidade pergunta quando saem beta e demo, inclusive em discussões exibidas pela Steam em português. Essas perguntas confirmam interesse, não uma resposta. O comentário de outro jogador dizendo que quer testar com amigos também não é convite oficial nem distribuição de chave.'
      ]},
      { id: 'gamescom', kicker: 'PLANO DA FLEXUS', heading: 'O que foi dito sobre a demo na Gamescom?', paragraphs: [
        'Em entrevista direta, o cofundador da FLEXUS explicou que a equipe preparava uma versão jogável para o estande ucraniano na Gamescom 2026 e planejava uma demo pública um pouco depois. A declaração é evidência de plano de desenvolvimento. Ela não informa dia, endereço de download ou garantia de que a versão pública será idêntica à de feira.',
        'Build de evento e demo doméstica podem ter missões, estabilidade, controles ou limites diferentes. Quando uma versão aparecer, registraremos nome, data, plataforma, regiões e requisitos. Até lá, Dear Passengers demo permanece “planejada”, não “disponível”.'
      ]},
      { id: 'seguranca', kicker: 'ACESSO SEGURO', heading: 'Como reconhecer um download legítimo da demo de Dear Passengers?', paragraphs: [
        'O caminho mais seguro é a própria página do produto na Steam ou um anúncio da FLEXUS que aponte para ela. Formulários externos devem ter ligação verificável em canal oficial. Arquivos executáveis, APK, torrent, “online fix” e chaves compartilhadas por terceiros não são uma demo confirmada.',
        'Dear Passengers é atualmente listado para Windows, então um APK de Android não combina com a plataforma oficial. Mesmo um arquivo para PC pode ser falso. O [[/pt-br/dear-passengers-baixar/|guia de download seguro]] explica sinais de domínio, assinatura e fonte sem hospedar arquivos.'
      ]},
    ],
    localContext: [
      'No Brasil, “demo”, “beta”, “teste” e “acesso antecipado” são usados como se fossem equivalentes, mas representam etapas diferentes. O título mantém “demo” porque é a consulta mais visível; o texto separa cada formato.',
      '“Baixar demo” tem intenção prática e alto risco de página enganosa. A resposta começa com disponibilidade real antes de explicar o plano da Gamescom.',
      'A Steam brasileira traduz demonstrações como “demonstração”, porém “demo” é a forma mais natural entre jogadores. Usamos os dois termos sem inventar uma versão localizada do jogo.'
    ],
    faqs: [
      { question: 'Dear Passengers tem demo?', answer: 'Ainda não há demo pública; a FLEXUS planeja uma após a versão da Gamescom.' },
      { question: 'Quando sai a demo de Dear Passengers?', answer: 'A data não foi anunciada.' },
      { question: 'Onde baixar a demo de Dear Passengers?', answer: 'Em nenhum lugar por enquanto. Verifique Steam e canais oficiais da FLEXUS.' },
      { question: 'Existe beta de Dear Passengers?', answer: 'Não há beta ou Steam Playtest público confirmado.' },
      { question: 'A demo da Gamescom será on-line?', answer: 'Modo, conteúdo e distribuição da versão de evento não foram detalhados.' },
      { question: 'O progresso da demo vai para o jogo completo?', answer: 'Transferência de progresso não foi anunciada.' },
    ], related: ['dear-passengers-baixar', 'dear-passengers-data-de-lancamento', 'dear-passengers-noticias', 'dear-passengers-como-jogar'],
  },
  {
    slug: 'dear-passengers-baixar', englishPath: '/dear-passengers-download/', germanPath: '/de/dear-passengers-download/', arabicPath: '/ar/dear-passengers-download/', turkishPath: '/tr/dear-passengers-indir/',
    keyword: 'Dear Passengers baixar', title: 'Dear Passengers Baixar: Steam, Demo e Alerta de APK Falso',
    description: 'Dear Passengers baixar com segurança: situação oficial na Steam, ausência de versão pública, APK, torrent, crack, tamanho e páginas falsas.',
    eyebrow: 'DOWNLOAD SEGURO · SEM ARQUIVO FALSO', h1: 'Dear Passengers: onde baixar com segurança?',
    intro: 'A busca “Dear Passengers baixar” já existe no Brasil, mas o jogo ainda não foi lançado. Não há versão completa, demo pública, APK, crack ou torrent oficial. Esta página responde à intenção sem usar botão falso, contagem regressiva ou instalador que imite a Steam.',
    answer: 'Dear Passengers não pode ser baixado atualmente. O produto está em pré-lançamento na Steam, com janela de 2026 e apenas lista de desejos. Qualquer APK, torrent, crack, arquivo completo ou “download grátis” disponível agora não foi confirmado pela FLEXUS e deve ser tratado como risco.',
    note: 'Não hospedamos executáveis nem usamos botões de download para um produto indisponível. A disponibilidade é verificada diretamente na loja oficial antes de qualquer mudança de status.',
    heroImage: '/images/dear-passengers-download-safety.webp', heroAlt: 'Ilustração editorial de segurança para quem procura baixar Dear Passengers',
    confirmed: ['Página oficial ativa na Steam', 'Lançamento planejado para 2026', 'Windows como plataforma confirmada'], unknown: ['Data do download', 'Tamanho final do arquivo', 'Preço e proteção técnica', 'Pré-carregamento e regiões'],
    sections: [
      { id: 'agora', kicker: 'DISPONIBILIDADE', heading: 'É possível baixar Dear Passengers agora?', paragraphs: [
        'Não. A página de Dear Passengers informa que o jogo ainda não está disponível e oferece apenas a ação de adicionar à lista de desejos. Sem botão de compra, instalação ou demonstração, não existe arquivo oficial para baixar. Uma matéria brasileira pode usar “como baixar” para explicar a situação, mas isso não muda o estado da loja.',
        'O lançamento está previsto para Windows PC. Não há aplicativo Android ou iOS anunciado. Por isso, “Dear Passengers APK” é incompatível com as plataformas confirmadas. Sites podem reutilizar logo e capturas oficiais para parecer legítimos; identidade visual não substitui link vindo da Steam ou FLEXUS.'
      ]},
      { id: 'riscos', kicker: 'ARQUIVOS FALSOS', heading: 'APK, torrent e crack de Dear Passengers são oficiais?', paragraphs: [
        'Não. A FLEXUS não publicou APK, torrent, crack, repack, “online fix” ou versão grátis completa. Arquivos com esses rótulos podem pedir senha, extensão de navegador, desativação do antivírus ou login da Steam. Essas etapas criam risco de malware e roubo de conta sem fornecer o jogo real.',
        'Também não existe motivo para informar “tamanho do download” com base nos 4 GB da tabela mínima. Esse valor é espaço de armazenamento disponível exigido pela configuração atual, não o tamanho final do pacote. Atualizações, compressão e arquivos de lançamento podem alterar o download.'
      ]},
      { id: 'quando', kicker: 'QUANDO LANÇAR', heading: 'Como baixar Dear Passengers quando ficar disponível?', paragraphs: [
        'Quando o lançamento ocorrer, a página oficial da Steam deve exibir preço ou condição de acesso e o cliente instalará os arquivos. Confirme o App ID 4534960, o nome FLEXUS nos campos de desenvolvedora e distribuidora e o domínio steampowered.com. Não pesquise um espelho se a própria loja não liberar a instalação.',
        'Se uma demo pública vier antes, ela deve aparecer na loja ou em anúncio oficial verificável. O [[/pt-br/dear-passengers-demo/|status da demo de Dear Passengers]] acompanha essa diferença. Lista de desejos é a ação correta hoje; ela não baixa arquivos nem cobra valor.'
      ]},
    ],
    localContext: [
      '“Baixar” é mais natural no Brasil do que “descarregar”. Também aparecem “download PC”, “APK” e “torrent”. Reunimos essas formas numa página de segurança para não criar várias URLs atraindo a mesma intenção.',
      'A palavra “grátis” não pode ser deduzida de marcador popular ou ausência de preço. Até a Steam exibir modelo comercial, gratuito, pago e acesso antecipado são desconhecidos.',
      'A imagem desta página é editorial e não é captura de uma tela de download do jogo. Essa identificação impede que arte de segurança seja confundida com interface oficial.'
    ],
    faqs: [
      { question: 'Onde baixar Dear Passengers?', answer: 'Ainda não é possível; somente a página de lista de desejos está disponível na Steam.' },
      { question: 'Dear Passengers tem APK?', answer: 'Não. Android não foi anunciado e não existe APK oficial.' },
      { question: 'Existe torrent ou crack de Dear Passengers?', answer: 'Não existe versão oficial desse tipo; o jogo ainda não foi lançado.' },
      { question: 'Dear Passengers é grátis?', answer: 'O modelo comercial e o preço não foram anunciados.' },
      { question: 'Qual é o tamanho de Dear Passengers?', answer: 'O download final é desconhecido; 4 GB é o espaço mínimo listado, não tamanho confirmado.' },
      { question: 'Posso baixar a demo?', answer: 'Não agora. Uma demo pública é planejada, mas ainda não tem acesso.' },
    ], related: ['dear-passengers-demo', 'dear-passengers-requisitos', 'dear-passengers-data-de-lancamento', 'dear-passengers-noticias'],
  },
  {
    slug: 'dear-passengers-requisitos', englishPath: '/dear-passengers-system-requirements/', germanPath: '/de/dear-passengers-systemanforderungen/', arabicPath: '/ar/dear-passengers-system-requirements/', turkishPath: '/tr/dear-passengers-sistem-gereksinimleri/', chinesePath: '/zh-cn/dear-passengers-system-requirements/',
    keyword: 'Dear Passengers requisitos', title: 'Requisitos de Dear Passengers: Configuração Mínima para PC',
    description: 'Requisitos de Dear Passengers no PC: Windows 10, i5 2,5 GHz, 8 GB RAM, GTX 1060 ou RX 6600 XT, DirectX 12 e 4 GB, sem recomendados.',
    eyebrow: 'REQUISITOS PARA PC · VALORES OFICIAIS', h1: 'Quais são os requisitos de Dear Passengers no PC?',
    intro: 'Os requisitos de Dear Passengers já têm uma configuração mínima publicada na Steam. Recomendados, resolução, taxa de quadros e testes de notebook ainda não existem. Este guia mantém os valores como a loja os apresenta e evita transformar equivalência de hardware em benchmark não realizado.',
    answer: 'Os requisitos mínimos de Dear Passengers são Windows 10 de 64 bits, Intel Core i5 a 2,5 GHz ou equivalente, 8 GB de RAM, NVIDIA GeForce GTX 1060 ou AMD Radeon RX 6600 XT, DirectX 12 e 4 GB de espaço disponível. A FLEXUS ainda não publicou requisitos recomendados.',
    note: 'A tabela é copiada da fonte oficial com a data de verificação. “Mínimo” não garante qualidade específica, e 4 GB de armazenamento não é necessariamente o tamanho do download.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Imagem oficial para o guia brasileiro de requisitos de Dear Passengers',
    confirmed: ['Windows 10 de 64 bits', 'Core i5 a 2,5 GHz ou equivalente', '8 GB de RAM', 'GTX 1060 ou RX 6600 XT', 'DirectX 12 e 4 GB livres'], unknown: ['Configuração recomendada', 'Meta de resolução e FPS', 'Steam Deck', 'Notebook e gráficos integrados'],
    sections: [
      { id: 'tabela', kicker: 'CONFIGURAÇÃO MÍNIMA', heading: 'Tabela oficial de requisitos de Dear Passengers', paragraphs: [
        'A Steam lista sistema operacional Windows 10 de 64 bits; processador Intel Core i5 a 2,5 GHz ou equivalente; memória de 8 GB; placa de vídeo GeForce GTX 1060 ou Radeon RX 6600 XT; DirectX 12; e 4 GB de espaço disponível. Não há modelo específico de i5 nem detalhes de preset gráfico.',
        'A combinação GTX 1060 ou RX 6600 XT parece ampla porque as placas não têm desempenho idêntico em todos os jogos. Não corrigimos nem reinterpretamos a tabela: Dear Passengers está em desenvolvimento e a FLEXUS pode atualizá-la. O usuário deve tratar os valores como requisitos publicados, não como benchmark independente.'
      ]},
      { id: 'desempenho', kicker: 'O QUE NÃO ESTÁ NA TABELA', heading: 'Qual FPS e qualidade os requisitos de Dear Passengers entregam?', paragraphs: [
        'A loja não informa resolução, preset, taxa de quadros, versão do processador, VRAM, necessidade de SSD ou conexão de internet. Portanto, não é possível prometer 1080p a 60 FPS com a GTX 1060 nem dizer que a RX 6600 XT é recomendada. As duas aparecem na mesma linha mínima sem meta publicada.',
        'Notebook, GPU integrada e processadores abaixo de 2,5 GHz exigem teste real. Comparadores automáticos podem considerar apenas o nome do componente e ignorar geração, energia e refrigeração. Quando a demo for liberada, medições devem registrar versão, driver, cena, resolução e configuração.'
      ]},
      { id: 'plataformas', kicker: 'SISTEMA E COMPATIBILIDADE', heading: 'Dear Passengers roda em Mac, Linux ou Steam Deck?', paragraphs: [
        'Windows é o único sistema confirmado. A página não lista macOS ou SteamOS/Linux e não há anúncio de versão nativa. Compatibilidade por Proton não deve ser presumida antes de existir build pública. Da mesma forma, Dear Passengers ainda não tem classificação de compatibilidade com Steam Deck.',
        'Suporte a controle também não foi publicado. A presença de interface em seis idiomas não informa entrada por gamepad, teclado ou mouse. O [[/pt-br/dear-passengers-como-jogar/|guia de jogabilidade]] mantém controles e acessibilidade como desconhecidos até documentação ou teste oficial.'
      ]},
    ],
    localContext: [
      'No Brasil, “requisitos”, “requisitos mínimos”, “configuração” e “roda no meu PC” representam o mesmo funil. A URL usa “requisitos”, o termo oficial da Steam e a forma mais curta.',
      'Vírgula decimal é natural em “2,5 GHz”. Nomes de GPU, RAM e DirectX permanecem na nomenclatura técnica original para evitar ambiguidades.',
      'Algumas páginas locais acrescentam duração, engine e recomendados sem fonte. A tabela de Dear Passengers só inclui o que a Steam publicou e identifica todos os campos ausentes.'
    ],
    faqs: [
      { question: 'Quais são os requisitos mínimos de Dear Passengers?', answer: 'Windows 10 64 bits, i5 2,5 GHz, 8 GB RAM, GTX 1060 ou RX 6600 XT, DirectX 12 e 4 GB.' },
      { question: 'Quais são os requisitos recomendados?', answer: 'Ainda não foram publicados.' },
      { question: 'Dear Passengers roda em notebook?', answer: 'Não há teste oficial; depende do hardware real, energia e refrigeração.' },
      { question: 'Dear Passengers roda no Steam Deck?', answer: 'A compatibilidade com Steam Deck não foi avaliada oficialmente.' },
      { question: 'Dear Passengers precisa de SSD?', answer: 'A Steam não exige SSD na configuração atual.' },
      { question: 'Dear Passengers ocupa só 4 GB?', answer: 'A loja pede 4 GB livres; isso não confirma o tamanho final do download.' },
    ], related: ['dear-passengers-baixar', 'dear-passengers-como-jogar', 'dear-passengers-data-de-lancamento', 'dear-passengers-demo'],
  },
  {
    slug: 'dear-passengers-trailer', englishPath: '/dear-passengers-trailer/', germanPath: '/de/dear-passengers-trailer/', arabicPath: '/ar/dear-passengers-trailer/', turkishPath: '/tr/dear-passengers-fragman/',
    keyword: 'Dear Passengers trailer', title: 'Trailer de Dear Passengers: Cenas Confirmadas e Contexto',
    description: 'Trailer de Dear Passengers: análise do anúncio oficial e do teaser Another Friendslop Game, separando cenas, texto oficial, inferência e informação ausente.',
    eyebrow: 'TRAILER OFICIAL · ANÁLISE DE CENAS', h1: 'O que o trailer de Dear Passengers realmente confirma?',
    intro: 'O trailer de Dear Passengers apresenta cockpit, serviço de cabine, bagagem, clima e acidentes em cortes rápidos. Este guia diferencia descrição oficial, observação visual e interpretação. Também contextualiza o teaser “Another Friendslop Game” sem usar a controvérsia como prova de mecânica, data ou número de jogadores.',
    answer: 'O trailer de Dear Passengers confirma visualmente uma tripulação em primeira pessoa pilotando e trabalhando na cabine, com passageiros, cargas, objetos físicos, clima e emergências. O vídeo não confirma limite de jogadores, preço, data exata, consoles, VR, progressão ou controles. O teaser de 22 de julho também não trouxe esses dados.',
    note: 'Uma cena é registrada como observação, não como especificação técnica. Texto da Steam e anúncios da FLEXUS têm peso maior para plataforma, modos, idioma e lançamento.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Cena oficial usada na análise brasileira do trailer de Dear Passengers',
    confirmed: ['Cockpit e cabine em primeira pessoa', 'Passageiros e objetos reagindo à física', 'Serviço, carga e emergências', 'Dois vídeos oficiais publicados'], unknown: ['Limite de jogadores', 'Estrutura completa das missões', 'Controles e VR', 'Data, preço e consoles'],
    sections: [
      { id: 'anuncio', kicker: 'TRAILER DE ANÚNCIO', heading: 'Quais cenas aparecem no trailer de Dear Passengers?', paragraphs: [
        'O anúncio oficial mostra uma pessoa no cockpit e outras tarefas dentro da aeronave. Há atendimento, movimento de passageiros e bagagem, problemas estruturais e condições externas perigosas. Essas imagens são coerentes com a descrição da Steam: pilotar, trabalhar na cabine e tentar impedir que um problema vire desastre.',
        'Cortes de marketing não informam duração, ordem ou frequência. Um objeto, animal ou acidente visível pode ser evento raro, cena preparada ou conteúdo em desenvolvimento. Dear Passengers não deve ser descrito como campanha com sequência fixa apenas porque o trailer organiza imagens numa narrativa curta.'
      ]},
      { id: 'friendslop', kicker: 'TEASER DE 22 DE JULHO', heading: 'O que é o vídeo “Another Friendslop Game”?', paragraphs: [
        'A FLEXUS publicou um teaser oficial de 37 segundos chamado “Dear Passengers — Another Friendslop Game”. A descrição dizia que o jogo estava perto de dois milhões de listas de desejos na Steam. “Perto” não confirma que a marca foi atingida, e lista de desejos não é venda nem quantidade de jogadores ativos.',
        'O termo “friendslop” é usado de maneira autoconsciente para jogos sociais de caos e cooperação. Ele ajuda a entender o posicionamento do vídeo, não cria gênero técnico nem conjunto obrigatório de recursos. A reação política a nomes exibidos no trailer gerou discussão comunitária, mas não altera a ficha do produto.'
      ]},
      { id: 'nao-confirma', kicker: 'LIMITES DA EVIDÊNCIA', heading: 'O que o trailer de Dear Passengers não revela?', paragraphs: [
        'Não é possível contar personagens e concluir que Dear Passengers aceita quatro pessoas. Também não se confirma VR porque a câmera é em primeira pessoa, nem suporte a controle porque há movimento de personagem. Nenhum vídeo mostra menu final de matchmaking, acessibilidade, progressão, preço ou página de console.',
        'Para informação prática, o trailer deve ser cruzado com Steam e declarações diretas. O [[/pt-br/dear-passengers-recursos-confirmados/|inventário de recursos confirmados]] registra cada afirmação por nível de evidência. Quando surgir vídeo novo, ele só justifica atualização se acrescentar cena ou declaração material.'
      ]},
    ],
    localContext: [
      'No Brasil, “trailer”, “trailer oficial” e “gameplay” frequentemente se misturam. Um trailer com cenas de jogo pode mostrar jogabilidade, mas não equivale a sessão contínua ou teste independente.',
      'A comunidade também procura a controvérsia do trailer. O contexto cabe na análise de vídeo e notícias; uma página isolada ampliaria um episódio sem nova intenção durável.',
      'O título oficial em inglês é preservado. “Another Friendslop Game” pode ser explicado, mas uma tradução inventada não deve substituir o nome publicado pela FLEXUS.'
    ],
    faqs: [
      { question: 'Onde assistir ao trailer oficial de Dear Passengers?', answer: 'Nos canais oficiais da FLEXUS e no vídeo de anúncio vinculado pela página do jogo.' },
      { question: 'O trailer confirma quatro jogadores?', answer: 'Não. Personagens em cena não definem o limite da sala.' },
      { question: 'Dear Passengers terá VR?', answer: 'VR não foi anunciado; a câmera em primeira pessoa não é confirmação.' },
      { question: 'O teaser confirmou dois milhões de wishlists?', answer: 'Não. A descrição dizia que o jogo estava perto desse número.' },
      { question: 'O trailer mostra gameplay real?', answer: 'Mostra cenas de jogo publicadas oficialmente, mas editadas; não é uma partida contínua.' },
      { question: 'O trailer revelou a data?', answer: 'Não. A janela permanece 2026.' },
    ], related: ['dear-passengers-recursos-confirmados', 'dear-passengers-como-jogar', 'dear-passengers-noticias', 'dear-passengers-quantos-jogadores'],
  },
  {
    slug: 'dear-passengers-noticias', englishPath: '/dear-passengers-news/', germanPath: '/de/dear-passengers-news/', arabicPath: '/ar/dear-passengers-news/', turkishPath: '/tr/dear-passengers-haberleri/',
    keyword: 'Dear Passengers notícias', title: 'Dear Passengers Notícias: Wishlist, Trailer, Demo e Lançamento',
    description: 'Notícias de Dear Passengers em ordem cronológica: Steam, FLEXUS, trailer, listas de desejos, demo e lançamento, com fonte e nível de confirmação.',
    eyebrow: 'NOTÍCIAS VERIFICADAS · 28/07/2026', h1: 'Dear Passengers: notícias confirmadas e o que não mudou',
    intro: 'As notícias de Dear Passengers avançaram rápido desde o anúncio. Esta página mantém uma linha do tempo curta, prioriza Steam e FLEXUS e não transforma estimativa, postagem comunitária ou ranking em venda. O estado atual continua: lançamento em 2026, sem data exata, preço ou demo pública.',
    answer: 'A atualização mais recente verificada é a posição nº 8 de Dear Passengers na lista pública de jogos mais desejados da Steam em 28 de julho de 2026. Antes disso, a FLEXUS publicou o teaser de 22 de julho dizendo que o jogo estava perto de dois milhões de wishlists e anunciou 1,5 milhão em 19 de julho. Nenhum desses eventos revelou data exata ou preço.',
    note: 'Rankings são fotografias datadas; números de wishlist são declarações da desenvolvedora. Ambos são registrados com fonte e não são convertidos em vendas, receita ou usuários ativos.',
    heroImage: '/images/dear-passengers-1-5-million-wishlists.webp', heroAlt: 'Arte oficial do marco de 1,5 milhão usada nas notícias brasileiras de Dear Passengers',
    confirmed: ['Nº 8 na lista pública de wishlists em 28/07', 'Post oficial de 1,5 milhão em 19/07', 'Teaser oficial publicado em 22/07', 'Janela de lançamento 2026'], unknown: ['Total atual auditado de wishlists', 'Data e preço', 'Data da demo pública', 'Limite de jogadores e consoles'],
    sections: [
      { id: 'linha-tempo', kicker: 'LINHA DO TEMPO', heading: 'Quais são as últimas notícias de Dear Passengers?', paragraphs: [
        'Em 28 de julho, a listagem pública e sem personalização da Steam colocou Dear Passengers na oitava posição entre os jogos mais desejados. Em 24 de julho, o mesmo acompanhamento mostrava a nona posição. Essa mudança confirma ranking público naquelas datas, não quantidade absoluta de contas nem previsão de vendas.',
        'Em 22 de julho, a FLEXUS publicou “Another Friendslop Game”; a descrição afirmou que Dear Passengers se aproximava de dois milhões de wishlists. Em 19 de julho, um anúncio oficial celebrou 1,5 milhão. A formulação e a data importam: “perto de dois milhões” não deve ser reescrito como “passou de dois milhões”.'
      ]},
      { id: 'demo-produto', kicker: 'DESENVOLVIMENTO', heading: 'As notícias mudaram data, demo ou plataformas?', paragraphs: [
        'Não mudaram a janela de lançamento. A Steam continua mostrando 2026 para Windows, com um jogador e coop on-line. O preço, mês, dia, console, crossplay e limite da sala seguem ausentes. Dear Passengers também permanece indisponível em Português (Brasil) na tabela de idiomas.',
        'A declaração sobre Gamescom e uma demo pública posterior continua sendo plano atribuído à FLEXUS. Nenhum botão de demo ou Playtest apareceu na página do produto. Notícias sobre preparação de build não devem ser publicadas como “demo liberada”. O [[/pt-br/dear-passengers-demo/|rastreador de demo]] mantém essa distinção.'
      ]},
      { id: 'como-filtrar', kicker: 'FILTRO EDITORIAL', heading: 'Como avaliamos uma notícia sobre Dear Passengers?', paragraphs: [
        'Primeiro verificamos se a afirmação está na Steam, canal oficial da FLEXUS ou entrevista direta identificada. Depois registramos data e palavras exatas. Uma matéria brasileira é útil para descobrir interesse e vocabulário, mas não substitui a fonte quando anuncia especificação, número ou calendário.',
        'A página brasileira Tera Time, por exemplo, apresenta 31 de dezembro, 35 horas de história, 150 horas para completar e percentuais de conclusão para Dear Passengers antes do lançamento. Esses campos não têm suporte na Steam e são marcados como não confirmados, não reproduzidos como ficha técnica.'
      ]},
    ],
    localContext: [
      '“Notícias” e “novidades” são naturais no Brasil. Usamos “notícias” para a rota e “novidades” em chamadas, mantendo um único hub cronológico para não abrir uma página fina a cada postagem.',
      'Wishlists pode aparecer como “listas de desejos”. O número é sempre atribuído à FLEXUS, enquanto a posição é vinculada à lista pública da Steam.',
      'Datas seguem 28/07/2026 no contexto brasileiro. Títulos só recebem “hoje” quando a página é realmente revisada naquele dia, evitando frescor artificial.'
    ],
    faqs: [
      { question: 'Qual é a última notícia de Dear Passengers?', answer: 'Em 28/07/2026, o jogo aparecia em nº 8 na lista pública de mais desejados da Steam.' },
      { question: 'Dear Passengers chegou a dois milhões de wishlists?', answer: 'A FLEXUS disse que estava perto; não confirmou ter ultrapassado a marca.' },
      { question: 'A data de lançamento mudou?', answer: 'Não. A informação oficial continua apenas 2026.' },
      { question: 'A demo foi lançada?', answer: 'Não; existe plano, mas nenhum acesso público.' },
      { question: 'Dear Passengers tem data de 31 de dezembro?', answer: 'Não oficialmente. É um placeholder publicado por terceiros.' },
      { question: 'Quantas pessoas jogam Dear Passengers?', answer: 'O limite máximo ainda não foi divulgado.' },
    ], related: ['dear-passengers-data-de-lancamento', 'dear-passengers-demo', 'dear-passengers-trailer', 'dear-passengers-desenvolvedora-flexus'],
  },
  {
    slug: 'dear-passengers-recursos-confirmados', englishPath: '/dear-passengers-confirmed-features/', germanPath: '/de/dear-passengers-bestaetigte-features/', arabicPath: '/ar/dear-passengers-confirmed-features/', turkishPath: '/tr/dear-passengers-ozellikleri/',
    keyword: 'Dear Passengers recursos confirmados', title: 'Dear Passengers: Recursos Confirmados e Sistemas Desconhecidos',
    description: 'Recursos confirmados de Dear Passengers: coop on-line, solo, cockpit, cabine, física, clima e risco, sem transformar trailer em promessa.',
    eyebrow: 'INVENTÁRIO DE EVIDÊNCIAS', h1: 'Quais recursos de Dear Passengers estão realmente confirmados?',
    intro: 'Os recursos confirmados de Dear Passengers vêm da ficha da Steam, da descrição do produto e de vídeos oficiais. Esta página funciona como inventário: informa fonte e limite de cada item. Sistemas populares em páginas de fãs — classes, centenas de objetos, voz integrada ou carreira — ficam fora quando não há declaração oficial.',
    answer: 'Dear Passengers confirma um jogador, cooperativo on-line, pilotagem, trabalho na cabine, escolha de passageiros e carga, física aplicada a pessoas e objetos, clima dinâmico, turbulência, bolsas de ar e decisões de risco por maior pagamento. Progressão, classes fixas, matchmaking, voz, controles, número máximo e conteúdo final não foram detalhados.',
    note: '“Confirmado” exige texto oficial explícito. “Observado” descreve apenas uma cena. “Planejado” pode mudar. “Desconhecido” é a resposta correta quando a FLEXUS ainda não publicou o detalhe.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Imagem oficial para o inventário brasileiro de recursos de Dear Passengers',
    confirmed: ['Um jogador e coop on-line', 'Pilotagem e trabalho de cabine', 'Passageiros, carga e objetos físicos', 'Clima, turbulência e bolsas de ar', 'Risco por maior pagamento'], unknown: ['Progressão e duração', 'Classes e habilidades', 'Matchmaking e voz', 'Controles, acessibilidade e limite'],
    sections: [
      { id: 'modos-tarefas', kicker: 'MODOS E TAREFAS', heading: 'Quais modos e funções Dear Passengers confirma?', paragraphs: [
        'A Steam marca Dear Passengers como jogo para uma pessoa e cooperativo on-line. A descrição coloca um integrante no cockpit e outros trabalhando na cabine. Pilotar, servir passageiros, controlar problemas e proteger carga fazem parte do conceito oficial. Isso não determina quantas pessoas entram nem obriga cada jogador a uma classe permanente.',
        'A equipe escolhe passageiros e cargas antes do voo, assumindo mais problemas em troca de maior pagamento. A frase confirma uma relação de risco e recompensa. Ela não confirma loja, moeda, árvore de melhorias, empresa administrável ou campanha. O destino do dinheiro permanece desconhecido.'
      ]},
      { id: 'fisica-clima', kicker: 'FÍSICA E AMBIENTE', heading: 'Como física e clima entram em Dear Passengers?', paragraphs: [
        'Passageiros, bagagem e objetos soltos reagem à física, e as ações do piloto podem afetar a cabine. A descrição também lista clima dinâmico, turbulência e bolsas de ar. Esses elementos sustentam a proposta de caos compartilhado, mas não fornecem modelo de dano, intensidade, geração procedural ou quantidade de eventos.',
        'Vídeos mostram emergências e situações incomuns. Uma cena observada comprova que aquele material foi publicado, não que todo item terá sistema próprio ou aparecerá na versão final. Dear Passengers está em desenvolvimento; conteúdo, equilíbrio e apresentação podem mudar antes do lançamento.'
      ]},
      { id: 'nao-anunciado', kicker: 'NÃO ANUNCIADO', heading: 'Quais recursos de Dear Passengers ainda são incertos?', paragraphs: [
        'Limite de jogadores, matchmaking, chat de voz, crossplay, coop local, tela dividida, controles, Steam Deck, acessibilidade, save e duração das missões não foram explicados. Também faltam requisitos recomendados, preço, data exata e plataformas além de Windows.',
        'Páginas de fãs podem criar funções como marechal, intendente ou especialista em crocodilos. Dear Passengers mostra tarefas, mas não publica esse sistema de classes. O [[/pt-br/dear-passengers-funcoes/|guia de funções]] descreve cockpit e cabine sem transformar ações em profissões jogáveis confirmadas.'
      ]},
    ],
    localContext: [
      'Brasileiros buscam “recursos”, “como é o jogo”, “o que dá para fazer” e “gameplay”. A página de recursos funciona como ficha verificável, enquanto “como jogar” explica o ciclo sem disputar o mesmo título.',
      'A interface da Steam está traduzida, mas o produto não está em Português (Brasil). Essa diferença é um fato de acessibilidade, não um recurso de gameplay.',
      'Listas são fáceis de copiar e inflar. Cada item desta página precisa permanecer rastreável a texto ou material oficial e ser removido se a fonte mudar.'
    ],
    faqs: [
      { question: 'Quais recursos Dear Passengers confirma?', answer: 'Solo, coop on-line, pilotagem, cabine, passageiros, carga, física, clima e risco por pagamento.' },
      { question: 'Dear Passengers tem classes?', answer: 'Classes fixas não foram anunciadas.' },
      { question: 'Dear Passengers tem física?', answer: 'Sim, passageiros, bagagem e objetos de cabine são descritos como físicos.' },
      { question: 'Dear Passengers tem clima dinâmico?', answer: 'Sim, clima, turbulência e bolsas de ar estão na descrição oficial.' },
      { question: 'Dear Passengers tem chat de voz?', answer: 'Chat integrado não foi confirmado.' },
      { question: 'Dear Passengers terá progressão?', answer: 'Nenhum sistema de progressão foi detalhado.' },
    ], related: ['dear-passengers-como-jogar', 'dear-passengers-funcoes', 'dear-passengers-quantos-jogadores', 'dear-passengers-trailer'],
  },
  {
    slug: 'dear-passengers-funcoes', englishPath: '/dear-passengers-roles/', germanPath: '/de/dear-passengers-rollen/', arabicPath: '/ar/dear-passengers-roles/', turkishPath: '/tr/dear-passengers-rolleri/',
    keyword: 'Dear Passengers funções', title: 'Funções em Dear Passengers: Piloto e Equipe de Cabine',
    description: 'Funções em Dear Passengers: o que piloto e equipe de cabine fazem, tarefas confirmadas, coordenação e classes que ainda não foram anunciadas.',
    eyebrow: 'TRIPULAÇÃO · TAREFAS SEM CLASSES INVENTADAS', h1: 'Quais são as funções da tripulação em Dear Passengers?',
    intro: 'As funções em Dear Passengers se dividem visualmente entre cockpit e cabine, mas a FLEXUS não anunciou classes fixas, seleção de personagem ou árvore de habilidade por profissão. Este guia descreve responsabilidades confirmadas e evita nomes de função criados por wikis concorrentes.',
    answer: 'Dear Passengers confirma que uma pessoa pode pilotar enquanto outras trabalham dentro da cabine, atendem passageiros, protegem carga e reagem a problemas. Não está confirmado se “piloto” e “comissário” são classes permanentes, se todos trocam de posto ou se existem cargos adicionais com habilidades próprias.',
    note: 'Usamos “função” como tarefa no voo, não como classe técnica. Um cargo só será listado como classe quando a interface ou documentação oficial demonstrar seleção, regras e habilidades.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Tripulação oficial para o guia brasileiro de funções em Dear Passengers',
    confirmed: ['Pilotar a aeronave', 'Trabalhar dentro da cabine', 'Servir e controlar passageiros', 'Proteger carga e reagir a incidentes'], unknown: ['Classes fixas', 'Troca de função', 'Habilidades e progressão', 'Composição obrigatória da equipe'],
    sections: [
      { id: 'piloto', kicker: 'COCKPIT', heading: 'Qual é a função do piloto em Dear Passengers?', paragraphs: [
        'A função mais clara no cockpit é pilotar. Clima, turbulência e bolsas de ar podem tornar a viagem instável, e manobras afetam pessoas e objetos na cabine. Dear Passengers conecta a condução ao trabalho do restante da equipe. Ainda não há detalhes sobre instrumentos, procedimentos, combustível, navegação ou nível de realismo.',
        'O vídeo mostra câmera em primeira pessoa, mas não informa dispositivo de entrada. Não sabemos se há suporte a controle, manche, teclado e mouse customizável ou assistência. A função de piloto também não prova que uma pessoa ficará presa ao cockpit durante toda a missão.'
      ]},
      { id: 'cabine', kicker: 'EQUIPE DE CABINE', heading: 'O que a equipe de cabine faz em Dear Passengers?', paragraphs: [
        'A cabine envolve serviço de comida e bebida, controle de passageiros, proteção de bagagem e resposta a incidentes. Como passageiros e objetos reagem à física, uma tarefa simples pode mudar quando o avião sofre movimento brusco. Essa descrição confirma responsabilidades, não uma classe chamada “comissário” com atributos definidos.',
        'Não foram publicados inventário, barra de humor, receitas, primeiros socorros detalhados ou especializações. Cenas podem mostrar ferramentas e ações diferentes, porém cada uma precisa de contexto antes de ser tratada como sistema. A equipe pode improvisar, mas a FLEXUS ainda não explicou regras de troca.'
      ]},
      { id: 'coordenacao', kicker: 'COORDENAÇÃO', heading: 'Como as funções de Dear Passengers se conectam?', paragraphs: [
        'O piloto influencia a cabine e a cabine precisa informar problemas que podem comprometer o voo. Essa dependência é o núcleo cooperativo mais claro. Dear Passengers não confirmou chat de voz próprio, rádio, sistema de marcação ou comandos rápidos; grupos podem depender das ferramentas da plataforma ou de soluções futuras.',
        'Também não existe composição ideal oficial porque o número máximo é desconhecido. Recomendar “um piloto, dois comissários e um engenheiro” seria inventar limite e classe. O [[/pt-br/dear-passengers-quantos-jogadores/|guia de número de jogadores]] mantém a capacidade aberta até uma especificação verificável.'
      ]},
    ],
    localContext: [
      '“Funções”, “papéis” e “classes” não são sinônimos perfeitos. No Brasil, função descreve o que alguém faz; classe sugere sistema formal. Escolhemos “funções” porque é compatível com a evidência atual.',
      '“Comissário de bordo” é uma tradução natural para trabalho de cabine, mas a Steam em inglês usa linguagem ampla de tripulação. O guia evita atribuir profissão regulamentada a cada personagem.',
      'Wikis concorrentes publicaram cargos e especialistas sem fonte. A versão brasileira oferece valor justamente ao separar tarefa visível de classe inexistente.'
    ],
    faqs: [
      { question: 'Quais são as funções em Dear Passengers?', answer: 'Pilotar, trabalhar na cabine, servir passageiros, proteger carga e responder a problemas.' },
      { question: 'Dear Passengers tem classes?', answer: 'Nenhum sistema de classes fixas foi anunciado.' },
      { question: 'Dá para trocar de função?', answer: 'A FLEXUS ainda não explicou troca de posto.' },
      { question: 'Existe engenheiro em Dear Passengers?', answer: 'Manutenção pode aparecer em cenas, mas uma classe de engenheiro não foi confirmada.' },
      { question: 'A equipe precisa de piloto?', answer: 'Pilotar é uma tarefa central, porém as regras de composição não foram divulgadas.' },
      { question: 'Dear Passengers tem chat de voz?', answer: 'O chat integrado não foi confirmado.' },
    ], related: ['dear-passengers-como-jogar', 'dear-passengers-recursos-confirmados', 'dear-passengers-quantos-jogadores', 'dear-passengers-trailer'],
  },
  {
    slug: 'dear-passengers-desenvolvedora-flexus', englishPath: '/dear-passengers-developer-flexus/', germanPath: '/de/dear-passengers-entwickler-flexus/', arabicPath: '/ar/dear-passengers-developer/', turkishPath: '/tr/dear-passengers-gelistiricisi/',
    keyword: 'Dear Passengers desenvolvedora', title: 'Quem Desenvolve Dear Passengers? Perfil Verificado da FLEXUS',
    description: 'Desenvolvedora de Dear Passengers: o papel da FLEXUS, fontes oficiais, planos de demo, números de wishlist e informações ainda desconhecidas.',
    eyebrow: 'DESENVOLVEDORA E DISTRIBUIDORA', h1: 'Quem é a desenvolvedora de Dear Passengers?',
    intro: 'A desenvolvedora de Dear Passengers é a FLEXUS, que também aparece como distribuidora na Steam. Este perfil reúne apenas identidade vinculada ao produto, declarações diretas e anúncios datados. Domínios de fãs, bancos automáticos e alegações comunitárias não são apresentados como fala do estúdio.',
    answer: 'A FLEXUS desenvolve e distribui Dear Passengers. A empresa lista o jogo para Windows em 2026, publicou trailers e marcos de wishlist e declarou que prepara uma versão para Gamescom seguida, em princípio, por uma demo pública. Engine, orçamento, equipe final e parceiros de console não foram divulgados.',
    note: 'Identidade e produto são verificados na Steam. Planos vêm de entrevista atribuída. Números de wishlist são declarações da desenvolvedora, não auditoria independente de vendas ou jogadores.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Imagem oficial para o perfil brasileiro da desenvolvedora FLEXUS',
    confirmed: ['FLEXUS como desenvolvedora', 'FLEXUS como distribuidora', 'Windows e janela 2026', 'Plano declarado de demo e Gamescom'], unknown: ['Engine do jogo', 'Orçamento e equipe final', 'Parceiros de console', 'Data exata e modelo comercial'],
    sections: [
      { id: 'identidade', kicker: 'IDENTIDADE OFICIAL', heading: 'Qual empresa faz Dear Passengers?', paragraphs: [
        'Os campos de desenvolvedora e distribuidora da página oficial de Dear Passengers mostram FLEXUS. Valve opera a Steam, mas não desenvolve o jogo. Sites com nomes parecidos, wikis e guias independentes não representam o estúdio só porque usam a marca ou capturas oficiais.',
        'Uma conta social precisa estar ligada pela Steam, site do estúdio ou referência verificável para ser tratada como oficial. Ao citar uma pessoa da FLEXUS, mantemos nome, publicação, data e condição da fala. Uma entrevista sobre intenção futura não equivale a recurso já entregue.'
      ]},
      { id: 'declaracoes', kicker: 'O QUE A FLEXUS DISSE', heading: 'Quais planos a desenvolvedora anunciou para Dear Passengers?', paragraphs: [
        'A descrição do produto apresenta uma tripulação da pior companhia aérea, dividida entre cockpit e cabine. Em entrevista direta, um cofundador falou sobre preparar uma build jogável para a Gamescom e liberar uma demo pública posteriormente. Até agora, a página da Steam não oferece essa demo.',
        'A FLEXUS também publicou marcos de wishlist: 1,5 milhão em anúncio de 19 de julho e, no teaser de 22 de julho, a afirmação de que Dear Passengers estava perto de dois milhões. Wishlist mede interesse declarado; não deve ser chamada de venda, download ou jogador ativo.'
      ]},
      { id: 'limites', kicker: 'INFORMAÇÕES AUSENTES', heading: 'O que ainda não sabemos sobre a produção de Dear Passengers?', paragraphs: [
        'A engine, o orçamento, a composição final da equipe, o uso de fornecedores e o cronograma detalhado não estão publicados em fonte primária ligada ao produto. Bancos automáticos podem preencher “engine proprietária”, duração e estatísticas sem evidência. Dear Passengers não tem dados públicos para validar esses campos.',
        'A experiência anterior de uma empresa em jogos móveis não confirma Android para este produto. Da mesma forma, uma vaga de emprego não prova automaticamente tecnologia usada em Dear Passengers. O [[/pt-br/dear-passengers-noticias/|hub de notícias]] atualiza o perfil quando uma declaração oficial muda o produto.'
      ]},
    ],
    localContext: [
      'No Brasil, “desenvolvedora”, “quem fez”, “empresa do jogo” e “produtora” aparecem na mesma intenção. Steam usa “Desenvolvedor” e “Distribuidora”; explicamos os dois papéis mesmo quando a marca é igual.',
      'FLEXUS não deve ser traduzida nem confundida com Valve. O nome de marca permanece idêntico em português e nos dados estruturados.',
      'Números de wishlist são sempre acompanhados de “segundo a FLEXUS”. Essa atribuição evita que uma declaração de marketing pareça medição independente.'
    ],
    faqs: [
      { question: 'Quem desenvolve Dear Passengers?', answer: 'A FLEXUS, que também é listada como distribuidora.' },
      { question: 'Valve desenvolve Dear Passengers?', answer: 'Não. Valve opera a Steam; a desenvolvedora é a FLEXUS.' },
      { question: 'Qual engine Dear Passengers usa?', answer: 'A engine não foi anunciada oficialmente.' },
      { question: 'A FLEXUS confirmou uma demo?', answer: 'Confirmou o plano de uma build de Gamescom e uma demo pública posterior, sem data.' },
      { question: 'Dear Passengers tem dois milhões de jogadores?', answer: 'Não. A FLEXUS falou em wishlists próximas de dois milhões, não jogadores.' },
      { question: 'Dear Passengers terá versão mobile?', answer: 'Não foi anunciada; Windows é a única plataforma confirmada.' },
    ], related: ['dear-passengers-noticias', 'dear-passengers-demo', 'dear-passengers-data-de-lancamento', 'dear-passengers-recursos-confirmados'],
  },
  {
    slug: 'jogos-parecidos-com-dear-passengers', englishPath: '/games-like-dear-passengers/', germanPath: '/de/spiele-wie-dear-passengers/', arabicPath: '/ar/games-like-dear-passengers/', turkishPath: '/tr/dear-passengers-benzeri-oyunlar/',
    keyword: 'jogos parecidos com Dear Passengers', title: 'Jogos Parecidos com Dear Passengers: Coop, Física e Caos',
    description: 'Jogos parecidos com Dear Passengers por mecânica: R.E.P.O., Lethal Company, Overcooked! 2 e Sky Team, com semelhanças e diferenças claras.',
    eyebrow: 'COMPARAÇÃO POR MECÂNICA', h1: 'Quais jogos são parecidos com Dear Passengers?',
    intro: 'Quem procura jogos parecidos com Dear Passengers pode querer cooperação, física caótica, tarefas simultâneas ou tema de voo. A lista não chama qualquer jogo popular de alternativa: cada recomendação está ligada a um recurso confirmado e inclui a diferença que impede comparação enganosa.',
    answer: 'R.E.P.O. se aproxima pela física e coordenação; Lethal Company, por risco e comunicação; Overcooked! 2, pela divisão de serviço sob pressão; e Sky Team, pela cooperação no cockpit. Nenhum reproduz exatamente a combinação ainda não lançada de pilotagem, cabine, passageiros e carga de Dear Passengers.',
    note: 'Dear Passengers ainda não foi testado publicamente. A comparação usa apenas recursos oficiais e não afirma experiência prática, qualidade ou equivalência total.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Cabine oficial no guia brasileiro de jogos parecidos com Dear Passengers',
    confirmed: ['Coop on-line', 'Física de passageiros e objetos', 'Funções simultâneas', 'Risco por maior recompensa'], unknown: ['Ritmo final das partidas', 'Progressão e repetição', 'Limite da equipe', 'Preço e avaliação pública'],
    sections: [
      { id: 'criterios', kicker: 'CRITÉRIOS', heading: 'O que torna um jogo parecido com Dear Passengers?', paragraphs: [
        'Usamos quatro eixos confirmados: coordenação on-line, objetos físicos, responsabilidades em áreas diferentes e escolha de risco por pagamento. Ter avião não basta; ser coop também não. Dear Passengers combina cockpit e cabine, então uma recomendação pode se aproximar de uma parte e divergir nas outras.',
        'Como Dear Passengers ainda não tem demo pública, não podemos comparar duração, dificuldade, progressão ou sensação dos controles. A lista descreve proximidade de conceito. Quando houver versão jogável, o método deverá registrar o que foi realmente testado e atualizar diferenças.'
      ]},
      { id: 'fisica-risco', kicker: 'FÍSICA E RISCO', heading: 'R.E.P.O. e Lethal Company lembram Dear Passengers?', paragraphs: [
        'R.E.P.O. é relevante por manipulação física e erros coletivos que mudam uma tarefa simples. Lethal Company se aproxima por metas de grupo, risco e necessidade de comunicação. Os dois têm atmosfera de horror e objetivos próprios; nenhum oferece serviço de passageiros e pilotagem de uma companhia aérea.',
        'A comparação com “friendslop” explica o apelo social, mas não deve apagar gênero e tom. Dear Passengers é apresentado como ação, aventura, indie e comédia cooperativa. Popularidade de outro jogo não prova que sistemas, quantidade de pessoas ou progressão serão iguais.'
      ]},
      { id: 'servico-voo', kicker: 'SERVIÇO E COCKPIT', heading: 'Overcooked! 2 e Sky Team são boas alternativas?', paragraphs: [
        'Overcooked! 2 aproxima a divisão de tarefas de serviço em espaço apertado, sob pressão e com consequências coletivas. Não tem voo ou física de passageiros. É uma referência útil para grupos interessados no ritmo de atendimento e coordenação da cabine.',
        'Sky Team é um jogo de tabuleiro para duas pessoas focado em comunicação no cockpit. Ele não é videogame em tempo real, mas ajuda a comparar decisões compartilhadas de voo. Para física espontânea, R.E.P.O. é mais próximo; para serviço, Overcooked! 2. Verifique preço, idioma e plataforma nas lojas oficiais de cada produto.'
      ]},
    ],
    localContext: [
      'No Brasil, “jogos parecidos”, “jogos tipo” e “alternativas” expressam descoberta. “Jogos parecidos com Dear Passengers” é a consulta mais clara; “alternativa” pode sugerir substituto completo que ainda não podemos provar.',
      'Preço brasileiro e suporte pt-BR são importantes, mas mudam. Em vez de copiar promoções, o guia direciona às lojas oficiais e mantém a comparação em mecânicas duráveis.',
      'Não usamos experiência em primeira pessoa com Dear Passengers porque não existe build pública. Essa transparência evita análise falsa de um produto não lançado.'
    ],
    faqs: [
      { question: 'Quais jogos são parecidos com Dear Passengers?', answer: 'R.E.P.O., Lethal Company, Overcooked! 2 e Sky Team se aproximam por aspectos diferentes.' },
      { question: 'Dear Passengers é como Lethal Company?', answer: 'Há coop, risco e comunicação, mas tema, tarefas e tom são diferentes.' },
      { question: 'Dear Passengers é jogo de terror?', answer: 'Não foi classificado oficialmente como terror; comédia e caos cooperativo dominam a apresentação.' },
      { question: 'Existe outro jogo coop de avião?', answer: 'Sky Team aproxima comunicação de cockpit, mas é jogo de tabuleiro e não replica a cabine física.' },
      { question: 'O que jogar enquanto Dear Passengers não lança?', answer: 'Escolha R.E.P.O. para física, Lethal Company para risco ou Overcooked! 2 para serviço cooperativo.' },
      { question: 'Esses jogos têm português?', answer: 'O suporte varia; confira a tabela de idioma na loja oficial de cada jogo.' },
    ], related: ['dear-passengers-como-jogar', 'dear-passengers-recursos-confirmados', 'dear-passengers-quantos-jogadores', 'dear-passengers-data-de-lancamento'],
  },
];

export const portugueseHomeGuide: PortugueseGuide = {
  slug: '', englishPath: '/', germanPath: '/de/', arabicPath: '/ar/', turkishPath: '/tr/', chinesePath: '/zh-cn/',
  keyword: 'jogo Dear Passengers', title: 'Jogo Dear Passengers: Guia em Português do Brasil',
  description: 'Guia brasileiro do jogo Dear Passengers: como jogar, data de lançamento, demo, requisitos, jogadores, download, trailer e notícias verificadas.',
  eyebrow: 'GUIA BRASILEIRO · VERIFICADO EM 29/07/2026', h1: 'Jogo Dear Passengers: informações verificadas para o Brasil',
  intro: 'O jogo Dear Passengers coloca uma tripulação na pior companhia aérea do mundo: alguém pilota enquanto outros cuidam de cabine, passageiros e cargas. Esta versão não é tradução automática do inglês. A arquitetura responde às buscas brasileiras por “data de lançamento”, “requisitos”, “preço”, “baixar”, “como jogar” e “quantos jogadores”.',
  answer: 'O jogo Dear Passengers está previsto para 2026 no Windows PC pela Steam. Um jogador, coop on-line, pilotagem, trabalho de cabine, passageiros e objetos físicos e clima dinâmico estão confirmados. Português (Brasil) está indisponível no produto. Data exata, preço, máximo de jogadores, consoles e acesso à demo pública ainda são desconhecidos.',
  note: 'Este guia brasileiro prioriza Steam, vídeos oficiais da FLEXUS e entrevistas diretas. Matéria local ajuda a identificar vocabulário e dúvidas, mas não pode criar data, duração, número de jogadores ou suporte de idioma.',
  heroImage: '/images/hero-bg.webp', heroAlt: 'Imagem oficial da cabine no guia brasileiro do jogo Dear Passengers',
  confirmed: ['Lançamento em 2026 para Windows', 'Um jogador e coop on-line', 'Cockpit, cabine, passageiros e cargas', 'Requisitos mínimos publicados', 'Interface pt-BR indisponível'],
  unknown: ['Data e preço no Brasil', 'Número máximo de jogadores', 'Consoles e crossplay', 'Data da demo pública', 'Requisitos recomendados'],
  sections: [
    { id: 'o-que-e', kicker: 'RESPOSTA RÁPIDA', heading: 'O que é o jogo Dear Passengers?', paragraphs: [
      'Dear Passengers é um jogo de ação, aventura e cooperação desenvolvido e distribuído pela FLEXUS. A equipe precisa levar passageiros e carga ao destino enquanto uma aeronave pouco confiável cria problemas. Uma pessoa pilota; outras podem servir, controlar a cabine e lidar com incidentes antes que se acumulem.',
      'A Steam confirma um jogador e cooperativo on-line. Passageiros, bagagem e objetos soltos reagem à física, e clima, turbulência e bolsas de ar alteram o voo. A FLEXUS ainda não publicou missões, progressão, controles, capacidade de lobby ou duração. O guia descreve a ideia sem fingir teste de uma versão que não está pública.'
    ]},
    { id: 'buscas-brasil', kicker: 'DEMANDA BRASILEIRA', heading: 'O que brasileiros procuram sobre Dear Passengers?', paragraphs: [
      'Nos 30 dias encerrados em 27 de julho, o site recebeu cerca de 2.232 impressões e 74 cliques do Brasil. Consultas locais incluíram “Dear Passengers data” com 28 impressões, “lançamento” com 25, “requisitos” com 20, “data de lançamento” com 16, além de preço, valor e baixar. São intenções separadas, não variações para uma única página traduzida.',
      'Por isso o jogo Dear Passengers recebe um conjunto completo de rotas brasileiras. Lançamento trata calendário, preço e plataforma; requisitos preserva a tabela; baixar responde com segurança; demo acompanha acesso; quantos jogadores evita o número quatro sem fonte. Links contextuais conectam as respostas sem criar páginas para toda palavra isolada.'
    ]},
    { id: 'estado', kicker: 'ESTADO DO PRODUTO', heading: 'Qual é a situação de lançamento, demo e idioma?', paragraphs: [
      'Dear Passengers permanece em pré-lançamento, com janela de 2026 e Windows como única plataforma confirmada. Não há preço em reais, dia, pré-venda ou download. A FLEXUS falou em build para Gamescom e demo pública posterior, mas a Steam ainda não oferece demonstração nem Playtest.',
      'A loja pode ser navegada em português brasileiro, porém a tabela do jogo marca Português (Brasil) como indisponível. Isso significa que este site explica o produto em pt-BR, não que Dear Passengers tenha menus, voz ou legenda em português. O [[/pt-br/dear-passengers-data-de-lancamento/|guia de lançamento]] mantém essa diferença visível.'
    ]},
    { id: 'fontes', kicker: 'FONTES E CORREÇÕES', heading: 'Como o guia brasileiro verifica Dear Passengers?', paragraphs: [
      'Steam é a fonte principal para plataforma, modos, idioma e hardware. Vídeos oficiais comprovam cenas, não especificações. Entrevistas diretas dão contexto para planos de demo. Informação sensível ao tempo recebe data; quando um fato não foi anunciado, a resposta é “desconhecido”.',
      'O mercado brasileiro já contém uma página que atribui a Dear Passengers 31 de dezembro, 35 horas de história, mais de 150 horas para completar e porcentagem de conclusão antes do lançamento. Esses campos não aparecem em fonte oficial. Nosso conteúdo registra o erro como razão editorial, sem copiar números falsos para gerar tráfego.'
    ]},
  ],
  localContext: [
    'A expressão principal é “jogo Dear Passengers”. O nome próprio permanece em inglês; “jogo” elimina a ambiguidade com a saudação comum “dear passengers” sem criar uma tradução artificial da marca.',
    'O português brasileiro usa “baixar”, “data de lançamento”, “requisitos”, “um jogador” e “coop on-line”. Evitamos “descarregar” e construções europeias que não correspondem às buscas observadas no Brasil.',
    'Datas seguem dia/mês/ano e preços futuros só serão exibidos em reais quando a loja publicar valor regional. CTAs dizem “Adicionar à lista de desejos”, a única ação disponível agora, em vez de “comprar” ou “baixar”.'
  ],
  faqs: [
    { question: 'Quando lança o jogo Dear Passengers?', answer: 'Em 2026 para Windows PC; mês e dia não foram anunciados.' },
    { question: 'Dear Passengers está disponível em português?', answer: 'Não. A Steam marca Português (Brasil) como indisponível no produto.' },
    { question: 'Quantos jogadores podem jogar Dear Passengers?', answer: 'O máximo ainda é desconhecido; solo e coop on-line estão confirmados.' },
    { question: 'Dá para baixar Dear Passengers?', answer: 'Ainda não. Hoje só é possível adicionar o jogo à lista de desejos.' },
    { question: 'Dear Passengers tem demo?', answer: 'Uma demo pública é planejada, mas não existe download ou data agora.' },
    { question: 'Quais são os requisitos mínimos?', answer: 'Windows 10 64 bits, i5 2,5 GHz, 8 GB RAM, GTX 1060 ou RX 6600 XT, DirectX 12 e 4 GB.' },
  ], related: ['dear-passengers-como-jogar', 'dear-passengers-data-de-lancamento', 'dear-passengers-quantos-jogadores', 'dear-passengers-requisitos'],
};

export const portugueseGuideBySlug = new Map(portugueseGuides.map((guide) => [guide.slug, guide]));
export const portugueseGuideByEnglishPath = new Map(portugueseGuides.map((guide) => [guide.englishPath, guide]));
