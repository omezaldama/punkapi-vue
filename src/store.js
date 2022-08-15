import Vue from 'vue'
import Vuex from 'vuex'
import RequestsService from './requests-service';
import configs from './config';

Vue.use(Vuex);

const PER_PAGE = 5;

export default new Vuex.Store({
    state() {
        return {
            loading: false,
            beers: [],
            filters: {
                page: 1,
                perPage: PER_PAGE,
            },
            page: 1,
            hasPrevPage: false,
            hasNextPage: false,
        };
    },
    mutations: {
        setLoading(state, loading) {
            state.loading = loading;
        },
        setBeers(state, beers) {
            state.beers = beers;
        },
        setFilters(state, filters) {
            state.filters = { ...filters };
        },
        setHasPrevPage(state, hasPrevPage) {
            state.hasPrevPage = hasPrevPage;
        },
        setHasNextPage(state, hasNextPage) {
            state.hasNextPage = hasNextPage;
        },
    },
    actions: {
        getBeers({commit, state}, queryParams) {
            commit('setLoading', true);
            commit('setHasPrevPage', false);
            commit('setHasNextPage', false);
            const allFilters = {
                ...state.filters,
                ...queryParams,
            };
            commit('setFilters', allFilters);
            RequestsService.get(configs.PUNKAPI_URL, allFilters)
            .then(beers => {
                commit('setBeers', beers);
                // NOTE: La API no me devuelve la cantidad total de resultados, así que si alcanza a llenar la página, asumo que hay más (esto es falso si el total es múltiplo de 5):
                if (beers.length == PER_PAGE) commit('setHasNextPage', true);
                if (allFilters.page > 1) commit('setHasPrevPage', true);
            })
            .catch(() => commit('setBeers', []))
            .finally(() => commit('setLoading', false));
        },
    },
});
