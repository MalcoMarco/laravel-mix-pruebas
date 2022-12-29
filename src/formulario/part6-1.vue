<template>
  <div class="col-md-6 border py-3">
    <div class="row border-bottom mb-2">
      <div class="col-4"><b>1- ACTIVOS</b></div>
      <div class="col-8 text-center"><b>RSD$</b></div>
    </div>
    <template>
      <Myinput
        :label="'Ahorros'"
        :name="'activ_ahorros'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Cuentas por Cobrar'"
        :name="'activ_cuentas_x_cobrar'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Dep. A Plazo e Inversiones'"
        :name="'activ_dep_aplazo'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Equipos Personales'"
        :name="'activ_equipos_personales'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Equipos y MAquinarias Neg.'"
        :name="'activ_equipos_maquinarias'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Inmuebles con Título'"
        :name="'activ_innumebles_con_titulo'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Inmuebles sin Título'"
        :name="'activ_innumebles_sin_titulo'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Inventario Mercancías Neg.'"
        :name="'activ_inventario_mercancia'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Licencias, Permisos'"
        :name="'activ_licencias_permisos'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Mobiliarios Neg.'"
        :name="'activ_mobiliarios_neg'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Muebles y Electrodomésticos'"
        :name="'activ_muebles_electrod'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Otras Propiedades Personales'"
        :name="'activ_otras_prop_personales'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Otras Propiedades Neg.'"
        :name="'activ_otras_prop_neg'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Punto Comercial'"
        :name="'activ_punto_comercial'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Valor Liquido Negocio'"
        :name="'activ_val_liquido'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Vehículos'"
        :name="'activ_vehiculos'"
        :labelcolumn="5"
        :classcolumm="12"
      />
    </template>
    <div class="col-md-12 row py-1 bg-gray">
      <label
        for="activ_total"
        class="col-5 col-form-label col-form-label-sm py-0 d-center"
      >
        TOTAL ACTIVOS
      </label>
      <div class="col-7">
        <div class="input-group">
          <span class="input-group-text" id="basic-addon1">RD$</span>
          <input
            type="text"
            class="form-control form-control-sm"
            name="activ_total"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <part-6-2 />
    </div>
  </div>
</template>

<script>
import Myinput from "./componet/Myinput.vue";
import Part62 from "./part6-2.vue";
export default {
  components: { Myinput, Part62 },
};
</script>

<style lang="scss" scoped>
</style>