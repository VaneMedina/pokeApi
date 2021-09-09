<template>
<main>
    <div class="container">
        <h1>- Pokemon's -</h1>
        <div class="d-flex search" action="">
            <input type="text" v-model="search" placeholder="Buscá tus pokemon's..."/>
      </div>

        <div class="row justify-content-center">

            <div class="card col-lg-3 col-11 text-center" v-for="pokemon in filterPokemons" :key="pokemon.id">
                <div class="text-center">
                    <img :src="imageUrl + pokemon.id + '.png'" alt="">
                </div>
                    <h3 class="text-center">{{ pokemon.name }}</h3>
                    <div class="types">
                        <div class="type" 
                            v-for="(value, index) in pokemon.types"
                            :key="'value'+index">
                            {{ value.type.name }}
                        </div>
                    </div>
                <div>
                    <router-link :to="`/pokemon/${pokemon.id}`">Ver detalles</router-link>
                </div>
            </div>
        </div>
        <Buttons/>
    </div>
</main>
</template>

<script>
import Buttons from '../components/Buttons.vue'

    export default {
        components:{
            Buttons
        },
        data(){
            return{
                pokemons: [],
                currentUrl: 'https://pokeapi.co/api/v2/pokemon?limit=27&offset=0',
                imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
                pokemonUrl: '',
                search: '',
                nextUrl: '',
                prevUrl: '',
            }
        },
        methods: {
                  fetchData() {
                    let req = new Request(this.currentUrl);
                    fetch(req)
                    .then((resp) => {
                        if(resp.status === 200)
                        return resp.json();
                    })
                    .then((data) => {
                        this.nextUrl = data.next;
                        this.prevUrl= data.previous;
                        data.results.forEach(pokemon => {
                        pokemon.id = pokemon.url.split('/')
                            .filter(function(part) { return !!part }).pop();
                        this.pokemons.push(pokemon);
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                },
                next(){
                    if(this.nextUrl !== null){
                        this.pokemons = []
                        this.currentUrl = this.nextUrl;
                        this.fetchData();
                    }
                },
                prev(){
                    if(this.prevUrl !== null){
                        this.pokemons = []
                        this.currentUrl = this.prevUrl;
                        this.fetchData();
                    }
                },
            },
            created() {
                this.fetchData();
            },
            computed:{
                  filterPokemons() {
                            return this.pokemons.filter(pokemon => {
                                return pokemon.name.toLowerCase().includes(this.search.toLowerCase());
                            });
                        },
            }
    }
</script>


<style >

h1{
    margin: 3rem auto  !important;
    font-weight: 900 !important;
    font-size: 3.5rem !important;
    color: #C73015;
}

.card{
    margin: 1.5rem;
    height: 28vh;
    box-shadow: 0 15px 30px rgba(0,0,0,.2),0 10px 10px rgba(0,0,0,.2);
    padding: 1rem;
    border-bottom: 5px solid #0A2E50;
    border-right: none;
    border-left: none;
    border-top: none;
    border-radius: .8rem !important;
    background-color: #2d608f !important;
}


.card a{
    text-decoration: none;
    background-color: #C73015;
    padding: .5rem 1rem;
    color: #fff;
    border-radius: .9rem;
    transition: ease-in-out .3s;
    font-weight: 500;
    transition: 0.25s;
}

.card a:hover{
    color: #fff;
    letter-spacing: 2px;
}

.card img{
    width: 100px;
    height: 100px;
    object-fit: cover;
    text-align: center;
}

.card h3{
    margin-bottom: 2rem;
    font-size: 1.4rem;
    font-weight: 700;
    color: #fff;
    margin-left: 1rem;
}


.search{
    background-image: url('../assets/search-alt-2-regular-24.png');
    background-repeat: no-repeat;
    background-position: 990px center;
    background-size: 20px;
    width: 80%;
    padding-left: 10px;
    height: 2.5rem;
    border: .1rem solid #C73015;
    border-radius: .3rem;
    margin: 4rem auto;
}

@media (max-width:500px) {
    .search{
        width: 100%;
    }
    .buttons button{
        padding: .3rem 1rem !important;
    }
    .card{
        height: 35vh;
    }
}

@media (max-width:400px) {
    .card{
        height: 40vh;
    }
}

.search input{
    width: 100%;
    font-size: 0.9em;
    border: none;
    background-color: transparent;
}


.search input:focus {
  outline: none;
}


.search input::placeholder{
    font-weight: 600;
}

</style>