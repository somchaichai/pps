<template>
    <div>
      <section class="section"> 
        <div class="containner">
          <h1>App</h1>
          <button @click="counter+=1" class="className">Update</button>
        </div>
        
      </section>
        
    </div>
</template>

<script>
import 'bulma/css/bulma.min.css'
import One from './One'
export default {
    components:{
        One: One
    },
    data(){
        return{
        counter:1
    }
},
computed:{
  className(){
    return this.counter % 2 ? 'button is-primary' : 'button is-danger'
  },
  style() {
    return {fontWeight: 'bold'}
  }

}
}
</script>