var app = angular.module('SlideboxModule', ['ionic']);

app.controller('SlideboxController', function($scope) {
$scope.swiperOptions = {
/* Whatever options */
effect: 'coverflow',
/*initialSlide: 0,*/
/* Initialize a scope variable with the swiper */
onInit: function(swiper){
$scope.swiper = swiper;
},
onSlideChangeEnd: function(swiper){
console.log('The active index is ' + swiper.activeIndex); 
}
};
});