<template>
        <ul>
        <learning-resources 
        :title="resource.title"
        :id="resource.id"
        :description="resource.desc"
        :link="resource.link"
        v-for="resource in resources" :key="resource.id"></learning-resources>
    </ul>
</template>
<script>
import LearningResources from '../LearningResources/LearningResources.vue';

export default{
    inject : ['resources'] ,
    components : {
        LearningResources
    }
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>