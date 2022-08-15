<template>
    <div class="search-bar">
        <v-row>
            <v-col cols="9" sm="5" lg="3">
                <v-text-field
                    label="Search beers"
                    v-model="query"
                    size="small"
                    clearable
                ></v-text-field>
            </v-col>
            <v-col cols="2" sm="1">
                <v-btn color="primary" @click="filterAndQuery" :disabled="loading">
                    <v-icon>mdi-magnify</v-icon>
                    <span>Beer me!</span>
                </v-btn>
            </v-col>
        </v-row>
        <!-- // NOTE: Creo que a los usuarios les gusta lo minimal, así que sólo pongo un campo de búsqueda, si alguien quiere algo más avanzado, puede usar los "filtros avanzados" -->
        <v-row>
            <v-col cols="10" sm="6">
                <beer-filters :filters="filters"></beer-filters>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import BeerFilters from './BeerFilters';

export default {
    components: {
        BeerFilters,
    },
    data: () => ({
        query: '',
        filters: {
            yeast: '',
            malt: '',
            food: '',
            brewedBefore: null,
            brewedAfter: null,
        },
    }),
    computed: {
        loading() {
            return this.$store.state.loading;
        },
    },
    methods: {
        filterAndQuery() {
            const queryParams = {
                beerName: this.query,
                ...this.filters,
                page: 1,
            }
            this.$store.dispatch('getBeers', queryParams);
        },
    },
};
</script>

<style>
.search-bar {
    margin: 15px;
}
</style>
