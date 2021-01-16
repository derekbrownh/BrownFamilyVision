<template>
    <div class="cd-section" id="headers" >
        <div class="header-2">
            <div class="page-header header-filter">
                <div class="page-header-image" style="background-image: url('img/bg14.jpg')"></div>
                <div class="content-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 ml-auto mr-auto text-center">
                                <h1 class="title"> You should be here!</h1>
                                <h5 class="description">5,000 capacity venue, holding some of the latest technology
                                    lighting with a 24 colour laser system Amnesia is one of the islands most legendary
                                    clubs.</h5>
                            </div>
                            <div class="col-md-10 ml-auto mr-auto">
                                <div class="card card-raised card-form-horizontal card-plain" data-background-color>
                                    <div class="card-body">
                                        <form method="" action="">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <fg-input value="" placeholder="Full Name"></fg-input>
                                                </div>
                                                <div class="col-md-3">
                                                    <fg-input value="" placeholder="Your Email"></fg-input>
                                                </div>
                                                <div class="col-md-3">
                                                    <fg-input value="" placeholder="Password"></fg-input>
                                                </div>
                                                <div class="col-md-3">
                                                    <n-button type="primary" round block>Join Us</n-button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import { FormGroupInput, Button } from '@/components';
  import { Carousel, CarouselItem } from 'element-ui'

  export default {
    components:{
      [Button.name]: Button,
      [FormGroupInput.name]: FormGroupInput,
      [Carousel.name]: Carousel,
      [CarouselItem.name]: CarouselItem
    }
  }
</script>
<style>
</style>
