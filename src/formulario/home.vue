<template>
  <div>
    <div class="container pb-3">
      <img
        src="https://mercantil.com.do/assets/front/img/5ea1c31e1b73f.png"
        alt=""
      />
      <h3 class="text-center mb-3">SOLICITUD DE PRÉSTAMO</h3>
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      <Part6 />
      <div class="w-100 text-center mt-3">
        <button class="btn btn-mercantil">SOLICITAR</button>
      </div>
    </div>
  </div>
</template>

<script>
import Part1 from "./part1.vue";
import Part2 from "./part2.vue";
import Part3 from "./part3.vue";
import Part4 from "./part4.vue";
import Part5 from "./part5.vue";
import Part6 from "./part6.vue";
export default {
  components: {
    Part1,
    Part2,
    Part3,
    Part4,
    Part5,
    Part6,
  },
};
</script>

<style lang="scss">
@import "../styles/bootstrap.scss";
body {
  background-color: #0a3041;
}
.container {
  background-color: aliceblue;
  border-radius: 12px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
h4 {
  background-color: #ff2320;
  color: white;
  padding-left: 1.5rem;
}
h6 {
  color: #ff2320;
  background-color: #d9d9d9;
  padding-left: 1.5rem;
}
.bg-gray {
  background-color: gainsboro;
  border-top: #ff2320 1px solid;
  border-bottom: #ff2320 1px solid;
}
.d-center {
  display: flex;
  align-items: center;
}
.border {
  border: 1px solid #ff2320 !important;
}
.btn-mercantil{
  background-color: #F55F32;
  color: #fff;
  border: 1px solid #F55F32;
}
.btn-mercantil:hover{
  background-color: #fff;
  color: #F55F32;
}
</style>