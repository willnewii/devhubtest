import Vue from "vue";
// import ViewUI from "view-design";
import { Button, Form, FormItem, Input, Icon, Menu, MenuItem, Submenu, Modal, Message } from "view-design";

Vue.component("Button", Button);
Vue.component("Form", Form);
Vue.component("FormItem", FormItem);
Vue.component("Input", Input);
Vue.component("Icon", Icon);
Vue.component("Menu", Menu);
Vue.component("MenuItem", MenuItem);
Vue.component("Submenu", Submenu);
Vue.component("Modal", Modal);

// Vue.use(ViewUI);
Vue.prototype.$Message = Message;
Vue.prototype.$Modal = Modal;

import "view-design/dist/styles/iview.css";
