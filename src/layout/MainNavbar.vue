

<template>
    <navbar position="fixed"
            :transparent="transparent"
            :color-on-scroll="colorOnScroll"
            menu-classes="ml-auto">
        <template slot-scope="{toggle, isToggled}">
                <router-link v-popover:popover1 class="navbar-brand" to="/home">
                    Stetson Village Family Dentistry
                    <!-- <img src="img/dentist/logo.png" style="width: 150px;"/> -->
                </router-link>
                <!-- <el-popover
                        ref="popover1"
                        popper-class="popover"
                        placement="bottom"
                        width="109"
                        trigger="hover">
                    <div class="popover-body">Return Home</div>
                </el-popover> -->
        </template>

        <template slot="navbar-menu">

            <li class="nav-item">
                <router-link class="nav-link" href="#pablo" to="/home">
                    Home
                </router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" href="#pablo" to="/about">
                    About Us
                </router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" href="#pablo" to="/education">
                    Education
                </router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" href="#pablo" to="/procedures">
                    Procedures
                </router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" href="#pablo" to="/contact">
                    Contact Us
                </router-link>
            </li>

            <li class="nav-item">
                <a class="nav-link btn btn-primary"
                   href="https://rwl.io/p3455" target="_blank">
                    <p>Patient Portal</p>
                </a>
            </li>
        </template>
    </navbar>
</template>

<script>
  import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
  import { Popover } from 'element-ui'
  export default {
    name: 'main-navbar',
    props: {
      transparent: Boolean,
      colorOnScroll: Number,
    },
    components: {
      DropDown,
      Navbar,
      NavbarToggleButton,
      NavLink,
      [Popover.name]: Popover
    }
  }
</script>

<style scoped>

</style>







