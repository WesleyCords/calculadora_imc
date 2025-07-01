import { useState } from 'react'

import Form from './components/Form'
import Resultado from './components/Resultado'

import "./styles/index.css"

function App() {
  //Criando um objeto com as informações que preciso.
  const [resultado, setResultado] = useState({
    imc: '',
    altura: '',
    peso: '',
    solucao: '',
    tipo: '',
    exibeInformacoes: false
  })

  //Função para calcular o IMC e assim preenchendo as outras informçaões.
  const calcularImc = (peso,altura) => {
    const pesoNum = Number.parseFloat(peso);
    const alturaNum = Number.parseFloat(altura);

    //Transformando altura em Metros.
    const AlturaEmMetros = alturaNum / 100

    //Caso a altura seja passada em metros, ele retorna uma mensagem para o úsuario.
    if(alturaNum < 3) {
      alert(`Digite a ALTURA em METROS. Exemplo: ${altura} para ${parseInt(AlturaEmMetros * 10000)}`)
      return
    }

    //Retornando um alerta caso os valores do campo não seja igual desejo.
    if (pesoNum === 0 || alturaNum === 0 || !peso || !altura) {
      alert('Por favor, Insira digitos/valor válidos')
      return
    }

    //criando variaveis que irei mudar/usar (Nomes iguais o do variavei funcional 'useState').
    const imc = pesoNum / (AlturaEmMetros * AlturaEmMetros)
    let solucao = ''
    let tipo = ''

    //Preenchendo de acordo com o IMC Calculado.
    if (imc < 18.5) {
      tipo = 'Abaixo do Peso Normal'
      solucao = 'Foque em aumentar a ingestão calórica com alimentos nutritivos (Fibras, Próteinas e Carboidratos). Inclua lanches calóricos entre refeições. Pratique musculação 3x/semana para ganhar massa magra e evite excesso de cardio. Consulte um médico se houver dificuldade persistente para ganhar peso.'
    } else if(imc >= 18.6 && imc <= 24.9) {
      tipo = 'Peso Normal'
      solucao = 'Mantenha hábitos saudáveis com uma dieta equilibrada. Pratique 30-60 minutos de atividade física diária e inclua exercícios de força 2x/semana. Priorize sono de qualidade e gereciamento de estresse para evitar compulsões.'
    } else if(imc >= 25 && imc <= 29.9){
      tipo = 'Excesso do Peso'
      solucao = 'Reduza porções e substitua alimentos refinados por integrais. Aumente o consumo de fibras e proteínas para saciedade, evitando frituras e bebidas açucaradas. Faça cardio moderado 5x/semana (30 min) e treino de força 2x/semana. Monitore medidas corporais e ajuste a dieta conforme necessário.'
    } else if(imc >= 30 && imc <= 34.9) {
      tipo = 'Obesidade Classe I'
      solucao = 'Adote um plano alimentar individualizado (com nutricionista), seguindo o método do prato (50% vegetais, 25% proteínas, 25% carboidratos complexos). Substitua sobremesas por frutas com canela e pratique exercícios de baixo impacto (hidroginástica, elíptico), evoluindo para treinos de resistência.'
    } else if(imc >= 35 && imc <= 39.9) {
      tipo = 'Obesidade Classe II'
      solucao = 'Siga um déficit calórico supervisionado, priorizando alimentos anti-inflamatórios (peixes, sementes, vegetais verdes). Faça exercícios adaptados (cadeira ergométrica, natação) e fortalecimento muscular, com apoio de fisioterapia se necessário. Busque acompanhamento psicológico para lidar com compulsões e ansiedade.'
    } else {
      tipo = 'Obesidade Classe III'
      solucao = 'Consulte um médico para avaliar necessidade de cirurgia bariátrica e trate comorbidades (diabetes, apneia). Siga dieta líquida/pastosa (se pós-cirúrgico) ou hipocalórica balanceada, com atividades supervisionadas (hidroterapia, fisioterapia respiratória). Acompanhe com equipe multidisciplinar (endócrino, nutricionista, psicólogo).'
    }

    //Retornando e colocando no obejto resultado.
    setResultado({
      imc: imc.toFixed(2),
      tipo,
      solucao,
      exibeInformacoes: true
    })
  }

  return (
    <div className="container">
      <Form onCalcular={calcularImc} />
      <Resultado informacoes={resultado} />
    </div>
  )
}

export default App
