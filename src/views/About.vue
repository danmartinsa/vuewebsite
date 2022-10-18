<template>
  <div class="container">
    <div class="image_place">Image Placeholder</div>
    <div class="text-body1 wrapper">
      <div class="title">Follow us on the Social Media</div>
      <div class="about_item">Twitter</div>
      <div class="about_item">Facebook</div>
      <div class="about_item">LinkedIn</div>
    </div>
  </div>
</template>

<style>
.container {
  align-content: center;
  align-items: center;
  align-self: center;
  justify-items: centerl;
  display: grid;
  grid-template-columns: 1fr;
}

.wrapper {
  margin-top: 25px;
  align-content: center;
  align-items: center;
  align-self: center;
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

.image_place {
  padding-top: 10px;
  margin-top: 10px;
  align-self: center;
  text-align: center;
  align-items: center;
  align-content: center;
  height: 300px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  border: solid;
}

.title {
  font-size: 30px;
  font-weight: bold;
  align-self: center;
  text-align: center;
  align-items: center;
  align-content: center;
  max-width: 30%;
  min-width: 300px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.about_item {
  align-self: center;
  text-align: center;
  align-items: center;
  align-content: center;
  max-width: 30%;
  min-width: 300px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 5px 5px gray;
  padding: 20px;
  background-color: lightblue;
  border-radius: 30px;
  color: black;
  position: relative;
}
</style>
