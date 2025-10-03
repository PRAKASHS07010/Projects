function run() {
    let task = document.getElementById('task');
    let list = document.getElementById('list');
    let arr = JSON.parse(localStorage.getItem('arr')) || [];
    function Add() {
        let val = task.value.trim();
        if (val == '') {
            return;
        }
        arr.push({ key: val, completed: false });
        task.value = '';
        save();
        Print();
    }
    function save() {
        localStorage.setItem('arr', JSON.stringify(arr));
    }
    Add();
    function Print() {
        list.innerHTML = '';
        arr.forEach((k, i) => {
            let m = document.createElement('li');
            m.className = "list-group-item d-flex justify-content-between align-items-center";
            if (k.completed) {
                m.classList.add(true);
            }
            m.textContent = k.key;
            let del = document.createElement('button');
            del.className = 'btn btn-danger btn-sm';
            del.textContent = 'Delete';
            del.addEventListener('click', () => {
                Delete(i);
            })
            //list.appendChild(del);
            m.addEventListener('click', () => {
                makeit(i);
            })
            m.appendChild(del);
            list.appendChild(m);
        });
    }
    function Delete(i) {
        arr.splice(i, 1);
        save();
        Print();
    }
    function makeit(i) {
        arr[i].completed = !arr[i].completed;
        save();
        Print();
    }
}
