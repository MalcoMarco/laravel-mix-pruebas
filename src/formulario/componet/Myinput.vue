<template>
  <div :class="`col-md-${classcolumm} row mb-2`" >
    <label :for="name" :class="`col-${labelcolumn} col-form-label col-form-label-sm`">
      {{label}}
    </label>
    <div :class="`col-${(12-labelcolumn)}`">
      <input
        :type="inputtype"
        class="form-control form-control-sm"
        :id="name"
        :name="name"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classcolumm: {
      type: Number,
      default: 6,
    },
    label: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      require: true,
    },
    labelcolumn: {
      type: Number,
      default: 5,
    },
    inputtype:{
        type: String,
        default:'text'
    }
  },
};
</script>

<style lang="scss" scoped>
</style>