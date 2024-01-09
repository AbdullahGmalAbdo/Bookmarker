var Sitname = document.getElementById('SiteName');
var SiteUrl = document.getElementById('SiteUrl');
var sites=[];
if ( localStorage.getItem("products") != null){
  sites= JSON.parse(localStorage.getItem("products"))
  displayData();
}
function creat() {
  if(NameValidation() && UrlValidation()){
    var site = {
      Sitname: Sitname.value,
      SiteUrl: SiteUrl.value
    };
    sites.push(site);
    localStorage.setItem("products",JSON.stringify(sites))
    displayData();
    clear()
  }
  else{
    alert("Plaese Enter all data")
  }
}
function clear() {
	Sitname.value = '';
	SiteUrl.value = '';
}
function displayData() {
	var row =``;
	for ( i = 0 ; i < sites.length ; i++) {
		row += `
   <tr>
                <td>${i}</td>
                <td>${sites[i].Sitname}</td>
                <td><button class="btn btn-info "><a href="${sites[i].SiteUrl}" target="_blank">&#128065;</a></button></td>
                
                <td><button class="btn btn-danger " onclick="del( ${i} )" >Delet</button></td>
        </tr>
   `;
   
		
	}
  document.getElementById('talbeRow').innerHTML = row;
}
function del(index){
  sites.splice(index,1);
  localStorage.setItem("products",JSON.stringify(sites))
  displayData()
}

function NameValidation(){
  var NameReg= /^[a-zA-Z0-9\s\-']+$/;
  var Vname = Sitname.value;
  if (NameReg.test(Vname) ){
    Sitname.classList.add("is-valid")
    Sitname.classList.remove("is-invalid")
    return true ;
  }
  else {
    Sitname.classList.remove("is-valid")
    Sitname.classList.add("is-invalid")
    return false;
  }
}
function UrlValidation(){
  var UrlReg= /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,})([/\w .-]*)*\/?$/i;
  var Vurl = SiteUrl.value;
  if (UrlReg.test(Vurl) ){
    SiteUrl.classList.add("is-valid")
    SiteUrl.classList.remove("is-invalid")
    return true ;
  }
  else {
    SiteUrl.classList.remove("is-valid")
    SiteUrl.classList.add("is-invalid")
    return false;
  }
}
