<style>
.cover {
  height: 236px;
  width: 400px;
  object-fit: cover;
}
</style>

<template>
    <div class="cd-section" id="blogs" >
        <!--     *********     BLOGS 2      *********      -->
        <div class="blogs-2" id="blogs-2">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 ml-auto mr-auto">
                        <!-- <h2 class="title"></h2> -->
                        <div class="row justify-content-center">
                            <div class="col-md-5">
                                <card type="blog" plain>
                                    <div class="card-image">
                                        <a href="#pablo">
                                            <img class="img img-raised rounded cover" src="img/dentist/image6_small.jpg"  />
                                        </a> <!--   img/dentist/image.jpg -->
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            <a href="#pablo">How to Brush Your Teeth</a>
                                        </h5>
                                    </div>
                                </card>
                            </div>
                            <div class="col-md-5">
                                <card type="blog" plain>
                                    <div class="card-image">
                                        <a href="#pablo">
                                            <img class="img img-raised rounded cover" src="img/dentist/image29.jpg" />
                                        </a>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            <a href="#pablo">How to Floss Your Teeth</a>
                                        </h5>
                                    </div>
                                </card>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-5">
                                <card type="blog" plain>
                                    <div class="card-image">
                                        <a href="#pablo">
                                            <img class="img img-raised rounded cover" src="img/dentist/image23.jpg" />
                                        </a>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            <a href="#pablo">Electric VS Manual Brush</a>
                                        </h5>
                                    </div>
                                </card>
                            </div>
                            <div class="col-md-5">
                                <card type="blog" plain>
                                    <div class="card-image">
                                        <a href="#pablo">
                                            <img class="img img-raised rounded cover" src="img/dentist/image11.jpg" />
                                        </a>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            <a href="#pablo">Bad breath</a>
                                        </h5>
                                    </div>
                                </card>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-5">
                                <card type="blog" plain>
                                    <div class="card-image">
                                        <a href="#pablo">
                                            <img class="img img-raised rounded cover" src="img/dentist/image2.jpg" />
                                        </a>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            <a href="#pablo">Dental Health & Your Diet</a>
                                        </h5>
                                    </div>
                                </card>
                            </div>
                            <div class="col-md-5">
                                <card type="blog" plain>
                                    <div class="card-image">
                                        <a href="#pablo">
                                            <img class="img img-raised rounded cover" src="img/dentist/image9.jpg" />
                                        </a>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            <a href="#pablo">Fluoride & Decay Prevention</a>
                                        </h5>
                                    </div>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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



