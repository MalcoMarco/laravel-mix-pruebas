<template>
  <div>
    <div class="text-end">
      <b class="me-3">Solicitud Para:</b>     
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          id="solicitante"
          name="solicitud_para"
          value="Solicitante"
        />
        <label class="form-check-label" for="solicitante">Solicitante</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          id="cosolicitante"
          name="solicitud_para"
          value="Co-Solicitante"
        />
        <label class="form-check-label" for="cosolicitante">
          Co-Solicitante
        </label>
      </div>
    </div>
    <h4>1. DATOS DE LA OPERACIÓN</h4>

    <div class="row mb-2">
      <div class="col-md-6 row mb-2">
        <label for="monto" class="col-5 col-form-label col-form-label-sm">
          Monto Solicitado
        </label>
        <div class="col-7">
          <input
            type="text"
            class="form-control form-control-sm"
            id="monto"
            name="monto"
          />
        </div>
      </div>
      <div class="col-md-6 row mb-2">
        <label for="plazo" class="col-5 col-form-label col-form-label-sm">
          Plazo
        </label>
        <div class="col-7">
          <input
            type="text"
            class="form-control form-control-sm"
            id="plazo"
            name="plazo"
          />
        </div>
      </div>
      <div class="col-md-6 row mb-2">
        <label for="finalidad" class="col-5 col-form-label col-form-label-sm">
          Finalidad
        </label>
        <div class="col-7">
          <input
            type="text"
            class="form-control form-control-sm"
            id="finalidad"
            name="finalidad"
          />
        </div>
      </div>
      <div class="col-md-6 row mb-2">
        <label
          for="frecuencia_pago"
          class="col-5 col-form-label col-form-label-sm"
        >
          Frecuencia de Pago
        </label>
        <div class="col-7">
          <input
            type="text"
            class="form-control form-control-sm"
            id="frecuencia_pago"
            name="frecuencia_pago"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Myinput from './componet/Myinput.vue';
export default {
  components: { Myinput },};
</script>

<style lang="scss" scoped>
</style>