<template>
  <div id="case-studies" class="tech flex flex-col h-screen w-full justify-center items-center">
    <div class="text-center max-w-2xl">
      <h1 class="text-3xl font-bold mb-8 p-2">Core Technologies</h1>
      <p class="text-sm p-2 pt-0">
        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex
        odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque
        habitant.
      </p>
    </div>
    <div
      class="skill bg-[#fffffff2] rounded-full text-sm mt-6 font-semibold flex text-center justify-between items-center shadow-2xl p-4 gap-8 shadow-[#0E77FF26]"
    >
      <div
        class="px-4 py-2 text-center pl-8 cursor-pointer hover:text-[#0E77FF]"
      >
        Design
      </div>
      <div
        class="border-x px-8 py-2 text-center border-black cursor-pointer hover:text-[#0E77FF]"
      >
        Development
      </div>
      <div
        class="px-4 py-2 text-center pr-8 cursor-pointer hover:text-[#0E77FF]"
      >
        Marketing
      </div>
    </div>
    <div class="tools flex gap-4 max-w-6xl flex-wrap justify-center mt-24">
      <div
        v-for="(icon, index) in icons"
        :key="index"
        class="p-4 w-[140px] cursor-pointer h-[140px] border flex justify-center items-center rounded-lg border-[#0E77FF] hover:bg-[#0E77FF]"
      >
        <component :is="icon.component" />
      </div>
    </div>
  </div>
</template>

<script>
import ReactIcon from "./TestimonialsIcons/ReactIcon.vue";
import AwsIcon from "./TestimonialsIcons/AWSIcon.vue";
import CloudIcon from "./TestimonialsIcons/CloudIcon.vue";
import ReduxIcon from "./TestimonialsIcons/ReduxIcon.vue";
import JsIcon from "./TestimonialsIcons/JSIcon.vue";
import SalesForceIcon from "./TestimonialsIcons/SalesForceIcon.vue";
import NodeJsIcon from "./TestimonialsIcons/NodeJSIcon.vue";
import FireBaseIcon from "./TestimonialsIcons/FirebaseIcon.vue";
export default {
  name: "CoreTechnologies",
  components: {
    ReactIcon,
    AwsIcon,
    CloudIcon,
    ReduxIcon,
    JsIcon,
    SalesForceIcon,
    NodeJsIcon,
    FireBaseIcon,
  },
  data() {
    return {
      icons: [
        { component: "ReactIcon" },
        { component: "AwsIcon" },
        { component: "CloudIcon" },
        { component: "ReduxIcon" },
        { component: "JsIcon" },
        { component: "SalesForceIcon" },
        { component: "AwsIcon" },
        { component: "SalesForceIcon" },
        { component: "ReduxIcon" },
        { component: "NodeJsIcon" },
        { component: "FireBaseIcon" },
        { component: "ReactIcon" },
        { component: "JsIcon" },
      ],
    };
  },
};
</script>

<style>
.tech {
  background-image: url("../../assets/Group 35700.png");
  background-size: 35%; /* Ensures the image scales proportionally */
  background-repeat: no-repeat;
  background-position: -20% -20%;
}
.tools > div:hover svg#React-icon > *,
.tools > div:hover g#Amazon_Web_Services_Logo > *,
.tools > div:hover g#Group_27 > *,
.tools > div:hover g#Google_Cloud_Logo > *,
.tools > div:hover g#redux-logo > *,
.tools > div:hover svg > *,
.tools > div:hover g#g12 > *,
.tools > div:hover g#redux-logo > *,
.tools > div:hover g#Nodejs_logo > *,
.tools > div:hover g#Group_35643 > *,
.tools > div:hover g#Group_35644 > *,
.tools > div:hover g#Group_35645 > * {
  fill: white;
}

.tools > div:hover g#g12 > path {
  stroke: #0e77ff;
  fill: #0e77ff;
}
</style>
