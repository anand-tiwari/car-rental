<template>
    <div class="car">
        <router-link :to="detailUrl" @click.native="saveScreenPosition" >
            <div class="car-image">
                <img alt="car image" src="../assets/car.png" />
                <div class="car-price">
                    <div class="price">$ 200,00</div>
                </div>
            </div>
            <div class="car_details">
                <div class="car-maker">{{item.Make}} </div>
                <div class="car-detail_info">
                    <span class="car-detail__title">Model:</span>{{item.Model}}</div>
                <div class="car-detail_info">
                    <span class="car-detail__title">Year:</span>{{item.Year}}</div>
                 <button class="car_button__more">More Details</button>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
  name: 'Product',
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    detailUrl () {
      return '/about/' + this.item.objectId + '?Model=' + this.item.Model + '&Make=' + this.item.Make
    }
  },
  methods: {
    saveScreenPosition () {
    }
  }
}
</script>
<style scoped>
 a{
    text-decoration: none;
    color: black;
 }
.car {
    padding: inherit;
    margin: 10px;
    width: 30%;
    box-sizing: border-box;
    font-size: 14px;
    box-shadow: 0px 1px 1px 0px #a2a2a2;
    border: 1px solid #e4e1e1;
}

.car-price {
    position: absolute;
    top: 7px;
    left: 9px;
    height: 27px;
    width: 77px;
    background-color: #d6dfea;
    border-radius: 16px;
    text-align: center;
    color: #727272;
    box-shadow: -1px 2px 0px 0px #ccc;
}
.car-price .price {
   top: 5px;
   left: 6px;
   position: absolute;
}

.car-image{
  width: 100%;
  height: 178px;
  padding: 0 33px;
  box-sizing: border-box;
  position: relative;
}
.car-maker{
  font-size: 20px;
  color: #000;
}
.car_details{
    padding: 8px 33px;
    color: #999999;
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

.car_button__more{
    background-color: #ADADAD;
    color: white;
    width: 90%;
    margin: 1px;
    color: white;
    height: 40px;
    padding: 7px;
    border-radius: 7px;
    border-bottom-style: none;
    border-width: 0;
}
</style>
