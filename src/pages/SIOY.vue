<template>
    <div class="cd-section" id="headers">

        <sioy-header></sioy-header>
        <projects></projects>        
    </div>
</template>
<script>
  import OralHealth from './Education/OralHealth.vue';
  import { Card, InfoSection, Badge, Button, Tabs, TabPane } from '@/components';
import SioyHeader from './sioy/SioyHeader.vue';
import Projects from './sioy/Projects.vue';



  export default {
    components: {
        OralHealth,
        SioyHeader,
        Projects
    },
  }
</script>


<style>
</style>

