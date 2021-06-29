<template>
    <div class="car">
        <div class="car-image">
            <img alt="Vue logo" src="../assets/car-png.png" />
        </div>
        <div class="car-details">
            <div class="car-detail__maker">{{productDetails.Make}} </div>
            <div class="car-detail_info"><span class="car-detail__title">Model:</span>{{productDetails.Model}}</div>
            <div class="car-detail_info"><span class="car-detail__title">Year:</span>{{productDetails.Year}}</div>
            <div class="car-detail__decription">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolores ipsum autem ullam eius ipsa fugit in aliquid beatae animi
                 tempore distinctio, sint perspiciatis exercitationem vitae maxime
                  consequatur vel minima pariatur.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolores ipsum autem ullam eius ipsa fugit in aliquid beatae animi
                 tempore distinctio, sint perspiciatis exercitationem vitae maxime
                  consequatur vel minima pariatur.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolores ipsum autem ullam eius ipsa fugit in aliquid beatae animi
                 tempore distinctio, sint perspiciatis exercitationem vitae maxime
                  consequatur vel minima pariatur.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolores ipsum autem ullam eius ipsa fugit in aliquid beatae animi
                 tempore distinctio, sint perspiciatis exercitationem vitae maxime
                  consequatur vel minima pariatur.
                  </div>
            <div class="car-price">$ 200,00</div>
            <div class="car_button">
                <button class="car_button__now">Order Now</button>
                <button class="car_button__back">Go Back</button>
            </div>
        </div>
    </div>
</template>
<script src="./js/detail-page.js"></script>
<style scoped>

.car {
  display: flex;
  font-size: 14px;
  color: #999999;
}

.car-image {
  width: 60%;
  height: 100%;
}
.car-image img {
     height: 100%;
     width: 100%;
}

.car-details {
  width: 50%;
}
.car-detail__maker{
    font-size: 20px;
    padding: 9px 0;
    margin: 4px 0;
    color: #000;
}
.car-detail_info {
  padding: 4px 0
}
.car-detail__title {
    font-size: 16px;
    color: #000;
}
.car-detail__decription {
  line-height: 1.5;
}

.car-price {
  color:#0033A6;
  font-size: 30px;
  font-weight: bold;
  margin: 10px 0;
}

.car_button {
    display: flex;
    margin-top: 20px;
}

.car_button__now {
    background-color: #0033A6;
    width: 200px;
    margin: 1px;
    color: white;
    height: 32px;
    padding: 7px;
    border-radius: 4px;
    border-bottom-style: none;
    border-width: 0;
}
.car_button__back{
    background-color: #6A6A6A;
    color: white;
    width: 200px;
    margin: 1px;
    color: white;
    height: 32px;
    padding: 7px;
    border-radius: 4px;
    border-bottom-style: none;
    border-width: 0;
}

</style>
