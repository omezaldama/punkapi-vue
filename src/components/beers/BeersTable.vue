<template>
    <div>
        <div v-if="!loading">
            <v-simple-table class="elevation-1">
                <template v-slot:default>
                    <thead v-if="beers.length">
                        <tr>
                            <th>&nbsp;</th>
                            <th class="text-left">Beer</th>
                            <th class="text-left">Malt / Yeast</th>
                            <th class="text-left">First brewed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <BeerRow v-for="beer in beers" :key="beer.id" :beer="beer"/>
                    </tbody>
                </template>
            </v-simple-table>
        </div>
        <div v-else>
            <v-icon>mdi-timer-sand</v-icon>
        </div>
    </div>
</template>

<script>
import BeerRow from './BeerRow.vue';
export default {
    components: {
        BeerRow,
    },
    computed: {
        beers() {
            return this.$store.state.beers;
        },
        loading() {
            return this.$store.state.loading;
        },
    },
}
</script>
