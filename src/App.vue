<template>
  <div>
    <section class="section">
      <div class="container">
        <h1>3 App</h1>
        <br>
        <Navbar />
        <br>
        Start Router View
        <RouterView />
        <br>
        End Router View
      </div>
    </section>
  </div>
</template>

<script>
import 'bulma/css/bulma.min.css'
import Navbar from '@/components/Navbar'

export default{
  components: {
    Navbar
  }
}

</Script>

