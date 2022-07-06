(window.webpackJsonp = window.webpackJsonp || []).push([
    [13], {
        374: function(t, e, n) {
            t.exports = n.p + "img/calendar-month.e3601c5.svg"
        },
        378: function(t, e, n) {
            t.exports = n.p + "img/go-next.b3d6d0b.svg"
        },
        381: function(t, e, n) {
            "use strict";
            var r = n(8),
                l = n(130)(5),
                c = "find",
                o = !0;
            c in [] && Array(1).find((function() {
                o = !1
            })), r(r.P + r.F * o, "Array", {
                find: function(t) {
                    return l(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), n(129)(c)
        },
        391: function(t, e, n) {
            t.exports = n.p + "img/calendar-week.0097e61.svg"
        },
        392: function(t, e, n) {
            t.exports = n.p + "img/go-previous.2c9884b.svg"
        },
        428: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "top-header-thumb"
                    }, [e("img", {
                        attrs: {
                            src: "https://assets.dallashanuman.net/images/event/bg-pg-hdr-calendar-new-1940.jpg",
                            alt: "Calendar"
                        }
                    })])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "row"
                    }, [n("div", {
                        staticClass: "col col-xl-12 m-auto col-lg-12 col-md-12"
                    }, [n("h1", {
                        staticClass: "text-center"
                    }, [t._v("Events Calendar")])])])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "row"
                    }, [r("div", {
                        staticClass: "col col-xl-6 m-auto col-lg-6 col-md-6 col-sm-12 col-12 align-center"
                    }, [r("a", {
                        attrs: {
                            href: "https://docs.google.com/spreadsheet/ccc?key=0AiE7iZJbauHadGh6clRtZU9BdW1NcldRUDN6ZW94SWc&hl=en_US#gid=0",
                            target: "_new"
                        }
                    }, [r("img", {
                        staticClass: "ico-lg",
                        attrs: {
                            src: n(374),
                            alt: "Day"
                        }
                    }), t._v(" Cultural Events Calendar ")]), t._v(" "), r("img", {
                        staticClass: "ico-lg",
                        attrs: {
                            src: n(374),
                            alt: "Day"
                        }
                    }), t._v(" "), r("a", {
                        attrs: {
                            href: "https://assets.dallashanuman.net/docs/downloads/2022cal.pdf",
                            target: "_new"
                        }
                    }, [r("strong", [t._v("2022 Annual Calendar")])])])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("a", {
                        staticClass: "back-to-top",
                        attrs: {
                            href: "#"
                        }
                    }, [e("img", {
                        staticClass: "back-icon",
                        attrs: {
                            src: n(196),
                            alt: "arrow"
                        }
                    })])
                }],
                l = (n(381), n(63)),
                c = n.n(l),
                o = {
                    data: function() {
                        return {
                            filterSelected: "Puja Events",
                            selectedCalendarViewDays: 7,
                            currentStartDate: new Date,
                            currentEndDate: new Date,
                            currentEndDateTitle: new Date,
                            apiCalendarData: [],
                            calendarData: [],
                            daysOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                            monthsInCalendar: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                            filterItems: [{
                                eventType: "Puja Events",
                                calendarId: "calendar.pujas@dallashanuman.org"
                            }, {
                                eventType: "Cultural Events",
                                calendarId: "calendar.cultural@dallashanuman.org"
                            }, {
                                eventType: "Community Events",
                                calendarId: "calendar.community@dallashanuman.org"
                            }, {
                                eventType: "Classes Events",
                                calendarId: "calendar.classes@dallashanuman.org"
                            }]
                        }
                    },
                    created: function() {
                        this.getCalendar()
                    },
                    head: function() {
                        return {
                            script: [],
                            link: []
                        }
                    },
                    methods: {
                        getCurrentEndDate: function() {
                            return this.currentEndDate.setMonth(this.currentStartDate.getMonth()), this.currentEndDate.setDate(this.currentStartDate.getDate() + this.selectedCalendarViewDays - 1), this.currentEndDate
                        },
                        compareDates: function(t, e, n) {
                            var r = null,
                                l = null;
                            return t.start.hasOwnProperty("dateTime") ? r = new Date(t.start.dateTime) : t.start.hasOwnProperty("date") && (r = new Date(t.start.date + "T06:00:00")), n > 0 ? (e.start.hasOwnProperty("dateTime") ? l = new Date(e.start.dateTime) : e.start.hasOwnProperty("date") && (l = new Date(e.start.date + "T06:00:00")), r.getMonth() + r.getDate() + r.getFullYear() !== l.getMonth() + l.getDate() + l.getFullYear()) : 0 == n ? r.getMonth() + r.getDate() + r.getFullYear() : void 0
                        },
                        getDateValue: function(t) {
                            var e = null;
                            return t.start.hasOwnProperty("dateTime") ? e = new Date(t.start.dateTime) : t.start.hasOwnProperty("date") && (e = new Date(t.start.date + "T06:00:00")), this.daysOfWeek[e.getDay()] + ", " + this.monthsInCalendar[e.getMonth()] + " " + e.getDate()
                        },
                        getEventTime: function(t) {
                            var e = new Date(t),
                                n = e.getHours(),
                                r = e.getMinutes(),
                                l = "";
                            return l = n < 13 ? n < 12 ? "AM" : r > 0 ? "PM" : "NOON" : (n -= 12) < 12 ? "PM" : "AM", r < 10 && (r = "0" + r), n + ":" + r + " " + l
                        },
                        getCalendarNext: function() {
                            this.currentStartDate.setDate(this.currentStartDate.getDate() + this.selectedCalendarViewDays), this.getCalendar()
                        },
                        getCalendarPrevious: function() {
                            this.currentStartDate.setDate(this.currentStartDate.getDate() - this.selectedCalendarViewDays), this.getCalendar()
                        },
                        getCalendarToday: function() {
                            this.selectedCalendarViewDays = 1, this.getCalendar()
                        },
                        getCalendarWeek: function() {
                            this.selectedCalendarViewDays = 7, this.getCalendar()
                        },
                        getCalendarMonth: function() {
                            this.selectedCalendarViewDays = 30, this.getCalendar()
                        },
                        prepareCalendarData: function(t) {
                            var e = [],
                                i = -1,
                                n = 0,
                                r = 0,
                                l = {
                                    eventDay: {},
                                    events: []
                                },
                                c = null;
                            for (i = 0; i < t.length; i++) void 0 !== (c = t[i]).start.date ? (l = {
                                eventDay: c,
                                events: []
                            }, e[r] = l, r++, n = 0) : (l.events[n] = c, n++);
                            return e
                        },
                        getCalendar: function() {
                            var t = this,
                                e = this.filterItems.find((function(e) {
                                    return e.eventType === t.filterSelected
                                }));
                            this.currentStartDate.setHours(0), this.currentStartDate.setMinutes(0), this.currentStartDate.setSeconds(0), this.currentEndDate.setFullYear(this.currentStartDate.getFullYear()), this.currentEndDate.setMonth(this.currentStartDate.getMonth()), this.currentEndDate.setDate(this.currentStartDate.getDate() + this.selectedCalendarViewDays - 1), this.currentEndDate.setHours(23), this.currentEndDate.setMinutes(59), this.currentEndDate.setSeconds(59), c.a.get("https://www.googleapis.com/calendar/v3/calendars/" + e.calendarId + "/events?singleEvents=true&futureevents=true&format24HourTime=false&timeZone=America/Chicago&timeMin=" + this.currentStartDate.toISOString() + "&timeMax=" + this.currentEndDate.toISOString() + "&orderBy=startTime&key=AIzaSyCW90hLkYeX6ofvzdeRUujA2p9YlkyYt_Y", {
                                headers: {
                                    "Content-Type": "application/json",
                                    Accept: "application/json"
                                }
                            }).then((function(e) {
                                t.apiCalendarData = e.data.items, t.calendarData = t.prepareCalendarData(e.data.items)
                            })).catch((function(e) {
                                t.apiCalendarData = [], t.calendarData = []
                            }))
                        }
                    }
                },
                d = n(13),
                component = Object(d.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", [r("div", {
                        staticClass: "header-spacer header-spacer-small"
                    }), t._v(" "), r("section", [r("div", {
                        staticClass: "container"
                    }, [r("div", {
                        staticClass: "row"
                    }, [r("div", {
                        staticClass: "col  col-12"
                    }, [r("div", {
                        staticClass: "ui-block"
                    }, [r("div", {
                        staticClass: "top-header top-header-favorit"
                    }, [t._m(0), t._v(" "), r("div", {
                        staticClass: "profile-section"
                    }, [t._m(1), t._v(" "), r("div", {
                        staticClass: "row"
                    }, [r("div", {
                        staticClass: "col col-xl-6 m-auto col-lg-6 col-md-6 col-sm-12 col-12 align-center"
                    }, [t._v("\n                           View by(all times in CST): \n                           "), r("a", {
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.getCalendarWeek.apply(null, arguments)
                            }
                        }
                    }, [r("img", {
                        staticClass: "ico-lg",
                        attrs: {
                            src: n(391),
                            alt: "Week"
                        }
                    })]), t._v(" "), r("a", {
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.getCalendarMonth.apply(null, arguments)
                            }
                        }
                    }, [r("img", {
                        staticClass: "ico-lg",
                        attrs: {
                            src: n(374),
                            alt: "Month"
                        }
                    })])])]), t._v(" "), t._m(2)])])])])])])]), t._v(" "), r("section", [r("div", {
                        staticClass: "container"
                    }, [r("div", {
                        staticClass: "row"
                    }, [r("div", {
                        staticClass: "col col-xl-12  col-lg-12 col-md-12 col-sm-12 col-12"
                    }, [r("div", {
                        staticClass: "ui-block"
                    }, [r("div", {
                        staticClass: "fc fc-ltr fc-unthemed",
                        attrs: {
                            id: "calendar-full-1"
                        }
                    }, [r("div", {
                        staticClass: "fc-toolbar "
                    }, [r("div", {
                        staticClass: "fc-left"
                    }, [r("div", {
                        staticClass: "fc-button-group"
                    }, [r("button", {
                        staticClass: "fc-prev-button fc-button fc-state-default fc-corner-left",
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: t.getCalendarPrevious
                        }
                    }, [r("img", {
                        staticClass: "ico-lg",
                        attrs: {
                            src: n(392),
                            alt: ""
                        }
                    })])])]), t._v(" "), r("div", {
                        staticClass: "fc-center"
                    }, [t.currentStartDate ? r("h3", {
                        staticClass: "date responsive-flex"
                    }, [t._v("\n                        " + t._s(t.monthsInCalendar[t.currentStartDate.getMonth()]) + " \n                        "), r("span", {
                        staticClass: "color-ksht-hot-pink"
                    }, [r("strong", [t._v(t._s(t.currentStartDate.getDate()))])]), t._v("\n                        - " + t._s(t.monthsInCalendar[t.getCurrentEndDate().getMonth()]) + " \n                        "), r("span", {
                        staticClass: "color-ksht-hot-pink"
                    }, [r("strong", [t._v(" " + t._s(t.getCurrentEndDate().getDate()))])])]) : r("h3", {
                        staticClass: "date responsive-flex"
                    }, [t._v("\n                        " + t._s(t.monthsInCalendar[(new Date).getMonth()]) + " "), r("span", {
                        staticClass: "color-ksht-hot-pink"
                    }, [r("strong", [t._v(t._s((new Date).getDate()))])])])]), t._v(" "), r("div", {
                        staticClass: "fc-right"
                    }, [r("div", {
                        staticClass: "fc-button-group"
                    }, [r("button", {
                        staticClass: "fc-next-button fc-button fc-state-default fc-corner-right",
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: t.getCalendarNext
                        }
                    }, [r("img", {
                        staticClass: "ico-lg",
                        attrs: {
                            src: n(378),
                            alt: ""
                        }
                    })])])]), t._v(" "), r("div", {
                        staticClass: "fc-clear"
                    })]), t._v(" "), r("div", {
                        staticClass: "fc-view-container"
                    }, [r("div", {
                        staticClass: "tab-content"
                    }, [r("div", {
                        staticClass: "tab-pane ",
                        attrs: {
                            id: "month",
                            role: "tabpanel"
                        }
                    }, [t._v(" Month ")]), t._v(" "), r("div", {
                        staticClass: "tab-pane",
                        attrs: {
                            id: "week",
                            role: "tabpanel"
                        }
                    }, [t._v(" Week ")]), t._v(" "), r("div", {
                        staticClass: "tab-pane active",
                        attrs: {
                            id: "day",
                            role: "tabpanel"
                        }
                    }, [r("div", {
                        staticClass: "fc-view fc-agendaDay-view fc-agenda-view"
                    }), t._v(" "), t._l(t.calendarData, (function(e, i) {
                        return r("div", {
                            key: i,
                            staticStyle: {
                                "margin-bottom": "20px"
                            }
                        }, [r("table", [r("tr", {
                            staticStyle: {
                                height: "30px"
                            }
                        }, [r("td", {
                            staticStyle: {
                                width: "15%"
                            }
                        }, [r("h5", {
                            staticClass: "cal-daytitle"
                        }, [t._v(t._s(t.getDateValue(e.eventDay)))])]), t._v(" "), r("td", [r("span", {
                            staticClass: "author-name"
                        }, [t._v("Highlighted Event of the Day")]), t._v("\n                                       -- "), r("strong", [t._v(t._s(e.eventDay.summary))]), t._v(" "), r("div", {
                            staticStyle: {
                                color: "green"
                            },
                            attrs: {
                                color: "red"
                            },
                            domProps: {
                                innerHTML: t._s(e.eventDay.description)
                            }
                        })])]), t._v(" "), t._l(e.events, (function(e, n) {
                            return r("tr", {
                                key: n
                            }, [r("td", {
                                staticStyle: {
                                    width: "15%",
                                    "padding-left": "22px"
                                }
                            }, [t._v("\n                                       " + t._s(t.getEventTime(e.start.dateTime)) + "-" + t._s(t.getEventTime(e.end.dateTime)) + "\n                                    ")]), t._v(" "), r("td", [r("strong", [t._v(t._s(e.summary))]), t._v(" "), e.description && e.description.length > 0 ? r("span", [t._v(" -("), r("span", {
                                staticStyle: {
                                    color: "green"
                                },
                                attrs: {
                                    color: "red"
                                },
                                domProps: {
                                    innerHTML: t._s(e.description)
                                }
                            }), t._v(")")]) : t._e()])])
                        }))], 2)])
                    }))], 2)])])])])])])])]), t._v(" "), t._m(3), t._v(" "), r("div", {
                        staticClass: "header-spacer header-spacer-small"
                    })])
                }), r, !1, null, null, null);
            e.default = component.exports
        }
    }
]);