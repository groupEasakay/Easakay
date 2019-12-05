<template>
    <div>
        <div v-bind:key="bus.id" v-for="bus in buses">
            <BusItem v-bind:bus="bus"/>
            <br/>
        </div>
         <!-- <b-button
      size="xl"
      @click="notify()"
    >UPDATE</b-button> -->
    </div>
</template>

<script>
import BusItem from './BusItem.vue';

export default {
    name: "BusList",

  //   sockets: {
  //   notificationFromServer: function(data) {
  //     alert(data.message);
  //   }
  // },
  // created() {
  //   this.sockets.subscribe(
  //     "channel." + localStorage.getItem("username"),
  //     data => {
  //       alert(data.message);
  //     }
  //   );
  // },
  // methods: {
  //   notify() {
  //     this.$socket.emit("notification", {
  //       username: localStorage.getItem("username")
  //     });
  //   }
  // },
    components: {
        BusItem
    },
    props:["buses"]
}
</script>