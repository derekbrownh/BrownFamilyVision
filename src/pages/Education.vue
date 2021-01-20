<template>
    <div class="cd-section" id="headers">

        <education-header></education-header>

        <br><br>
        <tabs type="primary" tabContentClasses="tab-subcategories"
          square centered>
          <tab-pane > 
          <span slot="label">
            Oral Health
          </span>
            <oral-health></oral-health>
          </tab-pane>
          <tab-pane>
          <span slot="label" @click="changeTab(1)">
            Post-op Instructions
          </span>
            <post-op-instructions></post-op-instructions>
          </tab-pane>
          <tab-pane>
          <span slot="label" @click="changeTab(2)">
            FAQ's and Links
          </span>
            <faq-and-links></faq-and-links>
          </tab-pane>
        </tabs>
        
    </div>
</template>
<script>
  import OralHealth from './Education/OralHealth.vue';
  import EducationHeader from './Education/EducationHeader.vue';
  import { Card, InfoSection, Badge, Button, Tabs, TabPane } from '@/components';
  import PostOpInstructions from './Education/PostOpInstructions.vue';
  import FaqAndLinks from './Education/FaqAndLinks.vue';



  export default {
    components: {
        OralHealth,
        EducationHeader,
        Tabs,
        TabPane,
        PostOpInstructions,
        FaqAndLinks
    },
  }
</script>


<style>
</style>

