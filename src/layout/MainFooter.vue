<template>
    <footer class="footer"
            :class="{[`footer-${type}`]: type}"
            :data-background-color="backgroundColor">
        <div class="container">
            <nav>
                <ul>
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

                    <li>
                        <a href="https://rwl.io/p3455" target="_blank">
                            Patient Portal
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="copyright">
                &copy; {{year}}, Designed by
                <a href="https:///www.invisionapp.com" target="_blank">Nathan Clark</a>.
            </div>
        </div>
    </footer>
</template>
<script>
  export default {
    props: {
      backgroundColor: String,
      type: String
    },
    data(){
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>
<style>
</style>
