<template>
    <div>
        <div class="d-flex justify-space-between" v-if="hasPrevPage || hasNextPage">
            <v-btn color="primary" :disabled="!hasPrevPage" @click="() => handlePageChange(-1)">
                Prev
            </v-btn>
            <span>Page: {{page}}</span>
            <v-btn color="primary" :disabled="!hasNextPage" @click="() => handlePageChange(1)">
                Next
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        page() {
            return this.$store.state.filters.page;
        },
        hasPrevPage() {
            return this.$store.state.hasPrevPage;
        },
        hasNextPage() {
            return this.$store.state.hasNextPage;
        },
    },
    methods: {
        handlePageChange(increment) {
            this.$store.dispatch('getBeers', {page: this.page + increment});
        },
    },
}
</script>
