<template>
    <div class="cd-section" id="teams" >
        <div class="team-1">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">Our Staff</h2>
                        <h4 class="description">Our Staff are very qualified. Perhaps overqualified. </h4>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-4 ml-1">
                        <card type="profile" plain>
                            <img slot="avatar" class="img img-raised" src="img/dentist/Dr_3.jpg"/>

                            <h3 class="card-title">Jodi</h3>
                            <h6 class="category text-primary">Front Desk</h6>
                            <p class="card-description">
                                Hi I'm Jodi, I have been working in this dental practice for 7 years. I love working here!
                            </p>
                            <div class="card-footer">
                                <a href="#pablo" class="btn btn-icon btn-primary btn-round"><i
                                        class="fab fa-facebook-square"></i></a>
                                <a href="#pablo" class="btn btn-icon btn-primary btn-round"><i
                                        class="fab fa-dribbble"></i></a>
                            </div>
                        </card>
                    </div>
                    <div class="col-md-4 mr-1">
                        <card type="profile" plain>
                            <img slot="avatar" class="img img-raised" src="img/dentist/Dr_3.jpg"/>

                            <h3 class="card-title">Tami</h3>
                            <h6 class="category text-primary">Hygienist</h6>
                            <p class="card-description">
                                Hi, I'm Tami, I have 15 years of experience as a dental hygienist. I love seeing and helping new patients.
                            </p>
                            <div class="card-footer">
                                <a href="#pablo" class="btn btn-icon btn-primary btn-round"><i
                                        class="fab fa-twitter"></i></a>
                                <a href="#pablo" class="btn btn-icon btn-primary btn-round"><i
                                        class="fab fa-facebook-square"></i></a>
                                <a href="#pablo" class="btn btn-icon btn-primary btn-round"><i class="fab fa-google"></i></a>
                            </div>
                        </card>
                    </div>
                    <div class="col-md-4 ml-1 mt-4">
                        <card type="profile" plain>
                            <img slot="avatar" class="img img-raised" src="img/dentist/Dr_3.jpg"/>

                            <h3 class="card-title">Brenda</h3>
                            <h6 class="category text-primary">Hygienist</h6>
                            <p class="card-description">
                                Hi, I'm Brenda, I have 15 years of experience as a dental hygienist. I love seeing and helping new patients.

                            </p>
                            <div class="card-footer">
                                <a href="#pablo" class="btn btn-icon btn-primary btn-round"><i
                                        class="fab fa-twitter"></i></a>
                                <a href="#pablo" class="btn btn-icon btn-primary btn-round"><i
                                        class="fab fa-dribbble"></i></a>
                                <a href="#pablo" class="btn btn-icon btn-primary btn-round"><i
                                        class="fab fa-linkedin"></i></a>
                            </div>
                        </card>
                    </div>
                    <div class="col-md-4 mr-1 mt-4">
                        <card type="profile" plain>
                            <img slot="avatar" class="img img-raised" src="img/dentist/Dr_3.jpg"/>

                            <h3 class="card-title">Sara</h3>
                            <h6 class="category text-primary">Assistant</h6>
                            <p class="card-description">
                                Hi, I'm Sara, I have 15 years of experience as a dental assistant. I love seeing and helping new patients.

                            </p>
                            <div class="card-footer">
                                <a href="#pablo" class="btn btn-icon btn-primary btn-round"><i class="fab fa-google"></i></a>
                                <a href="#pablo" class="btn btn-icon btn-primary btn-round"><i
                                        class="fab fa-dribbble"></i></a>
                            </div>
                        </card>
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
<style>
</style>
