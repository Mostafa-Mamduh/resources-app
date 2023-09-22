<template>
    <base-card>
    <base-btn @click="setSelectedTab('stored-resources')" :mode="storedResourceTab">stored res</base-btn>
    <base-btn @click="setSelectedTab('add-resource')" :mode="addResourceTab">add res</base-btn>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>
<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
// import BaseCard from '../UI/BaseCard.vue';
export default {
    data(){
        return{
            selectedTab : 'stored-resources',
            storedResources : [
            {
                id : 'official-guide',
                title : 'Official Guide' , 
                desc : 'The official guide of vue js2',
                link : 'https://vuejs.org'
            },
            {
                id : 'google ',
                title : 'Google' , 
                desc : 'Learn to Google ...' ,
                link : 'https://google.org' 
            }
        ]
        };
    },
    components : {
        StoredResources,
        AddResource,
        
    },  
    provide(){
        return{  
        resources : this.storedResources,
        addResource : this.addResource,
        deleteResource : this.deleteResource,
        };
    },
    computed :{
        storedResourceTab(){
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
        addResourceTab(){
            return this.selectedTab === 'add-resource' ? null : 'flat';
        }
    },
    methods :{
        setSelectedTab(tab){
            this.selectedTab = tab ;
        },
        addResource(title,desc,url){
            const newResource = {
                id : new Date().toISOString(),
                title : title ,
                desc : desc ,
                link : url 
            };
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';

        },
        deleteResource(resId){
            const resIndex = this.storedResources.findIndex((res) => res.id === resId);
            this.storedResources.splice(resIndex , 1) ;
        }
    }
}
</script>
<style>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>