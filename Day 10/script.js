async function getData() {
  let data = await fetch('https://reqres.in/api/users?page=2');
  let people = await data.json();

  let peopleData = people.data;
  let renderData = "";

  for (let i = 0; i < peopleData.length; i++) {
    let avatar = peopleData[i].avatar;
    let first_name = peopleData[i].first_name;
    let last_name = peopleData[i].last_name;
    let email = peopleData[i].email;

    renderData += `    
    <div class="person">
      <img src="${avatar}" alt="">
      <h6>${first_name + " " + last_name}</h6>
      <h6>${email}</h6>
    </div>`;
  }

  console.log(renderData);

  $('#root').html(renderData);
}

getData();
