<template>
    <div class="cd-section" id="headers" > 
        <about-us-header></about-us-header>
    </div>
</template>
<script>
  import { FormGroupInput, Button } from '@/components';
  import { Carousel, CarouselItem } from 'element-ui'
  import AboutUsHeader from './about/AboutUsHeader'


  export default {
    components: {
      AboutUsHeader
    }
  }
</script>


<style>
</style>
