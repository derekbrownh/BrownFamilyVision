<template>
    <div class="cd-section" id="headers" > 
        <new-header></new-header>
        <why-us></why-us>   
        <our-team></our-team>   
        <new-contact></new-contact>
    </div>
</template>
<script>
  import { FormGroupInput, Button } from '@/components';
  import { Carousel, CarouselItem } from 'element-ui'
  import WhyUs from './home/WhyUs'
  import OurTeam from './home/OurTeam'
  import NewHeader from './home/NewHeader'
  import NewContact from './home/NewContact'



  export default {
    components:{
      [Button.name]: Button,
      [FormGroupInput.name]: FormGroupInput,
      [Carousel.name]: Carousel,
      [CarouselItem.name]: CarouselItem
    },
    components: {
      WhyUs,
      OurTeam,
      NewHeader,
      NewContact
    }
  }
</script>


<style>
</style>
