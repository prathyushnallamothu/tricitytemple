<template>
  <div class="app-calendar overflow-hidden border">
    <div class="row no-gutters">
      <!-- Sidebar -->
      <!--    <div
        class="col app-calendar-sidebar flex-grow-0 overflow-hidden d-flex flex-column"
        :class="{'show': isCalendarOverlaySidebarActive}"
      >
        <calendar-sidebar :is-event-handler-sidebar-active.sync="isEventHandlerSidebarActive" />
      </div> -->

      <!-- Calendar -->
      <div class="col position-relative">
        <div class="card shadow-none border-0 mb-0 rounded-0">
          <div class="card-body pb-0">
            <full-calendar
              ref="refCalendar"
              :options="calendarOptionsV2"
              class="full-calendar"
            />
          </div>
        </div>
      </div>

      <!-- Sidebar Overlay -->

      <calendar-event-handler
        v-model="isEventHandlerSidebarActive"
        :event="eventV2"
        :clear-event-data="clearEventDataV2"
        :addEventV2="addEventV2"
        :removeEventV2="removeEventV2"
        :updateEventV2="updateEventV2"
      />
    </div>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import store from "@/store";
import { onMounted, onUnmounted } from "@vue/composition-api";
import calendarStoreModule from "./calendarStoreModule";
import CalendarSidebar from "./calendar-sidebar/CalendarSidebar.vue";
import CalendarEventHandler from "./calendar-event-handler/CalendarEventHandler.vue";
import useCalendar from "./useCalendar";
import axios from "axios";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import { useToast } from "vue-toastification/composition";
export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
    CalendarSidebar,
    CalendarEventHandler,
  },
  data() {
    return {
      eventV2: {
        id: null,
        title: "",
        description: "",
        file: null,
        img_url: "",
        start_time: "",
        end_time: "",
        location: "",
      },
      isEventHandlerSidebarActive: false,
      eventsOnCalendar: [],
      calendarOptionsV2: {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
        initialView: "dayGridMonth",
        headerToolbar: {
          start: "sidebarToggle, prev,next, title",
          end: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        },
        events: this.eventsOnCalendar,

        /*
          Enable dragging and resizing event
          ? Docs: https://fullcalendar.io/docs/editable
        */
        editable: true,

        /*
          Enable resizing event from start
          ? Docs: https://fullcalendar.io/docs/eventResizableFromStart
        */
        eventResizableFromStart: true,

        /*
          Automatically scroll the scroll-containers during event drag-and-drop and date selecting
          ? Docs: https://fullcalendar.io/docs/dragScroll
        */
        dragScroll: true,

        /*
          Max number of events within a given day
          ? Docs: https://fullcalendar.io/docs/dayMaxEvents
        */
        dayMaxEvents: 2,

        /*
          Determines if day names and week names are clickable
          ? Docs: https://fullcalendar.io/docs/navLinks
        */
        navLinks: true,

        /*         eventClassNames({ event: calendarEvent }) {
            // eslint-disable-next-line no-underscore-dangle
            const colorName = calendarsColor[calendarEvent._def.extendedProps.calendar]

            return [
                // Background Color
                `bg-light-${colorName}`,
            ]
        }, */
        eventClick: ({ event: clickedEvent }) => {
          console.log(clickedEvent);
          // * Only grab required field otherwise it goes in infinity loop
          // ! Always grab all fields rendered by form (even if it get `undefined`) otherwise due to Vue3/Composition API you might get: "object is not extensible"
          this.eventV2 = this.grabEventDataFromEventApi(clickedEvent);

          // eslint-disable-next-line no-use-before-define
          this.isEventHandlerSidebarActive = true;
        },

        customButtons: {
          sidebarToggle: {
            // --- This dummy text actual icon rendering is handled using SCSS ----- //
            text: "sidebar",
            click() {
              // eslint-disable-next-line no-use-before-define
              isCalendarOverlaySidebarActive.value =
                !isCalendarOverlaySidebarActive.value;
            },
          },
        },

        dateClick: (info) => {
          this.eventV2.start = info.date;
          // eslint-disable-next-line no-use-before-define
          this.isEventHandlerSidebarActive = true;
        },

        /*
          Handle event drop (Also include dragged event)
          ? Docs: https://fullcalendar.io/docs/eventDrop
          ? We can use `eventDragStop` but it doesn't return updated event so we have to use `eventDrop` which returns updated event
        */
        /*        eventDrop({ event: droppedEvent }) {
            updateEvent(grabEventDataFromEventApi(droppedEvent))
        }, */

        /*
          Handle event resize
          ? Docs: https://fullcalendar.io/docs/eventResize
        */
        /*    eventResize({ event: resizedEvent }) {
            updateEvent(grabEventDataFromEventApi(resizedEvent))
        }, */

        // Get direction from app state (store)
        direction: "ltr",
        rerenderDelay: 350,
      },
    };
  },
  mounted() {
    this.fetchEvents();
  },
  methods: {
    grabEventDataFromEventApi(eventApi) {
      const {
        id,
        title,
        start,
        end,
        start_time,
        end_time,
        file,

        // eslint-disable-next-line object-curly-newline
        extendedProps: { calendar, guests, location, description, img_url },
        allDay,
      } = eventApi;

      return {
        id,
        title,
        start,
        end,
        start_time,
        end_time,
        file,

        location,
        description,
        img_url,
        allDay,
      };
    },
    getBase64(file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        return reader.result;
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    },
    updateEventV2() {
     axios
          .put(
            "http://localhost:8888/events",
            JSON.stringify(this.eventV2 ),
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            if (response.data.status == "success") {
              this.fetchEvents();
              this.isEventHandlerSidebarActive = false;
            } else {
              this.$toast({
                component: ToastificationContent,
                props: {
                  title: response.data.message,
                  icon: "AlertTriangleIcon",
                  variant: "danger",
                },
              });
            }
          })
          .catch((error) => console.log(error));
    },
    removeEventV2() {
      axios
          .delete(
            "http://localhost:8888/events/"+this.eventV2.id,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            if (response.data.status == "success") {
              this.fetchEvents();
              this.isEventHandlerSidebarActive = false;
            } else {
              this.$toast({
                component: ToastificationContent,
                props: {
                  title: response.data.message,
                  icon: "AlertTriangleIcon",
                  variant: "danger",
                },
              });
            }
          })
          .catch((error) => console.log(error));
    },
    addEventV2() {
      if (this.eventV2.file != null) {
        var reader = new FileReader();
        reader.readAsDataURL(this.eventV2.file);
        reader.onload = function () {
          this.eventV2.img_url = reader.result;

          axios
            .post(
              "http://localhost:8888/events",
              JSON.stringify(this.eventV2),
              {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                  "Content-Type": "application/json",
                },
              }
            )
            .then((response) => {
            if (response.data.status == "success") {
              this.fetchEvents();
              this.isEventHandlerSidebarActive = false;
            } else {
              this.$toast({
                component: ToastificationContent,
                props: {
                  title: response.data.message,
                  icon: "AlertTriangleIcon",
                  variant: "danger",
                },
              });
            }
          })
            .catch((error) => console.log(error));
        }.bind(this);
        reader.onerror = function (error) {
          console.log("Error: ", error);
        };
      } else {
        axios
          .post(
            "http://localhost:8888/events",
            JSON.stringify({ event: this.eventV2 }),
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            if (response.data.status == "status") {
              this.fetchEvents();
              this.isEventHandlerSidebarActive = false;
            } else {
              this.$toast({
                component: ToastificationContent,
                props: {
                  title: response.data.message,
                  icon: "AlertTriangleIcon",
                  variant: "danger",
                },
              });
            }
          })
          .catch((error) => console.log(error));
      }

      console.log(this.eventV2);
    },
    fetchEvents() {
      // Fetch Events from API endpoint
      axios
        .get("http://localhost:8888/events", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        })

        .then((response) => {
          this.calendarOptionsV2.events = response.data.events;
        })
        .catch((error) => {
          console.log(error);
          this.$toast({
            component: ToastificationContent,
            props: {
              title: "Error fetching calendar events",
              icon: "AlertTriangleIcon",
              variant: "danger",
            },
          });
        });
    },
    clearEventDataV2() {
      this.eventV2 = {
        id: null,
        title: "",
        description: "",
        file: null,
        img_url: "",
        start_time: "",
        end_time: "",
        location: "",
      };
    },
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/apps/calendar.scss";
</style>
