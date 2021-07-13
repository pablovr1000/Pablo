import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/OnekutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { useEffect, useState } from 'react';

function ProfileSidebar(propriedades) {
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />
      <p>
        <a className="boxLink" href= {`http://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

function ProfileRelations(propriedades) {
  console.log(propriedades);
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">{propriedades.title} ({propriedades.dados.length})</h2>
      <ul>
          {propriedades.dados.slice(0,6).map(itemAtual => {
            return (
              <li key={itemAtual.id}>
                <a href={itemAtual.link} target="_blank">
                  <img src={itemAtual.image} />
                  <span>{itemAtual.title}</span>
                </a>
              </li>
            )
          })}
        </ul>
    </ProfileRelationsBoxWrapper>
  );
}

export default function Home() {
  
  const usuarioAleatorio = 'pablovr1000';
  const [amigos, setAmigos] = useState(null);
  const [comunidades, setComunidades] = React.useState([{
    id: '3278946387443534958346754389654398534',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  const pessoasFavoritas = [
    { id: 'rodolfobitu', name: 'rodolfobitu', image: 'https://github.com/rodolfobitu.png', link: 'https://github.com/rodolfobitu' },
    { id: 'rooneysan', name: 'rooneysan', image: 'https://github.com/rooneysan.png', link: 'https://github.com/rooneysan' },
    { id: 'gabrielcarioca', name: 'gabrielcarioca', image: 'https://github.com/gabrielcarioca.png', link: 'https://github.com/gabrielcarioca' },
    { id: 'omariosouto', name: 'omariosouto', image: 'https://github.com/omariosouto.png', link: 'https://github.com/omariosouto' },
    { id: 'peas', name: 'peas', image: 'https://github.com/peas.png', link: 'https://github.com/peas' },
    { id: 'juunegreiros', name: 'juunegreiros', image: 'https://github.com/juunegreiros.png', link: 'https://github.com/juunegreiros' },
    { id: 'rla4', name: 'rla4', image: 'https://github.com/rla4.png', link: 'https://github.com/rla4' },
    { id: 'rafaballerini', name: 'rafaballerini', image: 'https://github.com/rafaballerini.png', link: 'https://github.com/rafaballerini' },
    { id: 'marceloliveira', name: 'marceloliveira', image: 'https://github.com/marceloliveira.png', link: 'https://github.com/marceloliveira' },
    { id: 'marcobrunodev', name: 'marcobrunodev', image: 'https://github.com/marcobrunodev.png', link: 'https://github.com/marcobrunodev' },
  ];

  const [validarForm, setValidarFrom] = useState(false);

   function handleCriaComunidade(e) {
    e.preventDefault();
    const dadosDoForm = new FormData(e.target);
    const comunidade = {
      id: new Date().toISOString,
      title: dadosDoForm.get('title'),
      image: dadosDoForm.get('image') ? dadosDoForm.get('image') : `https://picsum.photos/200?${Math.floor(Math.random() * 999)}`,
      link: dadosDoForm.get('link'),
    } 
    if(comunidade.titulo || comunidade.link){
      const comunidadesAtualizadas = [...comunidades, comunidade];
      setComunidades(comunidadesAtualizadas);
      setValidarFrom(false);
    }else{ 
      setValidarFrom(true);
    }
  }

  return (
    <>
      <AlurakutMenu githubUser={usuarioAleatorio}></AlurakutMenu>
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a), @{usuarioAleatorio}!
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={handleCriaComunidade}>
              <div>
                <input 
                placeholder="Qual vai ser o nome da sua comunidade?" 
                name="title" 
                aria-label="Qual vai ser o nome da sua comunidade?"
                type="text"
                />
              </div>
              <div>
                <input 
                placeholder="Coloque uma URL para usar de capa ou deixe com a gente :)" 
                name="image" 
                aria-label="Coloque uma URL para usar de capa ou deixe com a gente :)"               
                />
              </div>
              <div>
                <input 
                placeholder="Insira o link da comunidade" 
                name="link" 
                aria-label="Insira o link da comunidade"               
                />
              </div>
              {validarForm && <p className="atencaoValidacao">Atenção os campos Nome da comunidade e Link da comunidade precisam ser preenchidos.</p>}
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>
          <ProfileRelations name="Amigos" dados={pessoasFavoritas} />
          <ProfileRelations name="Comunidades" dados={comunidades} />
        </div>
      </MainGrid>
    </>
  )
}