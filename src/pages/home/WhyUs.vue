<template>
    <div class="cd-section" id="features" >
        <!--     *********     FEATURES 1      *********      -->
        <div class="features-1">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto">
                        <h2 class="title">Why Choose Us?</h2>
                        <h4 class="description">Our friendly and competent staff are experts in providing comfort and quality care. With a gentle, family-oriented approach, we use the latest and greatest in optometry technology and treatment options, as well as the most advanced equipment sterilization process available. We offer care that is comfortable and convenient for you and your entire family.</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="info info-hover">
                            <div class="icon icon-primary">
                                <i class="now-ui-icons emoticons_satisfied"></i>
                            </div>
                            <h4 class="info-title">No Pressure Environment</h4>
                            <p class="description">{{masterData.WhyUsOne}}</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="info info-hover">
                            <div class="icon icon-success">
                                <i class="now-ui-icons education_hat"></i>
                            </div>
                            <h4 class="info-title">Qualified Professionals</h4>
                            <p class="description">{{masterData.WhyUsTwo}}</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="info info-hover">
                            <div class="icon icon-warning">
                                <i class="now-ui-icons education_atom"></i>
                            </div>
                            <h4 class="info-title">Full Service Clinic</h4>
                            <p class="description">{{masterData.WhyUsThree}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--     *********    END FEATURES 1      *********      -->
        
        <!--     *********    END FEATURES 8      *********      -->
    </div>
</template>
<script>
  import { Card } from '@/components';
  import json from '../../../public/Json/data.json'

  export default {
    data(){
        return{
            masterData: json
        }
    },

    components: {
      Card
    }
  }
</script>
<style>
</style>
