<template>
  <div>
    <h4>3. DATOS FUENTE DE INGRESOS</h4>
    <div class="row mb-2">
      <div class="col-sm-3">Fuente de Ingresos:</div>
      <div class="col-sm-9">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="asalariado"
            value="Asalariado"
            name="fuente_ingresos"
          />
          <label class="form-check-label" for="asalariado">Asalariado</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="negpropio"
            value="Negocio Propio"
            name="fuente_ingresos"
          />
          <label class="form-check-label" for="negpropio">Negocio Propio</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="tpcp"
            value="Trabaja por Cuenta Propia"
            name="fuente_ingresos"
          />
          <label class="form-check-label" for="tpcp"
            >Trabaja por Cuenta Propia</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="rdr"
            value="Receptor de Remesas"
            name="fuente_ingresos"
          />
          <label class="form-check-label" for="rdr">Receptor de Remesas</label>
        </div>
      </div>
    </div>
    <h6>DATOS LABORALES</h6>
    <div class="row">
      <div class="col-md-5 row mb-2">
        <label
          for="lugar_trabajo"
          class="col-5 col-form-label col-form-label-sm"
        >
          Lugar de Trabajo
        </label>
        <div class="col-7">
          <input
            type="text"
            class="form-control form-control-sm"
            id="lugar_trabajo"
            name="lugar_trabajo"
          />
        </div>
      </div>
      <div class="col-md-4 row mb-2">
        <label for="posicion" class="col-5 col-form-label col-form-label-sm">
          Posición
        </label>
        <div class="col-7">
          <input
            type="text"
            class="form-control form-control-sm"
            id="posicion"
            name="posicion"
          />
        </div>
      </div>
      <div class="col-md-3 row mb-2">
        <label
          for="Fech. Ingreso"
          class="col-5 col-form-label col-form-label-sm"
        >
          Fech. Ingreso
        </label>
        <div class="col-7">
          <input
            type="date"
            class="form-control form-control-sm"
            id="Fech. Ingreso"
            name="Fecha_ingreso"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 row mb-2">
        <label
          for="direccion_trabajo"
          class="col-4 col-form-label col-form-label-sm"
        >
          Dirección
        </label>
        <div class="col-8">
          <input
            type="text"
            class="form-control form-control-sm"
            id="direccion_trabajo"
            name="direccion_trabajo"
          />
        </div>
      </div>
      <div class="col-md-6 row mb-2">
        <label
          for="telefono_trabajo"
          class="col-4 col-form-label col-form-label-sm"
        >
          Teléfono
        </label>
        <div class="col-8">
          <input
            type="text"
            class="form-control form-control-sm"
            id="telefono_trabajo"
            name="telefono_trabajo"
          />
        </div>
      </div>
      <div class="col-md-6 row mb-2">
        <label
          for="jefe_trabajo"
          class="col-4 col-form-label col-form-label-sm"
        >
          Jefe Inmediato
        </label>
        <div class="col-8">
          <input
            type="text"
            class="form-control form-control-sm"
            id="jefe_trabajo"
            name="jefe_trabajo"
          />
        </div>
      </div>
      <div class="col-md-6 row mb-2">
        <label
          for="fax_trabajo"
          class="col-4 col-form-label col-form-label-sm"
        >
          Fax
        </label>
        <div class="col-8">
          <input
            type="text"
            class="form-control form-control-sm"
            id="fax_trabajo"
            name="fax_trabajo"
          />
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