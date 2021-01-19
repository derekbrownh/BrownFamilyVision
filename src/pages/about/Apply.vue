<template>
    <div class="wrapper">
        <div class="section">
            <div class="about-contact">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 mr-auto ml-auto">
                            <h2 class="text-center title">Want to work with us?</h2>
                            <h4 class="text-center description">Divide details about your product or agency work
                                into parts. Write a few lines about each one and contact us about any further
                                collaboration. We will get back to you in a couple of hours.</h4>
                            <form class="contact-form">
                                <div class="row">
                                    <div class="col-md-4">
                                        <label>First name</label>
                                        <fg-input addon-left-icon="now-ui-icons users_circle-08"
                                                  v-model="form.firstName"
                                                  placeholder="First Name...">
                                        </fg-input>
                                    </div>
                                    <div class="col-md-4">
                                        <label>Your email</label>
                                        <fg-input addon-left-icon="now-ui-icons ui-1_email-85"
                                                  v-model="form.email"
                                                  placeholder="Email Here...">
                                        </fg-input>
                                    </div>
                                    <div class="col-md-4">
                                        <label>Speciality</label>
                                        <fg-input>
                                            <el-select class="select-default" v-model="form.speciality">
                                                <el-option class="select-default" value="1" label="I'm a Designer"></el-option>
                                                <el-option class="select-default" value="2" label="I'm a Developer"></el-option>
                                                <el-option class="select-default" value="3" label="I'm a Hero"></el-option>
                                            </el-select>
                                        </fg-input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 ml-auto mr-auto text-center">
                                        <button class="btn btn-primary btn-round mt-4 btn-lg">
                                            Let's talk
                                        </button>
                                    </div>
                                </div>
                            </form>
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
