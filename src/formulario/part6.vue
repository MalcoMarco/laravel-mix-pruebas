<template>
  <div>
    <h4>6. ESTADO DE SITUACIÓN DE FLUJO DE EFECTIVO</h4>
    <div class="row" data-masonry='{"percentPosition": true }'>
      <part-6-1 />
      <part-6-4 />
      <part-6-5 />
      <div class="col-md-6">
        <p class="pt-3 px-3">
          Declaro que la información suministrada en este formulario son
          verdaderas. Asimismo, autorizo de manera expresa y sin reservas a
          Mercantil Financial Group a consultar mi historial crediticio en los
          bureau de información o cualquier otro medio pertinente, mientras
          permanezcan las relaciones bancarias, liberando a dicha Institución de
          cualquier responsabilidad o implicaciones establecidas en la Ley
          288-05 y sus modificaciones.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import part61 from "./part6-1.vue";
import Part64 from "./part6-4.vue";
import Part65 from "./part6-5.vue";

export default {
  components: { part61, Part65, Part64 },
};
</script>

<style lang="scss" scoped>
p{
    text-align: justify;
}
</style>