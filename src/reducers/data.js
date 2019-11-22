import church1 from '../images/timeline/church1.png';
// import church2 from '../images/timeline/church2.png';
// import church3 from '../images/timeline/church3.png';
// import church4 from '../images/timeline/church4.png';

import pic1 from '../images/timeline/pic1.png';
// import pic2 from '../images/timeline/pic2.png';
// import pic3 from '../images/timeline/pic3.png';
// import pic4 from '../images/timeline/pic4.png';

import club from '../images/selected/club.jpg';
import gallery from '../images/selected/gallery.jpg';
import venue from '../images/selected/venue.jpg';
import endding from '../images/selected/endding.jpg';
import church from '../images/selected/church.jpg';


export default () => ({

 timelines: [
   {
    time: ['16:30 pm', '17:30 pm'],
    title: '證婚儀式',
    address: '台南市歸仁區和順路二段303號 證婚禮堂',
    gallery: [
      church
    ],
   }, {
    time: ['18:00 pm', '20:30 pm'],
    title: '婚禮接待',
    address: '台南市歸仁區和順路二段303號 戶外婚禮',
    gallery: [
      venue
    ],
    map: '<div class="mapouter"><div class="gmap_canvas"><iframe width="250" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=%E6%BC%82%E4%BA%AE%E8%8E%8A%E5%9C%92&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/nordvpn-coupon-code/"></a></div><style>.mapouter{position:relative;text-align:right;height:200px;width:250px;}.gmap_canvas {overflow:hidden;background:none!important;height:200px;width:250px;}</style></div>'
   }, {
    time: ['21:30 pm', '00:00 pm'],
    title: 'After Party',
    address: 'The Bird Club 台南市中西區民權路二段192號',
    gallery: [
      club
    ],
    custom: true,
    map: '<div class="mapouter"><div class="gmap_canvas"><iframe width="250" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=The%20Bird%20Club&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com">whatismyip-address.com</a></div><style>.mapouter{position:relative;text-align:right;height:200px;width:250px;}.gmap_canvas {overflow:hidden;background:none!important;height:200px;width:250px;}</style></div>'
   }
 ],

 galleryList: [
  gallery
 ]

})