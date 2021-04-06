import Vue from 'vue';
import { InfiniteScroll,Header,Button } from 'mint-ui';


Vue.use(InfiniteScroll);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);