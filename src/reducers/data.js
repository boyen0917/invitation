import church1 from '../images/timeline/church1.png';
import church2 from '../images/timeline/church2.png';
import church3 from '../images/timeline/church3.png';
import church4 from '../images/timeline/church4.png';

import pic1 from '../images/timeline/pic1.png';
import pic2 from '../images/timeline/pic2.png';
import pic3 from '../images/timeline/pic3.png';
import pic4 from '../images/timeline/pic4.png';

import club1 from '../images/timeline/club1.png';

export default () => ({

 timelines: [
   {
    time: ['16:30 pm', '17:30 pm'],
    title: '證婚儀式',
    address: '台南市歸仁區和順路二段303號 證婚禮堂',
    gallery: [
      church1
    ],
   }, {
    time: ['18:00 pm', '20:30 pm'],
    title: '婚禮接待',
    address: '台南市歸仁區和順路二段303號 戶外婚禮',
    gallery: [
      pic1
    ],
    map: '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=%E6%BC%82%E4%BA%AE%E8%8E%8A%E5%9C%92&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/nordvpn-coupon-code/"></a></div><style>.mapouter{position:relative;text-align:right;height:200px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:200px;width:300px;}</style></div>'
   }, {
    time: ['21:30 pm', '??:??'],
    title: 'After Party',
    address: 'The Bird Club 台南市中西區民權路二段192號',
    gallery: [
      club1
    ],
    map: '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=The%20Bird%20Club&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com">whatismyip-address.com</a></div><style>.mapouter{position:relative;text-align:right;height:200px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:200px;width:300px;}</style></div>'
   }
 ],

 galleryList: [
  'pic1.jpg',
  'pic2.jpg',
  'pic3.jpg',
  'pic4.jpg',
  'pic5.jpg',
  'pic6.jpg',
  'pic7.jpg',
  'pic8.jpg',
  'pic9.jpg'
 ]

})