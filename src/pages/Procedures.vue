<template>
    <div class="cd-section" id="headers">

        <procedures-header></procedures-header>
        <procedures-list></procedures-list>
        
    </div>
</template>
<script>
import ProceduresHeader from './procedures/ProceduresHeader.vue'
import ProceduresList from './procedures/ProceduresList.vue'



  export default {
    components: {
        ProceduresHeader,
        ProceduresList
        
    },
  }
</script>


<style>
</style>

