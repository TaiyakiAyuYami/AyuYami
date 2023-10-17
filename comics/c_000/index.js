function readComicInfo(obj) {
  const info = [];
  for (const key in obj) {
    info[key] = obj[key];
  }
  return info;
}

function createImagesTags(comicInfo) {
  let imgList = `<img class="img-comic" src="./comic/${comicInfo.cover}">`;
  for (i = 1; i <= comicInfo.pages; i++ ) {
    imgList += `<img class="img-comic" src="./comic/${i}.jpg">`;
  }
  return imgList;
}

function appendImagesTags(idContainer, imgList) {
  const container = document.getElementById(idContainer);
  container.innerHTML = imgList;
}

function setBackgroundColor(color) {

}

fetch('info.json')
  .then(response => response.json())
  .then(data => {
    const info = readComicInfo(data);
    const imgList = createImagesTags(info);
    // setBackgroundColor(info.color);
    appendImagesTags('comic-container', imgList);
  })