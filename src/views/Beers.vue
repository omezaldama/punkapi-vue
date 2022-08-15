<template>
    <div class="beer-view">
        <search-bar></search-bar>
        <beers-table></beers-table>
        <paginator></paginator>
    </div>
</template>

<script>
import SearchBar from './../components/beers/SearchBar.vue';
import BeersTable from './../components/beers/BeersTable.vue';
import Paginator from './../components/beers/Paginator.vue';

export default {
    components: {
        SearchBar,
        BeersTable,
        Paginator,
    },
}
</script>

<style>
.beer-view {
    margin: 10px;
}
</style>
