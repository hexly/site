<template>
  <div class="wrapper">
     <!-- <img src="/logo.png"> -->
     <div class="hexagon"></div>
     <h1 class="logo">H</h1>
     <!-- <h1>Hexly</h1> -->
  </div>
</template>

<style>
body {
  font-family: 'Pacifico';
  background-repeat: no-repeat;
  background-image: linear-gradient(to right top, #fa9f61, #ff4a9d);
  height: 100vh;
  width: 100vw;
}

h1 {
  font-size: 100px;
  margin: 0;
}
h1.logo {
  font-size: 250px;
  color: #fff;
}

.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  text-align: center;
  width: 100%;
}

img {
  width: 100%;
}

.hexagon {
  position: absolute;
  width: calc(100% - 30px);
  height: 288.68px;
  background-color: transparent;
  margin: 144.34px 0;
  border-left: solid 15px #fff;
  border-right: solid 15px #fff;
  top: -70px;
  right: -13px;
  -webkit-animation: spin 30s linear infinite;
  -moz-animation: spin 30s linear infinite;
  animation: spin 30s linear infinite;
}

.hexagon:before,
.hexagon:after {
  content: '';
  position: absolute;
  z-index: 1;
  width: 331.55px;
  height: 331.55px;
  -webkit-transform: scaleY(0.5774) rotate(-45deg);
  -ms-transform: scaleY(0.5774) rotate(-45deg);
  transform: scaleY(0.5774) rotate(-45deg);
  background-color: inherit;
  left: 58.2233px;
}

.hexagon:before {
  top: -176.7767px;
  border-top: solid 21.2132px #fff;
  border-right: solid 21.2132px #fff;
}

.hexagon:after {
  bottom: -176.7767px;
  border-bottom: solid 21.2132px #fff;
  border-left: solid 21.2132px #fff;
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
