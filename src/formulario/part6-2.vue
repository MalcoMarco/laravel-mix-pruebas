<template>
  <div class="col-md-12 py-3">
    <div class="row border-bottom mb-2">
      <div class="col-4"><b>2- PASIVOS</b></div>
      <div class="col-8 text-center"><b>RSD$</b></div>
    </div>

    <template>
      <Myinput
        :label="'Contingencias'"
        :name="'pasiv_contingencias'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Cuentas por Pagar'"
        :name="'pasiv_cuentas_x_pagar'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Deudas Familiares y Amigos'"
        :name="'pasiv_deudas_fam'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Hipotecas'"
        :name="'pasiv_hipotecas'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Otras Deudas NEg.'"
        :name="'pasiv_otras_deudas'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Prestamos Comerciales'"
        :name="'pasiv_prestamos_comer'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Prestamos Personales'"
        :name="'pasiv_prestamos_pers'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Seguros'"
        :name="'pasiv_seguros'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Tarjeta de Crédito'"
        :name="'pasiv_tarj_cred'"
        :labelcolumn="5"
        :classcolumm="12"
      />
    </template>

    <div class="col-md-12 row py-1 mb-2 bg-gray">
      <label
        for="pasiv_total"
        class="col-5 col-form-label col-form-label-sm py-0 d-center"
      >
        TOTAL PASIVOS
      </label>
      <div class="col-7">
        <div class="input-group">
          <span class="input-group-text" id="basic-addon1">RD$</span>
          <input
            type="text"
            class="form-control form-control-sm"
            name="pasiv_total"
          />
        </div>
      </div>
    </div>
    <part-6-3 />
  </div>
</template>

<script>
import part63 from "./part6-3.vue";
export default {
  components: { part63 },
};
</script>

<style lang="scss" scoped>
</style>