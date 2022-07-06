<template>
  <div>
    <div data-server-rendered="true" id="__nuxt">
      <!---->
      <div id="__layout">
        <div>
          <header-page></header-page>
          <div class="header-spacer header-spacer-standard"></div>
          <div class="container">
            <div class="row">
              <div class="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-sm-12 col-12">
                <div class="ui-block bg-white">
                  <div class="ui-block-content">
                    <h1>{{ event.title }}</h1>
                    <p id="eventDesc"></p>


                    <p></p>
                  </div>
                </div>
                <div class="ui-block ">
                  <div class="ui-block-title">
                    <div class="post-thumb"><img :src="event.img_url" alt="author"></div>
                  </div>
                </div>
              </div>
              <div class="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-12 col-12">
                <div class="ui-block ">
                  <div class="ui-block-title">
                    <h4 class="title is-5">Event Details</h4>
                  </div>
                  <div class="ui-block-content">
                    <ul class="widget w-featured-topics">
                      <li>Event Date:
                        <h5 class="color-ksht1"><img src="@/assets/_nuxt/images/calendar-date.a0d7ef1.svg"
                            class="ico-sm">{{ event.start_date }}</h5>
                      </li>
                      <li>Start Time:
                        <h5 class="color-ksht1"><img src="@/assets/_nuxt/images/calendar-time.7c002d6.svg"
                            class="ico-sm">{{ event.start_time }}</h5>
                      </li>
                      <li>Location
                        <h5 class="color-ksht1"><img src="@/assets/_nuxt/images/location-pin.905d66e.svg"
                            class="ico-sm">{{ event.location }}</h5>
                      </li>
                    </ul>
                    <!-- <a href="https://dallashanumanstore.org/events/Walkathon-2022" target="_new" save_image_to_download="true" class="btn btn-blue btn-md">Register /  Donate</a>
                    <div class="author-name">Walkathon:- Instructions</div>
                    <p>
                        <ul>
                            <li>Walk:- In-Person, Around the Temple 6 miles</li>
                            <li>Sat, Apr 23 </li>
                            <li>With T-shirt - $30 for adults, $20 for Youth.</li>
                            <li>Without T-shirt - $25 for Adults, $15 for Youth.</li>
                            <li>T-Shirt pickup at temple walkathon desk in the evening 6-8PM on weekdays/10AM to 8PM on weekends or on the Walkathon day.
                            </li>
                        </ul>
                    </p> -->
                  </div>
                </div>
              </div>

            </div>
          </div>
          <footer-page></footer-page>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import HeaderPage from '@/components/Header/HeaderPage.vue';
import FooterPage from '@/components/Header/FooterPage.vue';
export default {
  components: { HeaderPage, FooterPage },
  data() {
    return {
      webLogo: "@/assets/logo.png",
      event: {},
    };
  },
  mounted() {
    this.fetchEvent()
  },
  methods: {
    fetchEvent() {
      // Fetch Events from API endpoint
      axios
        .get("http://localhost:8888/events/" + this.$route.params.id)

        .then((response) => {
          var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
          this.event = response.data.events[0];
          var date = new Date(this.event.start)
          this.event.start_date = date.toLocaleDateString("en-US", options)
          document.getElementById("eventDesc").innerHTML = this.event.description
          var x = this.event.start.split(" ")
          var hours = 0;

          if (x.length >= 2) {
            hours = x[1].split(":")[0]

          }
          var suffix = hours >= 12 ? "PM" : "AM";
          this.event.start_time = ((hours + 11) % 12 + 1) + ":" + x[1].split(":")[1] + " " + suffix;
        })
        .catch((error) => {
          console.log(error);

        });
    },
  },
};
</script>