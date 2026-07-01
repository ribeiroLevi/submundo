import titulo from "./assets/Frame 3.png";
import palhaco from "./assets/Vector.png";
import submundo from "./assets/image1.png";
import palhacas from "./assets/Group 18.png";
import umbrella from "./assets/Group 8.png";
import maga from "./assets/Group 5.png";
import palhacos from "./assets/Group 6.png";
import sec4 from "./assets/SEC 4.png";
import AudioVisualizer from "./audiovisualizer";
import pumpit from "./assets/PUMP IT.mp3";
import satisfaction from "./assets/SATISFACTION.mp3";
import capitalismo from "./assets/CAPITALISMO.mp3";
import inferno from "./assets/SLAYER.mp3";
import helipa from "./assets/6b067ba2406a14283785e9240f985dce.jpg";
import palhac from "./assets/7b608ecaf11d226b70ddc8be14d3325b.jpg";
import moto from "./assets/37e01838ce12d4485568c7d55a907625.jpg";
import festa from "./assets/image 8.png";
import levi from "./assets/levi.png";
import lucas from "./assets/image.png";
import lemos from "./assets/lemos.png";
import logo from "./assets/logo.png";

function App() {
  return (
    <div>
      <nav className="bg-hidden h-12 w-full top-0 fixed z-50">
        <img className="w-12 mx-18 my-12" src={logo} alt="" />
      </nav>
      <div
        className="h-screen w-full bg-purple-bg bg-cover bg-top flex items-center justify-center"
        style={{ backgroundImage: `url(${palhaco})` }}
      >
        <img src={titulo} />
      </div>
      <div className="h-screen bg-white flex flex-col items-center gap-6 justify-center">
        <div className="w-4/6">
          <h1 className="text-4xl pb-6 font-bold">Funk? Submundo?</h1>
          <p>
            O Funk Submundo pode ser compreendido como um movimento que
            ultrapassa os limites de um gênero musical. Embora o Funk Bruxaria
            seja uma de suas principais expressões, o termo Submundo permite
            observar um conjunto mais amplo de elementos sonoros, estéticos,
            comportamentais e culturais que se articulam em torno da mesma
            identidade. Nesse contexto, som, imagem e experiência coletiva
            tornam-se inseparáveis, formando uma linguagem própria construída
            nas periferias urbanas
          </p>
        </div>
        <div className="flex w-4/6 flex-col justify-between">
          <img src={submundo} alt="" />
          <p className="text-sm">Imagem: Reprodução/Juicy Santos</p>
        </div>
      </div>
      <div className="flex h-[90%] bg-purple-bg justify-around items-center text-white-text overflow-hidden">
        <div className="w-4/6 flex flex-row">
          <div className="flex w-[45%] flex-col py-4 pt-6 gap-4 h-[90%]">
            <h1 className="text-5xl font-bold">Visual, Horror e Palhaços</h1>
            <div className="flex flex-col justify-around gap-6">
              <div>
                <p className="text-md">
                  A estética do Funk Submundo está profundamente ligada à
                  construção de atmosferas de tensão, estranhamento e
                  maximalismo sonoro.
                  <br />
                  <br />
                  No Funk Bruxaria, o horror aparece como uma das principais
                  referências visuais e simbólicas. Filmes de terror, samples de
                  jogos de suspense, cenários apocalípticos, monstros, palhaços
                  e elementos macabros são frequentemente incorporados ao
                  imaginário do gênero em conjunto com a estética dos bailes
                  funks da zona paulista.
                  <br />
                  <br />
                  Essa aproximação com o terror não surge apenas como um recurso
                  decorativo. Ela dialoga com a proposta de criar uma
                  experiência intensa e impactante, capaz de provocar sensações
                  semelhantes às produzidas pela própria sonoridade do gênero.
                  <br />
                  <br />O horror funciona como uma representação visual do som
                  agressivo, distorcido e imprevisível que caracteriza a
                  Bruxaria, trazendo o posicionamento claro de que esse gênero
                  não visa e não se molda ao mainstream.{" "}
                </p>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-[55%] flex items-center">
            <img
              src={palhacas}
              alt=""
              className="h-full w-full py-8 pl-8 object-cover"
            />
            <p className="absolute bottom-2 right-2 text-xs text-white/80">
              Imagem: Reprodução/Milena Nascimento
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen bg-white flex flex-col items-center gap-6 justify-center">
        <div className="w-4/6">
          <p>
            Nesse contexto, a figura do palhaço ganha destaque.
            <br /> <br />
            Tradicionalmente associada à infância, ao entretenimento e à
            diversão, ela é ressignificada dentro do Funk Submundo. O palhaço
            deixa de representar inocência e passa a assumir uma forma
            inquietante, marcada por expressões exageradas, caretas e aparências
            assustadoras. Essa transformação cria uma inversão simbólica: aquilo
            que deveria transmitir conforto passa a gerar desconforto e tensão.
            <br /> <br />
            Essa lógica de subversão é central para a estética do movimento.
            Elementos conhecidos da cultura popular são deslocados de seus
            significados originais para produzir novas interpretações. O palhaço
            horripilante torna-se, assim, um símbolo da ruptura com expectativas
            convencionais e da busca por uma identidade estética própria, mais
            próxima da intensidade, do caos e da energia presentes nos bailes.
            <br /> <br />A própria ideia de "submundo" também contribui para
            essa construção visual. O termo aparece associado a cenários
            sombrios, ao imaginário apocalíptico e à representação artística das
            experiências vividas nas periferias da Zona Sul de São Paulo. Mais
            do que um espaço físico, o submundo funciona como um universo
            simbólico onde realidade, fantasia, horror e festa coexistem.
          </p>
        </div>
        <div className="w-4/6 flex flex-row items-center gap-3 justify-center">
          <div className="flex-1">
            <img src={maga} alt="" className="h-full w-full object-cover" />
            <p className="text-sm">
              Imagem: Reprodução/Milena Nascimento - MILE LAB
            </p>
          </div>

          <div className="flex-1">
            <img src={palhacos} alt="" className="h-full w-full object-cover" />
            <p className="text-sm">
              Imagem: Reprodução/Milena Nascimento - MILE LAB
            </p>
          </div>
        </div>
      </div>
      <section className="h-screen w-full">
        <img src={sec4} alt="" className="h-full w-full object-cover" />
      </section>

      <div className=" py-8 bg-white flex flex-col items-center gap-6 justify-center">
        <div className="w-4/6">
          <h1 className="text-4xl pb-6 font-bold">O SOM DO APOCALIPSE</h1>
          <p>
            A sonoridade do Funk Submundo, especialmente do Funk Bruxaria, é
            marcada pela experimentação. Diferentemente de vertentes mais
            próximas do mainstream, a Bruxaria adota uma abordagem
            propositalmente pesada, agressiva e distorcida.
          </p>
        </div>
        <div className="flex w-4/6 flex-col justify-between">
          <img src={submundo} alt="" />
          <p className="text-sm">Imagem: Reprodução/Juicy Santos</p>
        </div>
        <div className="w-4/6">
          <p>
            O Funk Bruxaria, para além de unir conceitos abstratos e
            abrangentes, também é complexo de estabelecer um marco sonoro ideal
            ou uma sonoridade que represente toda a diversidade.
            <br /> <br />
            Pensando nisso, nossa redação produziu 4 músicas que, gradualmente,
            apresentam elementos fundamentais para o gênero. Compreendemos que:
            dependendo de quem escute, da região ou do artista que mais goste,
            essas músicas podem nem parecer Funk Bruxaria ou simplesmente serem
            considerados de outro gênero. Ao mesmo tempo, muitos podem
            considerar esse gênero extremo e desgostar desde início. Portanto,
            decidimos comecar com uma música mais leve e ir subindo o nível.
            <br /> <br />
            Para isso, apresentamos: Aquecimento PUMP IT.
          </p>
        </div>
        <AudioVisualizer src={pumpit} nome="Aquecimento PUMP IT" />
        <div className="w-4/6">
          <p>
            Antes de adentrarmos no Submundo, decidimos mostrar um pouco das
            bases ritmicas do gênero.
            <br /> <br />
            "Aquecimento PUMP IT" utiliza sample de "Pump It" do Black Eyed Peas
            (que já é uma sample de "Misirlou" do Dick Dale and His Del-Tones de
            1962) e também do "Volt Mix" de DJ Battery Brain. A primeira é uma
            sample clássica de Surf Rock, comunmente utilizada em músicas mais
            "pra cima" e divertidas. O "Volt Mix", por outro lado, é dos
            primórdios do Funk brasileiro e, nos anos 90, foi amplamente
            utilizada pelo Furacão 2000, por exemplo.
            <br /> <br />
            Entretanto, entre os elementos mais característicos do Funk
            Bruxaria, estão: samples de filmes de terror e suspense, como
            gritos, risadas sinistras e sons que produzem tensão, como sirenes e
            sintetizadores agudos. Esses recursos ajudam a construir uma
            atmosfera sonora que reforça as referências visuais do gênero.
            <br /> <br />
            Para nos aproximarmos mais do gênero, temos a segunda faixa:
            SATISFAÇÃO
          </p>
        </div>
        <AudioVisualizer src={satisfaction} nome="SATISFAÇÃO" />
        <div className="w-4/6">
          <p>
            Nesta faixa, utilizamos outra sample clássica: Satisfaction de Benny
            Benassi. Faixa clássica da House Music dos anos 2000, é dançante e
            sensual, em alguma medida. Principalmente quando aliada ao seu
            vídeo-clipe, outro clássico. Entretanto, na nossa adaptação,
            tentamos deixar ela mais opressiva. Com agudos gritantes (também
            chamados de "tuíns"), sintetizadores e graves pesados (referêciados
            como "estoura tímpano" ou "destrói fone"), estamos nos aproximando à
            sonoridade do Submundo.
            <br /> <br /> Com ela, também demonstramos que é influência de
            outros gêneros é evidente. DJ K descreve a Bruxaria como uma "rave
            da favela", resultado da mistura entre funk, rock, música eletrônica
            e elementos experimentais. Samples de bandas de rock, estruturas
            próximas ao techno e recursos típicos da música eletrônica aparecem
            frequentemente nas produções.
            <br /> <br />
            Mais do que buscar equilíbrio técnico, muitos produtores trabalham a
            partir da exploração criativa e caótica de sintetizadores, samples e
            técnicas de produção. Graves, agudos, ruídos e distorções são
            utilizados como matéria-prima para produzir impacto físico e
            emocional no público. O objetivo não é apenas ser ouvido, mas também
            ser sentido corporalmente dentro dos bailes.
            <br /> <br />E nesse sentido, apresentamos a nossa próxima faixa:
            FACAS, FOICES E FORCADOS
          </p>
        </div>
        <AudioVisualizer src={capitalismo} nome="FACAS, FOICES E FORCADOS" />
        <div className="w-4/6">
          <p>
            Esta faixa já é mais sombria. A sample original, "Rasamat Usratuna"
            de Nasheed, fala sobre a união da família e amor. Contudo, nós a
            subvertemos em uma música para falar sobre o deturpação do
            capitalismo e que é "hora de acordar". Pois, entre as coisas que
            vemos ser destruídas pelos "tentáculos do capitalismo" uma delas é:
            a família, a união.
            <br /> <br />
            Passando do significado por trás da faixa, o uso de samples em árabe
            é um recursos comum no mundo do funk. Datando dos anos 2010, com a
            faixa "Passinho do Romano", samples em árabe são frequentemente
            utilizadas em faixas do gênero.
            <br /> <br />
            Nesta música, também aplicamos de forma mais insiva o uso dos tuíns
            por meio dos assobios e o uso de sintetizadores mais graves para
            criar a ambiência.
            <br /> <br />
            Por fim, apresentamos nossa última faixa: CULTO DO APOCALIPSE.
          </p>
        </div>
        <AudioVisualizer src={inferno} nome="CULTO DO APOCALIPSE" />
        <div className="w-4/6">
          <p>
            Fortemente influenciada por músicas do DJ d.silvestre, ela utiliza
            sintetizadores graves, assobios agudos e risadas sinistras para
            construir uma ambientação sinistra e energética.
            <br /> <br />
            Com estas quatro faixas, acreditamos conseguir passar um panôrama do
            que é o Funk Submundo e seus principais elementos. Todas essas
            faixar estão disponíveis no Soundcloud, link abaixo.
          </p>
        </div>

        <div className="flex w-full justify-center">
          <div className="w-4/6">
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/YF6sVA7rVt4?si=xfeIUT9UYUXj_rqS"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div className="h-screen bg-purple-bg text-white-text flex flex-col items-center gap-6 justify-center">
          <div className="w-4/6">
            <h1 className="text-4xl pb-6 font-bold">Entranhas do Submundo</h1>
            <p>
              O Funk Submundo possui raízes profundas nas periferias da Zona Sul
              de São Paulo, especialmente em territórios como Heliópolis e
              Mandela e nos bailes de rua dessas comunidades que marcaram o
              desenvolvimento do Funk Bruxaria.
            </p>
          </div>
          <div className="flex w-4/6 flex-col justify-between">
            <img src={helipa} alt="" />
            <p className="text-sm">Imagem: Reprodução/Aloha</p>
          </div>
          <div className="w-4/6">
            <p>
              Segundo os próprios artistas do movimento, a ideia do termo
              "bruxaria" para nomear o gênero surge da mistura de elementos
              (sons) diversos em um mesmo espaço de criação (computador),
              comparado metaforicamente a um caldeirão de bruxa, e dessa
              comparação surge o termo bruxaria.
              <br /> <br />
              Nesse caso, assim como no caldeirão, o computador torna-se o local
              onde elementos (sons, referências e experiências) são combinados e
              no final se transformam em bruxaria sonora. Essa abstração é clara
              na assinatura do DJ mais famoso do gênero: “DJ K não tá mais
              produzindo, tá fazendo bruxaria”.
            </p>
          </div>
        </div>
        <div className="h-screen bg-white flex flex-col items-center gap-6 justify-center">
          <div className="w-4/6">
            <p>
              A noção de submundo também está ligada ao contexto social
              experienciado nessas regiões.
              <br />
              <br />
              Os DJs associam o termo à realidade vivida nas periferias,
              transformando experiências cotidianas, tensões sociais e
              percepções sobre a cidade em expressão artística. O estilo atua
              como uma abstração dessas vivências em algo fantasioso. Uma
              resistência a aceitar aquela realidade como absoluta. Fazendo com
              que o ouvinte assuma papel ativo no filme de terror que é a sua
              realidade.
              <br />
              <br />
              Ao mesmo tempo, propõe uma desconexão da realidade, ao inundar
              seus cérebros de sonoridades extremas e agressivas, colocando-os
              em estado de transe. 
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 w-4/6 flex-col justify-between">
            <div>
              <img src={moto} alt="" />
              <p className="text-sm">Imagem: Reprodução/MILE LAB</p>
            </div>
            <div>
              <img src={umbrella} alt="" />
              <p className="text-sm">Imagem: Reprodução/MILE LAB</p>
            </div>
            <div>
              <img src={palhac} alt="" />
              <p className="text-sm">Imagem: Reprodução/MILE LAB</p>
            </div>
          </div>
        </div>
        <div className="h-screen bg-purple-bg text-white-text flex flex-col items-center gap-6 justify-center">
          <div className="w-4/6">
            <p>
              Diferente das vertentes do funk mainstream que têm em sua dança
              uma presença mais pautada em aspectos sensuais, as danças nos
              bailes de Bruxaria são marcadas principalmente por movimentos mais
              robóticos. A dança, assim como a estética sonora, reforça a
              identidade própria e distinta de qualquer outro gênero.
            </p>
          </div>
          <div className="flex w-4/6 flex-col justify-between">
            <img src={festa} alt="" />
            <p className="text-sm">Imagem: Divulgação/Submundo808</p>
          </div>
          <div className="w-4/6">
            <p>
              Outro aspecto importante do gênero é a apropriação criativa da
              tecnologia. Softwares como o FL Studio permitiram que produtores
              desenvolvessem métodos próprios de criação musical baseados em
              montagem, experimentação e manipulação direta de sons. Essa
              prática contribuiu para o surgimento de uma gramática sonora
              própria, construída fora dos modelos tradicionais de ensino
              musical. Ao mesmo tempo que bebe de diversas fontes, o gênero se
              estabelece como único, diferente, um Frankstein que costura tudo
              em um novo organismo.
              <br /> <br />
              Dessa forma, o Funk Submundo se estabelece como uma manifestação
              cultural que transforma experiências e referências da periferia em
              linguagem artística. Sua força não está apenas na música ou na
              imagem, mas na maneira como o “bruxo” articula seus sons.
              Estética, território, comportamento e tecnologia criam uma
              identidade coletiva singular que desafia preceitos sonoros,
              estéticos e comportamentais do que se conhece como música
              periférica brasileira.
            </p>
          </div>
        </div>
        <div className="bg-white-bg py-24 w-4/6">
          <div className="mx-auto grid w-full grid-cols-1 gap-16 lg:grid-cols-2">
            {/* REFERÊNCIAS */}
            <section>
              <h1 className="mb-8 text-4xl font-bold">Referências</h1>

              <ul className="space-y-4 text-lg">
                <li>
                  <a
                    href="https://portalveredas.com.br/o-funk-bruxaria-como-expoente-da-musica-experimental/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-700 underline underline-offset-4 transition hover:text-violet-900"
                  >
                    Portal Veredas
                  </a>
                  <span className="ml-2 text-gray-500">
                    — Último acesso: 22/06/2026
                  </span>
                </li>

                <li>
                  <a
                    href="https://g1.globo.com/sp/sao-paulo/noticia/2024/05/23/bruxaria-e-ritmado-funk-varia-de-acordo-com-regiao-da-cidade-de-sp-entenda-as-diferencas.ghtml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-700 underline underline-offset-4 transition hover:text-violet-900"
                  >
                    G1
                  </a>
                  <span className="ml-2 text-gray-500">
                    — Último acesso: 22/06/2026
                  </span>
                </li>

                <li>
                  <a
                    href="https://billboard.com.br/dumbledore-da-favela-conheca-dj-k-o-bruxo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-700 underline underline-offset-4 transition hover:text-violet-900"
                  >
                    Billboard Brasil
                  </a>
                  <span className="ml-2 text-gray-500">
                    — Último acesso: 22/06/2026
                  </span>
                </li>

                <li>
                  <a
                    href="https://tab.uol.com.br/edicao/dj-k-funk-bruxaria/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-700 underline underline-offset-4 transition hover:text-violet-900"
                  >
                    TAB UOL
                  </a>
                  <span className="ml-2 text-gray-500">
                    — Último acesso: 22/06/2026
                  </span>
                </li>

                <li>
                  <a
                    href="https://amarello.com.br/2023/06/cultura/cientista-do-grave/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-700 underline underline-offset-4 transition hover:text-violet-900"
                  >
                    Amarello
                  </a>
                  <span className="ml-2 text-gray-500">
                    — Último acesso: 22/06/2026
                  </span>
                </li>

                <li>
                  <a
                    href="https://www.theguardian.com/music/2023/nov/14/if-it-doesnt-smell-like-funk-somethings-wrong-with-your-recipe-brazilian-baile-funk-goes-global-again"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-700 underline underline-offset-4 transition hover:text-violet-900"
                  >
                    The Guardian
                  </a>
                  <span className="ml-2 text-gray-500">
                    — Último acesso: 22/06/2026
                  </span>
                </li>

                <li>
                  <a
                    href="https://www.terra.com.br/visao-do-corre/quem-e-o-dj-k-jovem-de-diadema-esta-ganhando-o-mundo-com-seu-funkbruxaria,1fb3be082b07603645405ab45d5725a2yvx6yvtv.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-700 underline underline-offset-4 transition hover:text-violet-900"
                  >
                    Terra
                  </a>
                  <span className="ml-2 text-gray-500">
                    — Último acesso: 22/06/2026
                  </span>
                </li>

                <li>
                  <a
                    href="https://monkeybuzz.com.br/materias/tuin-montagens-no-fruity-loops-e-som-de-passarinhos-no-estudio-com-dj-k-e-jlz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-700 underline underline-offset-4 transition hover:text-violet-900"
                  >
                    MonkeyBuzz
                  </a>
                  <span className="ml-2 text-gray-500">
                    — Último acesso: 22/06/2026
                  </span>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/reel/DZdgbu-v2uQ/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-700 underline underline-offset-4 transition hover:text-violet-900"
                  >
                    Instagram
                  </a>
                  <span className="ml-2 text-gray-500">
                    — Último acesso: 22/06/2026
                  </span>
                </li>
              </ul>
            </section>

            {/* FICHA EDITORIAL */}
            <section>
              <h1 className="mb-8 text-4xl font-bold">Ficha Editorial</h1>

              <div className="space-y-8">
                {/* Pessoa 1 */}
                <div className="flex items-center gap-6 rounded-2xl border border-gray-200 p-4">
                  <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-200">
                    <img
                      src={levi}
                      alt="Levi Ribeiro"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold">
                      Levi "Loops" Ribeiro
                    </h2>

                    <p className="text-gray-600">
                      Desenvolvimento e Produção Musical
                    </p>
                  </div>
                </div>

                {/* Pessoa 2 */}
                <div className="flex items-center gap-6 rounded-2xl border border-gray-200 p-4">
                  <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-200">
                    <img
                      src={lemos}
                      alt="João Pedro Lemos"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold">
                      João Pedro "JP" Lemos
                    </h2>

                    <p className="text-gray-600">Pesquisa e Redação</p>
                  </div>
                </div>

                {/* Pessoa 3 */}
                <div className="flex items-center gap-6 rounded-2xl border border-gray-200 p-4">
                  <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-200">
                    <img
                      src={lucas}
                      alt="Lucas Ryan Fernandes"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold">
                      Lucas "O Bruxo" Ryan
                    </h2>

                    <p className="text-gray-600">
                      Diagramação e Design Editorial
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
