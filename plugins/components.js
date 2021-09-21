import Vue from "vue";

import HeaderBar from "~/components/HeaderBar.vue";
import Introduction from "~/components/sections/Introduction.vue";
import MainLogo from "~/components/sections/MainLogo.vue";
import PageSection from "~/components/PageSection.vue";
import TextRoller from "~/components/TextRoller.vue";

Vue.component("header-bar", HeaderBar);
Vue.component("introduction", Introduction);
Vue.component("main-logo", MainLogo);
Vue.component("page-section", PageSection);
Vue.component("text-roller", TextRoller);
