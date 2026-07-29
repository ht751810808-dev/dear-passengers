import Image from 'next/image';
import Link from 'next/link';
import type { PortugueseGuide } from '@/app/pt-br/portuguese-content';
import EditorialNote from '@/components/EditorialNote';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/?l=brazilian';
const FLEXUS_INTERVIEW = 'https://gamedev.dou.ua/articles/dear-passengers-interview/';

const labels: Record<string, string> = {
  'dear-passengers-como-jogar': 'Como jogar',
  'dear-passengers-quantos-jogadores': 'Quantos jogadores?',
  'dear-passengers-data-de-lancamento': 'Data de lançamento',
  'dear-passengers-demo': 'Situação da demo',
  'dear-passengers-baixar': 'Download seguro',
  'dear-passengers-requisitos': 'Requisitos de sistema',
  'dear-passengers-trailer': 'Trailers oficiais',
  'dear-passengers-noticias': 'Notícias',
  'dear-passengers-recursos-confirmados': 'Recursos confirmados',
  'dear-passengers-funcoes': 'Funções da tripulação',
  'dear-passengers-desenvolvedora-flexus': 'Desenvolvedora FLEXUS',
  'jogos-parecidos-com-dear-passengers': 'Jogos parecidos',
};

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  return <>{parts.map((part, index) => {
    const match = part.match(/^\[\[([^|]+)\|([^\]]+)\]\]$/);
    return match ? <Link href={match[1]} key={`${match[1]}-${index}`}>{match[2]}</Link> : part;
  })}</>;
}

export default function PortugueseGuidePage({
  guide,
  canonicalPath,
  modifiedDate = '2026-07-28',
  verifiedDate = '28 de julho de 2026',
}: {
  guide: PortugueseGuide;
  canonicalPath: string;
  modifiedDate?: string;
  verifiedDate?: string;
}) {
  const pageUrl = `https://dearpassengers.net${canonicalPath}`;
  const articleSchema = {
    '@context': 'https://schema.org', '@type': guide.slug ? 'Article' : 'WebPage',
    headline: guide.title, description: guide.description, mainEntityOfPage: pageUrl,
    datePublished: '2026-07-28', dateModified: modifiedDate, inLanguage: 'pt-BR',
    author: { '@type': 'Organization', name: 'Equipe editorial brasileira do DearPassengers.net', url: 'https://dearpassengers.net/pt-br/sobre/' },
    publisher: { '@type': 'Organization', name: 'DearPassengers.net', url: 'https://dearpassengers.net/', logo: { '@type': 'ImageObject', url: 'https://dearpassengers.net/images/logo.png' } },
    image: `https://dearpassengers.net${guide.heroImage}`,
    isPartOf: { '@type': 'WebSite', name: 'DearPassengers.net', url: 'https://dearpassengers.net/pt-br/' },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Guia de Dear Passengers em português', item: 'https://dearpassengers.net/pt-br/' },
      ...(guide.slug ? [{ '@type': 'ListItem', position: 2, name: guide.title, item: pageUrl }] : []),
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: guide.faqs.map((item) => ({
      '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <Header locale="pt-BR" languageHref={guide.englishPath} />
    <main id="main-content" lang="pt-BR" className="portuguese-content">
      <article>
        <header className="article-hero">
          <Image src={guide.heroImage} alt={guide.heroAlt} fill sizes="100vw" priority />
          <div className="hero-shade" />
          <div className="container article-hero-content">
            <nav className="breadcrumbs" aria-label="Caminho da página"><Link href="/pt-br/">Guia em português</Link><span>/</span><span>{guide.keyword}</span></nav>
            <div className="eyebrow"><span>●</span> {guide.eyebrow}</div>
            <h1><RichText text={guide.h1} /></h1>
            <p><RichText text={guide.intro} /></p>
            <div className="article-meta"><span>Verificado em {verifiedDate}</span><span>Fontes primárias: Steam e FLEXUS</span><span>Idioma: Português (Brasil)</span></div>
          </div>
        </header>
        <div className="container article-layout">
          <aside className="article-toc" aria-label="Sumário">
            <p>NESTE GUIA</p>
            <a href="#resposta">Resposta rápida</a>
            {guide.sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.heading}</a>)}
            <a href="#busca-brasileira">Contexto de busca no Brasil</a>
            <a href="#perguntas">Perguntas frequentes</a>
            <a className="toc-cta" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Adicionar à lista de desejos ↗</a>
          </aside>
          <div className="article-prose prose">
            <EditorialNote checked={verifiedDate} locale="pt-BR" note={guide.note} />
            <section id="resposta">
              <span className="kicker">RESPOSTA RÁPIDA</span>
              <h2>{guide.keyword}: situação atual</h2>
              <p className="snippet-answer"><strong><RichText text={guide.answer} /></strong></p>
              <div className="status-grid" aria-label="Situação das informações">
                <div className="fact-callout"><span>CONFIRMADO</span><strong>O que dizem as fontes primárias</strong><ul>{guide.confirmed.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div className="fact-callout unknown-callout"><span>NÃO INFORMADO</span><strong>O que continua desconhecido</strong><ul>{guide.unknown.map((item) => <li key={item}>{item}</li>)}</ul></div>
              </div>
            </section>
            {guide.sections.map((section) => <section id={section.id} key={section.id}>
              <span className="kicker">{section.kicker}</span><h2><RichText text={section.heading} /></h2>
              {section.paragraphs.map((paragraph, index) => <p key={index}><RichText text={paragraph} /></p>)}
              {section.bullets && <ul>{section.bullets.map((item) => <li key={item}><RichText text={item} /></li>)}</ul>}
            </section>)}
            <section id="busca-brasileira">
              <span className="kicker">CONTEXTO DE BUSCA NO BRASIL</span><h2>Por que usamos “{guide.keyword}”?</h2>
              {guide.localContext.map((paragraph) => <p key={paragraph}><RichText text={paragraph} /></p>)}
            </section>
            <section id="verificacao">
              <span className="kicker">MÉTODO DE VERIFICAÇÃO</span><h2>Como verificamos informações sobre {guide.keyword}?</h2>
              <p>Primeiro conferimos a página oficial da Steam para plataforma, janela de lançamento, modos de jogo, idiomas e hardware. Entrevistas diretas com a FLEXUS ajudam a entender planos de desenvolvimento, mas “planejado” não significa “disponível”. A mesma afirmação repetida por vários sites não se torna confirmação quando todos deixam de indicar a origem.</p>
              <p>“Confirmado” é o dado expresso em fonte primária. “Observação” descreve apenas o que uma imagem ou um vídeo oficial realmente mostra. “Plano” é uma meta da desenvolvedora e pode mudar. “Não informado” é a resposta correta para preço, dia exato, limite de jogadores, consoles e outros detalhes ainda não anunciados.</p>
              <p><RichText text="DearPassengers.net é um guia independente e não tem vínculo com FLEXUS, Valve ou Steam. Imagens oficiais são usadas em contexto editorial e pertencem a seus titulares. Uma correção com fonte pode ser enviada pela [[/pt-br/contato/|página de contato em português]]; quando um fato compartilhado muda, revisamos também as versões em outros idiomas." /></p>
            </section>
            <section id="perguntas"><span className="kicker">PERGUNTAS FREQUENTES</span><h2>Dúvidas sobre {guide.keyword}</h2><p>As respostas usam vocabulário brasileiro natural. Uma lacuna oficial não é preenchida com palpite para parecer completa.</p><FAQ items={guide.faqs} /></section>
            <section id="fontes"><span className="kicker">FONTES PRIMÁRIAS</span><h2>Confira a informação na origem</h2><p>A <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">página brasileira de Dear Passengers na Steam ↗</a> mostra plataforma, modos, situação do português brasileiro e requisitos mínimos. A <a href={FLEXUS_INTERVIEW} target="_blank" rel="noopener noreferrer">entrevista direta com a FLEXUS ↗</a> contextualiza a demo e o plano de desenvolvimento. Não apontamos para arquivos de download de terceiros.</p></section>
            <section className="related-guide"><span className="kicker">GUIA EM PORTUGUÊS</span><h2>Outros temas sobre Dear Passengers</h2><p>Cada página responde a uma intenção própria; links contextuais conectam as dúvidas sem fazer várias URLs competirem pela mesma consulta.</p><div className="related-actions"><Link className="button" href="/pt-br/">Página inicial em português →</Link>{guide.related.map((slug) => <Link className="button button-ghost" href={`/pt-br/${slug}/`} key={slug}>{labels[slug] || slug} →</Link>)}</div></section>
          </div>
        </div>
      </article>
    </main>
    <Footer locale="pt-BR" />
  </>;
}
