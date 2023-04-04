const form = document.getElementById('form'); 
const characters = document.getElementById('characters');
const table = document.getElementById('table');

form.addEventListener('submit', e => {
    e.preventDefault();
    getData(characters.children[characters.selectedIndex].value);
})

const getData = id => {
    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (id == undefined) {
        xhr.open('GET', 'marvel.php');

        xhr.addEventListener('load', data => {
            const dataJson = JSON.parse(data.target.response);
            
            const fragment = document.createDocumentFragment();
            
            for (const heroes of dataJson) {
                const option = document.createElement('option');
                option.setAttribute('value', heroes.ID);
                option.textContent = heroes.Name;
                fragment.append(option);
            }
            
            characters.append(fragment);
        });
    }else{
        xhr.open('GET', `marvel.php??id=${id}`);

        xhr.addEventListener('load', data => {
            const dataJson = JSON.parse(data.target.response);
            
            const fragment = document.createDocumentFragment();
            
            for (const heroe of dataJson) {
                const row = document.createElement('tr');
                const dataName = document.createElement('td');
                const dataAlignment = document.createElement('td');
                const dataHometown = document.createElement('td');
                const dataGender = document.createElement('td');
                const dataFightingSkills = document.createElement('td');

                dataName.textContent = heroe.Name;
                dataAlignment.textContent = heroe.Alignment;
                dataHometown.textContent = heroe.Hometown;
                dataGender.textContent = heroe.Gender;
                dataFightingSkills.textContent = heroe.FightingSkills;

                row.append(dataName);
                row.append(dataAlignment);
                row.append(dataHometown);
                row.append(dataGender);
                row.append(dataFightingSkills);
                
                fragment.append(option);
            }

            if(table.children[1]){
                table.removeChild(table.children[1]);
            }
            table.append(fragment);
        });
    }

    xhr.send();
}

