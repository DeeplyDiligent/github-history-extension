// chrome.extension.sendMessage({}, function(response) {
//   var readyStateCheckInterval = setInterval(function() {
//     if (document.readyState === "complete") {
//       clearInterval(readyStateCheckInterval);
      
      
//     }
//   });
// });


$(document).ready(function() {
  if ($(".file-navigation .BtnGroup.float-right a").length) {
    let a = $(".file-navigation .BtnGroup.float-right a")[0].outerHTML;
    $(".file-navigation .BtnGroup.float-right").append(a);

    $(".file-navigation .BtnGroup.float-right a")
      .last()
      .html("Open in Github History");
    $(".file-navigation .BtnGroup.float-right a")
      .last()
      .addClass("btn-primary");
    $(".file-navigation .BtnGroup.float-right a")
      .last()
      .attr("href", chrome.extension.getURL('index.html')+'?url='+window.location.pathname);
  }
});
