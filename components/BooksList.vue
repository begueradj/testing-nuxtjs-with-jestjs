<template>
  <v-container
    grid-list-md
    text-xs-center
    fill-height>
    <v-layout
      row
      wrap
      align-center>
      <v-flex
        xs>
        My favorite book is <h4 class="test-class"> {{ book }} </h4>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'BooksList',
  data() {
    return {
      book: 'JavaScript'
    }
    
  }
}
</script>

<style scoped>
.test-class {
    color: red;
    background-color: yellow;
}
</style>
