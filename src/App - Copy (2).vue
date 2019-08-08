<template>
  <div>
    <section class="section">
      <div class="container">
        <h1>2.App ..เรียกใช้ component{{title}}</h1>
        <button @click="counter+=1" :class="className">Update</button>
        <p style="color='red'">Counter: {{ counter }}</p>
        <p :style="style1">Counter: {{ counter }}</p>

      </div>
    </section>
    <h1>1. App ..เรียกใช้ component{{title}}</h1>
    <!-- <One /> -->
  </div>
</template>

<script>
//  import One from './one'
import 'bulma/css/bulma.min.css'

export default{
  // components: {
  //   One: one
  // },
  data(){
    return {
      counter: 1
    }
  },
  computed: {
    className(){
      return this.counter % 2 ? 'button is-primary' : 'button is-danger'
      //return "button is-danger"
    },
    style1(){
      return this.counter % 2 ? {fontWeight: 'bold',color: 'blue'} : {fontWeight: 'bold',color: 'red'}
    }
  }
}
</Script>

<style scoped>
p{
  color: coral;
}
</style>

