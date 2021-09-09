<template>

<div id="nav">
    <router-link to="/pokemon">Volver</router-link>
</div>
<div class="back">
  <div class="detail">
     
      <div class="detail-view">
            <div class="image">
                <img :src="imageUrl + $route.params.id + '.png'" alt="">
            </div>

            <div class="data">
                <h2>{{ pokemon.name }}</h2>
                <div class="property">
                    <div class="left">Base Experience</div>
                    <div class="right">{{ pokemon.base_experience }} XP</div>
                </div>
                <div class="property">
                    <div class="left">Weight</div>
                    <div class="right">{{ pokemon.weight / 10 }} kg</div>
                </div>
                <div class="property">
                    <div class="left">Height</div>
                    <div class="right">{{ pokemon.height / 10 }} m</div>
                </div>
                <h3>Pokemon Types</h3>
                <div class="types">
                    <div class="type" 
                        v-for="(value, index) in pokemon.types"
                        :key="'value'+index">
                        {{ value.type.name }}
                    </div>
                </div>
                <h3>Abilities</h3>
                <div class="abilities">
                    <div class="ability" 
                        v-for="(value, index) in pokemon.abilities"
                        :key="'value'+index">
                        {{ value.ability.name }}
                    </div>
                </div>
            </div>
        </div>
  </div>
  </div>
</template>




<script>
    export default {
        data(){
            return{
                pokemon: {},
                currentUrl: `https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`,
                imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`,
            }
        },
       methods: {
                  async consumirPoke(){
                      try {
                          const data = await fetch(this.currentUrl);
                          const objeto = await data.json();
                          this.pokemon = objeto;
                      } catch (error) {
                          console.log(error)
                      }
                  }
            
            },
            created(){
                this.consumirPoke();
            }
    }
</script>



<style>

.detail{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    top: 30vh;
    left: 0;
    height: calc(100vh - 20px);
}


.detail-view {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: 510px;
    padding: 50px 0 0;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 15px 30px rgba(0,0,0,.2),0 10px 10px rgba(0,0,0,.2);
    top: 12vh;
    border-radius: 1rem;
}

.image{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -60px;
    width: 120px;
    height: 120px;
    background-color: #2d608f;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0,0,0,.2), 0 10px 10px rgba(0,0,0,.2);
}

h2{
    text-transform: capitalize;
    font-size: 2.5rem;
    margin: 3rem 0;
}

      .data {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin-bottom: 40px;
      }

h3{
    width: 90%;
    max-width: 400px;
    font-size: 2rem;
    margin: 2rem 0;
}



.property {
          width: 90%;
          max-width: 400px;
          border-bottom: 1px solid #ccc;
          margin-bottom: 10px;
}

          .left { float: left; }
          .right { float: right; }

            .types, .abilities {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          width: 90%;
          max-width: 400px;
            }

                      .type, .ability {
            margin: 0 10px 10px 0;
            padding: 5px 10px;
            border-radius: 20px;
            color: #fff;
            font-size: 1rem;
            letter-spacing: 2px;
            text-transform: capitalize;
            word-wrap: none;
            word-break: keep-all;
          }

                    .type { background-color: #0A2E50; }
          .ability { background-color: #C73015; }

#nav {
  padding: 3rem 1rem;
}

#nav a {
    font-weight: 500;
    color:  #fff;
    font-size: 1.6rem;
    float: left;
    text-decoration: none;
    background-image: url('../assets/left-arrow-circle-solid-24.png');
    background-repeat: no-repeat;
    padding: .2rem 40px .2rem 55px;
    background-position: 10px center;
    border-radius: 1.4rem;
    background-color: #C73015;
    transition: 0.25s;
    box-shadow: 0 15px 30px rgba(0,0,0,.2),0 10px 10px rgba(0,0,0,.2);
}

#nav a:hover{
    letter-spacing: 2px;
}

</style>