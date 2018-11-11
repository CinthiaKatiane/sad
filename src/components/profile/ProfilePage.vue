<template>
  <div id="production-page">
    <nav class="navbar navbar-light bg-light static-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <div class="row">
           <img src="./../img/a.png" width="50" height="50" class="d-inline-block align-top" alt="">
           <h1 class="ml-3" >SAD</h1>
           </div>
        </a>
        <a class="btn btn-primary" href="#">Login</a>
      </div>
    </nav>
    
    <div class='container'>
      <div class="row mt-5">
        <div class="mr-3">
          <img src="./../img/JairIMD.jpg" alt="teacher" class="profileImg ml-2">
        </div>
        <div>
        <h1>Nome: Jair Cavalcanti Leite</h1>
        <h3>Departamento: Dimap</h3>
        <h3>Função: Docente</h3>
        
        </div>
        <div> <img src="./../img/grade.png" alt="teacher" class="float-right grade "> </div>
          
      </div>
    <br>
    <hr>
    <h3>Disciplinas Ministradas</h3>
      <div>
        <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Código da disciplina</th>
      <th scope="col">Nome da disciplina</th>
      <th scope="col">Périodo</th>
      <th scope="col">Carga horária</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">12344</th>
      <td>Projeto de Interface de Usuário</td>
      <td>2018.2</td>
      <td>60h</td>
    </tr>
    <tr>
      <th scope="row">23456</th>
      <td>Projeto de Interface de Usuário</td>
      <td>2018.2</td>
      <td>60h</td>
    </tr>
    <tr>
      <th scope="row">34567</th>
      <td>Software Livre</td>
      <td>2018.1</td>
      <td>30h</td>
    </tr>
  </tbody>
</table>
      </div>
      <hr>
      <vue-plotly :data="data" :layout="layout" :options="options"/>
    <hr>
      <div>
        <div class="row">
        <h3>Comentários</h3>
        <div class="buttons">
          <button type="button" class="btn btn-secondary mr-1 ml-2">Comentar</button>
          <button type="button" class="btn btn-secondary mr-1 ml-2">Avaliar</button>
        </div>
        </div>
        <br>
        <div class="comment ml-5 mr-5">
          <div class="row">
            <div class="ml-4"><img src="./../img/testimonials-1.jpg" alt="teacher" class="img-thumbnail commentImg"></div>
            <div class="ml-3">
              <b>Cinthia Katiane</b>
              <br>
              <i style="font-size:0.9em;">Turma de PIU - 2018.2</i>
              <br>
              Esse professor é muito bom, a didática é ótima e a prova é bem coerente com o conteúdo dado em aula.
            </div>
          </div>
        </div>
        <br>
        <div class="comment ml-5 mr-5">
          <div class="row">
            <div class="ml-4"><img src="./../img/testimonials-3.jpg" alt="teacher" class="img-thumbnail commentImg"></div>
            <div class="ml-3">
              <b>Paulo Sandino</b>
              <br>
              <i style="font-size:0.9em;">Turma de PIU - 2018.2</i>
              <br>
              A prova é muito difícil e ele explica muito mal. Tive que estudar todo o conteúdo em casa com vídeo aulas.
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
  </div>
</template>

<script>
import VuePlotly from '@statnett/vue-plotly'

export default {
  name: 'ProfilePage',
  components:{
    VuePlotly,
  },
   data: function () {
    return {
      data: [{ x: [1, 2,3,4,5], y: [9.5, 9.5, 8.5,9.0,9.5] }, 
              {x: [1, 2,3,4,5], y: [8, 8.1, 9.3, 8.9, 10]},
              {x: [1, 2,3,4,5], y: [10, 8.9, 10, 8, 8.2 ]}],
      layout: {},
      options: {}
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

#production-page {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0px;
}
.main{
  margin-top: 30px;
}
.bar{
  margin: 2%;
  margin-left:0%;
}
.side{
  margin-top: 40px;
}
.comment{
  background-color:#f7f7f7  ;
}
.commentImg{
  width: 60px;
  height:60px;
}

.profileImg{
  width: 140px;
}

.grade{
  width: 60%;
  height: 60%;
}

</style>