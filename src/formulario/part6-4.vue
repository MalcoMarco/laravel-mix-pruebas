<template>
  <div class="col-md-6 border py-3">
    <div class="row border-bottom mb-2">
      <div class="col-4"><b>4- INGRESOS</b></div>
      <div class="col-8 text-center"><b>RSD$</b></div>
    </div>

    <template>
      <Myinput
        :label="'Negocio (Monto por Mes)'"
        :name="'ingreso_negocio'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Antiguedad Negocio'"
        :name="'ingreso_antiguedad_negocio'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Otros Ingresos (mes)'"
        :name="'ingreso_otros_ingresos'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Antiguedad'"
        :name="'ingreso_antiguedad'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Frecuencia'"
        :name="'ingreso_frecuencia'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Remesas Monto Promedio al Mes'"
        :name="'ingreso_remesa_mes'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Antiguedad Rec. Remesas'"
        :name="'ingreso_antiguedad_remesas'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Frecuencia de Recepción'"
        :name="'ingreso_frec_recepcion'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Origen de Envio'"
        :name="'ingreso_orig_envio'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Persona que Envia'"
        :name="'ingreso_person_envia'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Renta y Alquileres'"
        :name="'ingreso_renta_alquileres'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Antiguedad'"
        :name="'ingreso_antiguedad_2'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Salario (Monto Mes)'"
        :name="'ingreso_salario_mes'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Antiguedad'"
        :name="'ingreso_antiguedad_3'"
        :labelcolumn="5"
        :classcolumm="12"
      />
    </template>

    <div class="w-100">
      <div class="col-md-12 row py-1 bg-gray">
        <label
          for="ingreso_total"
          class="col-5 col-form-label col-form-label-sm py-0 d-center"
        >
          TOTAL INGRESOS
        </label>
        <div class="col-7">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">RD$</span>
            <input
              type="text"
              class="form-control form-control-sm"
              name="ingreso_total"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>