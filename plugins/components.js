import Vue from "vue";

import Contact from "~/components/sections/Contact.vue";
import Divider from "~/components/Divider.vue";
import HeaderBar from "~/components/HeaderBar.vue";
import Introduction from "~/components/sections/Introduction.vue";
import MainLogo from "~/components/sections/MainLogo.vue";
import PageSection from "~/components/PageSection.vue";
import TextRoller from "~/components/TextRoller.vue";
import Therapies from "~/components/sections/Therapies.vue";

Vue.component("contact", Contact);
Vue.component("divider", Divider);
Vue.component("header-bar", HeaderBar);
Vue.component("introduction", Introduction);
Vue.component("main-logo", MainLogo);
Vue.component("page-section", PageSection);
Vue.component("text-roller", TextRoller);
Vue.component("therapies", Therapies);
