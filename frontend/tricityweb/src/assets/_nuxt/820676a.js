(window.webpackJsonp = window.webpackJsonp || []).push([
    [66], {
        434: function(t, l, e) {
            "use strict";
            e.r(l);
            var o = e(63),
                c = e.n(o),
                n = {
                    data: function() {
                        return {
                            apiCalendarData: []
                        }
                    },
                    created: function() {
                        this.getCalendar()
                    },
                    methods: {
                        getCalendar: function() {
                            var t = this,
                                l = new Date,
                                e = new Date;
                            return e.setDate(l.getDate() + 5), c.a.get("https://www.googleapis.com/calendar/v3/calendars/calendar.pujas@dallashanuman.org/events?singleEvents=true&futureevents=true&timeMin=" + l.toISOString() + "&timeMax=" + e.toISOString() + "&orderBy=startTime&key=AIzaSyCW90hLkYeX6ofvzdeRUujA2p9YlkyYt_Y", {
                                headers: {
                                    "Content-Type": "application/json",
                                    Accept: "application/json"
                                }
                            }).then((function(l) {
                                t.apiCalendarData = l.data.items
                            })).catch((function(l) {
                                t.apiCalendarData = []
                            }))
                        },
                        getEventTime: function(t) {
                            var l = null;
                            if (t.start.hasOwnProperty("dateTime")) l = new Date(t.start.dateTime);
                            else if (t.start.hasOwnProperty("date")) return "noshow";
                            var e = l.getHours(),
                                o = l.getMinutes(),
                                c = "";
                            return c = e < 13 ? e < 12 ? "AM" : o > 0 ? "PM" : "NOON" : (e -= 12) < 12 ? "PM" : "AM", o < 10 && (o = "0" + o), l.getMonth() + 1 + "/" + l.getDate() + " " + e + ":" + o + c
                        }
                    }
                },
                r = e(13),
                component = Object(r.a)(n, (function() {
                    var t = this,
                        l = t.$createElement,
                        e = t._self._c || l;
                    return e("div", [e("div", {
                        staticClass: "header-spacer header-spacer-small"
                    }), t._v(" "), t._m(0), t._v(" "), t._m(1), t._v(" "), e("div", {
                        staticClass: "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 align-center"
                    }, [e("h2", {
                        staticClass: "align-center padding20 c-primary"
                    }, [t._v("Temple Events")]), t._v(" "), e("section", {
                        staticClass: "blog-post-wrap"
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row",
                        attrs: {
                            id: "posts-grid-1",
                            "data-layout": "masonry"
                        }
                    }, [e("div", {
                        staticClass: "col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12"
                    }, [e("div", {
                        staticClass: "ui-block"
                    }, [e("article", {
                        staticClass: "hentry blog-post"
                    }, [e("div", {
                        staticClass: "post-content"
                    }, [t._m(2), t._v(" "), e("table", {
                        staticClass: "table bg-smoke-light table-striped"
                    }, [e("tbody", t._l(t.apiCalendarData.slice(0, 5), (function(l, i) {
                        return e("tr", ["noshow" !== t.getEventTime(l) ? t._t("default", (function() {
                            return [e("td", {
                                attrs: {
                                    width: "30%"
                                }
                            }, [t._v(t._s(t.getEventTime(l)))]), t._v(" "), e("td", {
                                staticClass: "text-left"
                            }, [t._v(t._s(l.summary))])]
                        })) : t._e()], 2)
                    })), 0)]), t._v(" "), e("nuxt-link", {
                        staticClass: "btn btn-purple btn-sm",
                        attrs: {
                            to: "/calendar"
                        }
                    }, [t._v("Full Calendar")])], 1)])])]), t._v(" "), e("div", {
                        staticClass: "col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12"
                    }, [e("div", {
                        staticClass: "ui-block"
                    }, [e("article", {
                        staticClass: "hentry blog-post"
                    }, [e("div", {
                        staticClass: "post-thumb"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/temple-events/shivaratri-2022"
                        }
                    }, [e("img", {
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/homepage/2021/shvaatri-2021-small.jpg",
                            alt: "photo"
                        }
                    })])], 1), t._v(" "), e("div", {
                        staticClass: "post-content"
                    }, [e("p", {
                        staticClass: "txt-big-xxl"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/temple-events/shivaratri-2022"
                        }
                    }, [t._v("Maha Shivaratri")])], 1), t._v(" "), e("hr"), t._v(" "), e("p", {
                        staticClass: "text-uppercase",
                        staticStyle: {
                            "font-size": "90%"
                        }
                    }, [t._v("\n                    28 FEB\n                  ")]), t._v(" "), e("hr"), t._v(" "), e("nuxt-link", {
                        staticClass: "btn btn-primary btn-sm",
                        attrs: {
                            to: "/temple-events/shivaratri-2022"
                        }
                    }, [t._v("Learn more")])], 1)])])]), t._v(" "), t._m(3), t._v(" "), e("div", {
                        staticClass: "col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12"
                    }, [e("div", {
                        staticClass: "ui-block"
                    }, [e("article", {
                        staticClass: "hentry blog-post"
                    }, [e("div", {
                        staticClass: "post-thumb"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/puja-services/cafeteria"
                        }
                    }, [e("img", {
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/homepage/2021/cafeteria-open-banner-v2.jpg",
                            alt: "photo"
                        }
                    })])], 1), t._v(" "), e("div", {
                        staticClass: "post-content"
                    }, [e("p", {
                        staticClass: "txt-big-xxl"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/puja-services/cafeteria"
                        }
                    }, [t._v("Cafeteria OPEN")])], 1), t._v(" "), e("hr"), t._v(" "), e("p", {
                        staticClass: "text-uppercase",
                        staticStyle: {
                            "font-size": "90%"
                        }
                    }, [t._v("\n                    Online Ordering\n                  ")]), t._v(" "), e("hr"), t._v(" "), e("a", {
                        staticClass: "btn btn-primary btn-sm",
                        attrs: {
                            href: "https://cafeteria.dallashanuman.org/",
                            target: "_new"
                        }
                    }, [t._v("Order Online")])])])])]), t._v(" "), t._m(4), t._v(" "), t._m(5), t._v(" "), e("div", {
                        staticClass: "col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12"
                    }, [e("div", {
                        staticClass: "ui-block"
                    }, [e("article", {
                        staticClass: "hentry blog-post"
                    }, [e("div", {
                        staticClass: "post-thumb"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/visit"
                        }
                    }, [e("img", {
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/event/2021/archana-at-temple.jpg",
                            alt: "photo"
                        }
                    })])], 1), t._v(" "), e("div", {
                        staticClass: "post-content"
                    }, [e("p", {
                        staticClass: "txt-big-xxl"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/visit"
                        }
                    }, [t._v("Archana & Thoram Daily")])], 1), t._v(" "), e("hr"), t._v(" "), e("p", {
                        staticClass: "text-uppercase",
                        staticStyle: {
                            "font-size": "90%"
                        }
                    }, [t._v("\n                    In Person Services (on all days)\n                  ")]), t._v(" "), e("hr"), t._v(" "), e("nuxt-link", {
                        staticClass: "btn btn-primary btn-sm",
                        attrs: {
                            to: "/visit"
                        }
                    }, [t._v("Learn more")])], 1)])])]), t._v(" "), e("div", {
                        staticClass: "col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12"
                    }, [e("div", {
                        staticClass: "ui-block"
                    }, [e("article", {
                        staticClass: "hentry blog-post"
                    }, [e("div", {
                        staticClass: "post-thumb"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/featured-posts/rajagopura-courtyard"
                        }
                    }, [e("img", {
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/homepage/2020/rajagopura-courtyard-banner.jpg",
                            alt: "photo"
                        }
                    })])], 1), t._v(" "), e("div", {
                        staticClass: "post-content"
                    }, [e("p", {
                        staticClass: "txt-big-xxl"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/featured-posts/rajagopura-courtyard"
                        }
                    }, [t._v("Rajagopura Courtyard Indianization")])], 1), t._v(" "), e("hr"), t._v(" "), e("p", {
                        staticClass: "text-uppercase",
                        staticStyle: {
                            "font-size": "90%"
                        }
                    }, [t._v("\n                    Learn more & Support!\n                  ")]), t._v(" "), e("hr"), t._v(" "), e("nuxt-link", {
                        staticClass: "btn btn-primary btn-sm",
                        attrs: {
                            to: "/featured-posts/rajagopura-courtyard"
                        }
                    }, [t._v("Learn More")])], 1)])])])])])])]), t._v(" "), e("section", {
                        staticClass: "medium-padding10 bg-grey"
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row"
                    }, [t._m(6), t._v(" "), e("div", {
                        staticClass: "col col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6"
                    }, [e("div", {
                        staticClass: "ui-block"
                    }, [e("article", {
                        staticClass: "hentry blog-post quicklink-tile"
                    }, [e("div", {
                        staticClass: "post-thumb"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/puja-services/puja-schedules"
                        }
                    }, [e("img", {
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/homepage/post-pujaschdule.jpg",
                            alt: "photo"
                        }
                    })])], 1), t._v(" "), e("div", {
                        staticClass: "post-content"
                    }, [e("p", {
                        staticClass: "txt-big-lg"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/puja-services/puja-schedules"
                        }
                    }, [t._v("Puja Schedules")])], 1)])])])]), t._v(" "), e("div", {
                        staticClass: "col col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6"
                    }, [e("div", {
                        staticClass: "ui-block"
                    }, [e("article", {
                        staticClass: "hentry blog-post quicklink-tile"
                    }, [e("div", {
                        staticClass: "post-thumb"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/classes/bala-datta"
                        }
                    }, [e("img", {
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/homepage/post-baladatta.jpg",
                            alt: "photo"
                        }
                    })])], 1), t._v(" "), e("div", {
                        staticClass: "post-content"
                    }, [e("p", {
                        staticClass: "txt-big-lg"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/classes/bala-datta"
                        }
                    }, [t._v("Bala Datta")])], 1)])])])]), t._v(" "), e("div", {
                        staticClass: "col col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6"
                    }, [e("div", {
                        staticClass: "ui-block"
                    }, [e("article", {
                        staticClass: "hentry blog-post quicklink-tile"
                    }, [e("div", {
                        staticClass: "post-thumb"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/puja-services/cafeteria"
                        }
                    }, [e("img", {
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/homepage/post-canteen.jpg",
                            alt: "photo"
                        }
                    })])], 1), t._v(" "), e("div", {
                        staticClass: "post-content"
                    }, [e("p", {
                        staticClass: "txt-big-lg"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/puja-services/cafeteria"
                        }
                    }, [t._v("Cafeteria")])], 1)])])])]), t._v(" "), e("div", {
                        staticClass: "col col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6"
                    }, [e("div", {
                        staticClass: "ui-block"
                    }, [e("article", {
                        staticClass: "hentry blog-post quicklink-tile"
                    }, [e("div", {
                        staticClass: "post-thumb"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/classes/youth-group"
                        }
                    }, [e("img", {
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/homepage/post-youthgroup.jpg",
                            alt: "photo"
                        }
                    })])], 1), t._v(" "), e("div", {
                        staticClass: "post-content"
                    }, [e("p", {
                        staticClass: "txt-big-lg"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/classes/youth-group"
                        }
                    }, [t._v("Youth Group")])], 1)])])])]), t._v(" "), e("div", {
                        staticClass: "col col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6"
                    }, [e("div", {
                        staticClass: "ui-block"
                    }, [e("article", {
                        staticClass: "hentry blog-post quicklink-tile"
                    }, [e("div", {
                        staticClass: "post-thumb"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/temple-events/cultural-programs"
                        }
                    }, [e("img", {
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/homepage/post-cultural.jpg",
                            alt: "photo"
                        }
                    })])], 1), t._v(" "), e("div", {
                        staticClass: "post-content"
                    }, [e("p", {
                        staticClass: "txt-big-lg"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "temple-events/cultural-programs"
                        }
                    }, [t._v("Cultural Programs")])], 1)])])])]), t._v(" "), e("div", {
                        staticClass: "col col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6"
                    }, [e("div", {
                        staticClass: "ui-block"
                    }, [e("article", {
                        staticClass: "hentry blog-post quicklink-tile"
                    }, [e("div", {
                        staticClass: "post-thumb"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/temple-events/community-activities"
                        }
                    }, [e("img", {
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/homepage/post-community.jpg",
                            alt: "photo"
                        }
                    })])], 1), t._v(" "), e("div", {
                        staticClass: "post-content"
                    }, [e("p", {
                        staticClass: "txt-big-lg"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/temple-events/community-activities"
                        }
                    }, [t._v("Community Seva")])], 1)])])])])])])]), t._v(" "), e("section", {
                        staticClass: "medium-padding80"
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row"
                    }, [t._m(7), t._v(" "), e("div", {
                        staticClass: "col col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12"
                    }, [e("div", {
                        staticClass: "crumina-module crumina-heading"
                    }, [e("h4", [t._v("Our pinnacle, Our inspiration")]), t._v(" "), e("h2", {
                        staticClass: "heading-title c-primary"
                    }, [t._v("Our Own Sri Swamiji")]), t._v(" "), e("p", [t._v("\n              Sri Swamiji is a rare Yogi – one who has embodied a new yet\n              ancient path, paving the way for countless others to achieve\n              peace of mind through yoga.\n            ")]), t._v(" "), e("p", [t._v("\n              His Holiness is our divine guide who promotes the ancient Vedic\n              traditions. Sri Swamiji's universal vision and deep compassion\n              for the upliftment of the mankind has inspired the Peetham to\n              run a vast variety of programs, activities and projects towards\n              enrichment of human life.\n            ")]), t._v(" "), e("nuxt-link", {
                        staticClass: "btn btn-blue btn-sm",
                        attrs: {
                            to: "/about/swamiji"
                        }
                    }, [t._v("Learn more")])], 1)])])])]), t._v(" "), e("section", {
                        staticClass: "padding40 bg-purple"
                    }, [e("div", {
                        staticClass: "container"
                    }, [t._m(8), t._v(" "), e("div", {
                        staticClass: "row"
                    }, [e("div", {
                        staticClass: "col col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
                    }, [e("article", {
                        staticClass: "hentry blog-post"
                    }, [e("div", {
                        staticClass: "post-thumb"
                    }, [e("nuxt-link", {
                        staticClass: "h4 post-title c-yellow",
                        attrs: {
                            to: "/classes/religious/bhagavad-gita-maha-yagna"
                        }
                    }, [e("img", {
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/homepage/post-gitachanting.jpg",
                            alt: "photo"
                        }
                    })])], 1), t._v(" "), e("div", {
                        staticClass: "post-content"
                    }, [e("div", {
                        staticClass: "post-category bg-blue"
                    }, [t._v("CLASSES")]), t._v(" "), e("nuxt-link", {
                        staticClass: "h4 post-title c-yellow",
                        attrs: {
                            to: "/classes/religious/bhagavad-gita-maha-yagna"
                        }
                    }, [t._v("Bhagavad Gita Chanting Class")]), t._v(" "), e("p", {
                        staticClass: "color-white"
                    }, [t._v("\n                Kids, youth and adults can benefit all alike by chanting the\n                Gita. By His divine grace of His Holiness Sri Swamiji we have\n                started Gita recitation classes. The goal is to teach all 18\n                chapters. Please join and take advantage of this priceless\n                age-old blissful art of Gurukula-style Chanting.\n              ")])], 1)])]), t._v(" "), e("div", {
                        staticClass: "col col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
                    }, [e("article", {
                        staticClass: "hentry blog-post"
                    }, [e("div", {
                        staticClass: "post-thumb"
                    }, [e("nuxt-link", {
                        staticClass: "h4 post-title c-yellow",
                        attrs: {
                            to: "/temple-events/remote-events-services"
                        }
                    }, [e("img", {
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/event/2020/archana-thoram-abhisheka-2020.jpg",
                            alt: "photo"
                        }
                    })])], 1), t._v(" "), e("div", {
                        staticClass: "post-content"
                    }, [e("div", {
                        staticClass: "post-category bg-primary"
                    }, [t._v("EVENT")]), t._v(" "), e("nuxt-link", {
                        staticClass: "h4 post-title c-yellow",
                        attrs: {
                            to: "/temple-events/remote-events-services"
                        }
                    }, [t._v("Remote Events & Services")]), t._v(" "), e("p", {
                        staticClass: "color-white"
                    }, [t._v("\n                During Covid-19 Pandemic, Hanuman Temple is broadcasting LIVE\n                Festival Pujas, conducting Group Pujas, FREE Yoga classes,\n                Spiritual Discourses and resuming Online Pujas for the sake of\n                community and devotees.\n              ")])], 1)])]), t._v(" "), e("div", {
                        staticClass: "col col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
                    }, [e("article", {
                        staticClass: "hentry blog-post"
                    }, [e("div", {
                        staticClass: "post-thumb"
                    }, [e("nuxt-link", {
                        staticClass: "h4 post-title c-yellow",
                        attrs: {
                            to: "/featured-posts/rajagopura-courtyard"
                        }
                    }, [e("img", {
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/featuredposts/rajagopura-courtyard-hero.jpg",
                            alt: "photo"
                        }
                    })])], 1), t._v(" "), e("div", {
                        staticClass: "post-content"
                    }, [e("div", {
                        staticClass: "post-category bg-green"
                    }, [t._v("FEATURED")]), t._v(" "), e("nuxt-link", {
                        staticClass: "h4 post-title c-yellow",
                        attrs: {
                            to: "/featured-posts/rajagopura-courtyard"
                        }
                    }, [t._v("Rajagopura Courtyard")]), t._v(" "), e("p", {
                        staticClass: "color-white"
                    }, [t._v("\n                A Courtyard around Rajagopura has been conceived to ease\n                devotees entering & existing out of temple. Construction\n                activity of this project is currently in progress. This work\n                is expected to be completed along with a Indianized six feet\n                wall.\n              ")])], 1)])])])])]), t._v(" "), e("section", {
                        staticClass: "padding30"
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row"
                    }, [e("div", {
                        staticClass: "col col-xl-6 order-xl-1 col-lg-6 col-md-6 col-sm-12 col-12"
                    }, [e("div", {
                        staticClass: "ui-block"
                    }, [t._m(9), t._v(" "), e("div", {
                        staticClass: "ui-block-content"
                    }, [e("p", [t._v("\n                Parama Pujya Sri Swamiji met with Dallas and Houston Satsang\n                groups on August 11th, Saturday 2007 at Datta Temple, Baton\n                Rouge. Sri Swamiji directed devotees at that gathering to find\n                land in Dallas to build Marakata Karya Siddhi Hanuman Temple.\n                This will become the only Marakata (Jade) stone idol in North\n                America/Europe.\n              ")]), t._v(" "), e("nuxt-link", {
                        staticClass: "btn btn-blue btn-sm",
                        attrs: {
                            to: "/about/history"
                        }
                    }, [t._v("Learn more")])], 1)])]), t._v(" "), e("div", {
                        staticClass: "col col-xl-6 order-xl-1 col-lg-6 col-md-6 col-sm-12 col-12"
                    }, [e("div", {
                        staticClass: "ui-block"
                    }, [t._m(10), t._v(" "), e("div", {
                        staticClass: "ui-block-content"
                    }, [e("p", [t._v("\n                A new 3200 sqft kitchen expansion was approved by the City of\n                Frisco in 2016. The expanded kitchen project was completed in\n                2017. HH Sri Swamiji inaugurated the new kitchen during the\n                Guru Mahotsav celebrations in December 2017.\n              ")]), t._v(" "), e("nuxt-link", {
                        staticClass: "btn btn-blue btn-sm",
                        attrs: {
                            to: "/puja-services/cafeteria"
                        }
                    }, [t._v("Learn more")])], 1)])])])])]), t._v(" "), e("hr"), t._v(" "), e("section", [e("div", {
                        staticClass: "container padding20"
                    }, [t._m(11), t._v(" "), e("div", {
                        staticClass: "info-box-wrap"
                    }, [e("div", {
                        staticClass: "row"
                    }, [e("div", {
                        staticClass: "col col-xl-2 col-lg-2 col-md-3 col-sm-3 col-4"
                    }, [e("div", {
                        staticClass: "text-center"
                    }, [e("nuxt-link", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/classes/arts"
                        }
                    }, [e("img", {
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/homepage/ksht-classes-art.png",
                            alt: "icon"
                        }
                    })]), t._v(" "), e("h6", {
                        staticClass: "padding10"
                    }, [e("nuxt-link", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/classes/arts"
                        }
                    }, [t._v("Art")])], 1)], 1)]), t._v(" "), e("div", {
                        staticClass: "col col-xl-2 col-lg-2 col-md-4 col-sm-3 col-4"
                    }, [e("div", {
                        staticClass: "text-center"
                    }, [e("nuxt-link", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/classes/yoga"
                        }
                    }, [e("img", {
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/homepage/ksht-classes-yoga.png",
                            alt: "icon"
                        }
                    })]), t._v(" "), e("h6", {
                        staticClass: "padding10"
                    }, [e("nuxt-link", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/classes/yoga"
                        }
                    }, [t._v("Yoga")])], 1)], 1)]), t._v(" "), e("div", {
                        staticClass: "col col-xl-2 col-lg-2 col-md-4 col-sm-3 col-4"
                    }, [e("div", {
                        staticClass: "text-center"
                    }, [e("nuxt-link", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/classes/violin"
                        }
                    }, [e("img", {
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/homepage/ksht-classes-violin.png",
                            alt: "icon"
                        }
                    })]), t._v(" "), e("h6", {
                        staticClass: "padding10"
                    }, [e("nuxt-link", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/classes/violin"
                        }
                    }, [t._v("Violin")])], 1)], 1)]), t._v(" "), e("div", {
                        staticClass: "col col-xl-2 col-lg-2 col-md-4 col-sm-3 col-4"
                    }, [e("div", {
                        staticClass: "text-center"
                    }, [e("nuxt-link", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/classes/religious"
                        }
                    }, [e("img", {
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/homepage/ksht-classes-religion.png",
                            alt: "icon"
                        }
                    })]), t._v(" "), e("h6", {
                        staticClass: "padding10"
                    }, [e("nuxt-link", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/classes/religious"
                        }
                    }, [t._v("Religion")])], 1)], 1)]), t._v(" "), e("div", {
                        staticClass: "col col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4"
                    }, [e("div", {
                        staticClass: "text-center"
                    }, [e("nuxt-link", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/classes/bala-datta"
                        }
                    }, [e("img", {
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/homepage/bdlogo.png",
                            alt: "icon"
                        }
                    })]), t._v(" "), e("h6", {
                        staticClass: "padding10"
                    }, [e("nuxt-link", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/classes/bala-datta"
                        }
                    }, [t._v("Bala Datta")])], 1)], 1)]), t._v(" "), e("div", {
                        staticClass: "col col-xl-2 col-lg-2 col-md-4 col-sm-3 col-4"
                    }, [e("div", {
                        staticClass: "text-center"
                    }, [e("nuxt-link", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/classes/dance"
                        }
                    }, [e("img", {
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/homepage/ksht-classes-dance.png",
                            alt: "icon"
                        }
                    })]), t._v(" "), e("h6", {
                        staticClass: "padding10"
                    }, [e("nuxt-link", {
                        staticClass: "dropdown-item",
                        attrs: {
                            to: "/classes/dance"
                        }
                    }, [t._v("Dance")])], 1)], 1)])])]), t._v(" "), e("div", {
                        staticClass: "row"
                    }, [e("div", {
                        staticClass: "col col-xl-5 col-lg-5 m-auto col-md-12 col-sm-12 col-12"
                    }, [e("div", {
                        staticClass: "crumina-module crumina-heading align-center"
                    }, [e("nuxt-link", {
                        staticClass: "btn btn-blue btn-md",
                        attrs: {
                            to: "/classes/schedules"
                        }
                    }, [t._v("Classes schedules")])], 1)])])])]), t._v(" "), t._m(12)])
                }), [function() {
                    var t = this,
                        l = t.$createElement,
                        e = t._self._c || l;
                    return e("div", {
                        staticClass: "main-header"
                    }, [e("div", {
                        staticClass: "content-bg-wrap bg-homepage"
                    }), t._v(" "), e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row"
                    }, [e("div", {
                        staticClass: "col col-lg-8 m-auto col-md-8 col-sm-12 col-12"
                    }, [e("div", {
                        staticClass: "main-header-content",
                        staticStyle: {
                            background: "rgba(40, 40, 40, 0.5)"
                        }
                    }, [e("h4", [t._v('\n              "Karya means wish or act. Siddhi means realizing.\n              '), e("br"), t._v('Karya Siddhi Hanuman is one who fulfills your wishes".\n            ')]), t._v(" "), e("p", [t._v("WELCOME TO")]), t._v(" "), e("h1", [t._v("Karya Siddhi Hanuman Temple")])])])])]), t._v(" "), e("img", {
                        staticClass: "img-bottom",
                        staticStyle: {
                            "margin-bottom": "-120px",
                            height: "120px",
                            width: "120px"
                        },
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/homepage/thbn-SGS.png",
                            alt: "SGS"
                        }
                    })])
                }, function() {
                    var t = this,
                        l = t.$createElement,
                        e = t._self._c || l;
                    return e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row"
                    }, [e("div", {
                        staticClass: "col col-xl-8 m-auto col-lg-8 col-md-12 col-sm-12 col-12"
                    }, [e("div", {
                        staticClass: "text-center"
                    }, [e("p", {
                        staticStyle: {
                            "padding-top": "30px"
                        }
                    }, [t._v("\n            With the guidance & blessings of Parama Pujya\n          ")]), t._v(" "), e("h4", [t._v("Sri Ganapathy Sachchidananda Swamiji")])])])])])
                }, function() {
                    var t = this,
                        l = t.$createElement,
                        e = t._self._c || l;
                    return e("h5", [e("img", {
                        staticClass: "ico-sm",
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/svg-icons/calendar-date.svg"
                        }
                    }), t._v("\n                    Temple Events\n                  ")])
                }, function() {
                    var t = this,
                        l = t.$createElement,
                        e = t._self._c || l;
                    return e("div", {
                        staticClass: "col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12"
                    }, [e("div", {
                        staticClass: "ui-block"
                    }, [e("article", {
                        staticClass: "hentry blog-post"
                    }, [e("div", {
                        staticClass: "post-thumb"
                    }, [e("img", {
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/community/consular-camp.jpg",
                            alt: "photo"
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "post-content"
                    }, [e("p", {
                        staticClass: "txt-big-xxl"
                    }, [e("a", {
                        attrs: {
                            href: "#"
                        }
                    }, [t._v("One Day Consular Camp")])]), t._v(" "), e("hr"), t._v(" "), e("p", {
                        staticClass: "text-uppercase",
                        staticStyle: {
                            "font-size": "90%"
                        }
                    }, [t._v("\n                    Conducted by "), e("br"), t._v("Consulate General of India, Houston\n                    "), e("br"), e("strong", [t._v("26 feb, Sat 10AM - 5PM")])]), t._v(" "), e("hr"), t._v("\n                  All Slots Full. "), e("br"), t._v("\n                  No Walk Ins will be allowed.\n                ")])])])])
                }, function() {
                    var t = this.$createElement,
                        l = this._self._c || t;
                    return l("div", {
                        staticClass: "col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12"
                    }, [l("div", {
                        staticClass: "ui-block"
                    })])
                }, function() {
                    var t = this,
                        l = t.$createElement,
                        e = t._self._c || l;
                    return e("div", {
                        staticClass: "col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12"
                    }, [e("div", {
                        staticClass: "ui-block"
                    }, [e("article", {
                        staticClass: "hentry blog-post"
                    }, [e("div", {
                        staticClass: "post-thumb"
                    }, [e("a", {
                        attrs: {
                            href: "https://dallashanumanstore.org/store/Puja/Special-Pujas-and-Festivals/General",
                            target: "new"
                        }
                    }, [e("img", {
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/event/2020/archana-thoram-abhisheka-2020.jpg",
                            alt: "photo"
                        }
                    })])]), t._v(" "), e("div", {
                        staticClass: "post-content"
                    }, [e("p", {
                        staticClass: "txt-big-xxl"
                    }, [e("a", {
                        attrs: {
                            href: "https://dallashanumanstore.org/store/Puja/Special-Pujas-and-Festivals/General",
                            target: "new"
                        }
                    }, [t._v("Sponsor Puja Services")])]), t._v(" "), e("hr"), t._v(" "), e("p", {
                        staticClass: "text-uppercase",
                        staticStyle: {
                            "font-size": "90%"
                        }
                    }, [t._v("\n                    Remote Daily Thoram, Archana & Every Sat Abhisheka\n                  ")]), t._v(" "), e("hr"), t._v(" "), e("a", {
                        staticClass: "btn btn-primary btn-sm",
                        attrs: {
                            href: "https://dallashanumanstore.org/store/Puja/Special-Pujas-and-Festivals/General",
                            target: "_new"
                        }
                    }, [t._v("Sponsor Online")])])])])])
                }, function() {
                    var t = this,
                        l = t.$createElement,
                        e = t._self._c || l;
                    return e("div", {
                        staticClass: "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 align-center"
                    }, [e("section", {
                        staticClass: "blog-post-wrap"
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("div", {
                        staticClass: "row",
                        attrs: {
                            "data-layout": "masonry"
                        }
                    }, [e("div", {
                        staticClass: "col col-12 padding10"
                    }, [e("h3", {
                        staticClass: "align-center color-white"
                    }, [t._v("Quick Links")])])])])])])
                }, function() {
                    var t = this.$createElement,
                        l = this._self._c || t;
                    return l("div", {
                        staticClass: "col col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12"
                    }, [l("img", {
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/homepage/post-swamiji.png",
                            alt: "screen"
                        }
                    })])
                }, function() {
                    var t = this,
                        l = t.$createElement,
                        e = t._self._c || l;
                    return e("div", {
                        staticClass: "row"
                    }, [e("div", {
                        staticClass: "col col-xl-6 col-lg-6 m-auto col-md-12 col-sm-12 col-12"
                    }, [e("div", {
                        staticClass: "crumina-module crumina-heading align-center"
                    }, [e("h2", {
                        staticClass: "color-white"
                    }, [t._v("Highlights")])])])])
                }, function() {
                    var t = this,
                        l = t.$createElement,
                        e = t._self._c || l;
                    return e("div", {
                        staticClass: "ui-block-title"
                    }, [e("h4", [t._v("Temple History")])])
                }, function() {
                    var t = this,
                        l = t.$createElement,
                        e = t._self._c || l;
                    return e("div", {
                        staticClass: "ui-block-title"
                    }, [e("h4", {
                        staticClass: "heading-title"
                    }, [t._v("Cafeteria")])])
                }, function() {
                    var t = this,
                        l = t.$createElement,
                        e = t._self._c || l;
                    return e("div", {
                        staticClass: "row"
                    }, [e("div", {
                        staticClass: "col col-xl-5 col-lg-5 m-auto col-md-12 col-sm-12 col-12"
                    }, [e("div", {
                        staticClass: "crumina-module crumina-heading align-center"
                    }, [e("h2", {
                        staticClass: "heading-title",
                        attrs: {
                            save_image_to_download: "true"
                        }
                    }, [t._v("\n              Classes at temple\n            ")]), t._v(" "), e("p")])])])
                }, function() {
                    var t = this.$createElement,
                        l = this._self._c || t;
                    return l("a", {
                        staticClass: "back-to-top",
                        attrs: {
                            href: "#"
                        }
                    }, [l("img", {
                        staticClass: "back-icon",
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/svg-icons/back-to-top.svg",
                            alt: "arrow",
                            save_image_to_download: "true"
                        }
                    })])
                }], !1, null, null, null);
            l.default = component.exports
        }
    }
]);