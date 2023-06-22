$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<span><img src='./icons/left.png'></span>", "<span><img src='./icons/frame.png'></span>"],
    autoplay:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:3.5
        }
    }
})

$('.quiz-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2,
            nav:true
        }
    }
})

function toggleContainer() {
    var BGoverlay = document.getElementById("BGoverlay");
    
    if (BGoverlay.style.display === "none") {
        BGoverlay.style.display = "grid";
    } else {
        BGoverlay.style.display = "none";
    }
}

var Cross = document.getElementById("Cross");
Cross.addEventListener("click", toggleContainer);

function ShowPop() {    

    if (WriteReviewPoP.style.display === "none") {
        WriteReviewPoP.style.display = "grid";
    } else {
        WriteReviewPoP.style.display = "none";
    }
}

var CrossPoP = document.getElementById("CrossPoP");
CrossPoP.addEventListener("click", ShowPop);

  var BGoverlayOTP = document.getElementById("BGoverlayOTP");
  var OtpButton = document.getElementById("OTPButton")
  var BGoverlay = document.getElementById("BGoverlay");
  var addContainerBtn = document.getElementById('addContainerBtn');
  var BGoverlayAccount = document.getElementById('BGoverlayAccount')
  var AccountButton = document.getElementById('AccountButton')
  var RatingButton = document.getElementById("WriteReviewButton");
  var WriteReviewPoP = document.getElementById("WriteReviewPoP");

  // Add a click event listener to the button
  RatingButton.addEventListener("click", function () {
      // Add a class to the div element
      WriteReviewPoP.style.display = 'grid';
  });

//   nav Button //

  var customize = document.getElementById("customize");
  
// var container = document.getElementById('BGoverlay');

customize.addEventListener('click', function() {
    BGoverlay.style.display = 'grid';
});

addContainerBtn.addEventListener('click', function() {
    BGoverlay.style.display = 'grid';
});

OtpButton.addEventListener('click', function() {
    BGoverlayOTP.style.display = 'grid';
    BGoverlay.style.display = 'none';
});

AccountButton.addEventListener('click', function() {
    BGoverlayOTP.style.display = 'none';
    BGoverlayAccount.style.display ='grid'
});
  
  function showImage(image) {
    const mainImage = document.getElementById("mainImage");
    const imageSrc = image.getAttribute("src");
    mainImage.setAttribute("src", imageSrc);
    showModal();
  }

  function showModal() {
    const modal = document.getElementById("imagePopWapper");
    modal.style.display = "block";
  }

  function closeModal() {
    const modal = document.getElementById("imagePopWapper");
    modal.style.display = "none";
  }

  function updateMainImage(imageSrc) {
    const mainImage = document.getElementById("mainImage");
    mainImage.setAttribute("src", imageSrc);
  }

  const zoomImage = document.querySelector('.zoomable-image');

  mainImage.addEventListener("mousemove", (e) => {

    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    console.log(x,y);
  })