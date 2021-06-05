import { createStore } from 'vuex'

import featured from "./featured.module";
//import make from "./make.module";
//import model from "./model.module";

const store = createStore({
    modules: {
        featured: featured,
        //make,
        //model,
    }
});

export default store