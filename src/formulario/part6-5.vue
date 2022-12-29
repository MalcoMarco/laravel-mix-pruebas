<template>
  <div class="col-md-6 border py-3">
    <div class="row border-bottom mb-2">
      <div class="col-4"><b>5- GASTOS</b></div>
      <div class="col-8 text-center"><b>RSD$</b></div>
    </div>

    <div class="row">
      <Myinput
        :label="'Acueducto'"
        :name="'gastos_acueducto'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Alimentación'"
        :name="'gastos_alimentacion'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Alquiler Vivienda'"
        :name="'gastos_alquiler_vivienda'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Aporte a Terceros'"
        :name="'gastos_aporte_terceros'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Colegios'"
        :name="'gastos_colegios'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Cuota de Prestamos'"
        :name="'gastos_cuota_prestamo'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Cuotas y membresias'"
        :name="'gastos_cuotas_membresias'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Empleado Domestico'"
        :name="'gastos_empleado_domes'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Factura Eléctrica y Otros'"
        :name="'gastos_factura_electrica'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Gastos Extraordinarios'"
        :name="'gastos_extraordinarios'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Gastos Personales'"
        :name="'gastos_personales'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Internet'"
        :name="'gastos_iternet'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Limpieza'"
        :name="'gastos_limpieza'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Mant. y Rep. Otros Bienes'"
        :name="'gastos_man_rep_bienes'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Mant. y Rep. Vehículos'"
        :name="'gastos_man_rep_vehiculos'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Mant. y Rep. Vivienda'"
        :name="'gastos_mant_rep_vivienda'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'medicina'"
        :name="'gastos_medicina'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Tele cable'"
        :name="'gastos_tele'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Transporte'"
        :name="'gastos_transporte'"
        :labelcolumn="5"
        :classcolumm="12"
      />
      <Myinput
        :label="'Viajes y Entretenimiento'"
        :name="'gastos_viajes'"
        :labelcolumn="5"
        :classcolumm="12"
      />

    </div>

    <div class="row col-12 py-1 bg-gray">
      <label
        for="gastos_total"
        class="col-5 col-form-label col-form-label-sm py-0 d-center"
      >
        TOTAL GASTOS
      </label>
      <div class="col-7">
        <div class="input-group">
          <span class="input-group-text" id="basic-addon1">RD$</span>
          <input
            type="text"
            class="form-control form-control-sm"
            name="gastos_total"
          />
        </div>
      </div>
    </div>
    <div class="col-md-12 row py-1">
      <label
        for="ahorros_mensuales"
        class="col-5 col-form-label col-form-label-sm py-0 d-center"
      >
        <b>AHORROS MENSUALES</b>
      </label>
      <div class="col-7">
        <div class="input-group">
          <span class="input-group-text" id="basic-addon1">RD$</span>
          <input
            type="text"
            class="form-control form-control-sm"
            name="ahorros_mensuales"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>