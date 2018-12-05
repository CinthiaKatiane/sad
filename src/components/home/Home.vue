<template>
  <div>
    <!-- Masthead -->
    <header class="masthead text-white text-center">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <h1 class="mb-1">Sistema de Avaliação de Docentes</h1>
            <h3 class="mb-5">Digite o nome do docente ou disciplina que você procura no campo abaixo
              para saber as informações e opiniões dos alunos sobre eles.
            </h3>
          </div>
          <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <form>
              <div class="form-row">
                <div class="col-12 col-md-9 mb-2 mb-md-0">
                  <autocomplete type="text" class="form-control form-control-lg search" 
                  placeholder="Digite sua busca" v-model="search" :data="teachers"/>
                </div>
                <div class="col-12 col-md-3">
                  <router-link :to="{name: 'Perfil'}">
                    <button class="btn btn-block btn-lg btn-primary">IR</button>
                  </router-link>
                </div>
              </div> 
            </form>
          </div>
        </div>
      </div>
    </header>

    <!-- Icons Grid -->
    <section class="features-icons bg-light text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div class="features-icons-icon d-flex">
                <i class="icon-screen-desktop m-auto text-primary"></i>
              </div>
              <h3>Perfil do Docentes</h3>
              <p class="lead mb-0">Veja o perfil dos docentes do IMD e suas informações de forma eficiente e clara.</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div class="features-icons-icon d-flex">
                <i class="icon-layers m-auto text-primary"></i>
              </div>
              <h3>Faça análise conjunta</h3>
              <p class="lead mb-0">Faça análise conjunta dos perfis de docentes que lecionam a mesma disciplina.</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="features-icons-item mx-auto mb-0 mb-lg-3">
              <div class="features-icons-icon d-flex">
                <i class="icon-check m-auto text-primary"></i>
              </div>
              <h3>Avalie os docentes</h3>
              <p class="lead mb-0">Para aqueles professores que você já conhece, você pode nós ajudar avaliando seu desempenho e postura.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Showcases -->
    <section class="showcase">
      <div class="container-fluid p-0">
        <div class="row">
          <div class="col-lg-6 order-lg-2" style="vertical-align:middle" >
            <div>
              <img src='./../img/evaluation.png' alt='' class="img-fluid mx-auto aboutImg"/>
            </div>
          </div>
          <div class="col-lg-6 order-lg-1 showcase-text">
            <h2>Sobre</h2>
            <p class="">
              SAD é um sistema idealizado para os alunos do IMD E consiste em uma plataforma
              para ajudar o discente a encontrar informações sobre os professores de forma 
              mais fácil e mais completa.
              <br> 
              Essas informações são coletadas dos dados de avaliação institucional do 
              docente (Dados Abertos da UFRN), informações de currículo e a avaliação realizada
              pelos discentes nessa plataforma.
   
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials text-center bg-light">
      <div class="container">
        <h2 class="mb-5">Equipe de Desenvolvimento</h2>
        <div class="row">
          <div class="col-lg-4">
            <div class="testimonial-item mx-auto mb-5 mb-lg-0">
              <img class="img-fluid rounded-circle mb-3" src="./../img/testimonials-1.jpg" alt="">
              <h5>Cinthia K.</h5>
              <p class="font-weight-light mb-0">Bio Cinthia</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="testimonial-item mx-auto mb-5 mb-lg-0">
              <img class="img-fluid rounded-circle mb-3" src="./../img/testimonials-2.jpg" alt="">
              <h5>Douglas S.</h5>
              <p class="font-weight-light mb-0">Bio Douglas</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="testimonial-item mx-auto mb-5 mb-lg-0">
              <img class="img-fluid rounded-circle mb-3" src="./../img/testimonials-3.jpg" alt="">
              <h5>Paulo S.</h5>
              <p class="font-weight-light mb-0">Bio Paulo</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="call-to-action text-white text-center">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <h3 class="mb-4">Quer contribuir com o desenvolvimento desse projeto?
              Cadastre seu email e entraremos em contato.</h3>
            
          </div>
          <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <form>
              <div class="form-row">
                <div class="col-12 col-md-9 mb-2 mb-md-0">
                  <input type="email" class="form-control form-control-lg" placeholder="Entre com email aqui">
                </div>
                <div class="col-12 col-md-3">
                  <button type="submit" class="btn btn-block btn-lg btn-primary">Sign up!</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
            <ul class="list-inline mb-2">
              <li class="list-inline-item">
                <a href="#">About</a>
              </li>
              <li class="list-inline-item">&sdot;</li>
              <li class="list-inline-item">
                <a href="#">Contact</a>
              </li>
              <li class="list-inline-item">&sdot;</li>
              <li class="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
              <li class="list-inline-item">&sdot;</li>
              <li class="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
            <p class="text-muted small mb-4 mb-lg-0">&copy; Your Website 2018. All Rights Reserved.</p>
          </div>
          <div class="col-lg-6 h-100 text-center text-lg-right my-auto">
            <ul class="list-inline mb-0">
              <li class="list-inline-item mr-3">
                <a href="#">
                  <i class="fab fa-facebook fa-2x fa-fw"></i>
                </a>
              </li>
              <li class="list-inline-item mr-3">
                <a href="#">
                  <i class="fab fa-twitter-square fa-2x fa-fw"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-instagram fa-2x fa-fw"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'

export default {
  name: 'Home',
  components:{
    'autocomplete': VueBootstrapTypeahead,
  },
  data: function(){
    return{
      search:'',
      teachers:['Cinthia', 'Jair Leite', 'Eiji Adachi'],
      classes: ['TECNOLOGIA DA INFORMAÇÃO E SOCIEDADE', 
                'PRÁTICAS DE LEITURA E ESCRITA EM PORTUGUÊS I',
                'CÁLCULO DIFERENCIAL E INTEGRAL I',
                'PROBABILIDADE', 'PRÁTICAS DE LEITURA E ESCRITA EM PORTUGUÊS II',
                'INTRODUÇÃO ÀS TÉCNICAS DE PROGRAMAÇÃO', 'ESTRUTURA DE DADOS BÁSICAS I',
                'VETORES E GEOMETRIA ANALÍTICA', 'ESTRUTURAS DE DADOS BÁSICAS II', 
                'REDES DE COMPUTADORES', 'LINGUAGEM DE PROGRAMAÇÃO I',
                'FUNDAMENTOS MATEMÁTICOS DA COMPUTAÇÃO I', 
                'RESOLUÇÃO DE PROBLEMAS MATEMÁTICOS PARA TI', 
                'PRÁTICAS DE LEITURA EM INGLÊS', 'LINGUAGEM DE PROGRAMAÇÃO II', 
                'FUNDAMENTOS MATEMÁTICOS DA COMPUTAÇÃO II','SISTEMAS OPERACIONAIS',
                'CIRCUITOS LÓGICOS', 'ORGANIZAÇÃO E ARQUITETURA DE COMPUTADORES',
                'INTRODUÇÃO AO CÁLCULO', 'LABORATÓRIO DE PROGRAMAÇÃO I',
                'LABORATÓRIO DE PROGRAMAÇÃO II', 'FUNDAMENTOS MATEMÁTICOS DA COMPUTAÇÃO',
                'PRÁTICAS DE LEITURA E ESCRITA EM INGLÊS', 'ELEMENTOS DE MATEMÁTICA PARA COMPUTAÇÃO',
                'BANCO DE DADOS', 'INTRODUÇÃO A ORGANIZAÇÃO E ARQUITETURA DE COMPUTADORES', 
                'DESENVOLVIMENTO DE SISTEMAS WEB II', 'DESENVOLVIMENTO DE SISTEMAS WEB I',
                'INTRODUÇÃO A SISTEMAS OPERACIONAIS']


    }
  }
}
</script>

<style>
@import url("./../css/landing-page.css");
@import url("./../css/landing-page.min.css");
@import url("./../vendor/bootstrap/css/bootstrap.min.css");
@import url("./../vendor/fontawesome-free/css/all.min.css");
@import url("./../vendor/simple-line-icons/css/simple-line-icons.css");
@import url("https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic");

.input-group>.custom-file, .input-group>.custom-select, .input-group>.form-control {
  border:0px;
  border-color: transparent;
  outline: none;
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}
*:focus {
  outline: none;
}

*, ::after, ::before{
  align-items: center;
}

</style>