/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Cronômetro Reverso */
const formatDigit = digit => `0${digit}`.slice(-2)
const formatDigitDays = digit => `0${digit}`.slice(-3)

const update = time => {
  const seconds = document.getElementById('segundos')
  const minuts = document.getElementById('minutos')
  const hours = document.getElementById('horas')
  const days = document.getElementById('dias')

  const qttSeconds = time % 60
  const qttMinuts = Math.floor((time % (60 * 60)) / 60)
  const qttHours = Math.floor((time % (60 * 60 * 24)) / (60 * 60))
  const qttDays = Math.floor(time / (60 * 60 * 24))

  seconds.textContent = formatDigit(qttSeconds)
  minuts.textContent = formatDigit(qttMinuts)
  hours.textContent = formatDigit(qttHours)
  days.textContent = formatDigitDays(qttDays)
}

const countdown = time => {
  const stopCountdown = () => clearInterval(id)

  const startCountdown = () => {
    if (time === 0) {
      stopCountdown()
    }
    update(time)
    time--
  }

  const id = setInterval(startCountdown, 1000)
}

const timeLeft = () => {
  const dataEvent = new Date('2021-11-26 01:00:00')
  const today = Date.now()
  return Math.floor((dataEvent - today) / 1000)
}

countdown(timeLeft())

/* função LocalStorage */

const form = document.getElementById('form')
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        let nome = document.getElementById('name').value;        
        let email = document.getElementById('email').value;

        let data = {
            nome,
            email,
        }
        let convertData = JSON.stringify(data);
        localStorage.setItem('lead', convertData)

        let content = document.getElementById('content')
        let carregando = `<p>Carregando...</p>`
        let pronto = `<p>Cadastrado com sucesso!</p>`

        cleanField()

        content.innerHTML = carregando;
        setTimeout(() => {
            content.innerHTML = pronto;
        },1000 )
        
    })

    function cleanField() {
      document.querySelector('#name').value = "";
      document.querySelector('#email').value = "";
      document.querySelector('#content').value = ""; 
   }

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})