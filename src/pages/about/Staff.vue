<template>
    <div class="cd-section" id="teams" >
        <div class="team-1">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">Our Awesome Team 1</h2>
                        <h4 class="description">This is the paragraph where you can write more details about your team.
                            Keep you user engaged by providing meaningful information.</h4>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-4 ml-1">
                        <card type="profile" plain>
                            <img slot="avatar" class="img img-raised" src="img/james.jpg"/>

                            <h3 class="card-title">Oliver Atticus</h3>
                            <h6 class="category text-primary">Web Developer</h6>
                            <p class="card-description">
                                If you want to know what a man's like, take a good look at how he treats his inferiors,
                                not his equals.
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
                            <img slot="avatar" class="img img-raised" src="img/michael.jpg"/>

                            <h3 class="card-title">Smith College</h3>
                            <h6 class="category text-primary">CEO / Co-Founder</h6>
                            <p class="card-description">
                                Two things are infinite: the universe and human stupidity; and I'm not sure about the
                                universe.
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
                            <img slot="avatar" class="img img-raised" src="img/emily.jpg"/>

                            <h3 class="card-title">Sophia Madison</h3>
                            <h6 class="category text-primary">Entrepreneur</h6>
                            <p class="card-description">
                                Be who you are and say what you feel, because those who mind don't matter, and those who
                                matter don't mind.
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
                            <img slot="avatar" class="img img-raised" src="img/olivia.jpg"/>

                            <h3 class="card-title">Emily Chloe</h3>
                            <h6 class="category text-primary">Entrepreneur</h6>
                            <p class="card-description">
                                You know you're in love when you can't fall asleep because reality is finally better
                                than your dreams.
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
