<template>
  <section class="welcome">
    <article v-for="({ name, logoImage }, i) in techs" :key="i">
      <div class="tech--wrapper">
        <img :src="logoImage" :alt="name + ' image'" />
        <p>{{ name }}</p>
      </div>
    </article>
  </section>
</template>

<script setup>
import { ref } from "vue";

const getImageUrl = (name) =>
  new URL(`../assets/logos/${name}`, import.meta.url).href;

const techs = ref([
  {
    name: "Vite",
    logoImage: getImageUrl("vite-logo.svg"),
  },
  {
    name: "Vue 3",
    logoImage: getImageUrl("vue-logo.png"),
  },
  {
    name: "Vue Router",
    logoImage: getImageUrl("vueRouter-logo.png"),
  },
  {
    name: "Pinia",
    logoImage: getImageUrl("pinia-logo.svg"),
  },
  {
    name: "Jest",
    logoImage: getImageUrl("jest-logo.png"),
  },
  {
    name: "SASS",
    logoImage: getImageUrl("sass-logo.png"),
  },
  {
    name: "Material Design Icons",
    logoImage: getImageUrl("material-logo.png"),
  },
]);
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 200px;
  margin-inline: 5em;
  margin-block: 2em;
}

article {
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  position: relative;
  background: #151515;
  border-radius: 25px;
  padding: 5px;
  height: 150px;

  &:hover {
    box-shadow: 0px 0px 2px white, 0px 0px 10px blue, 0px 0px 30px magenta;

    p {
      color: white;
    }

    img {
      transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      animation: shake 0.2s cubic-bezier(0.5, 0, 0.5, 1);
      filter: drop-shadow(0 0 20px rgb(29, 83, 101)) brightness(1.5);
    }
  }
}
img {
  position: absolute;
  right: -2em;
  top: -4em;
  width: 120px;
  margin: 0 auto;
  height: auto;
  max-height: 120px;
  padding: 5px;
}

p {
  color: cyan;
  font-size: 25px;
  text-transform: uppercase;
}

.tech--wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

@keyframes shake {
  0% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-5px, 0);
  }
  20% {
    transform: translate(5px, 0);
  }
  30% {
    transform: translate(-5px, 0);
  }
  40% {
    transform: translate(5px, 0);
  }
  50% {
    transform: translate(-5px, 0);
  }
  60% {
    transform: translate(5px, 0);
  }
  70% {
    transform: translate(-5px, 0);
  }
  80% {
    transform: translate(5px, 0);
  }
  90% {
    transform: translate(-5px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
