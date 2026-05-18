import React from 'react';
import { 
  Music, Radio, Mic, Disc, CheckCircle, 
  MessageSquare, Mail, Award, Layers, Sliders, Play
} from 'lucide-react';

export default function NoemiLealSite() {
  const servicos = [
    { 
      nome: "Beat por Encomenda", 
      preco: "R$ 100", 
      icon: <Music className="w-6 h-6 text-pink-500" /> 
    },
    { 
      nome: "Mix e Master", 
      preco: "R$ 200", 
      icon: <Radio className="w-6 h-6 text-pink-500" /> 
    },
    { 
      nome: "Captação", 
      preco: "R$ 200", 
      icon: <Mic className="w-6 h-6 text-pink-500" /> 
    },
    { 
      nome: "Produção Completa", 
      preco: "R$ 500", 
      icon: <Disc className="w-6 h-6 text-pink-500" /> 
    },
    { 
      nome: "2 Produções Completas", 
      preco: "R$ 450 /cada", 
      icon: <Disc className="w-6 h-6 text-pink-400" />, 
      destaque: true 
    }
  ];

  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen font-sans antialiased selection:bg-pink-500 selection:text-black">
      
      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 bg-[#0b0b0b]/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
            NOEMI LEAL
          </span>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-zinc-400">
            <a href="#inicio" className="hover:text-pink-500 transition-colors">Início</a>
            <a href="#sobre" className="hover:text-pink-500 transition-colors">Sobre</a>
            <a href="#portfolio" className="hover:text-pink-500 transition-colors">Portfólio</a>
            <a href="#servicos" className="hover:text-pink-500 transition-colors">Serviços</a>
            <a href="#beats" className="hover:text-pink-500 transition-colors">Beats</a>
          </nav>
          <a 
            href="https://wa.me/5511969452584?text=Olá%20Noemi!%20Vi%20o%20seu%20site%20portfólio%20e%20gostaria%20de%20realizar%20um%20orçamento." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Fazer Orçamento
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-44 md:pb-24 overflow-hidden flex items-center min-h-[90vh]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[140px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <p className="text-pink-500 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
              Funk SP • Trap BR • R&B • Pop Urbano
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Transformo melodias e ideias em músicas envolventes
            </h1>
            <p className="text-zinc-400 text-base md:text-lg mb-8 leading-relaxed">
              Bem-vindo ao meu portfólio! Sou Noemi Leal, produtora musical, beat maker, arranjadora e multi-instrumentista. Seja para artistas solo, trilhas ou produções comerciais, veja como posso dar vida ao seu som.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#portfolio" className="bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-zinc-200 transition-all text-center">
                Ver Portfólio
              </a>
              <a href="#servicos" className="border border-zinc-700 text-zinc-300 font-semibold px-8 py-4 rounded-full hover:bg-zinc-900 transition-all text-center">
                Tabela de Preços
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6 justify-center items-center md:items-end">
            <div className="w-full max-w-sm bg-gradient-to-br from-zinc-900 to-zinc-950 border border-pink-500/30 p-6 rounded-2xl shadow-xl">
              <p className="text-xs text-pink-500 font-bold uppercase tracking-widest mb-4">Spotify Artists Data</p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                  <div className="text-2xl md:text-3xl font-black text-white">2,12 mi</div>
                  <div className="text-xs text-zinc-500 mt-1">ouvintes</div>
                </div>
                <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                  <div className="text-2xl md:text-3xl font-black text-white">15 mi</div>
                  <div className="text-xs text-zinc-500 mt-1">streams</div>
                </div>
              </div>
              <div className="mt-4 text-center text-xs text-zinc-400">
                #SpotifyWrapped • Faixas que alcançaram milhões
              </div>
            </div>

            {/* Preview Track */}
            <div className="w-full max-w-sm bg-[#18181b] rounded-xl p-4 flex flex-col gap-4 border border-zinc-800 relative overflow-hidden group shadow-lg">
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-zinc-800 rounded-lg flex-shrink-0 flex flex-col items-center justify-center p-1 border border-zinc-700 relative overflow-hidden shadow-md">
                    <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/80 via-transparent to-pink-500/20"></div>
                    <span className="text-[9px] font-black tracking-tighter text-zinc-300 leading-none mb-1">te ver</span>
                    <span className="text-[9px] font-black tracking-tighter text-zinc-300 leading-none">de novo</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-pink-500 transition-colors">Te Ver de Novo</h4>
                    <p className="text-xs text-zinc-400">Annick, Kaio Viana • Noemi Leal</p>
                  </div>
                </div>
                <a 
                  href="https://open.spotify.com/track/47T4pY9fT47VwG8RzZ8RzZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center text-black transition-all duration-300 transform hover:scale-110 shadow-lg shadow-pink-500/20"
                >
                  <Play className="w-4 h-4 fill-black ml-0.5" />
                </a>
              </div>
              
              <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden relative">
                <div className="bg-pink-500 h-full w-1/3 rounded-full animate-pulse"></div>
              </div>
              <div className="flex justify-between text-[10px] text-zinc-500 -mt-2 font-mono">
                <span>0:42</span>
                <span>2:58</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="py-20 border-t border-zinc-900 bg-[#0e0e0e]">
        {/* Retornado para grid md:grid-cols-2 (Duas Colunas Lado a Lado) */}
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-pink-500 text-sm font-semibold tracking-wider block mb-2 text-center">// BIOGRAFIA</span>
            {/* Título Centralizado */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Sobre mim</h2>
            <p className="text-zinc-400 leading-relaxed mb-4 text-justify">
              Desde cedo, a música sempre foi minha maior paixão. Com mais de 15 anos de experiência na música, já produzi diversas faixas que alcançaram milhões de streams, ajudando artistas a desenvolverem sua identidade sonora.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6 text-justify">
              Com formação em <strong>Guitarra e Tecnologia, Teoria Musical e Produção</strong>, tenho um olhar detalhista para cada etapa do processo musical, desde a composição até a mixagem final.
            </p>
            <div className="border-t border-zinc-800 pt-6">
              {/* Subtítulo Habilidades Centralizado */}
              <h4 className="text-white font-bold mb-3 text-center">Habilidades e Especializações:</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-500 flex-shrink-0" /> <span><strong>Softwares de Produção:</strong> Ableton Live e Reaper.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-500 flex-shrink-0" /> <span><strong>Especializações:</strong> Produção musical, mixagem e masterização, composition, sound design.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl w-full">
            {/* Subtítulo Destaque Centralizado */}
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 text-center">
              O que me destaca?
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm mb-6 text-justify">
              Um dos meus maiores diferenciais é a capacidade de transitar por diversos styles musicais com qualidade. Como <strong>multi-instrumentista</strong>, tenho um olhar único sobre cada faixa, trazendo mais autenticidade para as músicas que produzo. Meu objetivo é transformar ideias em músicas marcantes, garantindo que cada projeto tenha uma identidade sonora única e profissional.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center text-xs font-semibold text-zinc-500">
              <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800">ABLETON LIVE</div>
              <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800">WAVES</div>
              <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800">REAPER</div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="portfolio" className="py-20 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-12">
            {/* Títulos Centralizados */}
            <h2 className="text-3xl font-bold mb-2">Trabalhos em Destaque</h2>
            <p className="text-zinc-400">Explore as produções que definem a assinatura artística de Noemi Leal.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="https://open.spotify.com/artist/7M6rX8FhT47VwG8RzZ8RzZ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#141416] p-6 rounded-2xl border border-zinc-800 flex flex-col items-center justify-center hover:border-emerald-500 transition-all text-center group shadow-xl"
            >
              <span className="text-emerald-500 font-bold text-lg mb-1 group-hover:scale-105 transition-transform">
                🟩 Nossos Hits no Spotify
              </span>
              <p className="text-zinc-400 text-xs max-w-xs">
                Acesse os lançamentos e faixas oficiais produzidas direto na plataforma.
              </p>
            </a>
            
            <a 
              href="https://www.instagram.com/noemilealll" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 flex flex-col items-center justify-center hover:border-pink-500 transition-all text-center group shadow-xl"
            >
              <span className="text-pink-500 font-bold text-lg mb-1 group-hover:scale-105 transition-transform">
                ▶ Segue no Instagram
              </span>
              <p className="text-zinc-400 text-xs max-w-xs">
                Acompanhe os bastidores das gravações, Reels de tracks e o dia a dia no estúdio.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS E VALORES */}
      <section id="servicos" className="py-20 border-t border-zinc-900 bg-[#0e0e0e]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Serviços e Valores</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Tabela transparente para facilitar seu atendimento. Escolha o ideal para o seu projeto.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {servicos.map((servico, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  servico.destaque 
                    ? 'bg-gradient-to-b from-zinc-900 to-black border-pink-500 shadow-xl shadow-pink-500/5 lg:scale-105' 
                    : 'bg-[#0b0b0b] border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <div>
                  <div className="mb-6 flex justify-between items-center">
                    {servico.icon}
                    {servico.destaque && (
                      <span className="text-[10px] bg-pink-500 text-black px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                        Melhor Combo
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{servico.nome}</h3>
                  <div className="text-3xl font-extrabold text-white mb-6">
                    {servico.preco}
                  </div>
                </div>
                <div>
                  <ul className="text-sm text-zinc-400 space-y-3 mb-8 border-t border-zinc-800/50 pt-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-pink-500" /> Entrega em Alta Qualidade (WAV)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-pink-500" /> Identidade Sonora Exclusiva
                    </li>
                  </ul>
                  <a 
                    href={`https://wa.me/5511969452584?text=Olá%20Noemi!%20Vi%20o%20seu%20site%20portfólio%20e%20gostaria%20de%20realizar%20um%20orçamento%20para%20o%20serviço%20de%20${encodeURIComponent(servico.nome)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center text-sm font-semibold py-3 rounded-xl transition-all ${
                      servico.destaque 
                        ? 'bg-pink-600 hover:bg-pink-700 text-white' 
                        : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200'
                    }`}
                  >
                    Contratar Serviço
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEATS (BEATPLACE INTEGRATION) */}
      <section id="beats" className="py-20 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Loja de Beats Oficial</h2>
            <p className="text-zinc-400">Adquira licenças de instrumentais prontas imediatamente através do BeatPlace.</p>
          </div>
          
          <div className="w-full h-[550px] bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative">
            <iframe 
              src="https://beatplace.co/noemileal" 
              width="100%" 
              height="100%" 
              className="border-0"
              title="Noemi Leal BeatPlace Store"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-zinc-900 bg-black text-zinc-500 text-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-bold text-white tracking-wider mb-2">NOEMI LEAL</p>
            <p>© 2026 • Trabalho Acadêmico - Solução para Demanda Real</p>
          </div>
          <div className="flex space-x-6 text-xs font-semibold">
            <a 
              href="https://www.instagram.com/noemilealll" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-pink-500 transition-colors"
            >
              Instagram
            </a>
            <a 
              href="https://wa.me/5511969452584?text=Olá%20Noemi!%20Vi%20o%20seu%20site%20portfólio%20e%20gostaria%20de%20realizar%20um%20orçamento." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-pink-500 transition-colors"
            >
              WhatsApp
            </a>
            <a 
              href="https://open.spotify.com/artist/7M6rX8FhT47VwG8RzZ8RzZ" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-pink-500 transition-colors"
            >
              Spotify
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}