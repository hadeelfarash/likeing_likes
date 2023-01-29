
function Likes(id){
        var countSpan=document.querySelector("#"+id+" > span");
        var count = countSpan.innerText
        count++
        countSpan.innerText = count


}
