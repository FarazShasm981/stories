var arr = [
    {
        dp: "https://images.unsplash.com/photo-1708459979726-c47aa90a2b16?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1708898816130-0f5020a0f639?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        dp: "https://images.unsplash.com/photo-1708938828404-24834946b6bf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        dp: "https://images.unsplash.com/photo-1708834311412-243b8277056f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://plus.unsplash.com/premium_photo-1708834160913-b51664e1964f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        dp: "https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1708953782453-e7e2d71720c4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        dp: "https://images.unsplash.com/photo-1708792083117-52286bee89f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1708443683295-5b9b4a125687?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        dp: "https://images.unsplash.com/photo-1708516514746-9979b248d4bb?q=80&w=1907&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1708443683295-5b9b4a125687?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
];
var show = document.querySelector("#stories")
var store = ""
arr.forEach(function (elem, idm) {
    store += `<div class="story">
<img id = '${idm}' src="${elem.dp}" alt="">
</div>`
})
show.innerHTML = store;
show.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;
    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none";

    },2000)
});
// setTimeout(function(){
//     document.querySelector("#full-screen").style.display = "none";
    
// },5000)