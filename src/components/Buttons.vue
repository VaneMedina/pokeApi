<template>
  <div class="buttons">
        <button @click="prev" class="btn prev"><i class="fas fa-arrow-left"></i> Prev</button>
        <button @click="next" class="btn next">Next <i class="fas fa-arrow-right"></i></button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.buttons{
    margin: 8rem auto;
}

.buttons .next{
    background-color: #C73015;
    margin-left: 2rem;
}
.buttons .prev{
    background-color: #0A2E50;
}

.buttons button{
    border-radius: 1.2rem;
    box-shadow: 0 15px 30px rgba(0,0,0,.2),0 10px 10px rgba(0,0,0,.2);
    color: #fff;
    padding: .6rem 2.5rem;
    transition: 0.25s;
}

.buttons button:hover{
    letter-spacing: 2px;
    color: #fff;
}

.buttons button:focus{
    outline: none;
    box-shadow: none;
}
</style>