import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu} from '../src/lib/OnekutCommons';


function ProfileSidebar (githubUser) {
  console.log(githubUser);
  return (
    <Box>
      <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px' }}/>
    </Box>
  )
}

export default function Home() {
  const githubUser = 'pablovr1000';
  const pessoasFavoritas = ['rodolfobitu', 'rooneysan', 'gabrielcarioca', '', '', '']

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser={githubUser} />  
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
          <Box>
            Bem vindo
          </Box>
        </div>
        <div className="profileRelactionsArea" style={{ gridArea: 'profileRelactionsArea'}}>
          <Box>
            Meus Amigos
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
