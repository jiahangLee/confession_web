// import React from "react"
//
// class comment extends React.Component{
//
//   render(){
//
//     // 创建一个跟画布等比例的 canvas
//     const width = 100;
//     const height = ~~(width * this.height / this.width); // this.width , this.height 说整个画布的尺寸
//     const offscreenCanvas    =document.createElement('canvas');
//     const offscreenCanvasCtx    =offscreenCanvas.getContext('2d');
//     offscreenCanvas.setAttribute('width', width);
//     offscreenCanvas.setAttribute('height', height);
//
// // 在这离屏 canvas 中将我们想要的文字 textAll 绘制出来后，再计算它合适的尺寸
//     offscreenCanvasCtx.fillStyle = '#000';
//     offscreenCanvasCtx.font = 'bold 10px Arial';
//     let constmeasure=offscreenCanvasCtx.measureText(textAll); // 测量文字，用来获取宽度
//     const size = 0.8;
// // 宽高分别达到屏幕0.8时的size
//
//     const fSize=Math.min(height * size * 10 / lineHeight, width * size * 10 / measure.width);  // 10像素字体行高 lineHeight=7 magic
//     offscreenCanvasCtx.font = `bold ${fSize}px Arial`;
//
// // 根据计算后的字体大小，在将文字摆放到适合的位置，文字的坐标起始位置在左下方
//     const measureResize    =offscreenCanvasCtx.measureText(textAll);
// // 文字起始位置在左下方
//     let left = (width - measureResize.width) / 2;
//     const bottom=(height + fSize / 10 * lineHeight) / 2;
//     offscreenCanvasCtx.fillText(textAll, left, bottom);
//
//     // texts 所有的单词分别获取 data ，上文的 textAll 是 texts 加一起
//     Object.values(texts).forEach(item => {
//       offscreenCanvasCtx.clearRect(0, 0, width, height);
//       offscreenCanvasCtx.fillText(item.text, left, bottom);
//       left += offscreenCanvasCtx.measureText(item.text).width;
//       const data = offscreenCanvasCtx.getImageData(0, 0, width, height);
//       const points = [];
//       // 判断第 i * 4 + 3 位是否为0，获得相对的 x,y 坐标(使用时需乘画布的实际长宽, y 坐标也需要取反向)
//       for (let i = 0, max = data.width * data.height; i < max; i++) {
//         if (data.data[i * 4 + 3]) {
//           points.push({
//             x: (i % data.width) / data.width,
//             y: (i / data.width) / data.height
//           });
//         }
//       }
//       // 保存到一个对象，用于后面的绘制
//       geometry.push({
//         color: item.hsla,
//         points
//       });
//     })
//
//     return(
//       <h1>我是表白页面</h1>
//     )
//   }
// }
