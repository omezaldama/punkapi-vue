<template>
    <v-expansion-panels>
        <v-expansion-panel>
            <!-- // NOTE: Sólo incluí los campos que me sonaron conocidos (y eso que soy conocedor de cervezas xD), los demás los omití -->
            <v-expansion-panel-header>
                Advanced search
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-text-field
                            label="Yeast"
                            v-model="filters.yeast"
                            size="small"
                            clearable
                        ></v-text-field>
                    </v-col>
                    <v-col cols="10" sm="5">
                        <v-text-field
                            label="Malt"
                            v-model="filters.malt"
                            size="small"
                            clearable
                        ></v-text-field>
                    </v-col>
                    <v-col cols="10" sm="5"></v-col>
                    <v-col cols="12">
                        <v-menu
                            ref="menuAfter"
                            :close-on-content-click="true"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="filters.brewedAfter"
                                    label="Brewed after"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    clearable
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="filters.brewedAfter"
                                type="month"
                            ></v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col cols="12">
                        <v-menu
                            ref="menuBefore"
                            :close-on-content-click="true"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="filters.brewedBefore"
                                    label="Brewed before"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="filters.brewedBefore"
                                type="month"
                            ></v-date-picker>
                        </v-menu>
                    </v-col>
                </v-row>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
export default {
    props: ['filters'],
}
</script>
