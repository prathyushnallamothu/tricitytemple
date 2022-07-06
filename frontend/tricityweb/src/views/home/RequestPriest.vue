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

                            <section class="book-table style-4 padding-top-100 padding-bottom-100"
                                style="padding-top: 60px !important;">
                                <div class="container">
                                    <div class="main-title-2">
                                        <div class="text-center"
                                            style="font-size: 30px; font-weight: bold; color:var(--primary); margin: 10px;">
                                            Priest Service Request
                                        </div>
                                        <div class="text-center" style="margin: 10px;">

                                        </div>
                                        <div id="ContentPlaceHolder1_pane1">

                                            <div class="main-content">
                                                <div id="ContentPlaceHolder1_div_error"
                                                    class="alert alert-danger divtext"
                                                    style="display: none; text-align: left;"></div>
                                                <div id="ContentPlaceHolder1_div_success"
                                                    class="alert alert-success divtext"
                                                    style="display:none;text-align:left;"></div>
                                                <div class="col-lg-6 col-xs-12">
                                                    <div class="row form-group" style="margin-bottom: 0px !important;">
                                                        <div class="col-sm-12 col-xs-12"
                                                            style="margin-bottom: 20px; width: 95%; padding-right: 0px;">
                                                            <div class="input-group">
                                                                <input name="first_name" type="text"
                                                                    id="ContentPlaceHolder1_tb_FirstName"
                                                                    class="form-control" placeholder="First Name *"
                                                                    v-model="first_name">
                                                                <div class="input-group-addon"></div>
                                                            </div>
                                                            <div
                                                                style="font-family: open sans; font-size: 14px; color: #fe2e00; text-align: left; text-transform: capitalize; font-weight: 600; margin-left: 15px;">
                                                                <span id="ContentPlaceHolder1_RequiredFieldValidator1"
                                                                    class="Validation"
                                                                    style="color:Red;display:none;">Please
                                                                    Enter First Name.</span>
                                                            </div>
                                                        </div>

                                                        <div class="col-sm-12 col-xs-12"
                                                            style="margin-bottom: 20px; width: 95%; padding-right: 0px;">
                                                            <div class="input-group">
                                                                <input name="ctl00$ContentPlaceHolder1$tb_LastName"
                                                                    type="text" id="ContentPlaceHolder1_tb_LastName"
                                                                    class="form-control" placeholder="Last Name *"
                                                                    v-model="last_name">
                                                                <div class="input-group-addon"></div>
                                                            </div>
                                                            <div
                                                                style="font-family: open sans; font-size: 14px; color: #fe2e00; text-align: left; text-transform: capitalize; font-weight: 600; margin-left: 15px;">
                                                                <span id="ContentPlaceHolder1_RequiredFieldValidator2"
                                                                    class="Validation"
                                                                    style="color:Red;display:none;">Please
                                                                    Enter Last Name.</span>
                                                            </div>
                                                        </div>


                                                        <div style="clear: both;"></div>
                                                        <div class="col-sm-12 col-xs-12"
                                                            style="margin-bottom: 20px; width: 95%; padding-right: 0px;">
                                                            <div class="input-group">
                                                                <input name="ctl00$ContentPlaceHolder1$tb_Address1"
                                                                    type="text" id="ContentPlaceHolder1_tb_Address1"
                                                                    class="form-control" placeholder="Address 1"
                                                                    v-model="address1">
                                                                <div class="input-group-addon">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-12 col-xs-12"
                                                            style="margin-bottom: 20px; width: 95%; padding-right: 0px;">
                                                            <div class="input-group">
                                                                <input name="ctl00$ContentPlaceHolder1$tb_Address2"
                                                                    type="text" id="ContentPlaceHolder1_tb_Address2"
                                                                    class="form-control" placeholder="Address 2"
                                                                    v-model="address2">
                                                                <div class="input-group-addon">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-12 col-xs-12"
                                                            style="margin-bottom: 20px; width: 95%; padding-right: 0px;">
                                                            <div class="input-group">
                                                                <input name="ctl00$ContentPlaceHolder1$tb_City"
                                                                    type="text" id="ContentPlaceHolder1_tb_City"
                                                                    class="form-control" placeholder="City"
                                                                    v-model="city">
                                                                <div class="input-group-addon"></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-12 col-xs-12"
                                                            style="margin-bottom: 20px; width: 95%; padding-right: 0px;">
                                                            <div class="input-group">
                                                                <input name="state" type="text"
                                                                    id="ContentPlaceHolder1_tb_City"
                                                                    class="form-control" placeholder="State"
                                                                    v-model="state">
                                                                <div class="input-group-addon"></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-12 col-xs-12"
                                                            style="margin-bottom: 20px; width: 95%; padding-right: 0px;">
                                                            <div class="input-group">
                                                                <input name="ctl00$ContentPlaceHolder1$tb_Zip"
                                                                    type="text" maxlength="6"
                                                                    id="ContentPlaceHolder1_tb_Zip" class="form-control"
                                                                    placeholder="Postal/Zip" v-model="zipcode">
                                                                <div class="input-group-addon"></div>
                                                                <span id="error"
                                                                    style="color: Red; display: none"></span>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-12 col-xs-12"
                                                            style="margin-bottom: 20px; width: 95%; padding-right: 0px;">
                                                            <div class="input-group">
                                                                <input name="ctl00$ContentPlaceHolder1$tb_Phone"
                                                                    type="text" maxlength="10"
                                                                    id="ContentPlaceHolder1_tb_Phone"
                                                                    class="form-control" placeholder="Phone No."
                                                                    v-model="mobile">
                                                                <div class="input-group-addon"></div>
                                                            </div>
                                                            <div
                                                                style="font-family: open sans; font-size: 14px; color: #fe2e00; text-align: left; text-transform: capitalize; font-weight: 600; margin-left: 15px;">
                                                                <span id="ContentPlaceHolder1_RequiredFieldValidator4"
                                                                    class="Validation"
                                                                    style="color:Red;display:none;">Please
                                                                    Enter Phone No.</span>
                                                            </div>
                                                        </div>

                                                        <div style="clear: both;"></div>
                                                        <div class="col-sm-12 col-xs-12"
                                                            style="margin-bottom: 15px; width: 95%; padding-right: 0px;">
                                                            <div class="input-group">
                                                                <input name="ctl00$ContentPlaceHolder1$tb_Email"
                                                                    type="text" id="ContentPlaceHolder1_tb_Email"
                                                                    class="form-control" placeholder="Email *"
                                                                    v-model="email">
                                                                <div class="input-group-addon"></div>
                                                            </div>
                                                            <div
                                                                style="font-family: open sans; font-size: 14px; color: #fe2e00; text-align: left; text-transform: capitalize; font-weight: 600; margin-left: 15px;">
                                                                <span id="ContentPlaceHolder1_RequiredFieldValidator3"
                                                                    class="Validation"
                                                                    style="color:Red;display:none;">Please
                                                                    Enter Email Address.</span>
                                                                <span
                                                                    id="ContentPlaceHolder1_RegularExpressionValidator1"
                                                                    title="Please Enter Valid Email Address."
                                                                    class="Validation"
                                                                    style="color:Red;display:none;">Please
                                                                    Enter Valid Email Address.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-xs-12" style="padding-bottom: 20px;">
                                                    <div class="row form-group" style="margin-bottom: 0px !important;">

                                                        <div class="col-sm-12 col-xs-12"
                                                            style="width: 95%; margin-bottom: 20px; padding-right: 0px;">
                                                            <div class="input-group">
                                                                <textarea name="ctl00$ContentPlaceHolder1$tb_PujaReq"
                                                                    rows="7" cols="20"
                                                                    id="ContentPlaceHolder1_tb_PujaReq"
                                                                    class="form-control" placeholder="Event Description"
                                                                    v-model="event_description"></textarea>
                                                                <div class="input-group-addon"></div>
                                                            </div>
                                                            <div
                                                                style="font-family: open sans; font-size: 14px; color: #fe2e00; text-align: left; text-transform: capitalize; font-weight: 600; margin-left: 15px;">
                                                                <span id="ContentPlaceHolder1_RequiredFieldValidator5"
                                                                    class="Validation"
                                                                    style="color:Red;display:none;">Please
                                                                    Enter Priest Service Request.</span>
                                                            </div>
                                                        </div>

                                                        <div class="col-sm-12 col-xs-12"
                                                            style="margin-bottom: 15px; width: 95%; padding-right: 0px;">
                                                            <label for="eventDate" style="float:left">Event Date</label>
                                                            <div class="input-group">

                                                                <input name="date" type="date" id="eventDate"
                                                                    class="form-control" placeholder="Event Date"
                                                                    v-model="event_date">
                                                                <div class="input-group-addon"></div>
                                                            </div>

                                                        </div>

                                                        <div class="col-sm-12 col-xs-12"
                                                            style="margin-bottom: 15px; width: 95%; padding-right: 0px;">
                                                            <label for="eventStartTime" style="float:left">Event Start
                                                                Time</label>
                                                            <div class="input-group">

                                                                <input name="time" type="time" id="eventStartTime"
                                                                    class="form-control" placeholder="Event start time"
                                                                    v-model="event_start_time">
                                                                <div class="input-group-addon"></div>
                                                            </div>

                                                        </div>
                                                        <div class="col-sm-12 col-xs-12"
                                                            style="margin-bottom: 15px; width: 95%; padding-right: 0px;">
                                                            <label for="eventEndTime" style="float:left">Event End
                                                                Time</label>
                                                            <div class="input-group">

                                                                <input name="time" type="time" id="eventEndTime"
                                                                    class="form-control" placeholder="Event End time"
                                                                    v-model="event_end_time">
                                                                <div class="input-group-addon"></div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div><br>
                                                <div class="col-sm-12"
                                                    style="width:200px;display: flex;margin-left:30px ;float: right;">
                                                    <button class="btn btn-custom" style="width:200px;"> Submit</button>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </section>




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
            events: [],
            first_name: "",
            last_name: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            zipcode: "",
            mobile: "",
            email: "",
            event_description: "",
            event_date: null,
            event_start_time: null,
            event_end_time: null
        };
    },
    mounted() {

    },
    methods: {
        submitForm(e) {
            e.preventDefault()
            var data = {
                "firstName": this.first_name,
                "lastname": this.last_name,
                "address1": this.address1,
                "address2": this.address2,
                "city": this.city,
                "state": this.state,
                "mobile": this.mobile,
                "email": this.email,
                "eventDescription": this.event_description,
                "eventDate": this.event_date,
                "eventStartTime": this.event_start_time,
                "eventEndTime": this.event_end_time,
            }
            axios
                .post("http://localhost:8888/request_priest", JSON.stringify(data))

                .then((response) => {
                    console.log(response)

                })
                .catch((error) => {
                    console.log(error);

                });
        }
    },
};
</script>