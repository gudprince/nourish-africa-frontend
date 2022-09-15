import Vue from "vue";
import customAxios from '../helpers/AxiosInstance';
const requestUrl = `/api/requests`;
const stateUrl = `/api/get-states`;


export default {
    namespaced: true,   
    state: {
        products: [],
        stateData: [],
        lgas: [],
        categories: [],
        //productsTotal: ' ',
        currentPage: 1,
        pageSize: 12,
        pages: [],
        serverPageCount: 0,
        sort: "",
        priceRange: "",
        listing: "",
        state_id: "",
        lga_id: "",
        property_type: "",
        toggleLga: false,
        property_status: null,
        requestIsEmpty: false,
        skeloader: true,
        bedroom: '',
    },
    getters: {
        processedRequests: (state) => {
            return state.pages[state.currentPage];
        },
        pageCount: (state) => state.serverPageCount,
    },
    mutations: {
        _setSkeloader(state, data){
            state.skeloader = data;
        },
        setStates(state, data){
            state.stateData = data
        },
        clearFilter(state) {
         
            state.state_id  =  "";
            state.lga_id  =  "";
            state.property_type  = "";
            state.bedroom = "";
            state.currentCategory = "";
        },
        _setLga(state, data){
            state.lga_id = data;
        },
        _setPropertyType(state, data){
            state.property_type = data;
        },
        _setState(state, data){
            state.state_id = data;
        },
        _setCurrentCategory(state, category) {
            state.currentCategory = category;
            state.currentPage = 1;
        },
        _setBedroom(state, room) {
            state.bedroom = room;
            state.currentPage = 1;
        },
        _setCurrentPage(state, page) {
            state.currentPage = page;
        },
        _setPageSize(state, size) {
            state.pageSize = size;
            state.currentPage = 1;
        },
        addPage(state, page) {
            
            if(page.data.length > 0) {
                for (let i = 0; i < page.pageCount; i++) {
                    Vue.set(state.pages, page.number + i,
                    page.data.slice(i * state.pageSize,
                    (i * state.pageSize) + state.pageSize));
                }
                state.requestIsEmpty = false;
            }
            else{
                state.pages.splice(0, state.pages.length);
                state.requestIsEmpty = true;
            }
          
            
        },
        clearPages(state) {
            state.pages.splice(0, state.pages.length);
        },
        setPageCount(state, count) {
            state.serverPageCount = Math.ceil(Number(count) / state.pageSize);
        },
    },
    actions: {
        async setSearch(context) {
            context.commit("clearPages");
            await context.dispatch("getPage", 2);
        },
        async getStates(context) {
            let sData = (await  customAxios.get(stateUrl)).data.data;
            console.log(sData)
            context.commit("setStates",sData);
        },
        async getPage(context, getPageCount = 1) {
            let requestUrl = `/api/requests?page=${context.state.currentPage}`;
            if (context.state.currentCategory != "" && context.state.currentCategory != null) {
                requestUrl += `&category=${context.state.currentCategory}`; 
            }
            if (context.state.searchWord != "" && context.state.searchWord != null) {
                requestUrl += `&query=${context.state.searchWord}`;
            }
            if (context.state.sort != "" && context.state.sort != null) {
                requestUrl += `&order_field=id&order_type=${context.state.sort}`;
            }
            if (context.state.priceRange != "" && context.state.priceRange != null) {
                requestUrl += `&price=${context.state.priceRange}`;
            }
            if (context.state.listing != "" && context.state.listing != null) {
                requestUrl += `&listed=${context.state.listing}`;
            }
            if (context.state.bedroom != "" && context.state.bedroom != null) {
                requestUrl += `&bedroom=${context.state.bedroom}`;
            }
            if (context.state.state_id != "" && context.state.state_id != null) {
                requestUrl += `&state_id=${context.state.state_id}`;
            }
            if (context.state.lga_id != "" && context.state.lga_id != null) {
                requestUrl += `&lga_id=${context.state.lga_id}`;
            }
            if (context.state.property_type != "" && context.state.property_type  != null) {
                requestUrl += `&product_type=${context.state.property_type}`;
            }
            let response = await  customAxios.get(requestUrl);
            console.log(getPageCount)
            console.log(response.data.data)
            context.commit("setPageCount", response.data.total);
            context.commit("addPage", { number: context.state.currentPage,
            data: response.data.data, pageCount: response.data.total});
            context.state.skeloader == false;
        },
        async addRequest(context, formData) {
            let pdata = (await customAxios.post(requestUrl,formData)).data;
            
            return pdata;
        },
        async getRequestList(context) {
            await context.dispatch("getPage", 2);
            //context.commit("setCategories", (await Axios.get(categoryProductUrl)).data.data);   
        },
        setCurrentPage(context, page) {
            context.commit("_setCurrentPage", page);
            if (context.state.pages[page] == '') {
                context.dispatch("getPage");
            }
        },
        async deleteRequest(context, id) {
            let data = (await customAxios.delete(requestUrl+'/'+id)).data;
            return data;
        },
    }
}