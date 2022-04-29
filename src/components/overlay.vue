<template>
  <div style="position: relative">
    <div
      :class="show ? 'd-flex' : 'd-none'"
      class="b-overlay position-absolute"
      style="inset: 0px; z-index: 10"
    >
      <div
        class="position-absolute bg-light rounded-sm"
        style="inset: 0px; opacity: 0.85"
      ></div>
      <div
        class="position-absolute"
        style="
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        "
      >
        <span aria-hidden="true" class="spinner-border"><!----></span>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    on() {
      document.getElementById("overlay").style.display = "flex";
    },
    of() {
      document.getElementById("overlay").style.display = "none";
    },
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
}
.none {
  display: none;
}
.spinner-1 {
  height: 60px;
  width: 60px;
  margin: auto;
  display: flex;
  position: absolute;
  -webkit-animation: rotation 0.6s infinite linear;
  -moz-animation: rotation 0.6s infinite linear;
  -o-animation: rotation 0.6s infinite linear;
  animation: rotation 0.6s infinite linear;
  //   background-image: url("../multimedia/images/load.png");
  //   background-size: contain;
  //   background-repeat: no-repeat;
  border-left: 6px solid rgba(0, 174, 239, 0.15);
  border-right: 6px solid rgba(0, 174, 239, 0.15);
  border-bottom: 6px solid rgba(0, 174, 239, 0.15);
  border-top: 6px solid rgba(0, 174, 239, 0.8);
  border-radius: 100%;
  animation-direction: var(--fa-animation-direction, reverse);
}

@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(359deg);
  }
}

@-moz-keyframes rotation {
  from {
    -moz-transform: rotate(0deg);
  }

  to {
    -moz-transform: rotate(359deg);
  }
}

@-o-keyframes rotation {
  from {
    -o-transform: rotate(0deg);
  }

  to {
    -o-transform: rotate(359deg);
  }
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}

#overlay {
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(223, 220, 220, 0.87);
  z-index: 2;
  cursor: pointer;
}
</style>