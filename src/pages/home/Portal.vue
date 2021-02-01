<template>
    <div class="cd-section" id="features" >        
        <!--     *********     FEATURES 4      *********      -->
        <div class="features-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">Enter Our Patient Portal</h2>
                        <!-- <h4 class="description">Havenly is a convenient, personal and affordable way to redecorate your home room by room. Collaborate with our professional interior designers on our online platform. </h4> -->
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 ml-auto mr-auto text-center">
                        <form action="https://www.crystalpm.com/index.jsp?crystalpmid=1240" target="_blank">
                            <button type="submit" class="btn btn-primary btn-round mt-4 btn-lg">
                               Patient Form Portal                     
                            </button>
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <card type="background" raised color="transparent" style="background-image: url('img/dentist/image67.jpg')">
                            <template slot="info">
                                <div class="icon icon-white">
                                    <i class="now-ui-icons business_money-coins"></i>
                                </div>
                                <div class="description">
                                    <h4 class="info-title">Submit Payments</h4>
                                    <!-- <p>Securely submit payments for all procedures.</p> -->
                                </div>
                            </template>
                        </card>
                    </div>
                    <div class="col-md-4">
                        <card type="background" raised color="transparent" style="background-image: url('img/dentist/image62.jpg')">
                            <template slot="info">
                                <div class="icon icon-white">
                                    <i class="now-ui-icons files_paper"></i>
                                </div>
                                <div class="description">
                                    <h4 class="info-title">Check Insurance</h4>
                                    <!-- <p>Havenly interior designers are vetted professionals and real people.</p> -->
                                </div>
                            </template>
                        </card>
                    </div>
                    <div class="col-md-4">
                        <card type="background" raised color="transparenr" style="background-image: url('img/dentist/image66.jpg')">
                            <template slot="info">
                                <div class="icon icon-white">
                                    <i class="now-ui-icons ui-2_like"></i>
                                </div>
                                <div class="description">
                                    <h4 class="info-title">See Reviews</h4>
                                    <!-- <p>Share a floor plan, and we'll create a visualization of your room.</p> -->
                                </div>
                            </template>
                        </card>
                    </div>
                </div>
                
            </div>
        </div>
        <!--     *********    END FEATURES 4      *********      -->
    </div>
</template>
<script>
  import { Card } from '@/components';
  export default {
    components: {
      Card
    }
  }
</script>
<style>
</style>
