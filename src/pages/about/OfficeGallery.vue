<template>
    <div class="wrapper">
        <div class="section">
            <div class="about-office">
                <div class="container">
                    <div class="row text-center">
                        <div class="col-md-8 ml-auto mr-auto">
                            <h2 class="title">Our office is our second home</h2>
                            <h4 class="description">Here are some pictures from our office. You can see the place
                                looks like a palace and is fully equiped with everything you need to get the job
                                done.</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <img class="rounded img-raised" alt="Raised Image" src="img/dentist/image54.jpg">
                        </div>
                        <div class="col-md-4">
                            <img class="rounded img-raised" alt="Raised Image" src="img/dentist/image48.jpg">
                        </div>
                        <div class="col-md-4">
                            <img class="rounded img-raised" alt="Raised Image" src="img/dentist/image57.jpg">
                        </div>
                        <div class="col-md-6">
                            <img class="rounded img-raised" alt="Raised Image" src="img/dentist/image63.jpg">
                        </div>
                        <div class="col-md-6">
                            <img class="rounded img-raised" alt="Raised Image" src="img/dentist/image44.jpg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import { Card, Button, Badge, InfoSection, FormGroupInput, Checkbox } from '@/components';
  import { Select, Option } from 'element-ui'

  export default {
    name: 'about-us',
    bodyClass: 'about-us',
    components: {
      Card,
      InfoSection,
      Badge,
      [Button.name]: Button,
      [Checkbox.name]: Checkbox,
      [FormGroupInput.name]: FormGroupInput,
      [Select.name]: Select,
      [Option.name]: Option,
    },
    data() {
      return {
        form: {
          firstName: '',
          email: '',
          speciality: ''
        }
      }
    }
  }
</script>
<style>
</style>
