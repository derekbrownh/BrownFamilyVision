<template>
    <div class="cd-section" id="headers">
        <education-header></education-header>

        <div id="example-1">
          <button v-on:click="counter += 1">Add 1</button>
          <p>The button above has been clicked {{ counter }} times.</p>
        </div>

        <br><br>
        <tabs type="primary" tabContentClasses="tab-subcategories"
          square centered class="row">
          <tab-pane> 
          <span slot="label">
            Oral Health
          </span>
          </tab-pane>
          <tab-pane>
          <span slot="label" @click="changeTab(1)">
            Post-op Instructions
          </span>
          </tab-pane>
          <tab-pane>
          <span slot="label" @click="changeTab(2)">
            FAQ's and Links
          </span>
            <p>{{tabText.p31}}</p>
            <p>{{tabText.p32}}</p>
          </tab-pane>
        </tabs>

      
        <oral-health v-if="this.selected === 0"></oral-health>
        
        
    </div>
</template>
<script>
  import OralHealth from './Education/OralHealth.vue'
  import EducationHeader from './Education/EducationHeader.vue'
  import { Card, InfoSection, Badge, Button, Tabs, TabPane } from '@/components';



  export default {
    components: {
        OralHealth,
        EducationHeader,
        Tabs,
        TabPane
    },
    data() {
      return {
        selected: 1,
        counter: 0,
        tabText: {
          p11: "...",
          p12: "...",
          p21: "...",
          p22: "...",
          p31: "...",
          p32: "...",
        }
      }
    },
    methods: {
      changeTab(num) {
        this.selected = num;
        print("selected ------------- ", this.selected)
      }

    }
  }
</script>


<style>
</style>

