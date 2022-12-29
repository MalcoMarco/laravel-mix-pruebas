<template>
  <div>
    <h4>5. REFERENCIAS</h4>
    <h6>PERSONALES</h6>
    <div class="row" v-for="i in 3" :key="'ref_per_' + i">
      <Myinput
        :label="'Nombre'"
        :name="'ref_per_nombre' + i"
        :classcolumm="3"
      />
      <Myinput
        :label="'Dirección'"
        :name="'ref_per_nombre' + i"
        :classcolumm="3"
      />
      <Myinput
        :label="'Teléfono'"
        :name="'ref_per_telefono' + i"
        :classcolumm="3"
      />
      <Myinput :label="'Edad'" :name="'ref_per_edad' + i" :classcolumm="3" />
      <hr />
    </div>
    <h6>FAMILIARES</h6>
    <div class="row" v-for="i in 3" :key="'ref_famil_' + i">
      <Myinput
        :label="'Nombre'"
        :name="'ref_famil_nombre' + i"
        :classcolumm="3"
      />
      <Myinput
        :label="'Dirección'"
        :name="'ref_famil_nombre' + i"
        :classcolumm="3"
      />
      <Myinput
        :label="'Teléfono'"
        :name="'ref_famil_telefono' + i"
        :classcolumm="3"
      />
      <Myinput :label="'Edad'" :name="'ref_famil_edad' + i" :classcolumm="3" />
      <hr />
    </div>

  </div>
</template>

<script>
import Myinput from "./componet/Myinput.vue";
export default {
  components: { Myinput },
};
</script>

<style lang="scss" scoped>
</style>