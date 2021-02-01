<template>
    <div class="wrapper contact-page">
        <div class="page-header page-header-small">
            <parallax class="page-header-image"
                 style="background-image: url('img/dentist/image68.jpg')">
            </parallax>
        </div>

        <div class="main">
            <div class="contact-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 ml-auto mr-auto">
                            <h2 class="title">Send us a message</h2>
                            <p class="description">You can contact us with anything related to our Services. We'll get
                                in touch with you as soon as possible.
                                <br>
                                <br>
                            </p>
                            <form role="form" id="contact-form" method="post">
                                <label>Your name</label>
                                <fg-input
                                        placeholder="Your Name..."
                                        v-model="form.firstName"
                                        addon-left-icon="now-ui-icons users_circle-08">
                                </fg-input>

                                <label>Email address</label>
                                <fg-input
                                        placeholder="Email Here..."
                                        v-model="form.email"
                                        addon-left-icon="now-ui-icons users_circle-08">
                                </fg-input>
                                <label>Phone</label>

                                <fg-input
                                        placeholder="Number Here..."
                                        v-model="form.phone"
                                        addon-left-icon="now-ui-icons tech_mobile">
                                </fg-input>

                                <div class="form-group">
                                    <label>Your message</label>
                                    <textarea name="message" class="form-control" id="message" rows="6"></textarea>
                                </div>
                                <div class="submit text-center">
                                    <n-button type="primary" round>Contact Us</n-button>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-5 ml-auto mr-auto">
                            <info-section type="primary"
                                      icon="now-ui-icons location_pin">
                            <h4 class="info-title">Find us at the office</h4>
                            <p class="description"> 622 W.North St.  
                              <br> Grangeville, ID 83530
                            </p>
                        </info-section>
                        <info-section type="primary"
                                      icon="now-ui-icons tech_mobile">
                            <h4 class="info-title">Give us a ring</h4>
                            <p class="description">+1 (208) 983-2020 
                            </p>
                        </info-section>
                        <info-section type="primary"
                                      icon="now-ui-icons ui-1_calendar-60">
                            <h4 class="info-title">Our Hours</h4>
                            <p class="description">Mon - Thurs, 8:00am - 5:00pm
                                <br>Fri, 8:00am - 12:00pm
                            </p>
                        </info-section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <gmap-map
                id="map"
                class="big-map"
                :center="center"
                :zoom="15"
                :options="options"
                map-type-id="terrain">
            <gmap-marker :position="center">
            </gmap-marker>
        </gmap-map>
    </div>
</template>
<script>
  import { Button, InfoSection, FormGroupInput } from '@/components';
  import {API_KEY} from '@/constants'
  import Vue from 'vue'
  import * as VueGoogleMaps from 'vue2-google-maps'
  Vue.use(VueGoogleMaps, {
    load: {
      key: API_KEY
    }
  });
  export default {
    name: 'contact-us',
    bodyClass: 'contact-page',
    components: {
      InfoSection,
      [Button.name]: Button,
      [FormGroupInput.name]: FormGroupInput,
    },
    data() {
      return {
        form: {
          firstName: '',
          email: '',
          phone: ''
        },
        center: {
          lat: 33.714329,
          lng: -112.142571
        },
        options: {
          styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
              "color": "#e9e9e9"
            }, {
              "lightness": 17
            }]
          }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
              "color": "#f5f5f5"
            }, {
              "lightness": 20
            }]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 17
            }]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 29
            }, {
              "weight": 0.2
            }]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 18
            }]
          }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 16
            }]
          }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
              "color": "#f5f5f5"
            }, {
              "lightness": 21
            }]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
              "color": "#dedede"
            }, {
              "lightness": 21
            }]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
              "visibility": "on"
            }, {
              "color": "#ffffff"
            }, {
              "lightness": 16
            }]
          }, {
            "elementType": "labels.text.fill",
            "stylers": [{
              "saturation": 36
            }, {
              "color": "#333333"
            }, {
              "lightness": 40
            }]
          }, {
            "elementType": "labels.icon",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
              "color": "#f2f2f2"
            }, {
              "lightness": 19
            }]
          }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#fefefe"
            }, {
              "lightness": 20
            }]
          }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#fefefe"
            }, {
              "lightness": 17
            }, {
              "weight": 1.2
            }]
          }]

        }
      }
    }
  }
</script>
<style>
</style>
