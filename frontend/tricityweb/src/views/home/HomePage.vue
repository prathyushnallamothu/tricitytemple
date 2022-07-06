<template>
  <div>
    <div data-server-rendered="true" id="__nuxt">
      <!---->
      <div id="__layout">
        <div>
 <header-page></header-page>
          <div>
            <div class="header-spacer header-spacer-small"></div>
            <div class="main-header">
              <div class="content-bg-wrap bg-homepage"></div>
              <div class="container">
                <div class="row">
                  <div class="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                    <div
                      class="main-header-content"
                      style="background: rgba(40, 40, 40, 0.5)"
                    >
                      <!--        <h4>
                        "Karya means wish or act. Siddhi means realizing.
                        <br />Karya Siddhi Hanuman is one who fulfills your
                        wishes".
                      </h4> -->
                      <p>WELCOME TO</p>
                      <h1>Tri City Hindu Temple</h1>
                    </div>
                  </div>
                </div>
              </div>
              <!--    <img
                src="https://assets.dallashanuman.net/images/homepage/thbn-SGS.png"
                alt="SGS"
                class="img-bottom"
                style="margin-bottom: -120px; height: 120px; width: 120px"
              /> -->
            </div>
            <!--             <div class="container">
              <div class="row">
                <div
                  class="col col-xl-8 m-auto col-lg-8 col-md-12 col-sm-12 col-12"
                >
                  <div class="text-center">
                    <p style="padding-top: 30px">
                      With the guidance & blessings of Parama Pujya
                    </p>
                    <h4>Sri Ganapathy Sachchidananda Swamiji</h4>
                  </div>
                </div>
              </div>
            </div> -->
            <div
              class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 align-center"
            >
              <h2 class="align-center padding20 c-primary">Temple Events</h2>
              <section class="blog-post-wrap">
                <div class="container">
                  <div id="posts-grid-1" data-layout="masonry" class="row">
                      <div
                      class="col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12"
                   v-for="event in events" :key="event.id" 
                    >
                      <div class="ui-block">
                        <article class="hentry blog-post">
                          <div class="post-thumb">
                            <a :href="'/temple-events/'+event.id"
                              ><img :src="event.img_url" alt="photo" height="128px"
                            /></a>
                          </div>
                          <div class="post-content">
                            <p class="txt-big-xxl">
                              <a :href="'/temple-events/'+event.id"
                                >{{event.title}}</a
                              >
                            </p>
                            <hr />
                            <p class="text-uppercase" style="font-size: 90%">
                              {{event.start}}
                            </p>
                            <hr />
                            <a
                              :href="'/temple-events/'+event.id"
                              class="btn btn-primary btn-sm"
                              >Learn more</a
                            >
                          </div>
                        </article>
                      </div>
                    </div>
     
                  </div>
                </div>
              </section>
            </div>
            <!--             <section class="medium-padding10 bg-grey">
              <div class="container">
                <div class="row">
                  <div
                    class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 align-center"
                  >
                    <section class="blog-post-wrap">
                      <div class="container">
                        <div data-layout="masonry" class="row">
                          <div class="col col-12 padding10">
                            <h3 class="align-center color-white">
                              Quick Links
                            </h3>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div class="col col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                    <div class="ui-block">
                      <article class="hentry blog-post quicklink-tile">
                        <div class="post-thumb">
                          <a href="/puja-services/puja-schedules"
                            ><img
                              src="https://assets.dallashanuman.net/images/homepage/post-pujaschdule.jpg"
                              alt="photo"
                          /></a>
                        </div>
                        <div class="post-content">
                          <p class="txt-big-lg">
                            <a href="/puja-services/puja-schedules"
                              >Puja Schedules</a
                            >
                          </p>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div class="col col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                    <div class="ui-block">
                      <article class="hentry blog-post quicklink-tile">
                        <div class="post-thumb">
                          <a href="/classes/bala-datta"
                            ><img
                              src="https://assets.dallashanuman.net/images/homepage/post-baladatta.jpg"
                              alt="photo"
                          /></a>
                        </div>
                        <div class="post-content">
                          <p class="txt-big-lg">
                            <a href="/classes/bala-datta">Bala Datta</a>
                          </p>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div class="col col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                    <div class="ui-block">
                      <article class="hentry blog-post quicklink-tile">
                        <div class="post-thumb">
                          <a href="/puja-services/cafeteria"
                            ><img
                              src="https://assets.dallashanuman.net/images/homepage/post-canteen.jpg"
                              alt="photo"
                          /></a>
                        </div>
                        <div class="post-content">
                          <p class="txt-big-lg">
                            <a href="/puja-services/cafeteria">Cafeteria</a>
                          </p>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div class="col col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                    <div class="ui-block">
                      <article class="hentry blog-post quicklink-tile">
                        <div class="post-thumb">
                          <a href="/classes/youth-group"
                            ><img
                              src="https://assets.dallashanuman.net/images/homepage/post-youthgroup.jpg"
                              alt="photo"
                          /></a>
                        </div>
                        <div class="post-content">
                          <p class="txt-big-lg">
                            <a href="/classes/youth-group">Youth Group</a>
                          </p>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div class="col col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                    <div class="ui-block">
                      <article class="hentry blog-post quicklink-tile">
                        <div class="post-thumb">
                          <a href="/temple-events/cultural-programs"
                            ><img
                              src="https://assets.dallashanuman.net/images/homepage/post-cultural.jpg"
                              alt="photo"
                          /></a>
                        </div>
                        <div class="post-content">
                          <p class="txt-big-lg">
                            <a href="/temple-events/cultural-programs"
                              >Cultural Programs</a
                            >
                          </p>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div class="col col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                    <div class="ui-block">
                      <article class="hentry blog-post quicklink-tile">
                        <div class="post-thumb">
                          <a href="/temple-events/community-activities"
                            ><img
                              src="https://assets.dallashanuman.net/images/homepage/post-community.jpg"
                              alt="photo"
                          /></a>
                        </div>
                        <div class="post-content">
                          <p class="txt-big-lg">
                            <a href="/temple-events/community-activities"
                              >Community Seva</a
                            >
                          </p>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </section> -->
            <section class="medium-padding80">
              <div class="container">
                <div class="row">
                  <div class="col col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                    <img src="@/assets/indoor.jpeg" alt="screen" />
                  </div>
                  <div class="col col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                    <div class="crumina-module crumina-heading">
                      <h2 class="heading-title c-primary">
                        Our Own Hindu Temple
                      </h2>
                      <p></p>
                      <p>
                        A Hindu Temple in Saginaw, MI Join a welcoming Hindu
                        community in Michigan's Tri Cities. Our goal is to build
                        and maintain a traditional temple for the Hindu
                        community in the region. The temple is being built in
                        accordance with Hindu tradition, and the second phase of
                        construction has resumed and is scheduled for completion
                        in October of 2021. We are currently seeking donations
                        to help us achieve our goals. Please give generously.
                      </p>
                      <a href="/about/swamiji" class="btn btn-custom btn-sm"
                        >Learn more</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="padding40 bg-custom">
              <div class="container">
                <div class="row">
                  <div
                    class="col col-xl-6 col-lg-6 m-auto col-md-12 col-sm-12 col-12"
                  >
                    <div class="crumina-module crumina-heading align-center">
                      <h2 class="color-white">Highlights</h2>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <article class="hentry blog-post">
                      <div class="post-thumb">
                        <a
                          href="/classes/religious/bhagavad-gita-maha-yagna"
                          class="h4 post-title c-yellow"
                          ><img src="@/assets/temple.png" alt="photo"
                        /></a>
                      </div>
                      <div class="post-content">
                        <div class="post-category bg-blue"></div>
                        <a
                          href="/classes/religious/bhagavad-gita-maha-yagna"
                          class="h4 post-title c-yellow"
                        >
                          Temple Hours</a
                        >
                        <p class="color-white">
                          Monday - Friday Morning : 9:00 a.m. - 1:00 p.m.
                          Evening : 5:00 p.m. - 8:00 p.m. <br />Weekend Saturday
                          : 9:00 a.m. - 8:00 p.m.<br />
                          Sunday : 9:00 a.m. - 8:00 p.m.
                        </p>
                      </div>
                    </article>
                  </div>
                  <div class="col col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <article class="hentry blog-post">
                      <div class="post-thumb">
                        <a
                          href="/temple-events/remote-events-services"
                          class="h4 post-title c-yellow"
                          ><img src="@/assets/temple.png" alt="photo"
                        /></a>
                      </div>
                      <div class="post-content">
                        <div class="post-category bg-primary"></div>
                        <a
                          href="/temple-events/remote-events-services"
                          class="h4 post-title c-yellow"
                        >
                          Temple Services</a
                        >
                        <p class="color-white">
                          Monday, 6:30 p.m. -- Chanting of Rudram Tuesday, 6:30
                          p.m. -- Hanuman Chalisa Wednesday, 6:30 p.m. -- Vishnu
                          Sahasranamam Thursday, 6:30 p.m. -- Nama Ramayanam and
                          Rama Raksha Stotram Friday, 6:30 p.m. -- Lalita
                          Sahasranamam Saturday, 9:00 a.m. -- Suprabhatam, 10:30
                          a.m. -- Hanuman Chalisa
                        </p>
                      </div>
                    </article>
                  </div>
                  <div class="col col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <article class="hentry blog-post">
                      <div class="post-thumb">
                        <a
                          href="/featured-posts/rajagopura-courtyard"
                          class="h4 post-title c-yellow"
                          ><img src="@/assets/temple.png" alt="photo"
                        /></a>
                      </div>
                      <div class="post-content">
                        <div class="post-category bg-green"></div>
                        <a
                          href="/featured-posts/rajagopura-courtyard"
                          class="h4 post-title c-yellow"
                        >
                          Puja Rates (for Small Idols & Lingam Only)
                        </a>
                        <p class="color-white">
                          Archana -- $11.00 <br />
                          Ashtothram -- $25.00 <br />
                          Satyanarayana <br />
                          Puja -- $51.00 <br />
                          Abhishekam -- $51.00
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </section>
            <section class="padding30">
              <div class="container">
                <div class="row">
                  <div
                    class="col col-xl-6 order-xl-1 col-lg-6 col-md-6 col-sm-12 col-12"
                  >
                    <div class="ui-block">
                      <div class="ui-block-title">
                        <h4>About Tri City Hindu Temple</h4>
                      </div>
                      <div class="ui-block-content">
                        <p>
                          The Tri City Hindu Temple is being built in Saginaw,
                          Michigan, to provide a place where Hindus can continue
                          their traditional beliefs and religious practices. The
                          temple will also provide a place for people of the
                          Hindu faith to come together as a community and
                          provide humanitarian support for those in need. We aim
                          to maintain and promote interreligious harmony,
                          tolerance, goodwill, and understanding.
                        </p>
                        <a href="https://maps.google.com/?ll=43.48948056580126,-83.98064341385955" target="_blank" class="btn btn-custom btn-sm"
                          >See Our Location</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    class="col col-xl-6 order-xl-1 col-lg-6 col-md-6 col-sm-12 col-12"
                  >
                    <div class="ui-block">
                      <div class="ui-block-title">
                        <h4 class="heading-title">Mission Statement</h4>
                      </div>
                      <div class="ui-block-content">
                        <p>
                          To establish, build, and operate a traditional-style
                          Hindu temple, promote religious, spiritual, cultural,
                          civic, educational, and social improvement among those
                          who belong to the Hindu faith, to perpetuate the
                          traditions and values of the Hindu religion, and to
                          support such humanitarian causes as the members of the
                          temple may deem appropriate.
                        </p>
                        <a
                          href="/puja-services/cafeteria"
                          class="btn btn-custom btn-sm"
                          >By Laws</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <hr />
            <!--             <section>
              <div class="container padding20">
                <div class="row">
                  <div
                    class="col col-xl-5 col-lg-5 m-auto col-md-12 col-sm-12 col-12"
                  >
                    <div class="crumina-module crumina-heading align-center">
                      <h2 save_image_to_download="true" class="heading-title">
                        Classes at temple
                      </h2>
                      <p></p>
                    </div>
                  </div>
                </div>
                <div class="info-box-wrap">
                  <div class="row">
                    <div class="col col-xl-2 col-lg-2 col-md-3 col-sm-3 col-4">
                      <div class="text-center">
                        <a href="/classes/arts" class="dropdown-item"
                          ><img
                            src="https://assets.dallashanuman.net/images/homepage/ksht-classes-art.png"
                            alt="icon"
                        /></a>
                        <h6 class="padding10">
                          <a href="/classes/arts" class="dropdown-item">Art</a>
                        </h6>
                      </div>
                    </div>
                    <div class="col col-xl-2 col-lg-2 col-md-4 col-sm-3 col-4">
                      <div class="text-center">
                        <a href="/classes/yoga" class="dropdown-item"
                          ><img
                            src="https://assets.dallashanuman.net/images/homepage/ksht-classes-yoga.png"
                            alt="icon"
                        /></a>
                        <h6 class="padding10">
                          <a href="/classes/yoga" class="dropdown-item">Yoga</a>
                        </h6>
                      </div>
                    </div>
                    <div class="col col-xl-2 col-lg-2 col-md-4 col-sm-3 col-4">
                      <div class="text-center">
                        <a href="/classes/violin" class="dropdown-item"
                          ><img
                            src="https://assets.dallashanuman.net/images/homepage/ksht-classes-violin.png"
                            alt="icon"
                        /></a>
                        <h6 class="padding10">
                          <a href="/classes/violin" class="dropdown-item"
                            >Violin</a
                          >
                        </h6>
                      </div>
                    </div>
                    <div class="col col-xl-2 col-lg-2 col-md-4 col-sm-3 col-4">
                      <div class="text-center">
                        <a href="/classes/religious" class="dropdown-item"
                          ><img
                            src="https://assets.dallashanuman.net/images/homepage/ksht-classes-religion.png"
                            alt="icon"
                        /></a>
                        <h6 class="padding10">
                          <a href="/classes/religious" class="dropdown-item"
                            >Religion</a
                          >
                        </h6>
                      </div>
                    </div>
                    <div class="col col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4">
                      <div class="text-center">
                        <a href="/classes/bala-datta" class="dropdown-item"
                          ><img
                            src="https://assets.dallashanuman.net/images/homepage/bdlogo.png"
                            alt="icon"
                        /></a>
                        <h6 class="padding10">
                          <a href="/classes/bala-datta" class="dropdown-item"
                            >Bala Datta</a
                          >
                        </h6>
                      </div>
                    </div>
                    <div class="col col-xl-2 col-lg-2 col-md-4 col-sm-3 col-4">
                      <div class="text-center">
                        <a href="/classes/dance" class="dropdown-item"
                          ><img
                            src="https://assets.dallashanuman.net/images/homepage/ksht-classes-dance.png"
                            alt="icon"
                        /></a>
                        <h6 class="padding10">
                          <a href="/classes/dance" class="dropdown-item"
                            >Dance</a
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div
                    class="col col-xl-5 col-lg-5 m-auto col-md-12 col-sm-12 col-12"
                  >
                    <div class="crumina-module crumina-heading align-center">
                      <a href="/classes/schedules" class="btn btn-custom btn-md"
                        >Classes schedules</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </section> -->
            <a href="#" class="back-to-top"
              ><img
                src="https://assets.dallashanuman.net/images/svg-icons/back-to-top.svg"
                alt="arrow"
                save_image_to_download="true"
                class="back-icon"
            /></a>
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
  components: { HeaderPage,FooterPage },
  data() {
    return {
      webLogo: "@/assets/logo.png",
      events:[],
    };
  },
  mounted() {
    this.fetchEvents()
  },
  methods: {
        fetchEvents() {
      // Fetch Events from API endpoint
      axios
        .get("http://localhost:8888/events")

        .then((response) => {
          this.events = response.data.events;
        })
        .catch((error) => {
          console.log(error);

        });
    },
  },
};
</script>

<style></style>
