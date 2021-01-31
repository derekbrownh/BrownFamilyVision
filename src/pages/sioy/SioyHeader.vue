<template>
    <div class="wrapper">
        <div class="page-header page-header-small">
            <parallax class="page-header-image"
                 style="background-image: url('img/dentist/SIOY1.jpg')">
            </parallax>
            <div class="content-center">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto">
                        <h1 class="title">SIOY Crowd Showcase</h1>
                        <h4>We invite you to view each of our amazing teams, and vote at the link below.</h4>
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
