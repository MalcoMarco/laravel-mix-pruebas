<template>
  <div>
    <h4>2. DATOS PERSONALES</h4>
    <div class="row mb-2">
      <div class="col-md-6 row mb-2">
        <label for="apellidos" class="col-5 col-form-label col-form-label-sm">
          Apellidos
        </label>
        <div class="col-7">
          <input
            type="text"
            class="form-control form-control-sm"
            id="apellidos"
            name="apellidos"
          />
        </div>
      </div>
      <div class="col-md-6 row mb-2">
        <label for="nombres" class="col-5 col-form-label col-form-label-sm">
          Nombres
        </label>
        <div class="col-7">
          <input
            type="text"
            class="form-control form-control-sm"
            id="nombres"
            name="nombres"
          />
        </div>
      </div>
      <div class="col-md-6 row mb-2">
        <label for="cedula" class="col-5 col-form-label col-form-label-sm">
          Cédula
        </label>
        <div class="col-7">
          <input
            type="text"
            class="form-control form-control-sm"
            id="cedula"
            name="cedula"
          />
        </div>
      </div>
      <div class="col-md-6 row mb-2">
        <label for="alias" class="col-5 col-form-label col-form-label-sm">
          Alias
        </label>
        <div class="col-7">
          <input
            type="text"
            class="form-control form-control-sm"
            id="alias"
            name="alias"
          />
        </div>
      </div>
    </div>
    <div class="row mb-2">
      <div class="col-md-4 row mb-2">
        <label
          for="nacionalidad"
          class="col-5 col-form-label col-form-label-sm"
        >
          Nacionalidad
        </label>
        <div class="col-7">
          <input
            type="text"
            class="form-control form-control-sm"
            id="nacionalidad"
            name="nacionalidad"
          />
        </div>
      </div>
      <div class="col-md-4 row mb-2">
        <div class="col-5">Sexo</div>
        <div class="col-7">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="M"
              name="sexo"
              value="M"
            />
            <label class="form-check-label" for="M">M</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="F"
              name="sexo"
              value="F"
            />
            <label class="form-check-label" for="F"> F </label>
          </div>
        </div>
      </div>
      <div class="col-md-4 row mb-2">
        <label
          for="fechanacimiento"
          class="col-5 col-form-label col-form-label-sm"
        >
          Fecha de Nacimiento
        </label>
        <div class="col-7">
          <input
            type="date"
            class="form-control form-control-sm"
            id="fechanacimiento"
            name="fechanacimiento"
          />
        </div>
      </div>
      <div class="col-md-6 row mb-2">
        <div class="col-4">Estado Civil</div>
        <div class="col-8">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="soltero"
              name="estado_civil"
              value="Soltero"
            />
            <label class="form-check-label" for="soltero">Soltero</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="casado"
              name="estado_civil"
              value="Casado"
            />
            <label class="form-check-label" for="casado">Casado</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="unionlibre"
              name="estado_civil"
              value="Union Libre"
            />
            <label class="form-check-label" for="unionlibre">
              Union Libre
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="row mb-2">
      <div class="col-md-4 row mb-2">
        <label for="direccion" class="col-5 col-form-label col-form-label-sm">
          Dirección
        </label>
        <div class="col-7">
          <input
            type="text"
            class="form-control form-control-sm"
            id="direccion"
            name="direccion"
          />
        </div>
      </div>
      <div class="col-md-4 row mb-2">
        <label
          for="anios_residiendo"
          class="col-5 col-form-label col-form-label-sm"
        >
          Años residiendo
        </label>
        <div class="col-7">
          <input
            type="text"
            class="form-control form-control-sm"
            id="anios_residiendo"
            name="anios_residiendo"
          />
        </div>
      </div>
      <div class="col-md-4 row mb-2">
        <label for="sector" class="col-5 col-form-label col-form-label-sm">
          Sector
        </label>
        <div class="col-7">
          <input
            type="text"
            class="form-control form-control-sm"
            id="sector"
            name="sector"
          />
        </div>
      </div>
      <div class="col-md-4 row mb-2">
        <label
          for="num_dependientes"
          class="col-5 col-form-label col-form-label-sm"
        >
          No. de Dependientes
        </label>
        <div class="col-7">
          <input
            type="text"
            class="form-control form-control-sm"
            id="num_dependientes"
            name="num_dependientes"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 row">
        <div class="col-md-6 row mb-2">
          <label for="provincia" class="col-5 col-form-label col-form-label-sm">
            Provincia
          </label>
          <div class="col-7">
            <input
              type="text"
              class="form-control form-control-sm"
              id="provincia"
              name="provincia"
            />
          </div>
        </div>
        <div class="col-md-6 row mb-2">
          <label for="ciudad" class="col-5 col-form-label col-form-label-sm">
            Ciudad
          </label>
          <div class="col-7">
            <input
              type="text"
              class="form-control form-control-sm"
              id="ciudad"
              name="ciudad"
            />
          </div>
        </div>
        <div class="col-md-6 row mb-2">
          <label
            for="tel_residencial"
            class="col-5 col-form-label col-form-label-sm"
          >
            Tel. residencial
          </label>
          <div class="col-7">
            <input
              type="text"
              class="form-control form-control-sm"
              id="tel_residencial"
              name="tel_residencial"
            />
          </div>
        </div>
        <div class="col-md-6 row mb-2">
          <label for="tel_movil" class="col-5 col-form-label col-form-label-sm">
            Tel. Móvil
          </label>
          <div class="col-7">
            <input
              type="text"
              class="form-control form-control-sm"
              id="tel_movil"
              name="tel_movil"
            />
          </div>
        </div>
        <div class="col-md-6 row mb-2">
          <label for="correo" class="col-5 col-form-label col-form-label-sm">
            Correo Electrónico
          </label>
          <div class="col-7">
            <input
              type="text"
              class="form-control form-control-sm"
              id="correo"
              name="correo"
            />
          </div>
        </div>
      </div>
      <div class="col-md-4 row mb-2">
        <div class="col-3">Vivienda</div>
        <div class="col-9">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="vivienda"
              id="vivienda1"
              value="Propia con hipoteca"
            />
            <label class="form-check-label" for="vivienda1">
              Propia con hipoteca
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="vivienda"
              id="vivienda2"
              value="Propia sin hipoteca"
            />
            <label class="form-check-label" for="vivienda2">
              Propia sin hipoteca
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="vivienda"
              id="vivienda3"
              value="Alquilada"
            />
            <label class="form-check-label" for="vivienda3"> Alquilada </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="vivienda"
              id="vivienda4"
              value="Otro"
            />
            <label class="form-check-label" for="vivienda4"> Otro </label>
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