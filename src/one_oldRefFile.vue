<template>
    <div>
        <h3>One File</h3>
        <two />
        <three />
    </div>
</template>

<script>
import two from './two'
// './xxx' อ้างจาก path เดียวกัน
// '@xxx/xxxxxx' อ้างจาก path นั้นจริงๆ ใน source folder
import three from './components/three'

export default {
    components: {
    two: two,
    three: three
  },
}
</script>
