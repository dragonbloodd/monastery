<script>
function addNews(){
    let news = JSON.parse(localStorage.getItem("news")) || [];
    news.push(document.getElementById("newsInput").value);
    localStorage.setItem("news", JSON.stringify(news));
    document.getElementById("newsInput").value = "";
}

function saveSchedule(){
    localStorage.setItem("schedule", document.getElementById("schedule").value);
}

function saveCharity(){
    localStorage.setItem("charity", document.getElementById("charity").value);
}

// Очистка всех данных
function clearStorage(){
    localStorage.clear();
    alert("Все данные удалены");
}
</script>
