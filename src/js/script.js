const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profileResults = document.querySelector(".profile-results");
const baseUrl = "https://api.github.com";

btnSearch.addEventListener("click", async () => {
const userName = inputSearch.value;
if (userName) {
   const response = await fetch(`${baseUrl}/users/${userName}`);

try{

if (!response.ok) {
    alert("Usuário não encontrado!por favor verifique o nome de usuário e tente novamente.");
    return;
}

const userData = await response.json();
console.log(userData);// apenas para verificar se os dados estão sendo retornados corretamente

profileResults.innerHTML = `
<div class="profile-card">

    <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
        <div class="profile-info">
            <h2>${userData.name}</h2>
            <p>${userData.bio || "Não possui biografia cadastrada 😔 ."}</p>

        </div>
</div>`

}catch (error){
    console.error('erro ao buscar o perfil do usuário:', error);
    alert('Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.');
}
// console.log(data.avatar_url);
// console.log(data.name);
// console.log(data.bio);
// console.log(data.followers);
// console.log(data.following);


}else{
    alert('Por favor ,digite um nome de usuário do Github.');
    
}
});