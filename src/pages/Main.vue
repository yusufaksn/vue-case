<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <label for="">Search</label>
                <v-text-field
                        label="Search"
                        hide-details="auto"
                        type="text" v-model="searchQuery" placeholder="Search"
                ></v-text-field>
            </div>
        </div>

       <div class="row">
           <div class="col-12">
               <v-simple-table v-if="movieData.length">
                   <template>
                       <thead>
                       <tr>
                           <th class="text-left">
                               Name
                           </th>
                           <th class="text-left">
                               popularity
                           </th>
                           <th>
                               Vote Average
                           </th>
                       </tr>
                       </thead>
                       <tbody>
                       <tr
                               v-for="item in resultQuery"
                               :key="item.original_title"
                       >
                           <td>
                               <router-link   :to="{name: 'detailPage', params: {id: item.id}}"><i class="fa fa-eye"></i> {{ item.original_title }}</router-link>
                           </td>
                           <td>{{ item.popularity }}</td>
                           <td>{{ item.vote_average }}</td>
                       </tr>
                       </tbody>
                   </template>
               </v-simple-table>
           </div>
       </div>
    </div>
</template>

<script>

    export default {
        name: "Main",
        data() {
            return {
                searchQuery: null,
                movieData: []
            }
        },
        async created() {
            this.getList();
        },
        computed: {
            resultQuery() {
                if (this.searchQuery) {
                    return this.movieData.filter((items) => {
                        return this.searchQuery.toLowerCase().split(' ').every(v => items.original_title.toLowerCase().includes(v))

                    })
                } else {
                    return this.movieData;
                }
            }
        },
        methods: {
            async getList() {
                const response = await fetch("https://api.themoviedb.org/3/list/2?api_key=88709cfbee080ff7c8d0e83627aacf39");
                var data = await response.json();
                this.movieData = data.items.sort((a, b) => b.popularity - a.popularity);
            },
        }
    }
</script>

<style scoped>

</style>
