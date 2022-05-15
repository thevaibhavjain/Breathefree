window.slide = function slide(){
    var slider = document.getElementById("slider");
    const BASE = "https://www.breathefree.com/sites/default/files";
    let i = parseInt(slider.getAttribute("idx"));
    const images = [
        "/safe-nebulizarion-1920x980.jpg",
        "/jingle_landing_banner.jpg",
        "/assitance-bde-web-banner-02NOV.jpg",
        "/uncommon-cold-final.jpg",
        "/how-to-use-inhalers-1920x980.jpg",
        "/way-to-monitor-1920x980.jpg"
    ];
    slider.style.opacity = 0;
    if(i >= images.length) i = 0;
    var code = `<span id="myBtn2" onclick="slide()" class="material-icons">&#xe5e0;</span><img src="`+BASE + images[i]+`" loading="lazy" width="100%" height="50%"><span id="myBtn1" onclick="slide()" class="material-icons">&#xe5e1;</span>`;
    slider.setAttribute("idx", i+1);
    slider.innerHTML = code;
    slider.style.opacity = 1;
}
window.onload = () =>{
    slide();
}