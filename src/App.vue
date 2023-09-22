<template>
  <div>
    <the-header title="Remembre Me"></the-header>
    <the-resources></the-resources>
    <!-- <stored-resources :resources="this.storedResources"></stored-resources> -->
  </div>
</template>
<script>
// import StoredResources from './Components/LearningResources/StoredResources.vue';
import TheHeader from './Components/layouts/TheHeader.vue';
import TheResources from './Components/LearningResources/TheResources.vue';

export default {
    components: {
      TheResources,
        TheHeader
    },
    data(){
       return{
        
       }
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
/* ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
} */
</style>