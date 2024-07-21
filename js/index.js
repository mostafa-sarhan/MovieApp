

// Change The NavBar

$(".nav_1 .nav-menu .bars").click(()=>{
    // console.log("kkk");
    let boxWidth =$(".nav_2 .side-nav").outerWidth();
    
    if($(".nav_2").css("marginLeft") == "-250px"){
        $(".nav_1").animate({marginLeft:boxWidth },500);
        $(".nav_2").animate({marginLeft: "0px"},500);
        $(".icon_1").removeClass(".bars fa-bars");
        $(".icon_1").addClass("fa-xmark close");
        $(".menu li ").eq(0).animate({top: 0},500);
        $(".menu li ").eq(1).animate({top: 0},600);
        $(".menu li ").eq(2).animate({top: 0},700);
        $(".menu li ").eq(3).animate({top: 0},800);
        $(".menu li ").eq(4).animate({top: 0},900);
        $(".menu li ").eq(5).animate({top: 0},1000);
    }else{
        $(".menu li ").animate({top: 300},500);
        $(".nav_2").animate({marginLeft:-boxWidth },500);
        $(".nav_1").animate({marginLeft: "0px"},500);
        $(".icon_1").addClass(".bars fa-bars");
        $(".icon_1").removeClass("fa-xmark close");
    }
})



// Function to Get movies

document.querySelectorAll(".nav_2 .menu ul li a ").forEach((link) =>{
    link.addEventListener("click", ()=>{
        // console.log('hehhh')
        let Action = link.getAttribute("attr");
        console.log(Action);
        getMovies(Action);
    })
})
// Function to Get New playing
async function getMovies (kind){
    let api =await fetch(`https://api.themoviedb.org/3/movie/${kind}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    const response = await api.json();
    let data =response.results
    // console.log(data);
    displayNewPlaying(data);
    // console.log(data[1].backdrop_path);
}
getMovies("now_playing");

// Dom of Trending
$(".menu .Trending").click(()=>{
    Trending()
})
// Function to Display only Trending
async function Trending (){
    let api =await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    const response = await api.json();
    let data =response.results
    // console.log(data);
    displayNewPlaying(data);
    console.log(data[1].backdrop_path);
}

// Function to Display Data content in Html

function displayNewPlaying(term){
    let carton = ``;

    for(let i =0 ; i <term.length;i++){

        carton+= `
                    <div class="col-lg-4 col-md-6 col-sm-12 animate__animated animate__fadeIn">
                <div class="item overflow-hidden position-relative animate__fadeIn">
                    <div class="cardImage animate__fadeIn">
                        <img src="https://image.tmdb.org/t/p/w500/${term[i].poster_path}" class="img-fluid w-100">
                    </div>
                    <div class="overlay overflow-hidden animate__fadeIn">
                        <!--  style="opacity: 0; visibility: hidden;" -->
                        <h1 class="animate__animated title animate__slideOutLeft">${term[i].title}</h1>    
                        <p class="animate__animated desc animate__slideOutLeft">${term[i].overview}</p>
                        <p class="animate__animated date animate__slideOutLeft"><span class="fst-normal">Release Date<span> : ${term[i].release_date}</span></span></p>
                        <h3 class="rate animate__animated animate__slideOutLeft"><i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-regular fa-star-half-stroke text-warning fs-6"></i></h3>
                        <h3 class="rate animate__animated vote animate__slideOutLeft mt-4"><span class="rate_2">${term[i].vote_average}</span></h3>
                    </div>
                </div>
            </div>
        `
        document.querySelector("#row").innerHTML=carton
    }

}



// Commented

// let bars_App =document.querySelector(".bars");
// let close_App =document.querySelector(".close");
// let nav_2 = document.querySelector(".nav_2");
// let nav_1=document.querySelector(".nav_1");

// let apiNowPlaying ="https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44"
// let apiPopular ="https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44"
// let apiTopRated ="https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44"
// let apiTreading ="https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44"
// let apiUpcoming ="https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44"


// let  apiKey = eba8b9a7199efdcb0ca1f96879b83c44;