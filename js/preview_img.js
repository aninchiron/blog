window.onload = function() {
  var imgList = document.querySelectorAll(".markdown-body img");
  imgList.forEach(function(img) {
    img.style.cursor = "zoom-in";
    bindImageZoomInClick(img)
  })
}

function bindImageZoomInClick(img){
  img.onclick = function() {
    var appendImg = document.createElement('img')
    var container = initPreviewContainer()
    var imgBox = createImgBox()
    var src = this.getAttribute('src')
    appendImg.src = src
    appendImg.style.width = '100%'
    bildImageZoomOutClick(appendImg, container)
    imgBox.appendChild(appendImg)
    container.appendChild(imgBox)
  }.bind(img)
}
function bildImageZoomOutClick(img,container) {
  img.onclick = function(){
    container.parentNode.removeChild(container)
  }
}
function initPreviewContainer() {
  var previewContainer = document.createElement('div');
  previewContainer.setAttribute('class', 'img_preview_container')
  document.body.appendChild(previewContainer)
  return previewContainer
}
function createImgBox() {
  var imgBox = document.createElement('div');
  imgBox.setAttribute('class', 'img_preview_box')
  return imgBox
}