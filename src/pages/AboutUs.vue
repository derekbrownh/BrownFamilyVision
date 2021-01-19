<template>
    <div class="cd-section" id="headers" > 
        <about-us-header></about-us-header>
        <the-dentists></the-dentists>
        <staff></staff>
        <office-gallery></office-gallery>
        <apply></apply>
        <!-- Some of Our Awesome Projects - 5       
        
        Latest Blogposts 4   
        
        Our office is our second home -->
        
    </div>
</template>
<script>
  import { FormGroupInput, Button } from '@/components';
  import { Carousel, CarouselItem } from 'element-ui'
  import AboutUsHeader from './about/AboutUsHeader'
  import Staff from './about/Staff.vue';
  import TheDentists from './about/TheDentists.vue';
  import OfficeGallery from './about/OfficeGallery.vue';
  import Apply from './about/Apply.vue';


  export default {
    components: {
      AboutUsHeader,
      Staff,
      TheDentists,
      OfficeGallery,
      Apply
    }
  }
</script>


<style>
</style>
