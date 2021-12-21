<template>
    <div class="container">
       <div class="row">
           <div class="col-9">
               <h3>
                Title :   {{movieDetail.original_title}}
               </h3>
           </div>
           <div class="col-3">
               <router-link   :to="{name: 'homePage'}"><i class="fa fa-eye"></i>MOVIE LIST</router-link>
           </div>
       </div>

        <br>
        <div class="row">
            <div class="col">
                Over View
                <v-divider></v-divider>
                <br>
                     {{movieDetail.overview}}
            </div>
        </div>

        <div class="row">
            <div class="col">
                Vote Average :{{movieDetail.vote_average}}
            </div>
        </div>
        <div class="row">
            <div class="col">
                Tag Line :{{movieDetail.tagline}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detail",
        data(){
            return{
                movieDetail:[]
            }
        },
        created(){
            this.getDetail();
        },
        methods:{
            async getDetail() {
                const apiKey = "api_key=88709cfbee080ff7c8d0e83627aacf39&language=en-US";
                const movieId = this.$route.params.id;
                const response = await fetch("https://api.themoviedb.org/3/movie/" + movieId + '?' + apiKey);
                var data = await response.json();
                this.movieDetail = data;
                console.log(this.movieDetail);
            },
        }
    }
</script>

<style scoped>

</style>
