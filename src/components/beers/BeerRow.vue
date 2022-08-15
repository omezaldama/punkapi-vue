<template>
    <tr>
        <td><v-img max-height="60" max-width="60" :src="beer.imageUrl || None" alt="no image" contain></v-img></td>
        <td>
            <div>
                <h3><b>{{beer.name}}</b>. <i><small>{{beer?.tagline}}</small></i></h3>
                <p class="hidden-md-and-down beer-description">{{beer?.description}}</p>
                <!-- // NOTE: Escondo la descipricón en pantallas pequeñas -->
            </div>
        </td>
        <td>{{beer?.ingredients?.malt?.[0]?.name}} / {{beer?.ingredients?.yeast}}</td>
        <td>{{beer.firstBrewed}}</td>
    </tr>
</template>

<script>
export default {
    props: ['beer'],
}
</script>

<style>
td {
    font-size: 12px;
    padding: 2px;
}
.beer-description {
    font-size: 9px;
    font-style: italic;
    color: #9B9B9B;
}
</style>
