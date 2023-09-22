<template>
  <base-dialog v-if="inputIsInvalid" title="invalid" @close="confirmError">
  <template #default>
    <p>one input at least user didnt inter a value</p>
  </template>
  <template #actions>
    <base-btn @click="confirmError">
      okay
  </base-btn>
  </template>
</base-dialog>
    <base-card>
    <form @submit.prevent= "submitData">
        <div class="form-control">
            <label for="title">title</label>
            <input type="text" id="title" name="title" ref="titleInput"/>

        </div>
        <div class="form-control"> 
            <label for="description">description</label>
            <textarea type="text" id="description" name="description" ref="descInput"></textarea>
            
        </div>
        <div class="form-control">
            <label for="link">Link</label>
            <input type="url" name="link" id="link" ref="linkInput"/>
        </div>
        <base-btn type="submit" > Add Resource</base-btn>
    </form>
    </base-card>
</template>
<script>
// import BaseBtn from '../UI/BaseBtn.vue'
export default {

  // components: { BaseBtn },
    name : 'AddResource',
    inject : ['addResource'],
    methods : {
        submitData(){
            const enteredTitle= this.$refs.titleInput.value;
            const enteredLink = this.$refs.linkInput.value;
            const enteredDesc= this.$refs.descInput.value;
            if(enteredTitle.trim() === '' || enteredLink.trim() === '' || enteredDesc.trim() === '') {
              this.inputIsInvalid = true;
              return;
            }
            this.addResource(enteredTitle,enteredDesc,enteredLink);
          
        },
        confirmError(){
          this.inputIsInvalid = false;
        }
    },
    data(){
      return{
        inputIsInvalid : false ,
      }
    }
}
</script>
<style scoped>
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