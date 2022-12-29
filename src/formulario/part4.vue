<template>
  <div>
    <h4>4. DATOS DEL CONYUGUE</h4>
    <div class="row mb-2">
      <Myinput
        :label="'Apellidos'"
        :name="'conyugue_apellidos'"
        :labelcolumn="3"
      />
      <Myinput :label="'Nombres'" :name="'conyugue_nombres'" :labelcolumn="3" />

      <Myinput
        :label="'Cedula'"
        :name="'conyugue_cedula'"
        :labelcolumn="4"
        :classcolumm="4"
      />
      <Myinput
        :label="'Alias'"
        :name="'conyugue_alias'"
        :labelcolumn="4"
        :classcolumm="4"
      />
      <Myinput
        :label="'Fech. Nacimiento'"
        :name="'conyugue_nacimiento'"
        :labelcolumn="4"
        :classcolumm="4"
        :inputtype="'date'"
      />

      <Myinput
        :label="'Lugar de Trabajo'"
        :name="'conyugue_lugar_trabajo'"
        :labelcolumn="4"
        :classcolumm="4"
      />
      <Myinput
        :label="'Posición'"
        :name="'conyugue_posicion'"
        :labelcolumn="4"
        :classcolumm="4"
      />
      <Myinput
        :label="'Tiempo Laborando'"
        :name="'conyugue_tiempo_laborando'"
        :labelcolumn="4"
        :classcolumm="4"
      />

      <Myinput
        :label="'Dirección'"
        :name="'conyugue_direccion'"
        :labelcolumn="3"
      />
      <Myinput
        :label="'Teléfono'"
        :name="'conyugue_telefono'"
        :labelcolumn="3"
      />

      <Myinput
        :label="'Sueldo'"
        :name="'conyugue_sueldo'"
        :labelcolumn="4"
        :classcolumm="4"
      />
      <Myinput
        :label="'Otros Ingresos'"
        :name="'conyugue_otros_ingresos'"
        :labelcolumn="4"
        :classcolumm="4"
      />
      <Myinput
        :label="'Detalle'"
        :name="'conyugue_detalle'"
        :labelcolumn="4"
        :classcolumm="4"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>